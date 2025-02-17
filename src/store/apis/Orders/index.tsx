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
    updateOrderActiveStatus: builder.mutation<
      Order,
      { id: string; active: boolean }
    >({
      query: ({ id, active }) => ({
        url: `/orders/${id}`,
        method: "PATCH",
        body: { active },
      }),
      invalidatesTags: ["Orders"],
    }),
    updateOrderDecision: builder.mutation<
      Order,
      { id: string; newDecision: string }
    >({
      query: ({ id, newDecision }) => ({
        url: `/orders/${id}`,
        method: "PATCH",
        body: { decision: newDecision },
      }),
      invalidatesTags: ["Orders"],
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

export const {
  useGetOrdersQuery,
  useUpdateOrderActiveStatusMutation,
  useUpdateOrderDecisionMutation,
} = ordersApi;
export default ordersApi;
