import axios from "axios";

export const ResourceTree = {
  async getResourceTree() {
    const response = await axios.get("http://localhost:5097/api/resources/tree");
    return response.data.data;
  },

  async getExistingResources() {
    const response = await axios.get("http://localhost:5097/api/resources/list");
    return response.data.data;
  },

  async updateResourceTree(resourceArray) {
    const response = await axios.post("http://localhost:5097/api/resources/update", resourceArray, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    return response.data.data;
  },
};