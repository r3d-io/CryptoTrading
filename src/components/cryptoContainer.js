import React from 'react';
import Search from './searchBar'
import SearchCrypto from './searchBar';

class CryptoContainer extends React.Component {
  render() {
    return (
      <div>
        <SearchCrypto />
      </div>
    );
  }
};

export default CryptoContainer;
