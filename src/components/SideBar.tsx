import {
  HomeIcon,
  ArchiveBoxIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/outline";

const Sidebar = () => {
  return (
    <aside className="w-64 bg-white shadow-md h-full flex flex-col p-4">
      <h2 className="text-l font-bold text-purple-600 mb-6">yamm</h2>
      <nav>
        <ul className="space-y-4">
          <li className="flex items-center space-x-2 text-gray-600 hover:text-purple-600">
            <HomeIcon className="w-5 h-5" />
            <span>Store Orders</span>
          </li>
          <li className="flex items-center space-x-2 text-gray-600 hover:text-purple-600">
            <ArchiveBoxIcon className="w-5 h-5" />
            <span>Products</span>
          </li>
          <li className="flex items-center space-x-2 text-gray-600 hover:text-purple-600">
            <Cog6ToothIcon className="w-5 h-5" />
            <span>Settings</span>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
