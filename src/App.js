import './App.css';
import Opinion from './components/opinion';
import {Opinions} from './components/opinions';
import Thanks from './components/thanks';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import {loadStripe} from '@stripe/stripe-js';

const stripePromise = loadStripe("pk_live_51IS9OrIo9LMmf0BW3JxlFJlI8LZp9itwT8ImGOnXOqa3PLNe5lsYJdK6CqjncHywCfHFWjsJ0DrfFmOnSohBOiPw00jlRpvQVV", {apiVersion: "2020-08-27"});

function App() {

  const handleClick = async (event) => {
    const stripe = await stripePromise;
    const { error } = await stripe.redirectToCheckout({
      lineItems: [{
        price: 'price_1ISCTOIo9LMmf0BWGdXlTzMr',
        quantity: 1,
      },
      {
        price: 'price_1ISLGmIo9LMmf0BWXFBPCRO0',
        quantity: 1,
      }],
      mode: 'payment',
      successUrl: 'https://juditdr.github.io/libro/thanks',
      cancelUrl: 'https://juditdr.github.io/libro/',
      shippingAddressCollection: {
        allowedCountries: ['ES'],
      }
    });
  };

  return (
    <Router>
      <Switch>
        <Route path="/thanks">
          <Thanks />
        </Route>
        <Route path="/">
          <div className="App">
            <section className="book-cover" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/book.jpeg)` }}>
              <p className="main-title">
                PREFIERO ECHARTE DE MENOS A NO HABERTE CONOCIDO
              </p>
            </section>
            <section className="opinions">
              <p className="section-title">
                OPINIÓN DE LOS LECTORES
              </p>
              <div className="opinions-content">
              {
                Opinions.map((op, index) => {
                  return <Opinion key={index} image={op.image} text={op.text} name={op.name} description={op.description}/>
                })
              }
              </div>
            </section>
            <section className="author">
              <span className="section-title">
                <p>Autora</p>
              </span>
              <div className="author-content">
                <img className="author-img" src={`${process.env.PUBLIC_URL}/images/author/judit.jpeg`}/>
                <span className="author-text">
                  Judit Deig Ramos (Madrid, 1994). Periodista, politóloga y jurista.
                  Cuenta con diversas publicaciones en medios autonómicos, como El Periódico, y nacionales, como el diario ABC,
                  para los que ha elaborado reportajes y entrevistas de diferentes temáticas, entre las que destacan la cultura y la economía.
                </span>
              </div>
            </section>
            <section className="text-book-img" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/text.png)` }}>
              <div className="buy-btn" role="link" onClick={handleClick}>
                <img className="buy-btn-img" src={`${process.env.PUBLIC_URL}/images/cover.jpg`}/>
                <span className="buy-btn-text">
                  Comprar
                </span>
              </div>
              <p className="text-book">
                Este libro descubre, entre sus líneas, el anhelo vehemente de su autora por poner en boga la ternura.
                Sus páginas hablan -a veces gritan, otras susurran- acerca del miedo y la calma, las despedidas y los reencuentros, la risa o la vida.
                Y, sobre todo, de la incondicionalidad por alguien.
              </p>
            </section>
            <footer>
              <p>© Todos los derechos reservados 2021</p>
            </footer>
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
