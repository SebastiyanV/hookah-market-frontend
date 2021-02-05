// Api
export const API_URL = 'http://localhost:8080/api';

// Auth Service
export const USER_REGISTER_URL = API_URL + '/auth/register';
export const USER_LOGIN_URL = API_URL + '/auth/login';

// User Service
export const USER_EDIT_PROFILE_URL = API_URL + '/user/settings/edit-profile';
export const CHANGE_PASSWORD_URL = API_URL + '/user/settings/change-password';
export const UPDATE_PROFILE_PICTURE = API_URL + '/user/settings/update-profile-picture';
export const DELETE_PROFILE_PICTURE = API_URL + '/user/settings/delete-profile-picture';

// Article Service
export const CREATE_ARTICLE_URL = API_URL + '/article/create';
export const GET_ALL_ARTICLES = API_URL + '/article/get';
export const GET_MY_ARTICLES = API_URL + '/article/get/my';
export const GET_ARTICLE_BY_ID = API_URL + '/article/get/';
export const GET_COUNT_OF_AWAITING_APPROVAL_ARTICLES = API_URL + '/article/get/all/AWAITING_APPROVAL';
