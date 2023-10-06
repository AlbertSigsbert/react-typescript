import { Name } from "../Person.types";

type PersonListProps = {
  names: Name[];
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
