import React from 'react'

class CurrencyTable extends React.Component {

  createTable = () => {
    let table = []
    this.props.coinList.map((values, index) => {
      table.push(
        <tr key={index}>
          <td>{index + 1}</td>
          <td>{values.currencyCode}</td>
          <td>{values.currencyName}</td>
        </tr>)
    })
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
