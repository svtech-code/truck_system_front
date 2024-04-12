import { Link, useRouteError } from "react-router-dom";

const NotFound = () => {
  const error = useRouteError();

  return (
    <main className="container">
      <h1>404</h1>
      <p>Page not found</p>
      <p>{error.statusText || error.message}</p>
      <Link to={"/truck"}>Volver</Link>
    </main>
  );
};

export default NotFound;
