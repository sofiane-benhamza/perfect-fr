import "@/styles/globals.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'lightbox2/dist/css/lightbox.min.css';
import { useEffect, useState } from 'react';
import Warning from "@/components/Warning";

function MyApp({ Component, pageProps }) {
 const [warning, setWarning] = useState({
  message: "",
  type: "success"
 })

 const [token, setToken] = useState("")
 
  return (
    <div className="body">
    <Warning warning={warning} setWarning={setWarning} />
      <Component warning={warning} setWarning={setWarning} token={token} setToken={setToken} {...pageProps} />
    </div>
  );
}

export default MyApp;
