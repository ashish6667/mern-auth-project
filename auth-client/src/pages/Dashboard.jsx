import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Dashboard = () => {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    toast.success("Logged out successfully");
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-slate-100 p-5 md:p-10">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col gap-4 rounded-xl bg-white p-6 shadow-md md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-2xl font-bold text-slate-800">
              Dashboard
            </h1>

            <p className="mt-1 text-slate-600">
              Welcome, {user?.name || user?.email || "User"}
            </p>
          </div>

          <button
            onClick={handleLogout}
            className="rounded-lg bg-red-500 px-5 py-2.5 font-medium text-white hover:bg-red-600"
          >
            Logout
          </button>
        </div>

        <div className="mt-6 rounded-xl bg-white p-6 shadow-md">
          <h2 className="text-xl font-semibold text-slate-800">
            Protected Dashboard Page
          </h2>

          <p className="mt-3 text-slate-600">
            This page is accessible only when a valid JWT token exists in localStorage.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;