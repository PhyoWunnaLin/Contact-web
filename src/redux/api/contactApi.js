import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const contactApi = createApi({
    reducerPath: "contactApi",
    baseQuery: fetchBaseQuery({baseUrl : ` https://contact-app.mmsdev.site/api/v1`}),
    tagTypes: ["contact"],
    endpoints: (builder)=>({
        getContact: builder.query({
            query: (token)=>({
                url: `/contact`,
                headers: {authorization : `Bearer ${token}`},
            }),
            providesTags: ["contact"],
        }),
        CreateContact: builder.mutation({
          query: ({ contact, token }) => ({
            url: "/contact",
            method: "POST",
            body: contact,
            headers: { authorization: `Bearer ${token}` },
          }),
          invalidatesTags: ['contact'],
        }),
    })
})

export const { useGetContactQuery,useCreateContactMutation } = contactApi;
