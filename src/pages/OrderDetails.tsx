import { ColumnsType } from "antd/es/table";
import { useGetOrderByIdQuery } from "../store/apis/Orders";
import { Spin } from "antd";
import OrderTable from "../components/OrderTable";
import { useParams } from "react-router-dom";

import LayoutWrapper from "../components/Layout";

interface Item {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

export default function Orderdetails() {
  const { id } = useParams();

  console.log({ orderId: id });
  const { data: order, isLoading } = useGetOrderByIdQuery(id ?? "", {
    skip: !id,
  });

  const columns: ColumnsType<Item> = [
    {
      title: "Item Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      render: (price) => `$${price.toFixed(2)}`,
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity",
    },
    {
      title: "Total",
      key: "total",
      render: (_, record) => `$${(record.price * record.quantity).toFixed(2)}`,
    },
  ];

  return (
    <div>
      {isLoading ? (
        <Spin
          size="large"
          className="!flex justify-center items-center min-h-screen"
        />
      ) : (
        <LayoutWrapper>
          <OrderTable<Item>
            columns={columns}
            data={order?.items || []}
            loading={isLoading}
          />
        </LayoutWrapper>
      )}
    </div>
  );
}
