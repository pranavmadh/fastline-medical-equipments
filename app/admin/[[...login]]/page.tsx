"use client";
export default function Login() {
  return (
    <div>
      <div>Admin Login</div>
      <div className="rounded-md w-72 h-96 shadow-2xl flex flex-col justify-center items-center bg-white p-6">
        <form action="post" className="flex flex-col gap-4 w-full">
          <div className="flex flex-col gap-1">
            <label htmlFor="userId" className="font-semibold">
              Enter Your UserId
            </label>
            <input
              id="userId"
              name="userId"
              type="text"
              placeholder="User Id"
              className="border rounded px-2 py-1"
              required
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="password" className="font-semibold">
              Enter Your Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Password"
              className="border rounded px-2 py-1"
              required
            />
          </div>
          <button
            type="submit"
            className="mt-4 bg-blue-600 text-white rounded px-4 py-2 font-bold hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
