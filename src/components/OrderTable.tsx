import {
  useGetOrdersQuery,
  useUpdateOrderActiveStatusMutation,
  useUpdateOrderDecisionMutation,
} from "../store/apis/Orders";
import { Table, Switch, Button, message, Select } from "antd";
import type { ColumnsType } from "antd/es/table";
import { EyeOutlined } from "@ant-design/icons";

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
    <Table<Order>
      dataSource={orders?.map((order) => ({
        ...order,
        key: order.id,
      }))}
      columns={columns}
      loading={isLoading}
      pagination={{
        pageSize: 15,
        showSizeChanger: false,
        position: ["bottomCenter"],
        style: {},
      }}
    />
  );
}
