const { test, expect } = require('jest');
const { removeDuplicateSegments } = require('../index');

test('removeDuplicateSegments removes duplicate segments from file path', () => {
  const filePath = 'path/to/duplicate/folder/folder/file.txt';
  const result = removeDuplicateSegments(filePath);
  expect(result).toBe('path/to/duplicate/folder/file.txt');
});
