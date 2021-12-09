import aes256 from 'aes256'

const key = 'special-key-1';
const unsuitableKey = 'special-key-2';

const plaintext = 'SystemsExpert is great!'

const encrypted = aes256.encrypt(key, plaintext);
console.log('Encrypted: ', encrypted);

const decrypted = aes256.decrypt(key, encrypted);
console.log('Decrypted: ', decrypted);

const failedDecrypted = aes256.decrypt(unsuitableKey, encrypted);
console.log('Failed to decrypt: ', failedDecrypted);