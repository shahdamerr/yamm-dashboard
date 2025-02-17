import { FileOutlined } from "@ant-design/icons";
import { Button } from "antd";

export default function NavBar() {
  return (
    <div className=" flex justify-between items-center p-4">
      <div className="text-lg font-bold flex items-center">
        <FileOutlined className="mr-2" />
        Store Orders
      </div>
      <Button>Send a feedback!</Button>
    </div>
  );
}
