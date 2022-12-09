import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";

import { useForm } from "../hooks/useForm";
import { Card } from "../components";
import { getByName } from "../helpers";

export const SearchPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { q = "" } = queryString.parse(location.search);
  const heroes = getByName(q);

  const showSearch = q.length === 0;
  const showError = q.length > 0 && heroes.length === 0;

  const { searchText, onInputChange } = useForm({
    searchText: q,
  });

  const onSearchSubmit = (e) => {
    e.preventDefault();
    navigate(`?q=${searchText}`);
  };

  return (
    <>
      <h1>Buscador</h1>
      <hr />

      <div className="row">
        <div className="col-5">
          <h4>Formulario </h4>
          <hr />
          <form onSubmit={onSearchSubmit}>
            <input
              type="text"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={onInputChange}
            />
            <br />
            <button className="btn btn-primary mt-1">Search</button>
          </form>
        </div>

        <div className="col-7">
          <h4>Resultados</h4>
          <hr />

          <div
            className="alert alert-primary animate__animated animate__fadeIn"
            style={{ display: showSearch ? "" : "none" }}
          >
            Esperando busqueda
          </div>

          <div
            className="alert alert-danger animate__animated animate__fadeIn"
            style={{ display: showError ? "" : "none" }}
          >
            Sin resultados para {q}
          </div>

          {heroes.map((hero) => (
            <Card key={hero.id} {...hero} />
          ))}
        </div>
      </div>
    </>
  );
};
