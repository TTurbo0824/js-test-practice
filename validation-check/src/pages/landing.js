import {createElementWithClass as create} from '../utilities.js';

export const createLandingPage = () => {
  const root = document.querySelector('#root');

  const main = create('div', 'main');
  main.innerHTML = 'Landing page test';
  root.appendChild(main);

  return root;
};
