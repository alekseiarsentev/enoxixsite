import { apiClient } from './api.ts';
import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { ProductRespone } from './types.ts';
import { useSearchParams } from 'react-router-dom';

export function useItems(): UseQueryResult<ProductRespone> {
    const [search] = useSearchParams({
      sort: 'name',
      minPrice: '0',
      maxPrice: '10000',
      minRate: '0',
      maxRate: '5'
    });
  
    return useQuery(
      ['items', search.toString()],
      () =>
        apiClient
          .get('items', {
            params: search,
          })
          .then((res) => res.data),
      {
        staleTime: 120000,
      },
    );
  }