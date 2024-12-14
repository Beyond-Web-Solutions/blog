import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/logo.png";

const navItems = {
  "/": {
    name: "home",
    external: false,
  },
  "/blog": {
    name: "blog",
    external: false,
  },
  "https://beyond-web.nl": {
    name: "website",
    external: true,
  },
};

export function Navbar() {
  return (
    <aside className="mb-16 -ml-[8px] tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav
          className="fade relative flex scroll-pr-6 flex-row items-center items-start px-0 pb-0 md:relative md:overflow-auto"
          id="nav"
        >
          <Image
            src={Logo}
            alt="Beyond Web Solutions | Logo"
            className="size-10"
          />
          <div className="flex flex-row space-x-0 pr-10 pl-4">
            {Object.entries(navItems).map(([path, { name, external }]) => {
              return (
                <Link
                  key={path}
                  href={path}
                  className="relative m-1 flex py-1 px-2 align-middle transition-all hover:text-neutral-800 dark:hover:text-neutral-200"
                  target={external ? "_blank" : undefined}
                >
                  {name}
                </Link>
              );
            })}
          </div>
        </nav>
      </div>
    </aside>
  );
}
