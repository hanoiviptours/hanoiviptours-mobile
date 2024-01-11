import { api } from '../../baseApi';

export type Login = {
  data?: loginItem;
  access_token?: string;
  refresh_token?: string;
};
type loginItem = {
  email?: string;
  password?: string;
  role?: string;
};
export type Register = {
  email?: string;
  phone_number?: string;
  password?: string;
  role?: string;
};

export const authApi = api.injectEndpoints({
  endpoints: build => ({
    doLogin: build.mutation<Login, Partial<Login>>({
      query: body => ({
        url: `/auth/login`,
        method: 'POST',
        body,
      }),
      transformResponse: (response: { data: Login }) => response.data,
    }),
    doRegister: build.mutation<Register, Partial<Register>>({
      query: body => ({
        url: `/auth/register`,
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const { useDoLoginMutation, useDoRegisterMutation } = authApi;
