import React from 'react';
import expect from 'expect';
import { mount } from 'enzyme';
import Cart from '../../containers/Cart';
import CartItem from '../../components/CartItem';

const purchasedItems = {
  classicAds: {totalAds: 2}
};

describe('<Cart />', () => {
  describe('With items', () => {
    it('should render <CartItem> list items', () => {
      expect(mount(<Cart purchasedItems={purchasedItems}/>));
    });
  });

  describe('Without items', () => {
    it('should not render <CartItem> list items', () => {
      expect(mount(<Cart />).find(CartItem).length).toBe(0);
    });
  });
});
