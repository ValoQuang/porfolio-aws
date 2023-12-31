const baseURL = "https://www.localhost:8000/";

type Method = "POST" | "PUT" | "GET" | "DELETE";

export const UseFetch = async (method: Method, body: any) => {
  try {
    const response = await fetch(baseURL, {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
      body: body
    });
    
    if (!response.ok) {
      console.log(response.status);
      throw new Error("Failed to log in");
    }
    const data = await response.json();
    console.log("Login Response:", data);
    return data;
  } catch (error) {
    console.error("Login Error:", error);
  }
};
