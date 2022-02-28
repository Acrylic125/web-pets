import cx from "classnames";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

interface NavigationBarItemProps {
  name: string;
  selected?: boolean;
  linkProps: LinkProps;
}

function NavigationBarItem({
  name,
  selected,
  linkProps,
}: NavigationBarItemProps) {
  return (
    <div
      className={cx(
        "transition",
        "ease-in-out",
        "duration-150",
        "hover:bg-slate-700",
        "p-3",
        "font-light",
        "text-xs",
        "text-white",
        {
          "border-b-4": selected,
          "border-sky-500": selected,
        }
      )}
    >
      <Link {...linkProps}>
        <a>{name}</a>
      </Link>
    </div>
  );
}

interface NavigationBarUserIconProps {
  linkProps: LinkProps;
  image: string;
  width?: number | string;
  height?: number | string;
}

function NavigationBarUserIcon({
  linkProps,
  image,
  width,
  height,
}: NavigationBarUserIconProps) {
  return (
    <Link {...linkProps}>
      <a>
        <img
          src={image}
          alt="No Image"
          className="relative top-1/2 -translate-y-1/2 rounded-full aspect-square bg-cover"
          width={width}
          height={height}
        />
      </a>
    </Link>
  );
}

export type NavigationBarPage = "My Pets" | "Pet Shop" | "About";

export interface NavigationBarProps {
  selectedPage: NavigationBarPage;
}

export default function NavigationBar({ selectedPage }: NavigationBarProps) {
  return (
    <nav className="bg-gray-900 flex flex-row px-3 justify-between">
      <div className="flex flex-row h-fit">
        <NavigationBarItem
          linkProps={{
            href: "/pet",
          }}
          name="My Pets"
          selected={selectedPage === "My Pets"}
        />
        <NavigationBarItem
          linkProps={{
            href: "/pet",
          }}
          name="Pet Shop"
          selected={selectedPage === "Pet Shop"}
        />
        <NavigationBarItem
          linkProps={{
            href: "/pet",
          }}
          name="About"
          selected={selectedPage === "About"}
        />
      </div>
      <div>
        <NavigationBarUserIcon
          linkProps={{
            href: "",
          }}
          image="https://www.clearwaycommunitysolar.com/wp-content/uploads/2019/05/iStock-177131518.jpg"
          width="30px"
        />
      </div>
    </nav>
  );
}
