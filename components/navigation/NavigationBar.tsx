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
    <Link {...linkProps}>
      <a
        className={cx("font-light", "p-3", "text-xs", "text-white", {
          "border-b-4": selected,
          "border-sky-500": selected,
        })}
      >
        {name}
      </a>
    </Link>
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
      <a className="bg-red-500">
        <img
          src={image}
          alt="No Image"
          className="rounded-full"
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
    <nav className="bg-gray-900 flex flex-row px-3">
      <span>
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
      </span>
      <span>
        <NavigationBarUserIcon
          linkProps={{
            href: "",
          }}
          image="https://static.wikia.nocookie.net/muc/images/4/4f/Karen.jpg/revision/latest/scale-to-width-down/248?cb=20200810021525"
        />
      </span>
    </nav>
  );
}
