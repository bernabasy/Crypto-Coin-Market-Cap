import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const FINANCIAL_MODELING = 'FINANCIAL_MODELING';
const initialState = [];
export const fetchFinanceData = createAsyncThunk(
  FINANCIAL_MODELING,
  async () => {
    const response = await axios.get('https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD');
    const crypto = response.data.Data.map((crypto) => ({
      id: crypto.CoinInfo.Id,
      Name: crypto.CoinInfo.FullName,
      img: crypto.CoinInfo.ImageUrl,
      algo: crypto.CoinInfo.Algorithm,
      price: crypto.DISPLAY.USD.PRICE,
      highDay: crypto.DISPLAY.USD.HIGH24HOUR,
      lowDay: crypto.DISPLAY.USD.LOW24HOUR,
      symbol: crypto.DISPLAY.USD.FROMSYMBOL,
    }));
    return crypto;
  },
);
const cryptoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FINANCIAL_MODELING/fulfilled':
      return [...state, ...action.payload];
    default:
      return state;
  }
};
export default cryptoReducer;
