import Input from "./Input";
import Button from "./Button";

export default function AuthForm({ title, fields, onSubmit, submitLabel }) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
      className="space-y-4"
    >
      <h2 className="text-2xl font-bold mb-4 text-center">{title}</h2>

      {fields.map((field, index) => (
        <Input
          key={index}
          type={field.type}
          name={field.name}
          value={field.value}
          onChange={field.onChange}
          placeholder={field.placeholder}
        />
      ))}

      <Button type="submit">{submitLabel}</Button>
    </form>
  );
}
