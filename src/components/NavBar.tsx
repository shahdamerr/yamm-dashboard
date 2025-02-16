import { Button } from "antd/es/radio";
import { FileOutlined } from "@ant-design/icons";

export default function NavBar() {
  return (
    <div
      style={{
        backgroundColor: "white",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <span style={{ fontSize: "18px", fontWeight: "bold" }}>
        <FileOutlined style={{ marginRight: "8px" }} />
        Store Orders
      </span>
      <Button
        style={{
          backgroundColor: "transparent",
          color: "#9D6CFF",
          border: "2px solid #9D6CFF",
          cursor: "pointer",
        }}
      >
        Send a feedback!
      </Button>
    </div>
  );
}
