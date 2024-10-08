const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;

export const fetchData = async () => {
  const response = await fetch(`${apiBaseUrl}/api/your-endpoint`);
  if (!response.ok) {
    throw new Error("APIリクエストに失敗しました");
  }
  const data = await response.json();
  return data;
};
