const _ = require('../someCode');

// Jest
// - easy to setup
// - intuitive
// - BDD 
// - annotates the code
// - feature rich
// - works for javascript and typescript


// Basic test
// test/it("{describe the correct behavior of the test case}"
// , callback()=>{action} );
// test == it
test("shuffle gives a shuffled array", () => {
    expect(_.shuffle([1, 2, 3, 4, 5, 6])).not.toBe([1, 2, 3, 4, 5, 6]);
});













// Grouping multiple tests/describes
describe("the reverse function", () => { 
    //it == test
    it("reverses a function", () => {
        expect(_.reverse([1, 2, 3])).toEqual([3, 2, 1]);
    });
    it("doesn't add value to an array", () => {
        expect(_.reverse([4, 5, 6]).length).toBe(3);
    })
});















// .each runs the test case with different data
// .each works on test/it too
describe.each([ 
    [1, 1, 2],
    [1, 2, 3],
    [2, 1, 3]
])('.add(%i, %i)',
    (a, b, expected) => {
        test(`returns ${expected}`, () => {
            expect(a + b).toBe(expected);
        });

        test(`returned value not be greater than ${expected}`, () => {
            expect(a + b).not.toBeGreaterThan(expected);
        });

        test(`returned value not be less than ${expected}`, () => {
            expect(a + b).not.toBeLessThan(expected);
        });
    },
);








// .only and .skip








// use promise and async/await in test
describe("Async test", () => {
    it("checks for the result in a promise", async () => {
        _.asyncFunc().then((result)=>{
            expect(result).toBe(1);
        });
    });
    it("can wait for the result", async () => {
        await expect(_.asyncFunc()).resolves.toEqual(1);
    });
});












// beforeEach(() => {
//     console.log("before each");
// } );

// afterEach(() => {
//     console.log("after each");
// } );

// beforeAll(() => {
//     console.log("before all");
// });

// afterAll(() => {
//     console.log("after all");
// });