import Navbar from '../Components/Navbar';
import '../styles/tailwindcss.css';
import Link from 'next/link';
import '../styles/custom.css';

function MyApp ({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component { ...pageProps } />
    </>
  );
}

export default MyApp;
