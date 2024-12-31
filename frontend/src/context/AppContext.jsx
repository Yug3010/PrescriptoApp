import { createContext } from "react";
// import { doctors } from "../assets/assets";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from "react";


export const AppContext = createContext();

const AppContextProvider = (props) => {

    const [token, setToken] = useState(localStorage.getItem('token'));
    const [userData,setUserData]=useState('');
    const [doctors, setDoctors] = useState([]);
    const nav = useNavigate();

    useEffect(() => {
        const fetchDoctors = async () => {
          try {
            const res = await axios.get('http://localhost:3000/api/doctor/list');
            setDoctors(res.data.doctor); // Assuming the API returns an object with a "doctor" array
          } catch (error) {
            console.log(error);
          }
        };
    
        fetchDoctors();
      }, []);

    const loaduserdata=async()=>{
        const res=await axios.get('http://localhost:3000/api/user/getuser',{headers:{
            token:token
        }})
        if(res.data.success)
        {   
            setUserData(res.data.userData);
        }
    }

    useEffect(()=>{
        loaduserdata();
    },[token])

    const logout = () => {
        if (localStorage.getItem('token')) {
            localStorage.removeItem('token');
            setToken(null);
            nav('/login');
        }
    }

    const value = {
        doctors, token, setToken, logout,userData,setUserData
    }

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )


}

export default AppContextProvider;