

const expect = require('chai').expect;
// 测试代码 先写测试，在写业务让测试通过
// 测试驱动开发TDD
// 测试覆盖率 95%以上就可以交付了
const {add, minus} =require('../main');


describe('两数相加等于和', () => {
    it('1+1 应该等于2', () => {
        expect(add(1,1)).to.equal(2);
    });
    it('1+2 应该等于3', () => {
        expect(add(1,2)).to.equal(3);
    });
});

describe('两数相减为差', () => {
    it('4-2=2', () => {
        expect(minus(4,2)).to.equal(2);
    });
    it('5-1=4', () => {
        expect(minus(5,1)).to.equal(4);
    });
});
describe('参数类型错误返回NaN', () => {
    it('add参数为NaN', () => {
        expect(isNaN(add(4,"200"))).to.equal(true);
    });
});
describe('参数类型错误返回NaN', () => {
    it('minus参数为NaN', () => {
        expect(isNaN(minus(4,"200"))).to.equal(true);
    });
});