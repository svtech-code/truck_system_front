const ImageTruck = ({ img }) => {
  return (
    <div className="hidden absolute top-[14rem] left-[15rem] rounded-3xl bg-red-200">
      <img
        src={img}
        alt="Imagen de un camión"
        className="opacity-85 hover:opacity-100 scale-125 transition-all duration-300 w-full"
      />
    </div>
  );
};

export default ImageTruck;
