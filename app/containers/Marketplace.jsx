import React, { Component } from 'react';
import AdCard from '../components/AdCard';
import classNames from 'classnames/bind';
import styles from '../css/components/marketplace';
const cx = classNames.bind(styles);

const Marketplace = () => {
  return (
    <span className={cx('marketplace')}>
      <AdCard title='classic Ad' desc='show an ad at our lease price' price='269.99' itemId='1'/>
      <AdCard title='standout Ad' desc='show an ad with logo and larger text' price='322.99' itemId='2'/>
      <AdCard
        title='premium Ad'
        desc='show an ad on the top of search with logo and larger text'
        price='394.99'
        itemId='3'
    />
    </span>
  );
};


export default Marketplace;
