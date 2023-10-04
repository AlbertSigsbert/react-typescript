type OscarProps = {
  children: React.ReactNode
};
export default function Oscar(props: OscarProps) {
  return <div className="text-center">{props.children}</div>;
}
