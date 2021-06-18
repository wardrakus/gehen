import React from 'react';

import { asyncComponent } from '@wardrakus/gehen';

export default [
  {
    path: '/',
    exact: true,
    component: asyncComponent({
      loader: () => import('./Home'),
      Placeholder: () => <div>...LOADING...</div>,
    }),
  },
  {
    path: '/about',
    exact: true,
    component: asyncComponent({
      loader: () => import('./About'),
      Placeholder: () => <div>...LOADING...</div>,
    }),
  },
];
