import React, { useState, useEffect } from "react";
import Highlights from "../components/Highlights";
import FilterSortBar, { Filters } from "../components/FilterSortBar";
import ArticleList from "../components/ArticleList";
import Pagination from "../components/Pagination";
import SummaryModal from "../components/SummaryModal";
import { fetchArticles, fetchHighlights, fetchSummary } from "../services/api";
import { Article } from "../components/ArticleCard";

const ITEMS_PER_PAGE = 9;

const Dashboard: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [totalRows, setTotalRows] = useState(0);
  const [highlights, setHighlights] = useState<{ mostViewed: Article | null; mostShared: Article | null }>({
    mostViewed: null,
    mostShared: null,
  });
  const [filters, setFilters] = useState<Filters>({
    author: "",
    sort: "",
    sortDirection: "desc",
  });
  const [page, setPage] = useState(1);
  const [summary, setSummary] = useState<string | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    fetchArticles({ page, limit: ITEMS_PER_PAGE, ...filters })
      .then(res => {
        setArticles(res.data || []);
        setTotalRows(res.total || 0);
      })
      .catch(() => {
        setArticles([]);
        setTotalRows(0);
      });
  }, [page, filters]);

  useEffect(() => {
    fetchHighlights()
      .then(res =>
        setHighlights({ mostViewed: res.mostViewed || null, mostShared: res.mostShared || null })
      )
      .catch(() => setHighlights({ mostViewed: null, mostShared: null }));
  }, [filters.author]);

  const handleSummarize = async (id: string) => {
    const data = await fetchSummary(id);
    setSummary(data);
    setModalOpen(true);
  };

  const handleSetFilters = (newFilters: Filters) => {
    setPage(1);
    setFilters(newFilters);
  };

  return (
    <div className="bg-gradient-to-br ... min-h-screen">
      <div className="hero ..." style={{ backgroundImage: `url(...)` }}>
        {/* hero section */}
      </div>
      <main className="container mx-auto px-4 py-6">
        <Highlights mostViewed={highlights.mostViewed} mostShared={highlights.mostShared} />
        <FilterSortBar filters={filters} setFilters={handleSetFilters} />
        <div className="bg-white ...">
          <ArticleList articles={articles} onSummarize={handleSummarize} />
        </div>
        {totalRows > ITEMS_PER_PAGE && (
          <Pagination total={totalRows} page={page} onPageChange={setPage} itemsPerPage={ITEMS_PER_PAGE} />
        )}
        <SummaryModal open={modalOpen} onClose={() => setModalOpen(false)} summary={summary} />
      </main>
    </div>
  );
};

export default Dashboard;
