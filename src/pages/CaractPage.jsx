import { CardList } from "../components";

export const CaractPage = () => {
  return (
    <>
      <h1>Caracteristicas</h1>
      <hr />
      <CardList categoria="Caracteristicas" />
      <hr />
      <h1>Mapa Interactivo</h1>
      <div style={{ display: "flex", justifyContent: "center" }}>

        <iframe
          width="100%"
          height="300"
          src="https://maps.google.com/maps?width=100%25&amp;height=300&amp;hl=es&amp;q=Congo+(Mi%20nombre%20de%20egocios)&amp;t=&amp;z=5&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        >
          <a href="https://www.gps.ie/car-satnav-gps/">Sat Navs</a>
        </iframe>
      </div>
      <br />
    </>
  );
};
