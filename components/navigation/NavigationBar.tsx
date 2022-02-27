import cx from "classnames";

interface NavigationBarItemProps {
  name: string;
  link?: string;
  selected?: boolean;
}

function NavigationBarItem({ name, link, selected }: NavigationBarItemProps) {
  return (
    <a href={link}>
      <button
        className={cx("font-light", "p-3", "text-xs", "text-white", {
          "border-b-4": selected,
          "border-sky-500": selected,
        })}
      >
        {name}
      </button>
    </a>
  );
}

export default function NavigationBar() {
  return (
    <nav className="bg-gray-900 flex flex-row">
      <NavigationBarItem name="My Pets" selected />
      <NavigationBarItem name="Pet Shop" />
      <NavigationBarItem name="About" />
    </nav>
  );
}
