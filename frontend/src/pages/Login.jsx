import { useState } from "react";
import AuthLayout from "../layouts/AuthLayout";
import AuthForm from "../components/forms/AuthForm";
import { userService } from "../services/userService.js";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

   async function handleSubmit  () {
     try {
    const data = await userService.login(form);
    console.log("התחברת בהצלחה:", data);
  } catch (err) {
    console.error("שגיאה בהתחברות:", err.message);
  }

  };

  return (
    <AuthLayout>
      <AuthForm
        title="התחברות"
        fields={[
          {
            label: "אימייל",
            type: "email",
            name: "email",
            value: form.email,
            onChange: handleChange,
            placeholder: "הכנס אימייל",
          },
          {
            label: "סיסמה",
            type: "password",
            name: "password",
            value: form.password,
            onChange: handleChange,
            placeholder: "הכנס סיסמה",
          },
        ]}
        onSubmit={handleSubmit}
        submitLabel="התחבר"
      />
    </AuthLayout>
  );
}
