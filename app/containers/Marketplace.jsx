import React, { Component } from 'react';
import AdCard from '../components/AdCard';
import classNames from 'classnames/bind';
import styles from '../css/containers/marketplace';
const cx = classNames.bind(styles);

const Marketplace = () => {
  return (
    <span className={cx('marketplace')}>
      <AdCard title='classic Ad' desc='least data'/>
      <AdCard title='standout Ad' desc='better data'/>
      <AdCard title='premium Ad' desc='best data'/>
    </span>
  );
};


export default Marketplace;
