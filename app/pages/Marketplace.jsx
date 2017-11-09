import React, { Component } from 'react';
import MarketplaceContainer from '../containers/Marketplace';
import mapDispatchToProps from '../actions/users'
import { connect } from 'react-redux';

class Marketplace extends Component {

   componentDidMount() {
    this.props.getItemsInCart(this.props.userId);
  }

  render() {
    return (
      <MarketplaceContainer {...this.props} />
    );
  }
}

function mapStateToProps(state) {
  return {
    userId: state.user.id,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Marketplace);
