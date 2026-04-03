import * as HugeIcons from '@hugeicons/core-free-icons';
const keys = Object.keys(HugeIcons);
console.log('Linkedin:', keys.filter(k => k.toLowerCase().includes('linkedin')));
console.log('Facebook:', keys.filter(k => k.toLowerCase().includes('facebook')));
console.log('Twitter:', keys.filter(k => k.toLowerCase().includes('twitter')));

