import Link from "next/link";
import { useAppContext } from "../state/state";

export default function Footer() {
  const context = useAppContext();

  return (
    <footer>
      <div className="content">
        <Link href="/about">
          <h1>Contatti</h1>
        </Link>
        <Link href={"https://goo.gl/maps/TND36uJGYVG1aK9G8"}>
            <p>Via Stragonello, 10, 00075 Lanuvio RM</p>
        </Link>
        <Link href={"https://api.whatsapp.com/send?phone=393472974863"}>
            <p>Tel: +39 347 297 4863</p>
        </Link>
        <Link href={"mailto:collejuno.ss@gmail.com"}>
            <p>collejuno.ss@gmail.com</p>
        </Link>
      </div>
    </footer>
  );
}
