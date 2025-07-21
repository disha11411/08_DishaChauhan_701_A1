const fs = require('fs');
const util = require('util');

// Promisify the fs.unlink function
const unlinkAsync = util.promisify(fs.unlink);

// Use the promisified function
async function deleteFile(filePath) {
  try {
    await unlinkAsync(filePath);
    console.log(`${filePath} was deleted successfully.`);
  } catch (err) {
    console.error(`Error deleting file: ${err.message}`);
  }
}

// Example usage - replace with your actual file path
deleteFile('file.txt');
