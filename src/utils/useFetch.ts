import { LOCAL_STORAGE } from "../types";
import { setInLocalStorage } from "./localStorage";

const baseURL = "https://www.localhost:8000/";

type Method = "POST" | "PUT" | "GET" | "DELETE";

export const UseFetch = async (path: string, method: Method, body: any) => {
  console.log(baseURL);
  try {
    const response = await fetch(`${baseURL}${path}`, {
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
    setInLocalStorage(LOCAL_STORAGE.USER, JSON.stringify(data));
    return data;
  } catch (error) {
    console.error("Login Error:", error);
  }
};
