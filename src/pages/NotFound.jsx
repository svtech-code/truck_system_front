import { Button } from "@nextui-org/react";
import { Link, useRouteError } from "react-router-dom";

const NotFound = () => {
  const error = useRouteError();

  return (
    <main
      className="relative flex w-screen h-screen justify-center items-center
      bg-gradient-to-tl to-gray-300 from-gray-600 flex-col text-gray-700"
    >
      <h1
        className="text-[4rem] sm:text-[8rem] font-extrabold hover:scale-110
          transition-all duration-300"
      >
        404
      </h1>
      <p className="text-[2rem] sm:text-[4rem]">Page Not Found !</p>
      <p className="text-[1rem] sm:text-[2rem]">
        Error detail: {error.statusText || error.message}
      </p>

      <Button className="mt-6 group" variant="ghost">
        <Link
          to={"/home"}
          className="text-[1.5rem] text-gray-300 group-hover:text-gray-600"
        >
          Volver
        </Link>
      </Button>
    </main>
  );
};

export default NotFound;
