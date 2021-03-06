import Head from "next/head";
import Link from "next/link";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Header({ isTrayOpen, setTrayOpen }) {
  function toggleMenu() {
    setTrayOpen(!isTrayOpen);
  }

  return (
    <div className="header-container">
      <header>
        <Head>
          <title>Colle Juno</title>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
          />
          <meta name="description" content="Il sito di Colle Juno" />
          <meta name="theme-color" content="#008000" />
          <link rel="manifest" href="manifest.json" />
          <link rel="shortcut icon" href="favicon.ico" />
          <link rel="apple-touch-icon" href="apple-icon.png"></link>
          <link
            href="https://fonts.cdnfonts.com/css/athelas"
            rel="stylesheet"
          ></link>
        </Head>
        <div className="header-content">
          <Link href="/">
            <h1 onClick={isTrayOpen ? toggleMenu : null}>Colle Juno</h1>
          </Link>
          <FontAwesomeIcon
            className={isTrayOpen ? "rotated" : undefined}
            onClick={toggleMenu}
            icon={faBars}
          />
        </div>
      </header>
      <div
        onClick={toggleMenu}
        className={"tray" + (!isTrayOpen ? " hidden" : "")}
      >
        <div className="menu">
          <Link href="/products">Prodotti</Link>
          <Link href="/activities">Attività</Link>
          <Link href="/cart">Carrello</Link>
        </div>
      </div>
    </div>
  );
}
