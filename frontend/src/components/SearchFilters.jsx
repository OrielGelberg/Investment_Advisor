import Input from "./forms/Input";
import Button from "./forms/Button";

export default function SearchFilters({ filters, onChange,getResult }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow grid gap-4 sm:grid-cols-2">

      <div>
        <label className="block mb-1">סוג השקעה</label>
        <select
          name="investmentType"
          value={filters.investment || "filters"}
          onChange={(e) => onChange(e.target.name, e.target.value)}
          className="w-full border rounded-lg px-3 py-2"
        >
          <option value="">בחר</option>
          <option value="single">חד פעמי</option>
          <option value="recurring">הוראת קבע</option>
        </select>
      </div>



      <Input
        type="number"
        name="amount"
        placeholder="כמה תרצה להשקיע?"
        value={filters.amount || "filters"}
        onChange={(e) => onChange(e.target.name, e.target.value)}
      />


      <div>
        <label className="block mb-1">משך זמן</label>
        <select
          name="duration"
          value={filters.duration || "filters"}
          onChange={(e) => onChange(e.target.name, e.target.value)}
          className="w-full border rounded-lg px-3 py-2"
        >
          <option value="">בחר</option>
          <option value="3">3 חודשים</option>
          <option value="6">6 חודשים</option>
          <option value="12">12 חודשים</option>
          <option value="1">מעל שנה</option>
        </select>
      </div>

      <Button type="submit" name="חפש" onClick={()=> getResult(filters)}/>
    </div>
  );
}
