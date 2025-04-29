//Types and interfaces for API responses and service methods
import { AxiosResponse } from 'axios';

/**
 * Represents a standard API response structure.
 *
 * @template T - The type of the data returned in the response.
 * @property {T} data - The actual data returned from the API.
 * @property {number} [status] - The status code of the API response, if provided.
 * @property {string} [message] - A message from the API, typically used for errors or status descriptions.
 */
export interface ApiResponse<T> {
  data: T;
  status?: number;
  message?: string;
}

/**
 * Represents a service for making API requests.
 */
export interface AxiosApiService {
  getAll: <T>(endpoint: string) => Promise<AxiosResponse<ApiResponse<T>>>;
  getById: <T>(endpoint: string) => Promise<AxiosResponse<ApiResponse<T>>>;
  create: <T, D>(endpoint: string, data: D) => Promise<AxiosResponse<ApiResponse<T>>>;
  patch: <T>(
    endpoint: string,
    id: string | number,
    data: { headers: { 'Content-Type': string } }
  ) => Promise<AxiosResponse<ApiResponse<T>>>;
  update: <T, D>(
    endpoint: string,
    id: string | number,
    data: D
  ) => Promise<AxiosResponse<ApiResponse<T>>>;
  remove: <T>(endpoint: string, id: string | number) => Promise<AxiosResponse<ApiResponse<T>>>;
  search: <T>(
    endpoint: string,
    params: Record<string, any>
  ) => Promise<AxiosResponse<ApiResponse<T>>>;
}
