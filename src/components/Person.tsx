type PersonProps = {
  name: {
    first: string;
    last: string;
  };
};
export default function Person(props: PersonProps) {
  return (
    <div>
      <h2 className="text-center text-2xl my-4">
        {props.name.first} {props.name.last}
      </h2>
    </div>
  );
}
