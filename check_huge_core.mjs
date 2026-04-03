import * as icons from '@hugeicons/core-free-icons';
const keys = Object.keys(icons);
console.log('Linkedin-related:', keys.filter(k => k.toLowerCase().includes('linked')));
console.log('Facebook-related:', keys.filter(k => k.toLowerCase().includes('facebook')));
console.log('Twitter-related:', keys.filter(k => k.toLowerCase().includes('twitter')));
console.log('Instagram-related:', keys.filter(k => k.toLowerCase().includes('instagram')));
console.log('Youtube-related:', keys.filter(k => k.toLowerCase().includes('youtube')));
console.log('Total icons:', keys.length);
console.log('First 20:', keys.slice(0, 20));
