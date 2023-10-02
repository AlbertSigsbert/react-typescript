type GreetProps = {
  name: string;
  messageCount: number;
  isLoggedIn: boolean;
};
export default function Greet(props: GreetProps) {
  return (
    <h1 className="text-3xl text-center">
      {props.isLoggedIn
        ? "  Welcome {props.name}! You have {props.messageCount} unread messages."
        : "Welcome Guest"}
    </h1>
  );
}
