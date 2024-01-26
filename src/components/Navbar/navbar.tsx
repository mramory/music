import { Button } from "@/components/ui/button";
import s from "./navbar.module.scss";
import { NavLink, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

export const Navbar = () => {
  const { pathname } = useLocation();

  return (
    <nav className={s.nav}>
      <NavLink to="/artists" className="w-fit">
        <Button
          className={cn(pathname.includes("artists") && "bg-[#3C3A3A]")}
          variant="navigation"
        >
          Испонители
        </Button>
      </NavLink>
      <NavLink to="/tracks" className="w-fit">
        <Button
          className={cn(pathname.includes("tracks") && "bg-[#3C3A3A]")}
          variant="navigation"
        >
          Треки
        </Button>
      </NavLink>
      <NavLink to="/albums" className="w-fit">
        <Button
          className={cn(pathname.includes("albums") && "bg-[#3C3A3A]")}
          variant="navigation"
        >
          Альбомы
        </Button>
      </NavLink>
      <NavLink to="/favorites" className="w-fit">
        <Button
          className={cn(pathname.includes("favorites") && "bg-[#3C3A3A]")}
          variant="navigation"
        >
          Избранное
        </Button>
      </NavLink>
    </nav>
  );
};
