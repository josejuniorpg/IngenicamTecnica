import { AxiosResponse } from 'axios';
import { ApiResponse, AxiosApiService } from '@/types/api.types';
import apiClient from './client';

export const apiService: AxiosApiService = {
  getAll: async <T>(endpoint: string): Promise<AxiosResponse<ApiResponse<T>>> => {
    return await apiClient.get<ApiResponse<T>>(`/${endpoint}`);
  },

  getById: async <T>(
    endpoint: string,
  ): Promise<AxiosResponse<ApiResponse<T>>> => {
    return await apiClient.get<ApiResponse<T>>(`/${endpoint}`);
  },

  create: async <T, D>(endpoint: string, data: D): Promise<AxiosResponse<ApiResponse<T>>> => {
    return await apiClient.post<ApiResponse<T>>(`/${endpoint}`, data);
  },

  patch: async <T, D>(
    endpoint: string,
    data: D
  ): Promise<AxiosResponse<ApiResponse<T>>> => {
    return await apiClient.patch<ApiResponse<T>>(`/${endpoint}`, data);
  },
  update: async <T, D>(
    endpoint: string,
    data: D
  ): Promise<AxiosResponse<ApiResponse<T>>> => {
    return await apiClient.put<ApiResponse<T>>(`/${endpoint}`, data);
  },

  remove: async <T>(
    endpoint: string,
  ): Promise<AxiosResponse<ApiResponse<T>>> => {
    return await apiClient.delete<ApiResponse<T>>(`/${endpoint}`);
  },

  search: async <T>(
    endpoint: string,
    params: Record<string, any>
  ): Promise<AxiosResponse<ApiResponse<T>>> => {
    return await apiClient.get<ApiResponse<T>>(`/${endpoint}`, { params });
  },
};
