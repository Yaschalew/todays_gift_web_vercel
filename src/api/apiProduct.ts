import axios, { AxiosResponse } from 'axios';

const BASE_URL = import.meta.env.VITE_BASE_URL;

const API_BASE_URL = `${BASE_URL}/product`;

interface Product{
    name: string;
    description : string;
    price: number;
    category:[];
    tags:[];
    stock: number;
    thumbnail: string;
    images :[];
}

type CreateProduct = Product;
type GetProduct = Product[];

const api = axios.create({
    baseURL: API_BASE_URL,
  });

 export const getAllProduct =  async () : Promise<GetProduct> =>{
    try{
        const response: AxiosResponse<GetProduct> = await api.get('/all');
        return response.data;
    }catch(error){
        console.error('Error fetching product:', error);
        throw error;
    }

 };
 export const createProduct = async (productData: Partial<Product>): Promise<CreateProduct> => {
    try {
      const response: AxiosResponse<CreateProduct> = await api.post('/products', productData);
      return response.data;
    } catch (error) {
      console.error('Error creating Product:', error);
      throw error;
    }
  };