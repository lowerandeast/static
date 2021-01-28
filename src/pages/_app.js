// import App from 'next/app'
import PrimaryLayout from "../views/Primary.js";

import "../../public/styles/app.css";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <PrimaryLayout>
        <Component {...pageProps} />
      </PrimaryLayout>
    </div>
  );
}

export default MyApp;
