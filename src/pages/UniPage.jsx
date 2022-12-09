import { useMemo } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getData } from "../helpers";

export const UniPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const data = useMemo(() => getData(id), [id]);

  const onNavigateBack = () => {
    navigate(-1);
  };

  if (!data) return <Navigate to="/caracteristicas" />;

  return (
    <div className="row mt-5">
      <div className="col-4">
        <img
          src={`/assets/${id}`}
          alt={data.title}
          className="img-thumbnail animate__animated animate__fadeInLeft"
        />
      </div>

      <div className="col-8">
        <h3>{data.title}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">{data.alter_ego}</li>
          <li className="list-group-item">
            <b>Tipo:</b> {data.inf}
          </li>
        </ul>

        <button className="btn btn-outline-primary" onClick={onNavigateBack}>
          Regresar
        </button>
      </div>
    </div>
  );
};
