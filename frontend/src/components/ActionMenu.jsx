import MenuItem from "./MenuOptions";

export default function Menu() {
  const actions = [
    { title: "ניהול משתמשים", to: "/users" },
    { title: "חיפוש השקעות", to: "/search" },
    { title: "פרופיל", to: "/profile" },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
      {actions.map((action, idx) => (
        <MenuItem key={idx} {...action} />
      ))}
    </div>
  );
}
