/* eslint-disable react/react-in-jsx-scope */
import ReactDOM from 'react-dom/client';

import App from './App';

import './i18n/config';
import './styles/custom.scss';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(<App />);

export default root;
