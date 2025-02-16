type Order = {
  id: string;
  reference: string;
  date: string;
  items: number;
  price: string;
  city: string;
  status:
    | "Approved"
    | "Early Review"
    | "Totally Rejected"
    | "Partially Rejected";
};

const orders: Order[] = [
  {
    id: "#12345678",
    reference: "SA-1704948709-6357",
    date: "10 May, 2023",
    items: 1,
    price: "143 SAR",
    city: "Yanbu, Saudi",
    status: "Approved",
  },
  {
    id: "#12345678",
    reference: "SA-1704948709-6357",
    date: "18 May, 2024",
    items: 2,
    price: "324 SAR",
    city: "Dubai, UAE",
    status: "Early Review",
  },
  {
    id: "#12345678",
    reference: "SA-1704948709-6357",
    date: "24 May, 2024",
    items: 3,
    price: "492 SAR",
    city: "Dubai, UAE",
    status: "Totally Rejected",
  },
  {
    id: "#12345678",
    reference: "SA-1704948709-6357",
    date: "12 May, 2024",
    items: 2,
    price: "265 SAR",
    city: "Yanbu, Saudi",
    status: "Partially Rejected",
  },
];

const Table = () => {
  return (
    <div className="bg-white shadow rounded-lg overflow-hidden">
      <table className="w-full text-left">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-4">Order ID</th>
            <th>Reference Number</th>
            <th>Order Date</th>
            <th># of Items</th>
            <th>Price</th>
            <th>City</th>
            <th>Order Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr key={index} className="border-t">
              <td className="p-4">{order.id}</td>
              <td>{order.reference}</td>
              <td>{order.date}</td>
              <td>{order.items}</td>
              <td>{order.price}</td>
              <td>{order.city}</td>
              <td>
                <span
                  className={`px-3 py-1 rounded-full text-white ${
                    order.status === "Approved"
                      ? "bg-green-500"
                      : order.status === "Early Review"
                      ? "bg-yellow-500"
                      : order.status === "Totally Rejected"
                      ? "bg-red-500"
                      : "bg-orange-500"
                  }`}
                >
                  {order.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
