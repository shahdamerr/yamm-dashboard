import { Table, TableProps } from "antd";

interface TableComponentProps<T> {
  columns: TableProps<T>["columns"];
  data: T[];
  loading?: boolean;
  pagination?: TableProps<T>["pagination"];
}

export default function OrderTable<T extends { id: string }>({
  columns,
  data,
  loading = false,
  pagination = {
    pageSize: 15,
    showSizeChanger: false,
    position: ["bottomCenter"],
  },
}: TableComponentProps<T>) {
  return (
    <Table
      dataSource={data?.map((item) => ({
        ...item,
        key: item.id,
      }))}
      columns={columns}
      loading={loading}
      pagination={pagination}
    />
  );
}
