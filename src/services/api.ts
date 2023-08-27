import axios, { AxiosRequestConfig } from "axios";

const instanceAxios = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  timeout: 1 * 1000, // 1min
});

class ApiClient<TData> {
  constructor(readonly endpoint: string) {}

  getAllData = (requestConfig?: AxiosRequestConfig) => {
    return instanceAxios
      .get<TData[]>(
        this.endpoint,
        requestConfig
          ?? {}
      )
      .then((res) => res.data);
  };

  addNewData = (newData: TData) => {
    return instanceAxios
      .post<TData>(this.endpoint, newData)
      .then((res) => res.data);
  };

  updateData = (updataedData: TData) => {
    return instanceAxios
      .patch<TData>(this.endpoint, updataedData)
      .then((res) => res.data);
  };
}

export default ApiClient;
