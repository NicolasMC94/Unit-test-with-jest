let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}


 let fromEuroToDollar = function (euroValue) {
    return euroValue * oneEuroIs.USD
 }

 let fromDollarToYen = function (dollarValue) {
     return   (dollarValue / oneEuroIs.USD) * oneEuroIs.JPY
 }

 let fromYenToPound = function (yenValue) {
     return yenValue / oneEuroIs.JPY * oneEuroIs.GBP
 }

console.log(fromYenToPound(1))

module.exports = {fromEuroToDollar, fromDollarToYen, fromYenToPound}