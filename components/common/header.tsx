import Link from "next/link";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export default function Header() {
  const [isActive, setActive] = useState(false);

  function toggleMenu() {
    setActive(!isActive);
  }

  return (
    <header>
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
