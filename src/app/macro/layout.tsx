import { ReactNode } from "react";

export default function MacroLayout({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
    </>
  );
}
