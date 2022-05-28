import axios from 'axios';

export default class UserService {

  static getUser(userId: string): Promise<any> {
    return axios.get(`/api/users/${userId}`);
  }

}