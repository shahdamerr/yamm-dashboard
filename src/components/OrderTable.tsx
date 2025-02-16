import { useGetOrdersQuery } from "../store/apis/Orders";
import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";

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

const columns: ColumnsType<Order> = [
  {
    title: "Store",
    dataIndex: "store_name",
    key: "store_name",
  },
  {
    title: "Amount",
    dataIndex: "amount",
    key: "amount",
  },
  {
    title: "Status",
    dataIndex: "active",
    key: "active",
    render: (active: boolean) => (active ? "Active" : "Inactive"),
  },
  {
    title: "Decision",
    dataIndex: "decision",
    key: "decision",
  },
];

export default function OrderTable() {
  const { data: orders, error, isLoading } = useGetOrdersQuery();

  return (
    <Table
      dataSource={orders?.map((order) => ({
        ...order,
        key: order.id,
      }))}
      columns={columns}
      loading={isLoading}
    />
  );
}
