import React from 'react';
import PropTypes from 'prop-types';
import ads from '../images/ads.png';
import styles from '../css/components/cart';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

const CartItem = ({item, thumbnail}) => {
  return (
    <div className={cx('list-item')}>
      <img className={cx('item-thumbnail')} src={thumbnail}/>
      <div className={cx('item-desc')}>
        <span className={cx('item-price')}>
          <div className={cx('item-type')}>{item.type}</div>
          <div>{item.totalAds}</div>
          <div>${item.basePrice}</div>
          <div>${item.basePrice * item.totalAds}</div>
        </span>
        <div className={cx('item-discount')}>
          {
            item.discount > 0
            ?<span>
              <span className={cx('info-text')}>discount</span>
              <span className={cx('discount-amount')}>- ${(item.discount  * item.totalAds).toFixed(2)}</span>
            </span>
            : null
          }
        </div>
      </div>
    </div>
  );
};

CartItem.defaultProps = {
  thumbnail: ads,
}

CartItem.propTypes = {
  thumbnail: PropTypes.string,
  item: PropTypes.object.isRequired,
};

export default CartItem;
