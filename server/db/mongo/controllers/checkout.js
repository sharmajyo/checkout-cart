import _ from 'lodash';
import PurchasedItem from '../models/purchasedItem';
import Ad from '../models/item';
import {calculate} from '../util/discount';
/**
 * List
 */
export function all(req, res) {
  PurchasedItem.find({userId: req.params.userId}).exec((err, items) => {
    if (err) {
      console.log('Error in first query');
      return res.status(500).send('Something went wrong getting the data');
    }
    calculate(items, req.params.userId, (purchasedItems) => {
      return res.json(purchasedItems);
    });
  });
}

/**
 * Add a Item
 */
export function add(req, res) {

  Ad.findOne({id: +req.body.adId}).exec((err, ad) => {
    const newItem = new PurchasedItem(req.body);
    newItem.ad = ad;
    newItem.save((err) => {
      if (err) {
        console.log(err);
        return res.status(400).send(err);
      }

      return res.status(200).send('OK');
    });
  });
}

/**
 * Update a item
 */
export function update(req, res) {
  const query = { id: req.params.id };
  const isIncrement = req.body.isIncrement;
  const isFull = req.body.isFull;
  const omitKeys = ['id', '_id', '_v', 'isIncrement', 'isFull'];
  const data = _.omit(req.body, omitKeys);

  if (isFull) {
    PurchasedItem.findOneAndUpdate(query, data, (err) => {
      if (err) {
        console.log('Error on save!');
        return res.status(500).send('We failed to save for some reason');
      }

      return res.status(200).send('Updated successfully');
    });
  } else {
    PurchasedItem.findOneAndUpdate(query, { $inc: { count: isIncrement ? 1 : -1 } }, (err) => {
      if (err) {
        console.log('Error on save!');
        return res.status(500).send('We failed to save for some reason');
      }

      return res.status(200).send('Updated successfully');
    });
  }
}

/**
 * Remove a item
 */
export function remove(req, res) {
  const query = { id: req.params.id };
  PurchasedItem.findOneAndRemove(query, (err) => {
    if (err) {
      console.log('Error on delete');
      return res.status(500).send('We failed to delete for some reason');
    }

    return res.status(200).send('Removed Successfully');
  });
}

export default {
  all,
  add,
  update,
  remove
};
