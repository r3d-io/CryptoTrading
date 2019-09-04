import React from 'react'
import { Button } from 'semantic-ui-react'

class CurrencyTable extends React.Component {

  createTable = () => {

    let table = []
    if (this.props.coinList.length > 0) {
      this.props.coinList.map((coin, index) => {
        console.log("currencyTable", coin)
        return table.push(
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{coin.currencyCode}</td>
            <td>{coin.currencyName}</td>
            <td>{coin.value}</td>

          </tr>)
      })
    }
    else {
      table.push(
        <tr key='0'>
          <td>
            No matching Currency
          </td>
        </tr>)
    }
    return table
  }

  render() {
    return (
      <div>
        <table>
          <tbody>
            {this.createTable()}
          </tbody>
        </table>
      </div>
    )
  }
}

export default (CurrencyTable);
