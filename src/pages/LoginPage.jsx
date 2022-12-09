import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export const LoginPage = () => {
  const navigate = useNavigate();

  const onLogin = () => {
    navigate("/", {
      replace: true,
    });
  };

  const [theme, setTheme] = useState("light");
  const handleChange = (e) => setTheme(e.target.checked ? "dark" : "light");

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <div className="container mt-5">
      <h1 className="text-center">Inicio de App - Bayaka</h1>
      <hr />
      <br />
      <div className="d-grid gap-2">
        <button
          className="btn btn-primary"
          type="button"
          onClick={onLogin}
          style={{ width: "100%" }}
        >
          Iniciar Sesión
        </button>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <input
            type="checkbox"
            onChange={handleChange}
            checked={theme === "dark"}
          />
          <label>Dark Mode</label>
        </div>
      </div>
    </div>
  );
};
