import chai from 'chai';
import {customer} from '../lib/structure';
chai.should();


describe('structure test suite',()=>{
  it('should return the correct structure',()=>{
    customer.toString().should.equal(['01_meetings', '02_documentation', '03_code', '04_misc'].toString());
  })
});
