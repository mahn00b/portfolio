import Document, { Html, Head, Main, NextScript } from "next/document";
import full_logo from "../public/full-logo.png";
import ico from '../public/favicon.ico'

const DESCRIPTION =
  "The official website of Mahmoud Yousif. Just an Engineer who’s trying to live life to the fullest.";

class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <title>Mahmoud Yousif | Developer</title>
          <meta name="description" content={DESCRIPTION} />
          <meta
            name="viewport"
            content="height=device-height,width=device-width,initial-scale=1.0,maximum-scale=1.0,minimum-scale=1.0,user-scalable=no,minimal-ui"
          />
          <meta name="url" content="https://mahmoudyousif.com"></meta>
          <meta
            name="keywords"
            content="mahmoud, yousif, mahmoud yousif, web, developer, engineer"
          />
          <script src="https://kit.fontawesome.com/13ddbbcdcf.js"></script>
          <link rel="shortcut icon" type="image/ico" href={ico} />
        </Head>
        <Og />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

const Og = () => (
  <Head>
    <meta name="og:title" content="Mahmoud Yousif | Developer" />
    <meta name="og:type" content="profile" />
    <meta name="og:url" content="https://www.mahmoudyousif.com/" />
    <meta name="og:image" content={full_logo} />
    <meta name="og:site_name" content="Mahmoud Yousif" />
    <meta name="og:description" content={DESCRIPTION} />
  </Head>
);

export default MyDocument;
