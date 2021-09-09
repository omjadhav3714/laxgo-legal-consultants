import "./styles.css";
import Navbar from "./components/Navbar";
import Service from "./components/Service";
import Contact from "./components/Contact";
import logo from "./img/logo.png"
import Social from "./components/Social";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="background"></div>
      <div className="background-texture"></div>
      <header className="header">
        <div className="left-content">
          <p className="stay-home">Laxgo Legal Consultant</p>
          <h1>Advocate and Notary Public Government of India.</h1>
          <p className="para">
            Advocates and Consultants Advocate High Court Mumbai
          </p>
        </div>
        <div className="logo">
          <img src={logo} className="responsive" alt="" />
        </div>
      </header>

      <section className="page-section bg-primary" id="about">
        <div className="container px-4 px-lg-5">
          <div className="row gx-4 gx-lg-5 justify-content-center">
            <div className="col-lg-8 text-center">
              <h2 className="text-white mt-0">We've got what you need!</h2>
              <hr className="divider divider-light" />
              <p className="text-white-75 mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                animi fugit provident voluptatem qui accusamus distinctio at
                doloremque iusto, adipisci quaerat ab? Odit recusandae quasi
                quod ratione maiores atque accusamus!
              </p>
              <a className="btn btn-light btn-xl" href="#services">
                Get Started!
              </a>
            </div>
          </div>
        </div>
      </section>
      <Service />
      <Contact />
      <Social />

      <footer className="bg-light py-5">
        <div className="container px-4 px-lg-5">
          <div className="small text-center text-muted">
            Copyright &copy; 2021 - Laxgo Legal Consultants
          </div>
        </div>
      </footer>
    </div>
  );
}
