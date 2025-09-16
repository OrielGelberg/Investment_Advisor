
export default function Input({ type = "text", name, value, onChange, placeholder }) {
  return (
    <div className="">
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className=""
      />
    </div>
  );
}
