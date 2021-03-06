/* eslint no-param-reassign: 0 */

import React from 'react';
import { mount } from 'react-mounter';

import MainLayout from './components/layout';
import NotFound from './components/not-found';

export default function (injectDeps, { FlowRouter }) {
  const MainLayoutCtx = injectDeps(MainLayout);

  FlowRouter.notFound = {
    name: 'notFound',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<NotFound />),
      });
    },
  };
}
