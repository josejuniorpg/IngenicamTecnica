import { AxiosResponse } from 'axios';
import { ApiResponse, AxiosApiService } from '@/types/api.types';
import apiClient from './client';

export const apiService: AxiosApiService = {
  getAll: async <T>(endpoint: string): Promise<ApiResponse<T>> => {
    return await apiClient.get<T>(`/${endpoint}`);
  },

  getById: async <T>(endpoint: string): Promise<ApiResponse<T>> => {
    return await apiClient.get<T>(`/${endpoint}`);
  },

  create: async <T, D>(endpoint: string, data: D): Promise<AxiosResponse<T>> => {
    return await apiClient.post<T>(`/${endpoint}`, data);
  },

  patch: async <T, D>(endpoint: string, data: D): Promise<AxiosResponse<T>> => {
    return await apiClient.patch<T>(`/${endpoint}`, data);
  },
  update: async <T, D>(endpoint: string, data: D): Promise<AxiosResponse<T>> => {
    return await apiClient.put<T>(`/${endpoint}`, data);
  },

  remove: async <T>(endpoint: string): Promise<ApiResponse<T>> => {
    return await apiClient.delete<T>(`/${endpoint}`);
  },

  search: async <T>(endpoint: string, params: Record<string, any>): Promise<AxiosResponse<T>> => {
    return await apiClient.get<T>(`/${endpoint}`, { params });
  },
};
