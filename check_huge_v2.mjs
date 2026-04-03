import * as HugeIcons from '@hugeicons/core-free-icons';

const keys = Object.keys(HugeIcons);
const targets = ['facebook', 'twitter', 'linkedin', 'instagram', 'youtube'];

targets.forEach(t => {
  console.log(`${t}-related:`, keys.filter(k => k.toLowerCase().includes(t)));
});
