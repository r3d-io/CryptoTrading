import React,{Component} from 'react';
import SearchCrypto from './searchBar';
import CurrencyTable from './currencyTable';
import { connect } from 'react-redux';
import Loading from './loader.js'
class CryptoContainer extends Component {
  render() {
    let list;
    console.log('cryptoContainer',this.props.isLoading)
    if (this.props.isLoading)
      list = <Loading />
    else
      list = <CurrencyTable coinList={this.props.coinList} />
    return (
      <div>
        <SearchCrypto />
        {list}
      </div>
    );
  }
};

const mapStateToProps = (state) => (
  {
    coinList: state.cryptoList.coinList,
    isLoading: state.cryptoList.isLoading
  })

export default connect(mapStateToProps)(CryptoContainer);