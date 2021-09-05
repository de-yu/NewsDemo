import axios, { AxiosInstance } from 'axios';

class ApiClient {
  private baseUrl: AxiosInstance;

  private key = 'a9ee563c5a194e9ea794bd389c599e2c';

  public constructor() {
    this.baseUrl = axios.create({ baseURL: 'https://newsapi.org/v2/everything' });
  }

  public getData(search: string) {
    return this.baseUrl.request({
      method: 'get',
      url: `${search}&apiKey=${this.key}`,
    });
  }
}

const ApiClientInstance = new ApiClient();
export default ApiClientInstance;
