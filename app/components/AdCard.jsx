import React from 'react';
import PropTypes from 'prop-types';
import { Thumbnail, Button } from 'react-bootstrap';
import styles from '../css/components/adCard';
import ads from '../images/ads.png';
import mapDispatchToProps from '../actions/users';
import classNames from 'classnames/bind';
import { connect } from 'react-redux';

const cx = classNames.bind(styles);

const AdCard = ({thumbnail, title, desc, itemId, userId, addToCart, price, addAndCheckout}) => {

  return (
    <Thumbnail src={thumbnail} alt="242x200" className={cx('adCard')}>
      <div className={cx('desc-container')}>
        <h3>{title}</h3>
        <p className={cx('ad-desc')}>{desc}</p>
        <div className={cx('btn-bar')}>
          <Button bsStyle="primary" onClick={() => addToCart(itemId, userId, 1)}>Buy ${price}</Button>&nbsp;
          <Button bsStyle="default" onClick={() => addAndCheckout(itemId, userId, 1)}>Checkout</Button>
        </div>
      </div>
    </Thumbnail>
  );
};

AdCard.defaultProps = {
  thumbnail: ads,
}

AdCard.propTypes = {
  thumbnail: PropTypes.string,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  itemId: PropTypes.string.isRequired,
};


function mapStateToProps({user}) {
  return {
    userId: user.id
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AdCard);
