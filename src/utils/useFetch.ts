const baseURL = "http://localhost:8000/";

type Method = "POST" | "PUT" | "GET" | "DELETE";

export const UseFetch = async (path: string, method: Method, body: any) => {
  try {
    const response = await fetch(`${baseURL}${path}`, {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
      body: body,
    });
    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Login Error:", error);

    return error;
  }
};
