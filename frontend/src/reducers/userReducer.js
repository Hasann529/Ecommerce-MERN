import {
  ALL_USERS_FAIL,
  ALL_USERS_REQUEST,
  ALL_USERS_SUCCESS,
  CLEAR_ERROR,
  DELETE_USER_FAIL,
  DELETE_USER_REQUEST,
  DELETE_USER_RESET,
  DELETE_USER_SUCCESS,
  FORGOT_PASSWORD_FAIL,
  FORGOT_PASSWORD_REQUEST,
  FORGOT_PASSWORD_SUCCESS,
  LOAD_USER_FAIL,
  LOAD_USER_REQUEST,
  LOAD_USER_SUCCESS,
  LOGIN_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_USER_FAIL,
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  RESET_PASSWORD_FAIL,
  RESET_PASSWORD_REQUEST,
  RESET_PASSWORD_SUCCESS,
  UPDATE_PROFILE_FAIL,
  UPDATE_PROFILE_REQUEST,
  UPDATE_PROFILE_RESET,
  UPDATE_PROFILE_SUCCESS,
  UPDATE_USER_FAIL,
  UPDATE_USER_REQUEST,
  UPDATE_USER_RESET,
  UPDATE_USER_SUCCESS,
  USER_DETAILS_FAIL,
  USER_DETAILS_REQUEST,
  USER_DETAILS_SUCCESS,
} from "../constants/userConstants";

export const userReducer = (state = { user: {} }, { type, payload }) => {
  switch (type) {
    case LOGIN_REQUEST:
    case REGISTER_USER_REQUEST:
    case LOAD_USER_REQUEST:  
      return {
        loading: true,
        isAuthenticated: false,
      };
    case LOGIN_SUCCESS:
    case REGISTER_USER_SUCCESS:
    case LOAD_USER_SUCCESS:  
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        user: payload.user,
      };
      case LOGOUT_SUCCESS:
        return{
          loading:false,
          isAuthenticated:false,
          user:null,
        }
    case LOGIN_FAIL:
    case REGISTER_USER_FAIL:
      return {
        ...state,
        loading: false,
        isAuthenticated: false,
        user: null,
        error: payload,
      };
     case LOAD_USER_FAIL:
      return {
        loading: false,
        isAuthenticated: false,
        user: null,
        error: payload,
      };
      case LOGOUT_FAIL:
        return{
          ...state,
          loading:false,
          error:payload,
        }

    case CLEAR_ERROR:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

export const profileReducer = (state = {}, { type, payload }) => {
  switch (type) {
  
    case UPDATE_PROFILE_REQUEST:
      case DELETE_USER_REQUEST:
        case UPDATE_USER_REQUEST:  
      return {
        ...state,
        loading: true,
      };
 
    case UPDATE_PROFILE_SUCCESS:
      case UPDATE_USER_SUCCESS:  
      return {
        ...state,
        loading: false,
        isUpdated: payload,
      };
      case DELETE_USER_SUCCESS:
        return {
          ...state,
          loading: false,
          isDeleted: payload.success,
          message: payload.message,
        };
      case UPDATE_PROFILE_RESET:
        case UPDATE_USER_RESET:
      return {
        ...state,
        isUpdated: false,
      };
      case DELETE_USER_RESET:
        return {
          ...state,
          isDeleted: false,
        };
  

      case UPDATE_PROFILE_FAIL:
        case DELETE_USER_FAIL:
          case UPDATE_USER_FAIL:
        return{
          ...state,
          loading:false,
          error:payload,
        }

    case CLEAR_ERROR:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

export const forgotPasswordReducer = (state = {}, { type, payload }) => {
  switch (type) {
  
    case FORGOT_PASSWORD_REQUEST:
      case RESET_PASSWORD_REQUEST:  
      return {
        ...state,
        loading: true,
        error:null
      };
 
    case FORGOT_PASSWORD_SUCCESS:  
      return {
        ...state,
        loading: false,
        message: payload.message,
      };

      case RESET_PASSWORD_SUCCESS:  
      return {
        ...state,
        loading: false,
        success: payload.success,
      };

      case FORGOT_PASSWORD_FAIL:
        case RESET_PASSWORD_FAIL:
        return{
          ...state,
          loading:false,
          error:payload,
        }

    case CLEAR_ERROR:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

export const allUsersReducer = (state = { users: [] }, {type,payload}) => {
  switch (type) {
    case ALL_USERS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ALL_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        users: payload.users,
      };

    case ALL_USERS_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    case CLEAR_ERROR:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};

export const userDetailsReducer = (state = { user: {} }, {type,payload}) => {
  switch (type) {
    case USER_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case USER_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        user: payload.user,
      };

    case USER_DETAILS_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    case CLEAR_ERROR:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};

