import './style.css';
import javascriptLogo from './javascript.svg';
import { environmentsComponent } from './src/concepts/01-environments';
import { callbacksComponent } from './src/concepts/02-callbacks';
import { promiseComponent } from './src/concepts/03-promesas';

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      
    
    </div>
    
  </div>
`;

const elemento =  document.querySelector('.card');
//environmentsComponent(elemento);
//callbacksComponent(elemento);
promiseComponent(elemento);