const { fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');

test("add 1 to equal 1.2", () => {
    let total = fromEuroToDollar(1);
    expect(total).toBe(1.2);
})

test("add 1 to equal 106.58333333333334", () => {
    let total = fromDollarToYen(1);
    expect(total).toBeCloseTo(106.58);
})

test("add 1 to equal 0.006254886630179828", () => {
    let total = fromYenToPound(1);
    expect(total).toBeCloseTo(0.01);
})