import "./CafeMenu.css";

const CafeMenu = () => {
  return (
    <div>
      <head>
        <title>Cafe menu</title>
        <p className="established">Est. 2020</p>
        
      </head>
      <body>
      <hr />
      <main>
        <section>
          <h2 className="menu">CAMPER CAFE</h2>
          <img
            src="https://cdn.freecodecamp.org/curriculum/css-cafe/coffee.jpg"
            alt="coffee icon"
          />
          <article className="item">
            <p className="flavor">French Vanilla</p>
            <p className="price">3.00</p>
          </article>
          <article className="item">
            <p className="flavor">Caramel Macchiato</p>
            <p className="price">3.75</p>
          </article>
          <article className="item">
            <p className="flavor">Pumpkin Spice</p>
            <p className="price">4.00</p>
          </article>
          <article className="item">
            <p className="flavor">Haznelnut</p>
            <p className="price">4.00</p>
          </article>
          <article className="item">
            <p className="flavor">Mocha</p>
            <p className="price">4.50</p>
          </article>
        </section>
        <section>
          <h2>Desserts</h2>
          <img
            src="https://cdn.freecodecamp.org/curriculum/css-cafe/pie.jpg"
            alt="pie icon"
          />
          <article className="item">
            <p className="dessert">Donut</p>
            <p className="price">2.75</p>
          </article>
          <article className="item">
            <p className="dessert">Cherry Pie</p>
            <p className="price">2.43</p>
          </article>
          <article className="item">
            <p className="dessert">Cheesecake</p>
            <p className="price">2.44</p>
          </article>
          <article className="item">
            <p className="dessert">Cinnoman Roll</p>{" "}
            <p className="price">4.34</p>
          </article>
        </section>

      </main>
      <hr  className="bottom-line"/>
      <footer>
        <p>
            <a href="https://www.freecodecamp.org" target="_blank">Visit our website</a>
        </p>
        <p className="address">123 Free Code Camp Drive</p>
      </footer>
    </body>
    </div>
  );
};

export default CafeMenu;
