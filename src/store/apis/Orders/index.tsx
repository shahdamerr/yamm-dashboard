import baseApi from "../baseApi/baseApi";

interface Order {
  id: string;
  reason: string;
  store_name: string;
  store_logo: string;
  store_url: string;
  amount: number;
  active: boolean;
  decision: string | null;
  items: { name: string; id: string; price: number; quantity: number }[];
}

const ordersApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getOrders: builder.query<Order[], void>({
      query: () => ({
        url: "/orders",
        method: "GET",
      }),
      providesTags: ["Orders"],
      transformResponse: (response: Order[]) => response,
    }),
    // getOrderById: builder.query<Order, string>({
    //   query: (id) => ({
    //     url: `/orders/${id}`,
    //     method: "GET",
    //   }),
    // }),
  }),
  overrideExisting: false,
});

export const { useGetOrdersQuery } = ordersApi;
export default ordersApi;
