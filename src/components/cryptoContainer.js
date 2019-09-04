import React from 'react';
import SearchCrypto from './searchBar';
import CurrencyTable from './currencyTable';
import { connect } from 'react-redux';
class CryptoContainer extends React.Component {
  render() {
    return (
      <div>
        <SearchCrypto />
        <CurrencyTable coinList={this.props.coinList}/>
      </div>
    );
  }
};

const mapStateToProps = (state) => (
  {
    coinList: state.cryptoList.coinList
  })

export default connect(mapStateToProps)(CryptoContainer);