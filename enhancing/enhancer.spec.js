const enhancer = require('./enhancer.js');
const {add} = require('./enhancer.js')
// test away!

describe('unit', () => {
    describe('add()', () => {
        it('should add two numbers', () => {
            expect(add(5, 1)).toBe(6);
            expect(add(2, 2)).toBe(4)
        })
    })
})

describe('repair(item)', () => {
    describe('repair', () => {
        it('should repair item', () => {
            expect(enhancer.repair({name: "tosinnijis", enhancement: 10, durability: 70})).toEqual({name: "tosinnijis", enhancement: 10, durability: 100})
        });
    });
})


describe('success(item)', () => {
    describe('incrementation', () => {
        it('should increment item', () => {
            expect(enhancer.succeed({enhancement: 10})).toEqual({enhancement: 11})
        });
    });

    describe('changes', () => {
        it('does not change', () => {
            expect(enhancer.succeed({enhancement: 20})).toEqual({enhancement: 20})
        })
    })
})

describe("durability", () => {
    describe("less than 15? decrement 5",  () => {
        it('is less than 15? then remove 5', () => {
            expect(enhancer.fail({enhancement: 14, durability: 15})).toEqual({enhancement: 14 ,durability: 10})
        })
    })

    describe("less than 15? decrement 10",  () => {
        it('is less than 15? then remove 10', () => {
            expect(enhancer.fail({enhancement: 15, durability: 15})).toEqual({enhancement: 15 ,durability: 5})
        })
    })

    describe("enhancement level is greater",  () => {
        it('is level greater than 16? then decrease level once ', () => {
            expect(enhancer.fail({enhancement: 17, durability: 15})).toEqual({enhancement: 16 ,durability: 5})
        })
    })
})