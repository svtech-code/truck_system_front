const ImageTruck = ({ img }) => {
  return (
    <div className="absolute w-full h-full z-0 invisible opacity-0 md:visible md:opacity-100 transition-all duration-300">
      <div className="relative h-full flex items-center justify-center z-0">
        <img
          src={img}
          alt="Imagen de un camión"
          className="absolute top-[62%] left-[35%] transform -translate-x-1/2 -translate-y-1/2 w-[45%] h-auto 
            hover:drop-shadow-[2px_2px_10px_white] transition-all duration-300"
        />
      </div>
    </div>
  );
};

export default ImageTruck;
