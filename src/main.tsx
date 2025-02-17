import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ConfigProvider } from "antd";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#8A2BE2",
          colorLink: "#8A2BE2",
          colorBgLayout: "#F5F0FF",
          colorBgContainer: "#FFFFFF",
        },
      }}
    >
      <App />
    </ConfigProvider>
  </StrictMode>
);
