export async function searchInvestments(filters) {
  try {
    const response = await fetch("/api/search", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(filters),
    });

    if (!response.ok) {
      throw new Error("שגיאה בבקשת החיפוש");
    }

    return await response.json();
  } catch (error) {
    console.error("Search error:", error);
    throw error;
  }
}