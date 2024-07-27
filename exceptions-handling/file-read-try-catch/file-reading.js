const fs = require('node:fs');

try {
    const data = fs.readFileSync('info-noexisto.txt', 'utf8');
    console.log(data);
} catch (err) {
    console.log("Algo ha fallado...");
    //console.error(err);
}

console.log("Yo sigo funcionando!");
