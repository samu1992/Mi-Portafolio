import { createRoot } from 'react-dom/client';
import './src/styles/styles.scss';
import  Portfolio from './src/App.jsx';
const root = createRoot(document.getElementById('app'))
root.render(<Portfolio/>) 

