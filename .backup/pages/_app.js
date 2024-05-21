import "@/styles/globals.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'lightbox2/dist/css/lightbox.min.css';
import { useEffect } from 'react';


function MyApp({ Component, pageProps }) {

  return (
    <div className="body">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
