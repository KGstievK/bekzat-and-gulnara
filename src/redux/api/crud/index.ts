import { api as index} from '..'

const api = index.injectEndpoints({
  endpoints: (builder ) => ({
    getProducts: builder.query<TODO.GetResponse, TODO.GetRequest>({
      query: () => ({
        url: 'Bekzat-and-Gulnara',
        method: "GET",
      }),
      providesTags: ["crud"]
    }),
    postProduct: builder.mutation<TODO.PostResponse, TODO.PostRequest>({
      query: (newUser) => ({
        url: 'Bekzat-and-Gulnara',
        method: "POST",
        body: newUser,
      }),
      invalidatesTags: ["crud"],
    }),
  }),
});

export const {useGetProductsQuery, usePostProductMutation} = api