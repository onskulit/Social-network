import axios from "axios";

const initial = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
})

const usersAPI = {
  getUsers (currentPage = 1, pageSize = 10) {
    return initial.get(`users?page=${currentPage}&count=${pageSize}`)
    .then(response => response.data);
  }
}

export default usersAPI;