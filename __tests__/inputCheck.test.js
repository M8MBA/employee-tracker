const inputCheck = require('../utils/inputCheck');

test('inputCheck() returns null when all properties exist', () => {
  const obj = { name: 'Jose' };

  expect(inputCheck(obj, 'name')).toBe(null);
});

test('inputCheck() returns null when all properties exist', () => {
  const obj = { role: 'Customer Service' };

  expect(inputCheck(obj, 'role')).toBe(null);
});

// test('inputCheck() returns an object when a property is missing', () => {
//   const obj = {
//     name: 'Jose',
//     role: 'Customer Service'
//   };

//   expect(inputCheck(obj, 'role')).toEqual(
//     expect.objectContaining({
//       error: expect.stringContaining('No occupation specified')
//     })
//   );
// });