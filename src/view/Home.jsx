import { useState } from "react";
import ViewButton from "../components/ViewButton";
import TableUser from "../components/TableUser";
import TableAdmin from "../components/TableAdmin";
export default function Home() {
  const [view, setView] = useState("");
  const [loading, setLoading] = useState(false);
  return (
    <div className="min-h-dvh flex flex-col items-center my-4 gap-4">
      <h1 className="text-3xl font-medium">
        Generation Thailand
        <br />
        React - Assessment
      </h1>
      <div className=" flex justify-center my-4 gap-x-4" >
        <ViewButton
          onClick={() => {
            setView("user");
            setLoading(true);
          }}
        >
          User Home View
        </ViewButton>
        <ViewButton
          onClick={() => {
            setView("admin");
            setLoading(true);
          }}
        >
          Admin Home View
        </ViewButton>
      </div>
      {view === "user" &&  <TableUser loading={loading} setLoading={setLoading} />}
      {view === "admin" && <TableAdmin />}
    </div>
  );
}
