'use client';

import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabaseClient';

export default function SubCategoryForm() {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [mainCategories, setMainCategories] = useState([]);
  const [selectedMainCategoryId, setSelectedMainCategoryId] = useState('');

  useEffect(() => {
    const fetchMainCategories = async () => {
      const { data, error } = await supabase
        .from('Main_Categories')
        .select('ID, Name');

      if (error) {
        console.error('Error fetching main categories:', error.message);
      } else {
        setMainCategories(data);
      }
    };

    fetchMainCategories();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!id || !name || !selectedMainCategoryId) {
      setMessage('All fields are required.');
      return;
    }

    const { error } = await supabase
      .from('Sub_Categories')
      .insert([
        { Sub_ID: id, Name: name, Main_Categories_ID: selectedMainCategoryId }
      ]);

    if (error) {
      console.error('Insert error:', error.message);
      setMessage('Failed to insert sub category.');
    } else {
      setMessage('Sub category inserted successfully!');
      setId('');
      setName('');
      setSelectedMainCategoryId('');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-lg bg-white rounded-xl shadow-md p-8">
        <h2 className="text-3xl font-bold mb-6 text-blue-700">Add Sub Category</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Sub Category ID</label>
            <input
              type="text"
              value={id}
              onChange={(e) => setId(e.target.value)}
              placeholder="Enter sub category ID"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Sub Category Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter sub category name"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Select Main Category</label>
            <select
              value={selectedMainCategoryId}
              onChange={(e) => setSelectedMainCategoryId(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="">-- Select a main category --</option>
              {mainCategories.map((cat) => (
                <option key={cat.ID} value={cat.ID}>
                  {cat.Name}
                </option>
              ))}
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Add Sub Category
          </button>

          {message && (
            <p className="text-center text-green-600 font-medium">{message}</p>
          )}
        </form>
      </div>
    </div>
  );
}
