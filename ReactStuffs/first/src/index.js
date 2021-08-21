import rec from 'react';
import recdom from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import App,{Application} from './App';
import Gallary from './Gallary';

recdom.render(
  <>
    <h1 contentEditable="true">Welcome to Dlithe Front end development</h1>
    <p>Javascript offers React library</p>
    <App/>
    <Application/>
    <Gallary/>
  </>,
  document.getElementById('root')
)