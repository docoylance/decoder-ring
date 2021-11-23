// Write your tests here!
const { polybius } = require("../src/polybius");
const { expect } = require("chai");

describe("polybius()", () => {
    describe("error handling", () => {
        it("should return false if the input argument is not present", () => {
            const input = undefined;
            const actual = polybius(input);
            expect(actual).to.be.false;
        })
        it("should return false if input value is not a string", () => {
            const input = true;
            const actual = polybius(input);
            expect(actual).to.be.false;
        })
        it("should return false if encode value is not a boolean", () => {
            const input = "cool";
            const actual = polybius(input, "beans");
            expect(actual).to.be.false;
        })
    })

    describe("encoding", () => {
        it("should return false if input contains both numbers and letters", () => {
            const input = "325113134387 there";
            const actual = polybius(input);
            expect(actual).to.be.false;
        }) 
        it("should return a string", () => {
            const input = "amazing";
            const actual = polybius(input);
            expect(actual).to.be.a.string;
        })
        it("should ignore capital letters", () => {
            const input = "aMazInG";
            const expected = "11231155423322";
            const actual = polybius(input);
            expect(actual).to.equal(expected);
        })
        it("should keep spaces as is", () => {
            const input = "cool beans";
            const expected = "31434313 2151113334";
            const actual = polybius(input);
            expect(actual).to.equal(expected);
        })
        it("should work with multiple spaces", () => {
            const input = "cool    beans";
            const expected = "31434313    2151113334";
            const actual = polybius(input);
            expect(actual).to.equal(expected);
        })
        it("should encode 42 to both 'i' and 'j'", () => {
            const input = "jim";
            const expected = "424223";
            const actual = polybius(input);
            expect(actual).to.equal(expected);
        })
    })

    describe("decoding", () => {
        it("should return false if the number of characters in the string excluding spaces is odd", () => {
            const input = "134313 314343132";
            const actual = polybius(input, false);
            expect(actual).to.be.false;
        })
        it("should return false if input contains 6, 7, 8, 9, or 0", () => {
            const input = "325113134387"
            const actual = polybius(input, false);
            expect(actual).to.be.false;
        })
        it("should return false if input contains both numbers and letters", () => {
            const input = "3251131343 LOVE";
            const actual = polybius(input, false);
            expect(actual).to.be.false;
        })
        it("should keep spaces as is", () => {
            const input = "31434313 214345";
            const expected = "cool boy";
            const actual = polybius(input, false);
            expect(actual).to.equal(expected);
        })
        it("should work with multiple spaces", () => {
            const input = "31434313    414322";
            const expected = "cool    dog";
            const actual = polybius(input, false);
            expect(actual).to.equal(expected);
        })
        it("should decode both 'i' and 'j' to 42", () => {
            const input = "424223";
            const actual = polybius(input, false);
            expect(actual).to.include("i");
            expect(actual).to.include("j");
        })
    })  
})