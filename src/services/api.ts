import {
  BaseQueryFn,
  createApi,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryError,
  retry,
} from '@reduxjs/toolkit/query/react';
import { setAmadeusToken } from '@/store/amadeus';

// const baseQuery = fetchBaseQuery({
//   baseUrl: process.env.BASE_URL,
//   prepareHeaders: (headers, { getState }) => {
//     const {
//       auth: { accessToken },
//     } = getState() as any;
//     if (accessToken) {
//       headers.set('Authorization', `Bearer ${accessToken}`);
//     }
//     return headers;
//   },
// });

const baseAmadeusQuery = fetchBaseQuery({
  baseUrl: process.env.AMADEUS_BASE_URL,
  prepareHeaders: (headers, { getState }) => {
    const {
      amadeus: { amadeusAccessToken },
    } = getState() as any;
    if (amadeusAccessToken) {
      headers.set('Authorization', `Bearer ${amadeusAccessToken.access_token}`);
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
  // let result = await baseQuery(args, api, extraOptions);
  let resultAmadeus = await baseAmadeusQuery(args, api, extraOptions);

  if (resultAmadeus.error && resultAmadeus.error.status === 401) {
    const body = `grant_type=client_credentials&client_id=${process.env.AMADEUS_CLIENT}&client_secret=${process.env.AMADEUS_SECRET}`;
    const refreshAmadeus = await baseAmadeusQuery(
      {
        url: 'https://api.amadeus.com/v1/security/oauth2/token',
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body,
      },
      api,
      extraOptions,
    );
    if (refreshAmadeus.data) {
      dispatch(
        setAmadeusToken({
          amadeusAccessToken: refreshAmadeus.data as string,
        }),
      );
      resultAmadeus = await baseAmadeusQuery(args, api, extraOptions);
    }
  }
  return resultAmadeus;
};

const staggeredBaseQuery = retry(baseQueryWithInterceptor, {
  maxRetries: 5,
});
export const api = createApi({
  baseQuery: staggeredBaseQuery,
  endpoints: () => ({}),
});
