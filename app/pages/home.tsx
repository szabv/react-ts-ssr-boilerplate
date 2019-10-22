import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Page } from '../components/page';

export const Home = () => (
  <Page>
    <Helmet>
      <title>Home Page</title>
    </Helmet>
    <div>Welcome home.</div>
  </Page>
);
