export default function ViewButton({ onClick, children }) {
  return (
    <button
      onClick={onClick}
      className="h-14 w-[178px] text-center bg-gray-200 text-gray-900 shadow-lg font-medium"
    >
      {children}
    </button>
  );
}
