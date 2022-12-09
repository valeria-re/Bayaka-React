import { Link, NavLink, useNavigate } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate();

  const onLogout = () => {
    navigate("/login", {
      replace: true,
    });
  };

  return (
    <nav className="navbar navbar-expand-lg card" style={{ marginBottom: "20px" }}>
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <h1 className="navbar-brand">Bayaka</h1>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  `nav-item nav-link  ${isActive ? "active" : ""} card`
                }
                to="/caracteristicas"
              >
                Caracteristicas
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  `nav-item nav-link  ${isActive ? "active" : ""} card`
                }
                to="/vestimentas"
              >
                Vestimentas
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  `nav-item nav-link  ${isActive ? "active" : ""} card`
                }
                to="/edificaciones"
              >
                Edificaciones
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  `nav-item nav-link  ${isActive ? "active" : ""} card`
                }
                to="/busqueda"
              >
                Busqueda
              </NavLink>
            </li>
            <li className="nav-item">
              <span
                className="nav-item nav-link"
                onClick={onLogout}
                style={{ color: "red", cursor: "pointer" }}
              >
                Cerrar Sesión
              </span>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
