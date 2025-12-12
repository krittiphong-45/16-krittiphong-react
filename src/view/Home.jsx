import { Link } from "react-router-dom";
export default function Home() {
  return (
    <div className="min-h-dvh flex flex-col items-center my-4 gap-4">
      <h1 className="text-3xl font-medium">
        Generation Thailand
        <br />
        React - Assessment
      </h1>
      <div className="flex gap-x-8">
        <button className="h-14 w-[178px] text-center bg-white shadow-lg font-medium">
          <Link to="home/user">User Home View</Link>
        </button>
        <button className="h-14 w-[178px] text-center bg-white shadow-lg font-medium">
          <Link to="home/admin">Admin Home View</Link>
        </button>
      </div>
    </div>
  );
}
