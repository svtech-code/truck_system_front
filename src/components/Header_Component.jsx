import TitleAndRoute from "./TitleAndRoute";

const HeaderComponent = ({ maintainer, children }) => {
  return (
    <header className="flex flex-wrap items-center justify-between gap-3 md:gap-0 p-2 bg-white">
      <article className="flex flex-col">
        <TitleAndRoute maintainer={maintainer} />
      </article>

      <article className="flex items-center justify-end gap-4 w-full md:w-auto">
        {children}
      </article>
    </header>
  );
};

export default HeaderComponent;
