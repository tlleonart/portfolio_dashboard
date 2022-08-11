import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const todosApi = createApi({
  reducerPath: "todos",

  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8080/api/todos",
  }),

  tagTypes: ["Todo"],

  endpoints: (build) => ({
    getTodos: build.query({
      query: () => "/",
      providesTags: ["Todo"],
    }),
    addTodo: build.mutation({
      query: (todo) => ({
        url: "/",
        method: "POST",
        body: todo,
      }),
      invalidatesTags: ["Todo"],
    }),
    updateTodo: build.mutation({
      query: ({ id, ...put }) => ({
        url: `/${id}`,
        method: "PUT",
        body: put,
      }),
      invalidatesTags: ["Todo"],
    }),
    deleteTodo: build.mutation({
      query: (id) => ({
        url: `/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Todo"],
    }),
  }),
});

export const {
  useGetTodosQuery,
  useAddTodoMutation,
  useUpdateTodoMutation,
  useDeleteTodoMutation,
} = todosApi;
