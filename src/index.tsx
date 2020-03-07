import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';

function boot(): void {
    window.removeEventListener('DOMContentLoaded', boot);
    ReactDOM.render(<App />, document.getElementById('app'));
}

window.addEventListener('DOMContentLoaded', boot);
