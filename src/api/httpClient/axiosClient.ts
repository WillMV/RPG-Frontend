import axios, { AxiosError, AxiosHeaders } from "axios";
import { authInterceptor } from "./interceptors";
import type { HttpClient, HttpRequestConfig, HttpResponse } from "./types";

const axiosApi = axios.create({
  baseURL: import.meta.env.BASE_URL,
});

axiosApi.interceptors.response.use(
  (res) => res,
  (error: AxiosError) => {
    authInterceptor({
      data: error.response,
      message: error.message,
      status: error.status || 500,
    });
    return Promise.reject(error);
  },
);

const AxiosClient: HttpClient = {
  get: async function <R>(url: string, config: HttpRequestConfig) {
    const { data, headers, status } = await axiosApi.get(url, {
      headers: config.headers,
      params: config.params,
      timeout: config.timeout,
      signal: config.signal,
      responseType: config.responseType,
    });
    return {
      data,
      headers,
      status,
    } as HttpResponse<R>;
  },
  put: async function <R, D>(
    url: string,
    data: D,
    config: HttpRequestConfig,
  ): Promise<HttpResponse<R>> {
    const {
      data: responseData,
      headers,
      status,
    } = await axiosApi.put(url, data, {
      headers: config.headers as unknown as AxiosHeaders,
      params: config.params,
      timeout: config.timeout,
      signal: config.signal,
      responseType: config.responseType,
    });
    return {
      data: responseData,
      headers: headers as Record<string, string>,
      status,
    };
  },
  post: async function <R, D>(
    url: string,
    data: D,
    config: HttpRequestConfig,
  ): Promise<HttpResponse<R>> {
    const {
      data: responseData,
      headers,
      status,
    } = await axiosApi.put(url, data, {
      headers: config.headers as unknown as AxiosHeaders,
      params: config.params,
      timeout: config.timeout,
      signal: config.signal,
      responseType: config.responseType,
    });
    return {
      data: responseData,
      headers: headers as Record<string, string>,
      status,
    };
  },
  patch: async function <R, D>(
    url: string,
    data: D,
    config: HttpRequestConfig,
  ): Promise<HttpResponse<R>> {
    const {
      data: responseData,
      headers,
      status,
    } = await axiosApi.patch(url, data, {
      headers: config.headers as unknown as AxiosHeaders,
      params: config.params,
      timeout: config.timeout,
      signal: config.signal,
      responseType: config.responseType,
    });
    return {
      data: responseData,
      headers: headers as Record<string, string>,
      status,
    };
  },
  delete: async function <R>(
    url: string,
    config: HttpRequestConfig,
  ): Promise<HttpResponse<R>> {
    const {
      data: responseData,
      headers,
      status,
    } = await axiosApi.delete(url, {
      headers: config.headers as unknown as AxiosHeaders,
      params: config.params,
      timeout: config.timeout,
      signal: config.signal,
      responseType: config.responseType,
    });
    return {
      data: responseData,
      headers: headers as Record<string, string>,
      status,
    };
  },
};

export default AxiosClient;
