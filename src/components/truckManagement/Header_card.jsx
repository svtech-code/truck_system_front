const Header_card = () => {
  return (
    <Card
      className="w-full sm:w-1/2 md:w-[13.5rem] hover:bg-green-100 transition-all duration-300 
              text-primary-color hover:text-green-800 hover:scale-105 border border-green-400"
      shadow="sm"
    >
      <CardBody>
        <p className="text-xl">Camiones operativos</p>
      </CardBody>
      <Divider />
      <CardFooter>
        <div className="flex w-full justify-around items-center">
          <FaTruck size={30} />
          <p className="text-2xl">34</p>
        </div>
      </CardFooter>
    </Card>
  );
};

export default Header_card;
