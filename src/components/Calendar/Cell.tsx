import { CSSProperties, PropsWithChildren } from "react";

interface ICellProps {
  style?: CSSProperties;
}

const Cell = (props: PropsWithChildren<ICellProps>) => {
  const { children, style } = props;
  return <div {...{ style }}>{children}</div>;
};

export default Cell;
