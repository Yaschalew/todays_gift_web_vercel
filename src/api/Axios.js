
import axios from "axios";

export const dummy = axios.create({
  baseURL:  import.meta.env.VITE_APP_DUMMY
});

export const client = axios.create({ 
  baseURL: import.meta.env.VITE_BASE_URL
});



