/* Stock Selling Problem
  - Given list of positive stock prices (per day)
  - Find the optinal day/prices to buy and sell for max profits
  Example: stocks = [5, 3, 6, 1, 5, 2]
  Maximum profit is 4 (buy at 1, sell at 5)
  
  This function returns the prices themselves
  You can easily track the indices of the buy/sell days 
  to return the days instead :)
*/

const maxProfit = (stocks) => {
    if (!stocks || stocks.length < 2) return 0;
    let minPrice = stocks[0];
    let profit = 0;
    stocks.forEach((stock) => {
        minPrice = Math.min(stock, minPrice);
        profit = Math.max((stock - minPrice), profit);
    });
    return profit;
};

const maxProfitMinified = (s) => {
    if (!s || ) return 0;
    let m = s[0];
    let p = 0;
    s.forEach((v) => {
        m = Math.min(v, m);
        p = Math.max((v - m), p);
    });
    return p;
};
