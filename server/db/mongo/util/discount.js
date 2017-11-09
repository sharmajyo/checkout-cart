import _ from 'lodash';
import Discount from '../models/discount';

export function calculate(items, userId, cb) {
  let classicAds = groupAds(_.filter(items, {adId: 1}), 'ad');
  let standOutAds = groupAds(_.filter(items, {adId: 2}), 'ad');
  let premiumAds = groupAds(_.filter(items, {adId: 3}), 'ad');


  Discount.find({userId}).exec((err, discounts) => {
    // if(_.isEmpty(discounts)) {

    // }
    const classAdDiscounts = _.filter(discounts, {adId: 1});
    const standoutAdDiscounts = _.filter(discounts, {adId: 2});
    const premiumAdDiscounts = _.filter(discounts, {adId: 3});

    processDiscounts(classAdDiscounts, classicAds);
    processDiscounts(standoutAdDiscounts, standOutAds);
    processDiscounts(premiumAdDiscounts, premiumAds);

    const purchasedItems = {
      ads: {
        classicAds,
        standOutAds,
        premiumAds
      },
      total: getTotalPrice(classicAds) + getTotalPrice(standOutAds) + getTotalPrice(premiumAds)
    }

    cb({purchasedItems});
  })
}


function groupAds(ads) {
  if(_.isEmpty(ads)) {
    return {};
  }

  return { type: ads[0].ad.type, totalAds: _.sumBy(ads, 'qty') || 0, basePrice: ads[0].ad.rate};
}


function processDiscounts(discounts, ads) {
  _.each (discounts, (discount) => {

    if(discount.minimumPurchase > ads.totalAds){
      return;
    }

    if(discount.discoutedPrice > 0) {
      ads.discount = (ads.basePrice - discount.discoutedPrice) || 0;
    }

    else if(/^\d for \d$/.test(discount.rule)) {
      const ruleData = _.words(discount.rule,/\d+/g);
      const getItems = ruleData[0];
      const forItems = ruleData[1];

      if(ads.totalAds < getItems){
        return;
      }
      const discountedItems = ads.totalAds - Math.floor(ads.totalAds / getItems) * forItems;
      const totalDiscount = discountedItems * ads.basePrice;
      ads.discount = (totalDiscount / ads.totalAds) || 0;
    }

  })
}

function getTotalPrice(ads) {
  return ads.totalAds * (ads.basePrice - (ads.discount || 0)) || 0;
}
