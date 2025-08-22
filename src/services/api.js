import axios from "axios";

const API = axios.create({
  baseURL: "https://hastakhsar-backend.onrender.com", // ✅ use 127.0.0.1 instead of 0.0.0.0
});

export const verifyPair = async (task, threshold, refImg, testImg) => {
  const formData = new FormData();
  formData.append("task", task);        // ✅ matches FastAPI
  formData.append("threshold", threshold);
  formData.append("ref", refImg);       // ✅ backend expects "ref"
  formData.append("test", testImg);     // ✅ backend expects "test"

  const res = await API.post("/verify", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return res.data;
};
