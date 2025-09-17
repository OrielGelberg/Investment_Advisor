
export default function Button({ type = "button", name, onClick }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition"
    >
      {name}
    </button>
  );
}
