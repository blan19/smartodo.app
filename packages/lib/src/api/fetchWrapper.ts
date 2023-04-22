import { HttpError } from '../error';

export interface FetcherRequestInit extends RequestInit {
  params?: number | string;
  query?: {
    [key: string]: any;
  };
}

async function http<T extends any>(
  path: string,
  config: FetcherRequestInit
): Promise<T> {
  const { params, query, ...rest } = config;

  if (params) path += `/${params}`;
  if (query) path += `?${new URLSearchParams(query)}`;

  const request = new Request(path, rest);
  const response: Response = await fetch(request);

  if (!response.ok) {
    const errorJson = await response.json();
    const error = HttpError.fromRequest(request, {
      ...response,
      statusText: errorJson.message || response.statusText,
    });
    throw error;
  }

  /**
   * @description
   * Accept-Type이 json이기 때문에 json 형식을 파싱한다.
   * json 형식이 아닐 땐 빈 배열 리턴
   */
  return await response.json();
}

export async function get<T extends unknown = any>(
  path: string,
  config?: FetcherRequestInit
): Promise<T> {
  const init = { method: 'GET', ...config };
  return await http<T>(path, init);
}

export async function post<T extends unknown = any, U extends unknown = any>(
  path: string,
  body: T,
  config?: FetcherRequestInit
): Promise<U> {
  const init = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
    ...config,
  };
  return await http<U>(path, init);
}

export async function put<T, U>(
  path: string,
  body: T,
  config?: FetcherRequestInit
): Promise<U> {
  const init = {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
    ...config,
  };
  return await http<U>(path, init);
}

export async function patch<T extends unknown = any, U extends unknown = any>(
  path: string,
  body: T,
  config?: FetcherRequestInit
): Promise<U> {
  const init = {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
    ...config,
  };
  return await http<U>(path, init);
}

export async function remove<T extends unknown = any, U extends unknown = any>(
  path: string,
  body?: T,
  config?: FetcherRequestInit
): Promise<U> {
  const init = {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    body: body ? JSON.stringify(body) : undefined,
    ...config,
  };
  return await http<U>(path, init);
}
