import { Button, Layout, Select, Switch, notification } from "antd";
import { Content, Header } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import Navbar from "../components/NavBar";
import OrderTable from "../components/OrderTable";
import {
  CheckCircleOutlined,
  CloseCircleOutlined,
  EyeOutlined,
  HomeOutlined,
} from "@ant-design/icons";
import {
  useGetOrdersQuery,
  useUpdateOrderActiveStatusMutation,
  useUpdateOrderDecisionMutation,
} from "../store/apis/Orders";
import { useNavigate } from "react-router-dom";
import { ColumnsType } from "antd/es/table";

interface Order {
  id: string;
  reason: string;
  store_name: string;
  store_logo: string;
  store_url: string;
  amount: number;
  active: boolean;
  decision: string | null;
  items: {
    name: string;
    id: string;
    price: number;
    quantity: number;
  }[];
}

export default function Dashboard() {
  const { data: orders, isLoading } = useGetOrdersQuery();
  const [updateActiveStatus] = useUpdateOrderActiveStatusMutation();
  const [updateDecision] = useUpdateOrderDecisionMutation();
  const navigate = useNavigate();
  const [api, contextHolder] = notification.useNotification();

  const showNotification = (
    type: "success" | "error",
    message: string,
    description: string
  ) => {
    api[type]({
      message: message,
      description: description,
      placement: "topRight",
      icon:
        type === "success" ? (
          <CheckCircleOutlined style={{ color: "#52c41a" }} />
        ) : (
          <CloseCircleOutlined style={{ color: "#ff4d4f" }} />
        ),
      duration: 3,
    });
  };

  const handleToggleActive = async (orderId: string, checked: boolean) => {
    try {
      await updateActiveStatus({ id: orderId, active: checked }).unwrap();
      showNotification(
        "success",
        "Status Updated",
        `Order status updated to ${checked ? "active" : "inactive"}`
      );
    } catch (error) {
      console.error("Failed to update active status:", error);
      showNotification(
        "error",
        "Update Failed",
        "Failed to update order status"
      );
    }
  };

  const handleDecisionChange = async (orderId: string, newDecision: string) => {
    try {
      await updateDecision({ id: orderId, newDecision }).unwrap();
      showNotification(
        "success",
        "Decision Updated",
        `Decision changed to ${newDecision}`
      );
    } catch (error) {
      console.error("Failed to update decision:", error);
      showNotification("error", "Update Failed", "Failed to update decision");
    }
  };

  const columns: ColumnsType<Order> = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Reason",
      dataIndex: "reason",
      key: "reason",
    },
    {
      title: "Store Name",
      dataIndex: "store_name",
      key: "store_name",
    },
    {
      title: "Store Logo",
      dataIndex: "store_logo",
      key: "store_logo",
      render: (logo: string) => (
        <img
          src={logo}
          alt="Store Logo"
          style={{ width: 50, height: 50, objectFit: "contain" }}
        />
      ),
    },
    {
      title: "Store URL",
      dataIndex: "store_url",
      key: "store_url",
      render: (url: string) => (
        <a href={url} target="_blank" rel="noopener noreferrer">
          Visit Store
        </a>
      ),
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
      render: (amount: number) => `$${amount.toFixed(2)}`,
    },
    {
      title: "Items Count",
      dataIndex: "items",
      key: "items",
      render: (items: Order["items"]) => items.length,
    },
    {
      title: "Active",
      dataIndex: "active",
      key: "active",
      render: (active: boolean, record: Order) => (
        <Switch
          checked={active}
          onChange={(checked) => handleToggleActive(record.id, checked)}
        />
      ),
    },
    {
      title: "Decision",
      dataIndex: "decision",
      key: "decision",
      render: (decision, record) => (
        <Select
          value={decision || "Pending"}
          onChange={(value) => handleDecisionChange(record.id, value)}
          style={{ width: 120 }}
        >
          <Select.Option value="Accept">Accept</Select.Option>
          <Select.Option value="Reject">Reject</Select.Option>
          <Select.Option value="Escalate">Escalate</Select.Option>
          <Select.Option value="Pending">Pending</Select.Option>
        </Select>
      ),
    },
    {
      title: "Actions",
      key: "actions",
      render: (_, record: Order) => (
        <Button
          type="link"
          icon={<EyeOutlined />}
          onClick={() => {
            navigate(`/${record.id}`);
          }}
        />
      ),
    },
  ];

  return (
    <>
      {contextHolder}
      <Layout className="min-h-screen">
        <Sider
          width={250}
          className="!bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 text-center"
        >
          <div className="text-3xl font-bold text-white mt-4 mb-10">Yamm</div>
          <Button
            onClick={() => navigate(`/`)}
            className="text-lg text-white flex !bg-grey-200 gap-2"
          >
            <HomeOutlined />
            Products
          </Button>
        </Sider>
        <Layout className="min-h-screen">
          <Header className="shadow-md !bg-white px-4">
            <Navbar />
          </Header>
          <Content className="m-4 p-4 rounded-lg shadow">
            <div className="overflow-x-auto min-h-[calc(100vh-8rem)]">
              <OrderTable<Order>
                columns={columns}
                data={orders || []}
                loading={isLoading}
              />
            </div>
          </Content>
        </Layout>
      </Layout>
    </>
  );
}
