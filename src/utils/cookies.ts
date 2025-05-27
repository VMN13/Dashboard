import Cookies from 'js-cookie';

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const setCookieAsync = async (name: string, value: string, days: number): Promise<void> => {
  await delay(1000);
  Cookies.set(name, value, { expires: days });
};
export const getCookieAsync = async (name: string): Promise<string | undefined> => {
  await delay(1000);
  return Cookies.get(name);
};
export const deleteCookieAsync = async (name: string): Promise<void> => {
  await delay(1000);
  Cookies.remove(name);
};