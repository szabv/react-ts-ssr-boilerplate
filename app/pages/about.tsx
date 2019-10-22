import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Page } from '../components/page';

export const About = () => (
  <Page>
    <Helmet>
      <title>About Page</title>
    </Helmet>
    <div>This is the about page</div>
  </Page>
);
