import * as lucide from 'lucide-react';
const keys = Object.keys(lucide);
console.log('Linked-related:', keys.filter(k => k.toLowerCase().includes('linked')));
console.log('Facebook-related:', keys.filter(k => k.toLowerCase().includes('facebook')));
console.log('Twitter-related:', keys.filter(k => k.toLowerCase().includes('twitter')));
console.log('Youtube-related:', keys.filter(k => k.toLowerCase().includes('youtube')));
console.log('Instagram-related:', keys.filter(k => k.toLowerCase().includes('instagram')));
console.log('First 5:', keys.slice(0, 5));
