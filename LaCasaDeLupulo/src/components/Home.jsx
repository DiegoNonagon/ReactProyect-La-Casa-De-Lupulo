import homeImg from "../assets/baner.jpg";

const Home = () => {
  return (
    <div className="container">
      <h1 className="tituloHome">La Casa De Lúpulo</h1>
      <div className="homeContainer">
        <h3 className="homeP">
          Somos una empresa dedicada a traer lo mejor de la cerveza artesanal
          nacional é internacional, creando una comunidad calida y llena de
          amistad. !!!TE ESPERAMOS!!!
        </h3>
        <img className="homeImg" src={homeImg} alt="HOme" />
      </div>
    </div>
  );
};

export default Home;
