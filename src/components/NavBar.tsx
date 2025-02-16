import { Button } from "antd/es/radio";
import { FileOutlined } from "@ant-design/icons";

export default function NavBar() {
  return (
    <div className="bg-white w-full flex justify-between items-center p-4">
      <span className="text-lg font-bold flex items-center">
        <FileOutlined className="mr-2" />
        Store Orders
      </span>
      <Button className="bg-transparent text-primary border-2 border-black cursor-pointer">
        Send a feedback!
      </Button>
    </div>
  );
}
