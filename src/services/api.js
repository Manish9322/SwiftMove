import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "/api" }), // Adjust if your API is elsewhere
  tagTypes: [
    "Booking",
    "User",
    "Porter",
    "Enquiry",
    "Faq",
    "Notification",
    "Coupon",
    "Fence",
    "Contact"
  ], 
  endpoints: (builder) => ({
    // ================================================== Booking Endpoints ================================================== //
    getBookings: builder.query({
      query: () => "bookings",
      providesTags: ["Booking"],
    }),
    getBooking: builder.query({
      query: (id) => `bookings/${id}`,
      providesTags: (result, error, id) => [{ type: "Booking", id }],
    }),
    addBooking: builder.mutation({
      query: (booking) => ({
        url: "/bookings",
        method: "POST",
        body: booking,
      }),
      invalidatesTags: ["Booking"],
    }),
    updateBooking: builder.mutation({
      query: ({ id, ...booking }) => ({
        url: `/bookings/${id}`,
        method: "PUT",
        body: booking,
      }),
      invalidatesTags: ["Booking"],
    }),
    deleteBooking: builder.mutation({
      query: (id) => ({
        url: `/bookings/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Booking"],
    }),

    // ================================================== User Endpoints ================================================== //
    getUsers: builder.query({
      query: () => "/users",
      providesTags: ["User"],
    }),
    addUser: builder.mutation({
      query: (user) => ({
        url: "/users",
        method: "POST",
        body: user,
      }),
      invalidatesTags: ["User"],
    }),
    updateUser: builder.mutation({
      query: ({ id, ...user }) => ({
        url: `/users/${id}`,
        method: "PUT",
        body: user,
      }),
      invalidatesTags: ["User"],
    }),
    deleteUser: builder.mutation({
      query: (id) => ({
        url: `/users/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["User"],
    }),

    // ================================================== Porter Endpoints ================================================== //
    getPorters: builder.query({
      query: () => "/porters",
      providesTags: ["Porter"],
    }),
    addPorter: builder.mutation({
      query: (porter) => ({
        url: "/porters",
        method: "POST",
        body: porter,
      }),
      invalidatesTags: ["Porter"],
    }),
    updatePorter: builder.mutation({
      query: ({ id, ...porter }) => ({
        url: `/porters/${id}`,
        method: "PUT",
        body: porter,
      }),
      invalidatesTags: ["Porter"],
    }),
    deletePorter: builder.mutation({
      query: (id) => ({
        url: `/porters/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Porter"],
    }),

    // ================================================== Contact Endpoints ================================================== //
    getContacts: builder.query({
      query: () => "/contact",
      providesTags: ["Contact"],
    }),
    addContact: builder.mutation({
      query: (contact) => ({
        url: "/contact",
        method: "POST",
        body: contact,
      }),
      invalidatesTags: ["Contact"],
    }),
    updateContact: builder.mutation({
      query: ({ id, ...contact }) => ({
        url: `/contact`,
        method: "PUT",
        body: { id, ...contact },
      }),
      invalidatesTags: ["Contact"],
    }),
    deleteContact: builder.mutation({
      query: (id) => ({
        url: `/contact`,
        method: "DELETE",
        body: { id },
      }),
      invalidatesTags: ["Contact"],
    }),
    
  }),
});

export const {
  useGetBookingsQuery,
  useGetBookingQuery,
  useAddBookingMutation,
  useUpdateBookingMutation,
  useDeleteBookingMutation,
  useGetUsersQuery,
  useAddUserMutation,
  useUpdateUserMutation,
  useDeleteUserMutation,
  useGetPortersQuery,
  useAddPorterMutation,
  useUpdatePorterMutation,
  useDeletePorterMutation,
  useGetContactsQuery,
  useAddContactMutation,
  useUpdateContactMutation,
  useDeleteContactMutation,
} = api;
