import { useContext} from "react";

import { AuthContext } from "../context/AuthContext";

export const useAuthContext = () =>{
     const  Context = useContext(AuthContext);

     if(!Context){
        throw Error("Context Error");
     }
     
     return Context;
}

