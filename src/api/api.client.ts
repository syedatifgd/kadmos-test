import axios from "axios";
import { ApiListResponse, ApiResponse, ApiSelectParams } from "./api.types";

class ApiClient {
  public readonly api = axios.create({
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      // implement any header requirments here
    },
    timeout: 4000,
  });

  async getList<T, Params extends ApiSelectParams = ApiSelectParams>(
    path: string,
    params?: Params
  ) {
    try {
      const res = await this.api.get<ApiListResponse<T>>(path, {
        params,
      });
      return res.data;
    } catch (e: any) {
      new Error(e?.message ?? "Error");
    }
  }

  async get<T, Params extends ApiSelectParams = ApiSelectParams>(
    path: string,
    params?: Params
  ) {
    try {
      const res = await this.api.get<ApiResponse<T>>(path, {
        params,
      });
      return res.data.data;
    } catch (e: any) {
      new Error(e?.message ?? "Error");
    }
  }
}

export const apiClient = new ApiClient();
