import { Link } from "react-router-dom";

export const Card = ({ id, title, alter_ego, inf }) => {
  const img = `/assets/${id}`;

  return (
    <div className="card">
      <div className="row no-gutters">
        <div className="col-4">
          <img
            src={img}
            className="card-img"
            alt={title}
            style={{ height: "30%", margin: "10px" }}
          />
        </div>

        <div className="col-8">
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{alter_ego}</p>
            <p className="card-text">{inf}</p>

            <Link to={`/bus/${id}`}>Más..</Link>
          </div>
        </div>
      </div>
    </div>
  );
};
