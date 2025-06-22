import axios from "axios";

export interface FluxResponse {
  BK9: string[];
}

export async function flux(query: string): Promise<string | Error> {
  try {
    const response = await axios.get<FluxResponse>(`https://bk9.fun/ai/fluximg?q=${encodeURIComponent(query)}`);
    const res = response.data.BK9[0];
    return res;
  } catch (error) {
    console.error(error);
    return error as Error;
  }
}
