const { expect } = require('chai');
const NumbersValidator = require('../app/numbers_validator');
const ObjValidator = new NumbersValidator();

describe('Main Test Suite - Numbers Validator', () => {

    describe('Test Sute 1 - Is Number even', () => {
        it('Should return true for even number', () => {
            const result = ObjValidator.isNumberEven(6);
            expect(result).to.be.true;
        });
        it('should return false for odd number', () => {
            const result = ObjValidator.isNumberEven(5);
            expect(result).to.be.false;
        });
        it('should throw an error if input is not a number', () => {
            expect(() => ObjValidator.isNumberEven('string')).to.throw(`[string] is not of type "Number" it is of type "string"`); 
        });
    });

    describe('Test Suite 2 -  Get Even Numbers from Array', () => {
        it('Shoult throw an error if values of array are not numbers', () => {
            const invalidInput = [["string", 2, 3]];
            expect(() => ObjValidator.getEvenNumbersFromArray(invalidInput)).to.throw('[string,2,3] is not an array of "Numbers"');
        });
        it('should return an array of even numbers, if input is an array of numbers', () => {
            const result = ObjValidator.getEvenNumbersFromArray([1,2,3,4,5,6]);
            expect(result).to.deep.equal([2,4,6]);
        });

    });

    describe('Test Suite 3 -  Is All Numbers', () => {
        it('Should throw an error when input is not an array', () => {
            expect(()=>ObjValidator.isAllNumbers('string')).to.throw('[string] is not an array');
        });
        it('should return true if every elements of array is type of number', () =>{
            const result = ObjValidator.isAllNumbers([1,2,3,4]);
            expect(result).to.be.true;
        });
        it('should return false if not every elements are numbers', () =>{
            const result = ObjValidator.isAllNumbers([1,2,'nanuka',4]);
            expect(result).to.be.false;
        });
    });

    describe('Test Suite 4 - Is Integer', () => {
        it('Should throw an error if input is not a number', ()=>{
            expect(() => ObjValidator.isInteger('nanuka')).to.throw('[nanuka] is not a number');
        });
        it('Should return false is passed input is not Integer', ()=>{
            const result = ObjValidator.isInteger(1.1);
            expect(result).to.be.false;
        });
        it('Should return true is passed input is not Integer', ()=>{
            const result = ObjValidator.isInteger(3);
            expect(result).to.be.true;
        });
    });

});

