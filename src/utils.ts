import axios from "axios";

export interface Resp {
  BK9: string[];
}

export async function flux(query: string): Promise<string | Error> {
  try {
    const response = await axios.get<Resp>(`https://bk9.fun/ai/fluximg?q=${encodeURIComponent(query)}`);
    const res = response.data.BK9[0];
    return<string> res;
  } catch (error) {
    console.error(error);
    return error as Error;
  }
}
