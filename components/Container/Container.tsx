type Props = {
  children: React.ReactNode;
};

const Container = (props: Props) => {
  return (
    <div className="max-w-7xl min-h-full mx-auto relative">
      <div className="w-full relative z-20">{props.children}</div>
      <div className="grid grid-cols-6 h-full absolute w-full top-0 z-10">
        {new Array(6).fill(0).map((_, index) => {
          return (
            <div
              key={index}
              className={[
                "border-l-0.5 border-l-gray h-full opacity-50",
                index === 5 ? "border-r-0.5 border-r-gray" : "",
              ].join(" ")}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default Container;
