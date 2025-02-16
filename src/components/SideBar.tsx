import { HomeOutlined } from "@ant-design/icons";

export default function SideBar() {
  return (
    <div
      className="h-screen w-64 bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 text-white p-4"
      // style={{ boxShadow: "2px 0 0px rgba(0, 0, 0, 0.1)" }}
    >
      <div
        style={{
          fontSize: "28px",
          fontWeight: "bold",
          color: "#9D6CFF",
          textAlign: "center",
          marginBottom: "40px",
          marginTop: "14px",
        }}
      >
        yamm
      </div>
      <span
        style={{
          fontSize: "18px",
          color: "#9D6CFF",
          textAlign: "center",
          margin: "10px",
        }}
      >
        <HomeOutlined style={{ marginRight: "10px" }} />
        Products
      </span>
    </div>
  );
}
