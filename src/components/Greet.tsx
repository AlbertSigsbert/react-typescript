type GreetProps = {
  name: string;
};
export default function Greet(props: GreetProps) {
  return (
    <h1 className="text-3xl text-center">
      Welcome {props.name}! You have 10 unread messages.
    </h1>
  );
}
