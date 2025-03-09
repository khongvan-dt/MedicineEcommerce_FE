import axios from "axios";

export const Medicines = {
  async getMedicines() {
    return await axios.get("http://localhost:8080/api/medicines");
  },

  async insertMedicines(data) {
    const response = await axios.post("http://localhost:8080/api/medicines/insert", data);
    return response.data;
  },

  async deleteMedicines(ids) {
    const response = await axios.post("http://localhost:8080/api/medicines/delete", ids);
    return response.data;
  },
};
