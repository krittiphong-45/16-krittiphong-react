import { useState } from "react";
import ViewButton from "../components/ViewButton";
import Admin from "./Admin";
import User from "./User";
export default function Home() {
  const [view, setView] = useState("");
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
          }}
        >
          User Home View
        </ViewButton>
        <ViewButton
          onClick={() => {
            setView("admin");
          }}
        >
          Admin Home View
        </ViewButton>
      </div>
      {view === "user" && <User />}
      {view === "admin" && <Admin />}
    </div>
  );
}
