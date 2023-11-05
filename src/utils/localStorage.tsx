type LOCAL_STORAGE_KEYS =
  | 'customerId'
  | 'userId'
  | 'isFirstTimeUser'

export const getFromLocalStorage = (key: LOCAL_STORAGE_KEYS) => {
  return localStorage.getItem(key)!;
};

export const setInLocalStorage = (key: LOCAL_STORAGE_KEYS, value: string) => {
  return localStorage.setItem(key, value);
};

export const removeFromLocalStorage = (key: LOCAL_STORAGE_KEYS) => {
  localStorage.removeItem(key);
};