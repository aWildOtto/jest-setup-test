const _ = require('../someCode');

describe("findOne()", () => { //multiple test cases for one codeblock
    //it == test

    it.each`
        array           | index
        ${[1, 2, 3, 4]} |${0}
        ${[22, 3, 4, 1]}|${3}
        ${[2, 1, 33, 1]}|${1}
        `
        ("finds the first 1 in the array", ({array, index}) => {
            expect(_.findtheOne(array)).toBe(index);
        });
    it("returns -1 if there's no 1 in the array", ()=>{
        expect(_.findtheOne([2,3,4,5])).toBe(-1);
    });
});