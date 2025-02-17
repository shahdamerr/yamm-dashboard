import { HomeOutlined } from "@ant-design/icons";

export default function SideBar() {
  return (
    <div className="h-screen w-64 bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 text-white p-4 shadow-md">
      <div className="text-3xl font-bold  text-center mt-4 mb-10">Yamm</div>
      <span className="text-lg  flex  gap-2">
        <HomeOutlined />
        Products
      </span>
    </div>
  );
}
