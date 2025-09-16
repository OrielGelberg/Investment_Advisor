
export default function AuthLayout({ children }) {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-md">
        {children}
      </div>
    </div>
  );
}
