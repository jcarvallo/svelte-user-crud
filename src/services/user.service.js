import { Api } from "../utils";

export const serviceUser = {
  getUser: async () => await Api.get("/users"),
  createUser: async (data) => await Api.post("/users", data),
  updateUser: async (id, data) => await Api.put(`/users/${id}`, data),
  deleteUser: async (id) => await Api.deleteRequest(`/users/${id}`),
};
