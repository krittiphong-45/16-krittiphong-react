export default function UserFrom() {
  return (
    <form className="flex justify-center gap-x-12">
      <input
      type="text"
      placeholder="Name"
      className="border w-[300px] h-14 font-medium rounded-lg px-2 bg-gray-300 text-gray-800"
      />
      <input
      type="text"
      placeholder="Last Name"
      className="border w-[300px] h-14 font-medium rounded-lg px-2  bg-gray-300 text-gray-800"
      />
      <input type="text"
      placeholder="Postion"
      className="border w-[300px] h-14 font-medium rounded-lg px-2  bg-gray-300 text-gray-800"
      />
      <button
      className="h-14 w-20 font-medium bg-purple-700 text-white rounded-lg "
      type="submit"
      >
        Save
      </button>
    </form>
  );
}
