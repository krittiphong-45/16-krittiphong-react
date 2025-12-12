import TableAdmin from "../components/TableAdmin";
import UserFrom from "../components/UserFrom";


export default function Admin() {
  return (
    <div className="min-h-screen w-full">
      <div className="w-full h-auto">
        <UserFrom />
      </div>
      <div className="w-full my-16 flex justify-center">
        <TableAdmin />
      </div>
    </div>
  );
}
