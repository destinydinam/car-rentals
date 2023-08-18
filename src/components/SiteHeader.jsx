import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { Popover, PopoverTrigger, PopoverContent } from "./ui/popover";
import { navItems } from "../data/navItems";
import { Button } from "./ui/button";
import { Icons } from "./Icons";
import { useState, useEffect } from "react";
import Logo1 from "../images/logo1.png";
import Logo2 from "../images/logo2.png";

function NavMobile() {
  const [open, setOpen] = useState(false);

  const MOBILE_BREAKPOINT = 768;
  const getIsMobile = () => window.innerWidth < MOBILE_BREAKPOINT;
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? getIsMobile() : false
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(getIsMobile());
    };

    window.addEventListener("resize", handleResize);

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (open && isMobile) {
      document.body.classList.add("overflow-hidden");
    }

    return () => document.body.classList.remove("overflow-hidden");
  }, [open, isMobile]);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button size="sm" variant="ghost">
          {open ? (
            <Icons.ChevronUp className="h-6 w-6 text-white" />
          ) : (
            <Icons.Menu className="h-6 w-6 text-white" />
          )}
        </Button>
      </PopoverTrigger>
      {isMobile && (
        <PopoverContent
          sideOffset={30}
          className="w-screen h-[calc(100vh_-_96px)] p-6 rounded-none border-none"
        >
          <nav className="grid grid-cols-1">
            <ul>
              {navItems.map((navItem) => (
                <li
                  key={navItem.title}
                  className="text-lg text-neutral-300 hover:text-white transition-colors font-medium py-[10px]"
                >
                  {navItem.isHashLink ? (
                    <HashLink smooth to={navItem.href} className="w-full block">
                      {navItem.title}
                    </HashLink>
                  ) : (
                    <Link
                      to={navItem.href}
                      className="w-full block"
                      onClick={() => setOpen(false)}
                    >
                      {navItem.title}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </PopoverContent>
      )}
    </Popover>
  );
}

export function SiteHeader() {
  return (
    <header className="h-24 w-full flex flex-row items-center justify-between px-6 2xl:px-0 max-w-screen-xl mx-auto">
      <div className="flex flex-row items-center justify-between w-full">
        <div className="flex items-center mt-10">
          <Link to="/">
            <img src={Logo2} alt="logo" className="w-80 -ml-10" />
          </Link>
        </div>
        <nav className="hidden md:block ml-20">
          <ul className="flex flex-row gap-x-12">
            {navItems.map((navItem) => (
              <li
                key={navItem.title}
                className="text-neutral-300 hover:text-white transition-colors font-medium"
              >
                {navItem.isHashLink ? (
                  <HashLink smooth to={navItem.href}>
                    {navItem.title}
                  </HashLink>
                ) : (
                  <Link to={navItem.href}>{navItem.title}</Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="md:hidden">
        <NavMobile />
      </div>
    </header>
  );
}
