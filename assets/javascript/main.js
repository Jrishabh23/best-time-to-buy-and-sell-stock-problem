/**
 * @desc Count the Buy and Sell stock profit
 * @param {*} prices[]
 * @returns Day for buy stock and Day for sell profit
 */
var maxProfit = function (prices) {
    var bDay = (sDay = profit = 0);
    //* Prices is array or not
    if (!prices instanceof Array) {
        return "Provide valid information";
    }
    //* Prices length is greater than 1
    if (prices.length <= 1) {
        return "Provide more day information";
    }
    //* Iterate the loop
    for (let startDay in prices) {
        let profitCount = 0;
        //* Iterate the second loop which started from another day of buy day
        for (let i = Number(startDay) + 1; i < prices.length; i++) {
            profitCount = prices[i] - prices[startDay];
            /**
             * * It count profit logic
             * Step 1: If profit is greater than profitCount then not copy data
             * Step 2: If profit is less than profitCount then copy data
             */
            if (profitCount > profit) {
                profit = profitCount;
                bDay = Number(startDay) + 1;
                sDay = i + 1;
            }
        }
    }
    //* If profit is zero i.e. No transaction are done
    if (profit == 0) {
        return `${profit}, Explanation: No transactions are done and the max profit is 0`;
    }
    //* If profit have no zero then return information about stock
    return `${profit}, Explanation: Buy on day ${bDay} (price = ${
        prices[bDay - 1]
    }) and sell on day ${sDay} (price = ${prices[sDay - 1]}), profit = ${
        prices[sDay - 1]
    } - ${prices[bDay - 1]} = ${profit}.`;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
//*output: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6 - 1 = 5.
console.log(maxProfit([7, 6, 4, 3, 1]));
//* No transactions are done and the max profit is 0
console.log(maxProfit([7]));
//* Provide more day information
