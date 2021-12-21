import Header from './Header';
import Footer from './Footer';
import { useState } from "react";

export default function Layout({ children }) {
  const [isTrayOpen, setTrayOpen] = useState(false);

  return (
    <div className={"container" + (isTrayOpen ? " locked" : "")}>
      <Header isTrayOpen={isTrayOpen} setTrayOpen={setTrayOpen} />
      {children}
      <Footer />
    </div>
  )
}
