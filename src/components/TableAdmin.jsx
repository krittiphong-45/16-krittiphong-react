import UserFrom from "./UserFrom";

export default function TableAdmin() {
  return (
    <div className="min-h-screen w-full">
      <div className="w-full h-auto">
        <UserFrom />
      </div>
      <div className="w-full my-16 flex justify-center">
        <table className=" w-[600px] border">
          <thead className="border bg-gray-400">
            <tr className="h-9">
              <th className="border font-medium">Name</th>
              <th className="border font-medium">Last Name</th>
              <th className="border font-medium">Position</th>
              <th className="border font-medium">Action</th>
            </tr>
          </thead>
          <tbody className="border">
            <tr className="h-9">
              <td className="border"></td>
              <td className="border"></td>
              <td className="border"></td>
              <td className="border">
                <button className=" h-[90%] w-[90%] border mx-1 rounded-md bg-red-500 font-medium text-white">
                  Delete
                </button>
              </td>
            </tr>
            <tr className="h-9">
              <td className="border"></td>
              <td className="border"></td>
              <td className="border"></td>
              <td className="border">
                <button className=" h-[90%] w-[90%] border mx-1 rounded-md bg-red-500 font-medium text-white">
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
