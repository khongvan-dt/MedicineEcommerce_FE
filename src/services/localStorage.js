import { authentication, system } from "@/constants";
// import moment from 'moment';

export const getBearerToken = () => {
  return `Bearer ${getAccessToken()}`;
};

export const isAuthenticated = () => {
  return window.localStorage.getItem(authentication.accessToken);
}
export const setAuthenticated = val => {
  window.localStorage.setItem(authentication.accessToken, val);
}
export const getDeviceId = () => {
  return window.localStorage.getItem(authentication.deviceId);
}
export const setDeviceId = val => {
  window.localStorage.setItem(authentication.deviceId, val);
}
export const getAccessToken = () => {
  return window.localStorage.getItem(authentication.accessToken);
}
export const setAccessToken = (val) => {
  return window.localStorage.setItem(authentication.accessToken, val);
}
export const getRefreshToken = () => {
  return window.localStorage.getItem(authentication.refreshToken);
}
export const setRefreshToken = (val) => {
  return window.localStorage.setItem(authentication.refreshToken, val);
}
export const getExpiresIn = () => {
  return parseInt(window.localStorage.getItem(authentication.expiresIn));
}
export const setExpiresIn = (val) => {
  return window.localStorage.setItem(authentication.expiresIn, val);
}
export const saveToken = token => {
  setAccessToken(token.access_token);
  setRefreshToken(token.refresh_token);
  setExpiresIn(token.expires_in);
  // window.localStorage.setItem(authentication.loginTime, moment().utc())
}

export const getLocale = () => {
  return window.localStorage.getItem(system.locale);
}
export const setLocale = (val) => {
  return window.localStorage.setItem(system.locale, val);
}

export const getLoginTime = () => {
  return window.localStorage.getItem(authentication.loginTime)
}

export const setUser = (val) => {
  window.localStorage.setItem(authentication.user, JSON.stringify(val))
}
export const getUser = () => {
  return JSON.parse(window.localStorage.getItem(authentication.user))
}

export const destroy = () => {
  window.localStorage.removeItem(authentication.accessToken);
  window.localStorage.removeItem(authentication.refreshToken);
  window.localStorage.removeItem(authentication.expiresIn);
  window.localStorage.removeItem(authentication.loginTime);
  window.localStorage.removeItem(authentication.user);
}

export const setPerPage = (val) => {
  window.localStorage.setItem(system.perPage, val);
}
export const getPerPage = () => {
  return window.localStorage.getItem(system.perPage);
}

export default {
  isAuthenticated,
  setAuthenticated,
  getBearerToken,
  getDeviceId,
  setDeviceId,
  getAccessToken,
  setAccessToken,
  saveToken,
  getRefreshToken,
  setRefreshToken,
  getExpiresIn,
  getLoginTime,
  destroy,
  setUser,
  getUser,
  getLocale,
  setLocale,
  setPerPage,
  getPerPage
}
