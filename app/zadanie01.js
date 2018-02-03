const crypto = require('crypto');

//Twój kod
const MY_PWD_HASH = '5dca0fc4e306d92b2077ad85e7c4bd87a3e8648e';
const passwords = ['??TegoHasła',
  'CodersLab',
  'Node.js Szyfruje Pliki',
  'Zaźółć Gęślą Jaźń',
  'Moje Haslo 1@3!',
  '111#$((@)n',
  'Dzisiaj Szyfruje 83'];

const algorithms = ['sha256',
'sha512',
'md5',
'rmd160'];

passwords.forEach(password => {
  algorithms.forEach(algorithm => {
    const hash = crypto.createHmac(algorithm, password)
      .digest('hex');
    if(hash === MY_PWD_HASH) {
      console.log(password, algorithm, hash);
      return hash
    }
  })
});


const text = 'Hello World';

const hash = crypto.createHmac('sha256', text)
  .digest('hex');

console.log(hash);

function encodeText(text, password, algorithm) {
  const cipher = crypto.createCipher(algorithm, password);

  let encrypted = cipher.update(text, 'utf8', 'hex');
  encrypted += cipher.final('hex');

  return encrypted;
}

function decodeText(text, password, algorithm) {
  const decipher = crypto.createDecipher(algorithm, password);
  
  let decrypted = decipher.update(text, 'hex', 'utf8');
  decrypted += decipher.final('utf8');
  
  return decrypted;
}

console.log(encodeText('Hello, World!', 'M0j3 has|0!', 'aes-256-cbc'));
console.log(decodeText('352c9abb9cd20b41766f352b2611bb7b', 'M0j3 has|0!', 'aes-256-cbc'));
