import {
  BaseQueryFn,
  createApi,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryError,
  retry,
} from '@reduxjs/toolkit/query/react';
import { setToken } from '@/store/auth';

const baseQuery = fetchBaseQuery({
  baseUrl: process.env.BASE_URL,
  prepareHeaders: (headers, { getState }) => {
    const {
      auth: { accessToken },
    } = getState() as any;
    if (accessToken) {
      headers.set('Authorization', `Bearer ${accessToken}`);
    }
    return headers;
  },
});

const baseQueryWithInterceptor: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  const { dispatch } = api;
  let result = await baseQuery(args, api, extraOptions);

  if (result.error && result.error.status === 401) {
    const body = '';
    // const refreshTokens = await baseQuery(
    //   {
    //     url: '/auth/refresh-token',
    //     method: 'POST',
    //     body,
    //   },
    //   api,
    //   extraOptions,
    // );
    // if (refreshTokens.data) {
    //   dispatch(
    //     setToken({
    //       // accessToken: refreshTokens.data.access_token as string,
    //     }),
    //   );
    // }
  }
  return result;
};

const staggeredBaseQuery = retry(baseQueryWithInterceptor, {
  maxRetries: 8,
});
export const api = createApi({
  reducerPath: 'api',
  baseQuery: staggeredBaseQuery,
  endpoints: () => ({}),
});
