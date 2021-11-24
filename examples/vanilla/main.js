import {answer} from './answer.js';
import './style.css'

document.querySelector('#app').innerHTML = `
  <h1>Hello Vite!</h1>
  <p>the answer is ${answer}.:)</p>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">
    Documentation
  </a>
`;