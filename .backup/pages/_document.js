import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Font Stylesheet */}
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900" />

          {/* Bootstrap Stylesheet */}
          <link rel="stylesheet" href="vendor/bootstrap/css/bootstrap.min.css" />

          {/* Additional Custom Stylesheets */}
          <link rel="stylesheet" href="/css/fontawesome.css" />
          <link rel="stylesheet" href="/css/templatemo-grad-school.css" />
          <link rel="stylesheet" href="/css/owl.css" />
          <link rel="stylesheet" href="/css/lightbox.css" />

          {/* Add any other custom meta tags here */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
