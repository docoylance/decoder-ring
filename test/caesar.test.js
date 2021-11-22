// Write your tests here!
const { caesar } = require("../src/caesar");
const { expect } = require("chai");

describe("caesar()", () => {
    describe("error handling", () => {
        it("should return false if the input argument is not present", () => {
            const input = undefined;
            const shift = 3;
            const actual = caesar(input, shift);
            expect(actual).to.be.false;
        })
        it("should return false if input value is not a string", () => {
            const input = true;
            const shift = 3;
            const actual = caesar(input, shift);
            expect(actual).to.be.false;
        })
        it("should return false if the shift argument is not present", () => {
            const input = "cool beans";
            const shift = undefined;
            const actual = caesar(input, shift);
            expect(actual).to.be.false;
        })
        it("should return false if shift value is not a number", () => {
            const input = "cool beans";
            const shift = "dog";
            const actual = caesar(input, shift);
            expect(actual).to.be.false;
        })
        it("should return false if shift is equal to 0", () => {
            const input = "cool beans";
            const shift = 0;
            const actual = caesar(input, shift);
            expect(actual).to.be.false;
        })
        it("should return false if shift is greater than 25", () => {
            const input = "cool beans";
            const shift = 404;
            const actual = caesar(input, shift);
            expect(actual).to.be.false;
        })
        it("should return false if shift is less than -25", () => {
            const input = "cool beans";
            const shift = -404;
            const actual = caesar(input, shift);
            expect(actual).to.be.false;
        })
        it("should return false if encode value is not a boolean", () => {
            const input = "cool beans";
            const shift = 6;
            const encode = 5;
            const actual = caesar(input, shift, encode);
            expect(actual).to.be.false;
        })
    })

    describe("encoding", () => {
        it("should encode a message by shifting the letter to the right if shift value is positive", () => {
            const input = "amazing";
            const shift = 10;
            const expected = "kwkjsxq";
            const actual = caesar(input, shift);
            expect(actual).to.equal(expected);
        })
        it("should encode a message by shifting the letter to the left if shift value is negative", () => {
            const input = "amazing";
            const shift = -1;
            const expected = "zlzyhmf";
            const actual = caesar(input, shift);
            expect(actual).to.equal(expected);
        })
        it("should keep spaces and non-alphabetic symbols", () => {
            const input = "I am a dog.";
            const shift = 4;
            const expected = "m eq e hsk.";
            const actual = caesar(input, shift);
            expect(actual).to.equal(expected);
        })
        it("should work with multiple spaces", () => {
            const input = "I  am a dog.";
            const shift = 4;
            const expected = "m  eq e hsk.";
            const actual = caesar(input, shift);
            expect(actual).to.equal(expected);
        })
        it("should ignore capital letters", () => {
            const input = "aMazInG";
            const shift = 3;
            const expected = "dpdclqj";
            const actual = caesar(input, shift);
            expect(actual).to.equal(expected);
        })
        it('should wrap around to the front of the alphabet if a letter is shifted so that it goes "off" the alphabet', () => {
            const input = "yizzy";
            const shift = 4;
            const expected = "cmddc";
            const actual = caesar(input, shift);
            expect(actual).to.equal(expected);
        })
    })

    describe("decoding", () => {
        it("should decode a message by shifting to the opposite direction", () => {
            const input = "dpdclqj";
            const shift = 3;
            const expected = "amazing";
            const actual = caesar(input, shift, false);
            expect(actual).to.equal(expected); 
        })
        it("should keep spaces and non-alphabetic symbols", () => {
            const input = "m eq e hsk.";
            const shift = 4;
            const expected = "i am a dog.";
            const actual = caesar(input, shift, false);
            expect(actual).to.equal(expected);
        })
        it("should work with multiple spaces", () => {
            const input = "m eq e  hsk.";
            const shift = 4;
            const expected = "i am a  dog.";
            const actual = caesar(input, shift, false);
            expect(actual).to.equal(expected);
        })
        it("should ignore capital letters", () => {
            const input = "dPdcLqJ";
            const shift = 3;
            const expected = "amazing";
            const actual = caesar(input, shift, false);
            expect(actual).to.equal(expected);
        })
        it('should wrap around to the front of the alphabet if a letter is shifted so that it goes "off" the alphabet', () => {
            const input = "cmddc";
            const shift = 4;
            const expected = "yizzy";
            const actual = caesar(input, shift, false);
            expect(actual).to.equal(expected);
        })
    })
})