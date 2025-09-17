

export default function ResultCard({ title, description, amount, duration }) {
  return (
    <div className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition">
      <h3 className="font-semibold text-lg mb-2">{title}</h3>
      <p className="text-gray-700 mb-2">{description}</p>
      {<p className="text-sm">סכום: {amount} ₪</p>}
      {<p className="text-sm">משך: {duration} חודשים</p>}
    </div>
  );
}
