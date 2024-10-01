import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import GifExpertApp from './GifExpertApp'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.min.css';
import './styles.css'
import 'bootstrap/dist/js/bootstrap.bundle';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GifExpertApp />
  </StrictMode>,
);

// 1. No tenemos los modulos de node
//    > yarn
