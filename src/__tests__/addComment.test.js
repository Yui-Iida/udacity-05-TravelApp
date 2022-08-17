/**
 * @jest-environment jsdom
 */

const addComment = require('../client/js/addComment');
const empty = ' ';

test('Adding empty comment', () => {
  expect(addComment(empty)).toBe(' ');
});
