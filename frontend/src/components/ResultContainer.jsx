import ResultCard from "./ResultCard";

export default function ResultsContainer({ results }) {
  if (!results || results.length === 0) {
    return <p className="text-center text-gray-500">לא נמצאו תוצאות</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
      {results.map((item) => (
        <ResultCard
          key={item.id}
          title={item.title}
          description={item.description}
          amount={item.amount}
          duration={item.duration}
        />
      ))}
    </div>
  );
}
