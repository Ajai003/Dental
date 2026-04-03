import * as H from '@hugeicons/core-free-icons';

const icons = [
  'Facebook01Icon',
  'TwitterIcon',
  'InstagramIcon',
  'Linkedin01Icon',
  'YoutubeIcon'
];

icons.forEach(name => {
  console.log(`${name}:`, H[name] !== undefined);
});
