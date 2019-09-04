const defaultState = {
  coinList: [],
  isLoading: false
}

const cryptoList = (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD_COINLIST':
      return {
        ...state,
        coinList: action.data.coinList,
        isLoading: action.data.isLoading
      }
    case 'UPDATE_COINLIST':
      return {
        ...state,
        coinList: action.data.coinList,
        isLoading: action.data.isLoading
      }
    default:
      return state
  }
}

export default cryptoList