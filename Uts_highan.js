const helper = require('./Helper'); 

describe('Helper Functions', () => {
 
  test('Should return true if input is a string', () => {
    const result = helper.isString('hello');
    expect(result).toBe(true);
  });
 
  test('Should return false if input is not a string', () => {
    const result = helper.isString(123);
    expect(result).toBe(false);
  });

});
