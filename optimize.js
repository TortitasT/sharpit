const sharp = require('sharp');
const fs = require('fs');

const IMAGE_EXTENSIONS = ['jpg', 'jpeg', 'png', 'gif', 'tiff'];

const files = fs.readdirSync('./');

if (!fs.existsSync('./optimized'))
  fs.mkdirSync('./optimized', { recursive: true });

files.forEach(file => {
  const filename = file.split('.')[0];

  if (!IMAGE_EXTENSIONS.includes(file.split('.').pop()))
    return;

  printMetadata(file);

  const finalFile = `./optimized/${filename}.webp`;


  sharp(`./${file}`)
    .toFile(finalFile, (err, info) => {
      printMetadata(finalFile);
    });
});

function printMetadata(file) {
  const stats = fs.statSync(file);

  console.log(file);
  console.log(stats.size);
}