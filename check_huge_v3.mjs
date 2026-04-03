import * as HugeIcons from '@hugeicons/core-free-icons';

const keys = Object.keys(HugeIcons);
const targets = ['Facebook', 'Twitter', 'Linkedin', 'Instagram', 'Youtube'];

targets.forEach(t => {
  const matches = keys.filter(k => k.toLowerCase() === t.toLowerCase() || k.toLowerCase().startsWith(t.toLowerCase()));
  console.log(`${t}:`, matches.slice(0, 5));
});
