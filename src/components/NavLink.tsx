"use client";

import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import React, { ReactNode } from "react";

interface NavLinkProps extends LinkProps {
  children: ReactNode;
  activeClassName?: string;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children, activeClassName = "active", ...props }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link href={href} {...props} className={isActive ? activeClassName : ""}>
      {children}
    </Link>
  );
};

export default NavLink;
