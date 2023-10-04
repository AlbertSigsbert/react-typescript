type ButtonProps = {
  handleClick: () => void;
};
type ButtonWithEventProps = {
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export function Button(props: ButtonProps) {
  return (
    <div className="text-center my-4">
      <button
        onClick={props.handleClick}
        className="text-white bg-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
      >
        Click
      </button>
    </div>
  );
}
export function ButtonWithEvent(props: ButtonWithEventProps) {
  return (
    <div className="text-center my-4">
      <button
        onClick={props.handleClick}
        className="text-white bg-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
      >
        Click 2
      </button>
    </div>
  );
}
