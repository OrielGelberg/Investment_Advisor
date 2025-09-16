import { Link } from "react-router-dom";

export default function MenuItem({ title, to }) {
  return (
    <Link
      to={to}
      className="flex flex-col items-center justify-center p-6 
                 bg-blue-500 text-white rounded-xl shadow-md 
                 hover:bg-blue-600 hover:shadow-lg transition"
    >
      <h3 className="text-lg font-semibold">{title}</h3>
    </Link>
  );
}
