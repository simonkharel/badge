import axios from "axios";
// API layer for stock API
const axiosInstance = axios.create({
  baseURL: "https://finnhub.io/api/v1",
});

export const StockAPI = {
  getStock: function (ticker) {
    return axiosInstance.request({
      method: "GET",
      url: "/quote",
      params: {
        symbol: ticker,
        token: "c8a41oiad3iasddf92c0",
      },
    });
  },
};
