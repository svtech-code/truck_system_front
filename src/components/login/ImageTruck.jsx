const ImageTruck = ({ img }) => {
  return (
    <div className="absolute top-[14rem] left-[15rem] rounded-3xl">
      <img
        src={img}
        alt="Imagen de un camión"
        className="opacity-85 hover:opacity-100 scale-125 transition-all duration-300"
      />
    </div>
  );
};

export default ImageTruck;
