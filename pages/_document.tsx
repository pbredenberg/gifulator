import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';
import Script from 'next/script';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
          <Script
            // Autolad the CMS so invites will work:
            onLoad={() => {
              if(((window as unknown) as { netlifyIdentity }).netlifyIdentity) {
                ((window as unknown) as { netlifyIdentity }).netlifyIdentity.on('init', user => {
                  if (!user) {
                    ((window as unknown) as { netlifyIdentity }).netlifyIdentity.on('login', () => {
                      document.location.href = '/admin/';
                    });
                  }
                });
              }
            }}
          />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
