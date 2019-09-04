var currencyList = require('./currency.json')
const filterList = (searchStr) => {
  let matchList = []
  let regex = RegExp(`^${searchStr}`,'i')
  for (let coinIndex in currencyList) {
    if (regex.test(currencyList[coinIndex].currencyCode) || regex.test(currencyList[coinIndex].currencyName))
      matchList.push(currencyList[coinIndex])
  }
  // console.log(`matchList ${JSON.stringify(matchList)}`)
  return matchList
}

export default filterList;