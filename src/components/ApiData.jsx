import React, { useState, useEffect } from 'react';
import Button from './Button';

const ApiData = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
          headers: {
            'Accept-Language': 'en-US'
          }
        });
        if (!res.ok) throw new Error('Failed to fetch posts');
        const data = await res.json();
        setPosts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  // Filter posts by search term
  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredPosts.length / itemsPerPage);
  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 mt-6">
      <h2 className="text-2xl font-bold mb-4">API Posts</h2>

      {/* Search */}
      <input
        type="text"
        placeholder="Search posts..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mb-4 w-full px-4 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {/* Loading & Error */}
      {loading && <p>Loading posts...</p>}
      {error && <p className="text-red-500">Error: {error}</p>}

      {/* Posts List */}
      <ul className="space-y-4">
        {paginatedPosts.map((post) => (
          <li
            key={post.id}
            className="p-4 border rounded-lg dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700"
          >
            <h3 className="font-bold">{post.title}</h3>
            <p className="text-gray-600 dark:text-gray-300">{post.body}</p>
          </li>
        ))}
        {paginatedPosts.length === 0 && !loading && (
          <li className="text-gray-500 dark:text-gray-400 text-center py-4">
            No posts found
          </li>
        )}
      </ul>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex gap-2 justify-center mt-4">
          <Button
            variant="secondary"
            size="sm"
            onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
          >
            Prev
          </Button>
          <span className="px-2 py-1">
            {currentPage} / {totalPages}
          </span>
          <Button
            variant="secondary"
            size="sm"
            onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
          >
            Next
          </Button>
        </div>
      )}
    </div>
  );
};

export default ApiData;
