interface ICellProps extends React.HTMLAttributes<HTMLDivElement> {}

const Cell = (props: React.PropsWithChildren<ICellProps>) => {
  const { children } = props;
  return (
    <div
      className="border border-gray-300 flex flex-col justify-between p-1 -mb-[1px] -mr-[1px] h-[calc(100vw/7)]"
      {...props}
    >
      {children}
    </div>
  );
};

export default Cell;
