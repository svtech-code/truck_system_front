import { BreadcrumbItem, Breadcrumbs } from "@nextui-org/react";
import { IoHome, IoLogoWindows } from "react-icons/io5";
import { Link } from "react-router-dom";

const TitleAndRoute = ({ maintainer }) => {
  return (
    <>
      <h2 className="text-[2rem] font-bold text-primary-color w-full">
        {maintainer}
      </h2>
      <Breadcrumbs>
        <BreadcrumbItem startContent={<IoHome />}>
          <Link to={"/home"}>Home</Link>
        </BreadcrumbItem>
        <BreadcrumbItem startContent={<IoLogoWindows />}>
          {maintainer}
        </BreadcrumbItem>
      </Breadcrumbs>
    </>
  );
};

export default TitleAndRoute;
