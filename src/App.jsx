import { AboutUs } from "./aboutus/AboutUs";
import "./App.scss";
import { Footer } from "./footer/Footer";
import { Header } from "./header/Header";
import { Menu } from "./menu/Menu";
import { Reservation } from "./reservation/Reservation";

function App() {
  return (
    <>
      <Header />
      <AboutUs />
      <Menu />
      <Reservation />
      <Footer />
    </>
  );
}

export default App;
