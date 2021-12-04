import Navbar from '../Components/Navbar';
import '../styles/tailwindcss.css';
import Link from 'next/link';
import '../styles/custom.css';
import Alert from '../Components/Alert';
import ContactState from '../Components/Context/Contact/ContactState';

function MyApp ({ Component, pageProps }) {
  return (
    <ContactState>
      <Navbar />
      <Component { ...pageProps } />
    </ContactState>
  );
}

export default MyApp;
