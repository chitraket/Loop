import { GET_USERS } from "../../config/urls";
import { apiGet } from "../../utils/utils";
import store from "../store"
import types from "../types";
const { dispatch } = store;


export function getUsers(query = "", headers) {
    return apiGet(GET_USERS + query, {}, headers)
}