

const initState = {
    loading: false,
    error: false,
    data:[],
  };
  export const postReducer = (state = initState, { type, payload }) => {
  
    switch (type) {
      case "GET_POST": {
          console.log(type,payload)
        return {
          ...state,
          loading: false,
          error: false,
          data: payload
        }
      }case "POST_LOADING": {
        console.log(type,payload)
      return {
        ...state,
        loading: true,
        error: false,
        data: payload
      }
    }case "POST_ERROR": {
        console.log(type,payload)
      return {
        ...state,
        loading: false,
        error: true,
        data: payload
      }
    }
      default: {
        return state
      }
  
    }
  }
  