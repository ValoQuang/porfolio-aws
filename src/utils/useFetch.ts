const baseURL = "http://localhost:8000/";

type Method = "POST" | "PUT" | "GET" | "DELETE";

type JsonRequestHeaders =
  | {
      "Content-Type": "application/json";
    }
  | {
      Authorization: string;
    };

export const UseFetch = async (
  path: string,
  method: Method,
  headers: JsonRequestHeaders,
  body?: any
) => {
  try {
    const response = await fetch(`${baseURL}${path}`, {
      method: method,
      headers: headers,
      body: body,
    });
    const data = await response.json();
    return data;
  } catch (error) {
    alert(error);
    return error;
  }
};
