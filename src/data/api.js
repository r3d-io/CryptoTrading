const axios = require('axios');

const fetchPrice = (coinList) => {
  coinList.map(async (coin, index) => {
    let currencyCode = coin.currencyCode
    let response = await axios.get(`https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=${currencyCode}&to_currency=USD&apikey=H4T2T1NKFJR647TF`);
    if (response.data["Realtime Currency Exchange Rate"]) {
      let currencyValue = response.data["Realtime Currency Exchange Rate"]["5. Exchange Rate"]
      coin.value = currencyValue
    }
  })
  return coinList
};

export default fetchPrice;