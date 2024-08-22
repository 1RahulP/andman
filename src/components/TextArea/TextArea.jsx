const TextArea = (props) => {
  return (
    <div>
      <textarea
        name={props.name}
        id={props.id}
        placeholder={props.placeholder}
        onChange={props.onChange}
        rows={props.rows ? props.rows : 4}
        className={`${props.className} outline-none border p-2 rounded-lg`}
      ></textarea>
    </div>
  );
};
export default TextArea;
