import MainNavItem from "./main-nav-item";

const MainNav = () => {
  return (
    <nav className="w-full mr-8">
      <ul className="h-full flex float-right items-center">
        <MainNavItem
          name="About"
          beforeContent="01"
          beforeContentOffset="right-[48px]"
          hoverContent="0001"
        />
        <MainNavItem
          name="Experience"
          beforeContent="02"
          beforeContentOffset="right-[82px]"
          hoverContent="0010"
        />
        <MainNavItem
          name="Contact"
          beforeContent="03"
          beforeContentOffset="right-[60px]"
          hoverContent="0011"
        />
      </ul>
    </nav>
  );
};

export default MainNav;
