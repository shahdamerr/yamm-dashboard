const Navbar = () => {
  return (
    <div className="bg-white px-6 py-4 flex justify-between items-center">
      <div className="text-lg font-semibold">Store Orders</div>
      <div>
        <button className="bg-purple-500 text-white px-4 py-2 rounded-md">
          Send a feedback
        </button>
      </div>
    </div>
  );
};

export default Navbar;
