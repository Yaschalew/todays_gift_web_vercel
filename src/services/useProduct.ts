
import { useQuery } from '@tanstack/react-query';
import { apiProducts } from './apiProducts';
import { getAllProduct } from '../api/apiProduct';


export function useProducts(){
  
    const {isLoading, data: products, error} =  useQuery({
        queryKey: ['product'],
        queryFn: apiProducts
       }) ;
       
       const product = products;
       return {isLoading, error, product} 
       
}
export function useAllProduct(){
  
    const {isLoading: isProduct, data: products} =  useQuery({
        queryKey: ['Product'],
        queryFn: getAllProduct
       }) ;
       
       
       return {isProduct, products} 
       
}

