type PersonListProps = {
  names: {
    first: string;
    last: string;
  }[];
};

export default function PersonList(props: PersonListProps) {
  return (
    <ul className="text-center my-4">
      {props.names.map((name, id) => (
        <li key={id}>
          {name.first} {name.last}
        </li>
      ))}
    </ul>
  );
}
