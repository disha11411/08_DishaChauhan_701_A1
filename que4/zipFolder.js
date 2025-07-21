const fs = require('fs');
const archiver = require('archiver');

function zipFolder(sourceFolder, outPath) {
  const output = fs.createWriteStream(outPath);
  const archive = archiver('zip', {
    zlib: { level: 9 } // Compression level (0-9)
  });

  return new Promise((resolve, reject) => {
    output.on('close', () => {
      console.log(`Created zip file (${archive.pointer()} total bytes)`);
      resolve();
    });

    archive.on('error', err => reject(err));

    archive.pipe(output);
    archive.directory(sourceFolder, false);
    archive.finalize();
  });
}

// Usage example
const folderPath = './myFolder'; // Path to the folder you want to zip
const zipPath = './myFolder/myFolder.zip'; // Output zip file path

zipFolder(folderPath, zipPath)
  .then(() => console.log('Zipping completed!'))
  .catch(err => console.error('Error:', err));
