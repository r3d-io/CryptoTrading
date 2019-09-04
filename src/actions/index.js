export const addCoinList = (coinList, isLoading) => ({
  type: 'ADD_COINLIST',
  data: {
    coinList,
    isLoading
  }
})

export const updateCoinList = (coinList, isLoading) => ({
  type: 'UPDATE_COINLIST',
  data: {
    coinList,
    isLoading
  }
})