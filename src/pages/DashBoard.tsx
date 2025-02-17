import { Button, Layout, message, Select, Switch } from "antd";
import { Content, Header } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import Navbar from "../components/NavBar";
import OrderTable from "../components/OrderTable";
import { EyeOutlined, HomeOutlined } from "@ant-design/icons";
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
  const { data: orders, error, isLoading } = useGetOrdersQuery();
  const [updateActiveStatus] = useUpdateOrderActiveStatusMutation();
  const [updateDecision] = useUpdateOrderDecisionMutation();
  const navigate = useNavigate();

  const handleToggleActive = async (orderId: string, checked: boolean) => {
    try {
      await updateActiveStatus({ id: orderId, active: checked }).unwrap();
    } catch (error) {
      console.error("Failed to update active status:", error);
    }
  };
  const handleDecisionChange = async (orderId: string, newDecision: string) => {
    try {
      await updateDecision({ id: orderId, newDecision }).unwrap();
      message.success(`Decision updated successfully`);
    } catch (error) {
      console.error("Failed to update decision:", error);
      message.error("Failed to update decision");
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
      render: (logo: string) => {
        console.log("Image URL:", logo);
        return (
          <img
            src="src\assets\150x150.png" //{logo}
            alt="Store Logo"
            style={{ width: 50, height: 50, objectFit: "contain" }}
          />
        );
      },
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
          defaultValue={decision}
          onChange={(value) => handleDecisionChange(record.id, value)}
        >
          <Select.Option value="Accept">Accept</Select.Option>
          <Select.Option value="Reject">Reject</Select.Option>
          <Select.Option value="Escalate">Escalate</Select.Option>
          <Select.Option value={null}>Pending</Select.Option>
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
          onClick={() => navigate(`/orders/${record.id}`)}
        />
      ),
    },
  ];

  return (
    <Layout className="min-h-screen ">
      <Sider
        width={250}
        className="!bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600  "
      >
        <div className="text-3xl font-bold text-white text-center mt-4 mb-10">
          Yamm
        </div>
        <div className="text-lg  text-white flex  gap-2">
          <HomeOutlined />
          Products
        </div>
      </Sider>
      <Layout className="min-h-screen ">
        <Header className="shadow-md !bg-white px-4">
          <Navbar />
        </Header>
        <Content className="m-4 p-4  rounded-lg shadow">
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
  );
}
