import { useQuery } from '@tanstack/react-query';
import { getAllCategory } from '../api/apiCategory';

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

export function useCategory () {
    const {isLoading :isCategory, data: category, error} =  useQuery<mainCategory>({
        queryKey: ['Category'],
        queryFn: getAllCategory
       }) ;
       const categories = category?.categories;
       return {isCategory, error, categories} 
    }