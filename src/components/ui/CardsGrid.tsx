import { FC, PropsWithChildren } from "react";

interface Props extends PropsWithChildren {}

const CardsGrid: FC<Props> = ({ children }) => {
  return <div className="grid grid-cols-2 gap-4 pt-8">{children}</div>;
};

export default CardsGrid;
