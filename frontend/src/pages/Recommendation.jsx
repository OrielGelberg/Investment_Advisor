import { useState } from "react";
import AppLayout from "../layouts/AppLayout";
import SearchFilters from "../components/SearchFilters";
import { searchInvestments } from "../services/investmentService"
import { ResultsContainer } from "../components/ResultContainer";


export default function SearchPage() {
  const [filters, setFilters] = useState({
    sum: null,
    type: "",
    duration: ""
  });

  const [results, setResults] = useState([]);

  const handleFilterChange = (name, value) => {
    setFilters({ ...filters, [name]: value });
  };

  const handleSearch = async (filters) => {
    const recommendations = await searchInvestments(filters)
    setResults(
      recommendations
      // [{ id: 1, title: "השקעה 1", description: "תיאור קצר" },
      // { id: 2, title: "השקעה 2", description: "תיאור קצר נוסף" }]
    );
  };

  return (
    <AppLayout mainContent={
      <>
        <SearchFilters filters={filters} onChange={handleFilterChange} getResult={handleSearch} />
        <ResultsContainer results={results} />
      </>
    } />
  );
}


