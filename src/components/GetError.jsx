const GetError = ({ getError }) => {
  return (
    <main className="relative flex flex-1 flex-col gap-4 justify-center items-center rounded-xl bg-gradient-to-t to-gray-400 from-white">
      <p className="text-4xl font-bold">Error al obtener los datos ...!</p>
      <p className="text-xl">Error: {getError}</p>
    </main>
  );
};

export default GetError;
