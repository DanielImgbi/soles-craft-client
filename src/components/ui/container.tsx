import React, { ReactNode } from "react";

type ContainerProps = {
  className: string;
  elements?: "div" | "p" | " article" | "main" | "h1" | "span" | "section";
  children: ReactNode;
};

const Container = ({ children, className }: ContainerProps) => {
  return <div className={`${className}`}>{children}</div>;
};

export default Container;
