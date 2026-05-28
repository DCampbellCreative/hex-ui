import styles from "./NavLink.module.css";
import clsx from "clsx";

export interface NavLinkProps {
  href: string;
  label: string;
  isActive?: boolean;
}

export const NavLink = ({ href, label, isActive = false }: NavLinkProps) => {
  return (
    <a href={href} className={clsx(styles.navLink, isActive && styles.active)}>
      {label}
    </a>
  );
};
