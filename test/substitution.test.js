// Write your tests here!
const { substitution } = require("../src/substitution");
const { expect } = require("chai");

describe("substitution()", () => {
    describe("error handling", () => {
        it("should return false if the input argument is not present", () => {
            const input = undefined;
            const alphabet = "qwertyuiopasdfghjklzxcvbnm";
            const actual = substitution(input, alphabet);
            expect(actual).to.be.false;
        })
        it("should return false if input value is not a string", () => {
            const input = true;
            const alphabet = "qwertyuiopasdfghjklzxcvbnm";
            const actual = substitution(input, alphabet);
            expect(actual).to.be.false;
        })
        it("should return false if the alphabet argument is not present", () => {
            const input = "lol";
            const alphabet = undefined;
            const actual = substitution(input, alphabet);
            expect(actual).to.be.false;
        })
        it("should return false if the alphabet argument is not a string of exactly 26 characters", () => {
            const input = "lol";
            const alphabet = "pwova83bg0x.1]t6ag4nc92pfys[4m";
            const actual = substitution(input, alphabet);
            expect(actual).to.be.false;
        })
        it("should return false if the alphabet argument is not a string with unique characters", () => {
            const input = "lol";
            const alphabet = "abcdefghijklmnopqrstuvwxyy";
            const actual = substitution(input, alphabet);
            expect(actual).to.be.false
        })
        it("should return false if encode value is not a boolean", () => {
            const input = true;
            const alphabet = "qwertyuiopasdfghjklzxcvbnm";
            const actual = substitution(input, alphabet);
            expect(actual).to.be.false;
        })
    })

    describe("encoding", () => {
        it("should keep spaces as is", () => {
            const input = "cool beans";
            const alphabet = "qwertyuiopasdfghjklzxcvbnm";
            const expected = "eggs wtqfl";
            const actual = substitution(input, alphabet);
            expect(actual).to.equal(expected);
        })
        it("should work with multiple spaces", () => {
            const input = "cool  beans";
            const alphabet = "qwertyuiopasdfghjklzxcvbnm";
            const expected = "eggs  wtqfl";
            const actual = substitution(input, alphabet);
            expect(actual).to.equal(expected);
        })
        it("should ignore capital letters", () => {
            const input = "aMazInG";
            const alphabet = "qwertyuiopasdfghjklzxcvbnm";
            const expected = "qdqmofu";            
            const actual = substitution(input, alphabet);
            expect(actual).to.equal(expected);
        })
    })

    describe("decoding", () => {
        it("should allow the input to contain spaces and special characters", () => {
            const input = "vg@i rgeb";
            const alphabet = "@wertyuiopasdfghjklzxcvbnm";
            const expected = "woah docx";
            const actual = substitution(input, alphabet, false);
            expect(actual).to.equal(expected);
        })
        it("should keep spaces as is", () => {
            const input = "eggs wtqfl";
            const alphabet = "qwertyuiopasdfghjklzxcvbnm";
            const expected = "cool beans";
            const actual = substitution(input, alphabet, false);
            expect(actual).to.equal(expected);
        })
        it("should work with multiple spaces", () => {
            const input = "eggs  wtqfl";
            const alphabet = "qwertyuiopasdfghjklzxcvbnm";
            const expected = "cool  beans";
            const actual = substitution(input, alphabet, false);
            expect(actual).to.equal(expected);
        })
        it("should ignore capital letters", () => {
            const input = "qDqmOfU";
            const alphabet = "qwertyuiopasdfghjklzxcvbnm";
            const expected = "amazing";            
            const actual = substitution(input, alphabet, false);
            expect(actual).to.equal(expected);
        })
    })
})