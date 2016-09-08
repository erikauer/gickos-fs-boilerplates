import chai from "chai";
import {doesDirExist} from "../lib/intelligence";
chai.should();

describe('intelligence test suite', ()=> {
  it('should return true because dir exist', ()=> {
    doesDirExist('test').should.equal(true);
  });
  it('should return false because dir does not exist', ()=> {
    doesDirExist('notexist').should.equal(false);
  });
});
