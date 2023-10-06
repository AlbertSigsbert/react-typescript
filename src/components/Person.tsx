import { PersonProps } from "../Person.types";

export default function Person({ name: { first, last } }: PersonProps) {
  return (
    <div>
      <h2 className="text-center text-2xl my-4">
        {first} {last}
      </h2>
    </div>
  );
}
