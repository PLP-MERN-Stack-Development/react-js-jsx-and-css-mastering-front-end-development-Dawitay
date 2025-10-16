import React, { useEffect, useState } from 'react';
import Card from '../components/Card';
import Pagination from '../components/Pagination';
import { fetchPosts } from '../api/postsApi';

export default function PostsPage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [search, setSearch] = useState('');
  const pageSize = 6;

  useEffect(() => {
    setLoading(true);
    setError('');
    fetchPosts()
      .then(all => {
        setPosts(all);
        setTotalPages(Math.ceil(all.length / pageSize));
      })
      .catch(err => setError('Failed to load posts'))
      .finally(() => setLoading(false));
  }, []);

  const filtered = posts.filter(p => p.title.toLowerCase().includes(search.toLowerCase()));
  const start = (page - 1) * pageSize;
  const pageItems = filtered.slice(start, start + pageSize);
  const computedTotalPages = Math.max(1, Math.ceil(filtered.length / pageSize));

  useEffect(() => {
    if (page > computedTotalPages) setPage(1);
  }, [search]); // reset when search changes

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Posts (JSONPlaceholder)</h2>

      <Card>
        <div className="flex gap-2">
          <input className="flex-grow border rounded px-3 py-2" placeholder="Search posts by title..." value={search} onChange={e => setSearch(e.target.value)} />
        </div>
      </Card>

      {loading && <Card><p>Loading...</p></Card>}
      {error && <Card><p className="text-red-500">{error}</p></Card>}

      <div className="grid md:grid-cols-2 gap-4 mt-4">
        {pageItems.map(p => (
          <Card key={p.id}>
            <h3 className="font-semibold">{p.title}</h3>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{p.body}</p>
          </Card>
        ))}
      </div>

      <Pagination page={page} totalPages={computedTotalPages} onPageChange={setPage} />
    </div>
  );
}
