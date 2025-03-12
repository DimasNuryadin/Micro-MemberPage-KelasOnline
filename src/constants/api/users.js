import axios from '@/src/configs/axios';

export default {
  login: (credentials) => axios.post("/users/login", credentials),
  details: () => axios.get("/users")
}