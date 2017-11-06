import React, { Component } from 'react';
import MarketplaceContainer from '../containers/Marketplace';

class Marketplace extends Component {

  render() {
    return (
      <MarketplaceContainer {...this.props} />
    );
  }
}

export default Marketplace;
