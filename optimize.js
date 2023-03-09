const sharp = require('sharp');
const fs = require('fs');

const IMAGE_EXTENSIONS = ['jpg', 'jpeg', 'png', 'gif', 'tiff'];

function printMetadata(file) {
  const stats = fs.statSync(file);

  console.log(file);
  console.log(stats.size);
}

module.exports = function ({output: dir}){
  console.log(dir);

  const files = fs.readdirSync('./');

  if (!fs.existsSync(dir))
    fs.mkdirSync(dir, { recursive: true });
  
  files.forEach(file => {
    const filename = file.split('.')[0];
  
    if (!IMAGE_EXTENSIONS.includes(file.split('.').pop()))
      return;
  
    printMetadata(file);
  
    const finalFile = `${dir}/${filename}.webp`;
  
    sharp(`./${file}`)
      .webp({ quality: 50 })
      .toFile(finalFile, (err, info) => {
        printMetadata(finalFile);
      });
  });
}