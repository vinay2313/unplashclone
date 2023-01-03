import { createContext , useReducer} from "react";
import GlobalReducer from "./GlobalReducer";

const GlobalContext = createContext()

export const GlobalProvider = ({children}) => {
   
    const initialState = {
        photos : []
    }


    const [state , dispatch] = useReducer(GlobalReducer , initialState)


  

    const key = 'R_q4w0hjRlfLt5ROoYkjOI2VKGLhnYHBYW7NSHRdjUI'
    const baseURL = 'https://api.unsplash.com/photos/?client_id='
    
    // Get Data
    const getData = async() => {
      const res = await fetch(`${baseURL}${key}`)
      const data = await res.json()
      dispatch({
        type : "GET_DATA",
        payload : data
      })
    }
    

   
   
   
   
    return(
        <GlobalContext.Provider value={{
            photos : state.photos,
            getData
        }} >
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalContext