import axios from "axios";

const API_BASE_URL = "http://localhost:3000";

export type ArticleParams = {
  page: number;
  limit: number;
  author?: string;
  sort?: string;
  sortDirection?: "asc" | "desc";
};

export const fetchArticles = async (params: ArticleParams): Promise<{ data: any[]; total: number }> => {
  const { data } = await axios.get(`${API_BASE_URL}/articles`, { params });
  return data;
};

export const fetchHighlights = async (): Promise<{ mostViewed: any; mostShared: any }> => {
  const { data } = await axios.get(`${API_BASE_URL}/articles/highlights`);
  return data;
};

export const fetchSummary = async (articleId: string): Promise<string> => {
  const { data } = await axios.post(`${API_BASE_URL}/articles/${articleId}/summarize`);
  return data.summary;
};
