
// importing bootswatch
import 'bootswatch/dist/cosmo/bootstrap.min.css';
import 'animate.css/animate.min.css';
import '../styles/global.css';
//js para el menu con boostrap


import { AppProps } from 'next/app';

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />;
}
