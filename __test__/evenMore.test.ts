import { UsefulFunctions } from '../someMoreCode';
// ts tests for ts functions

describe("UsefulFunctions", () => {
    beforeAll(() => {
        this.uf = new UsefulFunctions;
    });
    
    
    describe(".shuffle", ()=>{
        test('shuffle gives a shuffled array', () => {
            expect(this.uf.shuffle([1, 2, 3, 4, 5, 6])).not.toBe([1, 2, 3, 4, 5, 6]);
        });
    });

    describe(".reverse",()=>{
        test('reverses an array', () => {
            expect(this.uf.reverse([1, 2, 3, 4, 5])).toEqual([5, 4, 3, 2, 1]);
        });

    });

    describe(".asyncFunc", ()=>{
        test('does nothing but return 1', () => {
            this.uf.asyncFunc().then((result)=>{
                expect(result).toBe(1);
            });
        });
    });

    describe(".getMocked", ()=>{
        test("mocking testing", () => {
            const mock = jest.fn((n:number)=>{
                return n;
            });
            this.uf.getMocked(mock, 3);
            expect(mock).toHaveBeenCalledWith(3);
            expect(mock).toHaveReturnedWith(3);
        });
    });
});
