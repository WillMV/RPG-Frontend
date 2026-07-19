export interface HttpResponse<T> {
  data: T;
  status: number;
  headers?: Record<string, string>;
}

export interface HttpError {
  status: number;
  message: string;
  data?: unknown;
}

export interface HttpRequestConfig {
  params?: Record<string, string | number | boolean | undefined>;
  headers?: Record<string, string>;
  responseType?: "json" | "blob" | "text" | "arraybuffer";
  timeout?: number;
  signal?: AbortSignal;
}

export interface HttpClient {
  get: <R>(url: string, config: HttpRequestConfig) => Promise<HttpResponse<R>>;
  put: <R, D>(
    url: string,
    data: D,
    config?: HttpRequestConfig,
  ) => Promise<HttpResponse<R>>;
  post: <R, D>(
    url: string,
    data: D,
    config?: HttpRequestConfig,
  ) => Promise<HttpResponse<R>>;
  patch: <R, D>(
    url: string,
    data: D,
    config?: HttpRequestConfig,
  ) => Promise<HttpResponse<R>>;
  delete: <R>(
    url: string,
    config?: HttpRequestConfig,
  ) => Promise<HttpResponse<R>>;
}
