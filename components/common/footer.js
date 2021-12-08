import Link from "next/link";
import { useAppContext } from "../../state/state";

export default function Footer() {
  const context = useAppContext();

  return (
    <footer>
      <div className="content">
        <Link href="/about">
          <h1>Contatti</h1>
        </Link>
        <Link href={"/"}>
          <a href={"/"}>
            <p>{"/"}</p>
          </a>
        </Link>
        <Link href={"/"}>
          <a href={"/"}>
            <p>{"/"}</p>
          </a>
        </Link>
        <p>{"/"}</p>
      </div>
    </footer>
  );
}
