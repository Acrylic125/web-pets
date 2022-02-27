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

export type NavigationBarPage = "My Pets" | "Pet Shop" | "About";

export interface NavigationBarProps {
  selectedPage: NavigationBarPage;
}

export default function NavigationBar({ selectedPage }: NavigationBarProps) {
  return (
    <nav className="bg-gray-900 flex flex-row px-3">
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
    </nav>
  );
}
