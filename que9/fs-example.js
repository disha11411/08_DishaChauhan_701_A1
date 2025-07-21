const fs = require('fs');
const fileName = 'example.txt';

// 1. Write some text to a file
fs.writeFile(fileName, 'Hello, this is a sample text!\n', (err) => {
  if (err) throw err;
  console.log(`${fileName} created and data written.`);

  // 2. Append more text to the same file
  fs.appendFile(fileName, 'This is appended text.\n', (err) => {
    if (err) throw err;
    console.log('Appended text to the file.');

    // 3. Read the file contents
    fs.readFile(fileName, 'utf8', (err, data) => {
      if (err) throw err;
      console.log('File contents:\n', data);

      // 4. Rename the file
      const newFileName = 'example-renamed.txt';
      fs.rename(fileName, newFileName, (err) => {
        if (err) throw err;
        console.log(`File renamed to ${newFileName}`);

        // 5. Check if renamed file exists
        if (fs.existsSync(newFileName)) {
          console.log(`${newFileName} exists.`);

          // 6. Delete the renamed file
          fs.unlink(newFileName, (err) => {
            if (err) throw err;
            console.log(`${newFileName} deleted.`);
          });
        } else {
          console.log(`${newFileName} does not exist.`);
        }
      });
    });
  });
});
