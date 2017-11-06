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
const AdCard = ({thumbnail, title, desc}) => {
  return (
    <Thumbnail src={thumbnail} alt="242x200" className={cx('adCard')}>
      <h3>{title}</h3>
      <p>{desc}</p>
      <p>
        <Button bsStyle="primary">Buy</Button>&nbsp;
        <Button bsStyle="default">Button</Button>
      </p>
    </Thumbnail>
  );
};

AdCard.propTypes = {
  thumbnail: PropTypes.string,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};

export default AdCard;
