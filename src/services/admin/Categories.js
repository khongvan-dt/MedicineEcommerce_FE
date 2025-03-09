import axios from "axios";

export const Categories = {
  async getCategories() {
    return await axios.get("http://localhost:8080/api/categories");
  },

  async deleteCategory(id) {
    return await axios.delete(`http://localhost:8080/api/categories/${id}`);
  },
};
