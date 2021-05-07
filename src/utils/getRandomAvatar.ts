import { getRandom } from './getRandom';

const avatars = [
  'https://bit.ly/dan-abramov',
  'https://bit.ly/tioluwani-kolawole',
  'https://bit.ly/kent-c-dodds',
  'https://bit.ly/ryan-florence',
  'https://bit.ly/prosper-baba',
  'https://bit.ly/code-beast',
  'https://bit.ly/sage-adebayo',
];

export const getRandomAvatar = () => {
  return avatars[getRandom(avatars.length - 1)];
};
