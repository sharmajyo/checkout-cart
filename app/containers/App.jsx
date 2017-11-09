import React from 'react';
import AppHeader from '../components/AppHeader';
import styles from '../css/main';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

const App = ({ children }) => {
  return (
    <div className={cx('app')}>
      <AppHeader/>
      {children}
    </div>
  );
};


export default App;
