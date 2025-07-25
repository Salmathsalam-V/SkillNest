import axios from 'axios';

const BASE_URL = 'http://127.0.0.1:8000/api/';
const LOGIN_URL = `${BASE_URL}login/`;
const REFRESH_URL = `${BASE_URL}token/refresh/`;
const POST_URL = `${BASE_URL}post/`;
const LOGOUT_URL = `${BASE_URL}logout/`;
// const AUTH_URL = `${BASE_URL}authenticate/`;


export const login = async (username, password) => {
  try {
    const response = await axios.post(
      LOGIN_URL,
      { username, password },
      { withCredentials: true } // Sends and receives cookies
    );
    return { success: true, data: response.data };
  } catch (error) {
    console.error("Login failed:", error.response?.data || error.message);
    return { success: false, error: error.response?.data || error.message };
  }
};

export const refresh_token = async () => {
  try {
    await axios.post(
      REFRESH_URL,
      {},
      { withCredentials: true }
    );

    // optionally: return the token or a success flag
    return response.data.refreshed === true;
  } catch (error) {
    console.error("Token refresh failed", error);
    return false;
  }
};

export const get_post = async ()=>{
  try{
    const response = await axios.get(POST_URL,
    { withCredentials : true }
  )
  return response.data
  }
  catch (error) {
    return call_refresh(error, axios.get(POST_URL,
      {withCredentials : true }
    ))
  }
}

const call_refresh=async (error, func ) =>{
  if (error.response && error.response.status === 401){
    const tokenRefreshed = await refresh_token();

    if (tokenRefreshed){
      const retryResponse = await func();
      return retryResponse.data
    }
  }
  return false
}
export const logout = async () => {
  try {
    await axios.post(LOGOUT_URL, {}, { withCredentials: true });
    return true;
  } catch (error) {
    console.error("Logout failed", error.response?.data || error.message);
    return false;
  }
};

// export const is_Authenticated = async() =>{
//   try{
//     await axios.post(AUTH_URL, {}, { withCredentials: true } )
//     return true
//    }
//    catch(error){
//     return false
//    }
// }
