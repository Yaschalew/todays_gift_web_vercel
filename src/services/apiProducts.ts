import axios from "axios";

const dummy = axios.create({
  baseURL:  import.meta.env.VITE_APP_DUMMY
});

export async function apiProducts(){
    // const response = await fetch(process.env.REACT_APP_DUMMY + '/products'??"");
    // if (!response.ok) {
    //     throw new Error('Network response was not ok');
    //   }
    //   return response.json();
    const apis = await dummy.get('/products');
    // console.log("thia is api" , apis)
    if(apis.data != null){
      return apis.data
    }

};
