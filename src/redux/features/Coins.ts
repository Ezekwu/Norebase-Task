import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { CoinsData } from "@/types/CoinsData";

export const coinsSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({baseUrl: 'https://api.coinlore.net/api'}),
  endpoints: (builder) => ({
    getCoins: builder.query<CoinsData, {start: number, limit: number}>({
      queryFn: async (arg, __, ___, baseQuery) => {
        const response = await baseQuery(`/tickers/?start=${arg.start}&limit=${arg.limit}`);

        if(response.error) {
          return { error: response.error };
        }
        return {data: response.data as CoinsData}
      }
    })
  })
})

export const { useGetCoinsQuery } = coinsSlice;