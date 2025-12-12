import axios from "axios";
import { useEffect, useState } from "react";

export default function TableUser({ loading, setLoading }) {
  const ApiUrl = "https://67eca027aa794fb3222e43e2.mockapi.io/members";
  const [data, setData] = useState(null);
  const fetchData = async () => {
    setLoading(true);
    try {
      let response = await axios.get(ApiUrl);
      console.log(response);
      setData(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  if (loading) {
    return <div>กำลังโหลดข้อมูล...</div>;
  }
  return (
    <div className="my-16">
      <table className=" w-[600px] border">
        <thead className="border bg-gray-400">
          <tr className="h-9">
            <th className="border font-medium">Name</th>
            <th className="border font-medium">Last Name</th>
            <th className="border font-medium">Position</th>
          </tr>
        </thead>
        <tbody className="border">
          {data.map((item) => (
            <tr className="h-9" key={item.id}>
              <td className="border text-center">{item.name}</td>
              <td className="border text-center">{item.lastname}</td>
              <td className="border text-center">{item.position}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
