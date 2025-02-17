import { useGetOrdersQuery } from "../store/apis/Orders";
import { Table, Switch, Dropdown, Button } from "antd";
import type { ColumnsType } from "antd/es/table";
import { MoreOutlined, EyeOutlined } from "@ant-design/icons";

import { useNavigate } from "react-router-dom";

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

export default function OrderTable() {
  const { data: orders, error, isLoading } = useGetOrdersQuery();
  const navigate = useNavigate();

  const handleDecisionChange = (orderId: string, decision: string) => {
    console.log(`Order ${orderId} decision changed to: ${decision}`);
    // TODO: Implement API call to update decision
  };

  const handleToggleActive = (orderId: string, checked: boolean) => {};

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
      key: "decision",
      render: (_, record: Order) => (
        <Dropdown
          menu={{
            items: [
              {
                key: "reject",
                label: "Reject",
                onClick: () => handleDecisionChange(record.id, "Reject"),
              },
              {
                key: "accept",
                label: "Accept",
                onClick: () => handleDecisionChange(record.id, "Accept"),
              },
              {
                key: "escalate",
                label: "Escalate",
                onClick: () => handleDecisionChange(record.id, "Escalate"),
              },
            ],
          }}
        >
          <Button>
            Not Yet <MoreOutlined />
          </Button>
        </Dropdown>
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
    <Table<Order>
      dataSource={orders?.map((order) => ({
        ...order,
        key: order.id,
      }))}
      columns={columns}
      loading={isLoading}
      pagination={{
        pageSize: 5,
        showSizeChanger: false,
        position: ["bottomCenter"],
      }}
    />
  );
}
