const fs = require('fs');
const unzipper = require('unzipper');
const path = require('path');

// ✅ ZIP file source path
const zipFilePath = 'C:\\Users\\Disha\\Downloads\\Practical-1_disha_701\\Practical-1\\question_4\\myFolder\\myFolder.zip';

// ✅ Destination path (Q5\extracted)
const extractTo = 'C:\\Users\\Disha\\Downloads\\Practical-1_disha_701\\Practical-1\\question_5\\extracted';

console.log('Trying to extract zip into:', extractTo);

// ✅ Only create 'extracted' folder (Q5 already exists)
if (!fs.existsSync(extractTo)) {
  fs.mkdirSync(extractTo, { recursive: true });
  console.log('✅ Created extracted folder inside Q5.');
}

// ✅ Extract zip file to Q5\extracted
fs.createReadStream(zipFilePath)
  .pipe(unzipper.Extract({ path: extractTo }))
  .on('close', () => {
    console.log('✅ Extraction complete into Q5\\extracted!');
  })
  .on('error', (err) => {
    console.error('❌ Error during extraction:', err.message);
  });
