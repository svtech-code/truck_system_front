const ImageTruck = ({ img }) => {
  return (
    <div className="absolute w-full h-full z-0 invisible opacity-0 md:visible md:opacity-100 transition-all duration-300">
      <div className="relative h-full flex items-center justify-center z-0">
        <img
          src={img}
          alt="Imagen de un camión"
          className="absolute top-[60%] left-[40%] transform -translate-x-1/2 -translate-y-1/2 w-[45%] h-auto"
        />
      </div>
    </div>
  );
};

export default ImageTruck;
