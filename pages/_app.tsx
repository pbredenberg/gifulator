import Head from 'next/head';
import Layout from '../components/layout';
import { siteTitle } from '../common/site-title';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { faPhoneAlt, faMapMarker, faEnvelope } from '@fortawesome/free-solid-svg-icons';
library.add(fas, faPhoneAlt, faMapMarker, faEnvelope);

import '../styles/index.scss';

function MyApp({ Component, pageProps }) {
  return <Layout>
    <Head>
      <title>{siteTitle()}</title>
    </Head>
    <Component {...pageProps} />
  </Layout>
}

export default MyApp
