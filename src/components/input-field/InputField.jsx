const InputField = (props) => {
  return (
    <div>
      <input
        type={props.type}
        name={props.name}
        id={props.id}
        className={`${props.className} outline-none border p-2 rounded-lg`}
        placeholder={props.placeholder}
        onChange={props.onChange}
      />
    </div>
  );
};
export default InputField;
