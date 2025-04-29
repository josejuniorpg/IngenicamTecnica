import { AxiosResponse } from 'axios';
import { ApiResponse, AxiosApiService } from '@/types/api.types';
import apiClient from './client';

export const myApiAuthService: AxiosApiService = {
  getAll: async <T>(endpoint: string): Promise<AxiosResponse<ApiResponse<T>>> => {
    return await apiClient.get<ApiResponse<T>>(`/${endpoint}`);
  },

  getById: async <T>(
    endpoint: string,
    id: string | number
  ): Promise<AxiosResponse<ApiResponse<T>>> => {
    return await apiClient.get<ApiResponse<T>>(`/${endpoint}/${id}`);
  },

  create: async <T, D>(endpoint: string, data: D): Promise<AxiosResponse<ApiResponse<T>>> => {
    return await apiClient.post<ApiResponse<T>>(`/${endpoint}`, data);
  },

  update: async <T, D>(
    endpoint: string,
    id: string | number,
    data: D
  ): Promise<AxiosResponse<ApiResponse<T>>> => {
    return await apiClient.put<ApiResponse<T>>(`/${endpoint}/${id}`, data);
  },

  remove: async <T>(
    endpoint: string,
    id: string | number
  ): Promise<AxiosResponse<ApiResponse<T>>> => {
    return await apiClient.delete<ApiResponse<T>>(`/${endpoint}/${id}`);
  },

  search: async <T>(
    endpoint: string,
    params: Record<string, any>
  ): Promise<AxiosResponse<ApiResponse<T>>> => {
    return await apiClient.get<ApiResponse<T>>(`/${endpoint}`, { params });
  },
};
