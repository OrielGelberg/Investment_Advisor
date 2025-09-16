import { useState } from "react";
import AuthLayout from "../layouts/AuthLayout";
import AuthForm from "../components/forms/AuthForm";
import { userService } from "../services/userService";

export default function Register() {
  const [form, setForm] = useState({ fullName: "", email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

async function handleSubmit  () {
     try {
    const data = await userService.register(form);
    console.log("נרשמת בהצלחה:", data);
  } catch (err) {
    console.error("שגיאה בהתחברות:", err.message);
  }

  };


  return (
    <AuthLayout>
      <AuthForm
        title="הרשמה"
        fields={[
          {
            name: "fullName",
            value: form.fullName,
            onChange: handleChange,
            placeholder: "הכנס שם מלא",
          },
          {
            type: "email",
            name: "email",
            value: form.email,
            onChange: handleChange,
            placeholder: "הכנס אימייל",
          },
          {
            type: "password",
            name: "password",
            value: form.password,
            onChange: handleChange,
            placeholder: "בחר סיסמה",
          },
          {
            type: "password",
            name: "password",
            value: form.password,
            onChange: handleChange,
            placeholder: " אימות סיסמה",
          }
        ]}
        onSubmit={handleSubmit}
        submitLabel="הירשם"
      />
    </AuthLayout>
  );
}
