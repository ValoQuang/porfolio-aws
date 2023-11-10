export function getBackgroundClass(isDarkMode: boolean) {
  return isDarkMode ? "dark:bg-slate-800 transition-colors duration-1000 text-white" : "transition-colors duration-1000 bg-white";
}
