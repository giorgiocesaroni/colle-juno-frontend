import Head from "next/head";
import Link from "next/link";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export default function Header({ locked, setLocked }) {
  const [isActive, setActive] = useState(false);

  function toggleMenu() {
    setActive(!isActive);
    setLocked(!locked);
  }

  return (
    <header>
      <Head>
        <title>Colle Juno</title>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no" />
        <meta name="description" content="Il sito di Colle Juno" />
        <meta name="theme-color" content="#008000" />
        <link rel="manifest" href="manifest.json" />
        <link rel="shortcut icon" href="favicon.ico" />
        <link rel="apple-touch-icon" href="apple-icon.png"></link>
      </Head>
      <div className={"tray" + (!isActive ? " hidden" : "")}>
        <div className="menu" onClick={toggleMenu}>
          <Link href="/products">Menu 1</Link>
          <Link href="/products">Menu 2</Link>
          <Link href="/products">Menu 3</Link>
          <Link href="/products">Menu 4</Link>
          <Link href="/products">Menu 5</Link>
        </div>
      </div>
      <div className="content">
        <Link href="/">
          <h1>Colle Juno</h1>
        </Link>
        <FontAwesomeIcon
          className={isActive ? "rotated" : undefined}
          onClick={toggleMenu}
          icon={faBars}
        />
      </div>
    </header>
  );
}
