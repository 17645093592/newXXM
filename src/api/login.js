// import * as ajax from './index.js';
import ajax from "./index"
export const login = (data) => {
    return ajax('/login', 'post', data)
  }