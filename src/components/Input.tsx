type InputProps = {
 handleChange: (e:React.ChangeEvent<HTMLInputElement>) => void
};

export default function Input(props: InputProps) {
  return (
    <div className="text-center my-4">
      <input
        type="text"
        onChange={props.handleChange}
        className="bg-gray-50 border w-1/2 mx-auto border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5"
      />
    </div>
  );
}
