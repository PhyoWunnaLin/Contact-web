import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const contactApi = createApi({
  reducerPath: "contactApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://contact-app.mmsdev.site/api/v1",
  }),
  tagTypes: ["Contact"],
  endpoints: (builder) => ({
    CreateContact: builder.mutation({
      query: ({ contact, token }) => ({
        url: "/contact",
        method: "POST",
        body: contact,
        headers: { authorization: `Bearer ${token}` },
      }),
      invalidatesTags: ["Contact"],
    }),
  }),
});

export const { useCreateContactMutation } = contactApi;
