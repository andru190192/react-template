import { AxiosInstance } from 'axios';

class BaseApi {
  protected apiVersion: string;
  protected client: AxiosInstance;

  constructor(apiVersion: string, client: AxiosInstance) {
    this.apiVersion = apiVersion;
    this.client = client;
  }
}

export default BaseApi;
