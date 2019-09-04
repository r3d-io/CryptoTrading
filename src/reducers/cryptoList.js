const defaultState = {
  coinList: []
}

const cryptoList = (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD_COINLIST':
      return {
        ...state,
        coinList: action.coinList
      }
    default:
      return state
  }
}

export default cryptoList