import React from 'react';
import PropTypes from 'prop-types';
import { Thumbnail, Button } from 'react-bootstrap';
import styles from '../css/components/adCard';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

// Takes callback functions from props and passes it down to TopicTextInput
// Essentially this is passing the callback function two levels down from parent
// to grandchild. To make it cleaner, you could consider:
// 1. moving `connect` down to this component so you could mapStateToProps and dispatch
// 2. Move TopicTextInput up to EntryBox so it's less confusing
const CartItem = ({product}) => {
  return (
    <div>
      <div>{product.adType}</div>
      <div>{product.price}</div>
      <div>{product.discount}</div>
    </div>
  );
};

CartItem.propTypes = {
  product: PropTypes.object.isRequired,
};

export default CartItem;
