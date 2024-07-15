import axios, { AxiosResponse } from 'axios';

const BASE_URL = import.meta.env.VITE_BASE_URL;

const API_BASE_URL = `${BASE_URL}/category`;

type Category = {
  uid: number;
  name: string;
  parent: string;
  children: [];
  type: string;
};

type mainCategory = {
  categories: Category[]
}
type CreateCategory = Category;
//type GetCategory = Category[];

const api = axios.create({
    baseURL: API_BASE_URL,
  });

 export const getAllCategory =  async () : Promise<mainCategory> =>{
    try{
        const response: AxiosResponse<mainCategory> = await api.get('/all');
        return response.data;
    }catch(error){
        console.error('Error fetching category:', error);
        throw error;
    }

 };
 export const createCategory = async (categoryData: Partial<Category>): Promise<CreateCategory> => {
    try {
      const response: AxiosResponse<CreateCategory> = await api.post('/categories', categoryData);
      return response.data;
    } catch (error) {
      console.error('Error creating Category:', error);
      throw error;
    }
  };