import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ensureReady, After } from '@wardrakus/after';
import './client.css';
import routes from './routes';
import { CounterProvider } from './context/AppContext';

ensureReady(routes).then((data) =>
  hydrate(
    <BrowserRouter>
      <CounterProvider>
        <After data={data} routes={routes} />
      </CounterProvider>
    </BrowserRouter>,
    document.getElementById('root')
  )
);

if (module.hot) {
  module.hot.accept();
}
