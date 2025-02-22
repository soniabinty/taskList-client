import axios from "axios";
export const axiosPublic = axios.create({
  baseURL: "https://task-list-server-self.vercel.app",
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;