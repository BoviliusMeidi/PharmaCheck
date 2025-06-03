'use client';

import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabaseClient';

export default function SubSubMedicineForm() {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [subMedicines, setSubMedicines] = useState([]);
  const [selectedSubMedicineId, setSelectedSubMedicineId] = useState('');

  useEffect(() => {
    const fetchSubMedicines = async () => {
      const { data, error } = await supabase
        .from('Sub_Categories')
        .select('Sub_ID, Name');

      if (error) {
        console.error('Error fetching sub medicine:', error.message);
      } else {
        setSubMedicines(data);
      }
    };

    fetchSubMedicines();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!id || !name || !selectedSubMedicineId) {
      setMessage('All fields are required.');
      return;
    }

    const { error } = await supabase
      .from('Sub_Sub_Categories')
      .insert([
        { Sub_Sub_ID: id, Name: name, Sub_Categories_ID: selectedSubMedicineId }
      ]);

    if (error) {
      console.error('Insert error:', error.message);
      setMessage('Failed to insert sub-sub medicine.');
    } else {
      setMessage('Sub-sub medicine inserted successfully!');
      setId('');
      setName('');
      setSelectedSubMedicineId('');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-lg bg-white rounded-xl shadow-md p-8">
        <h2 className="text-3xl font-bold mb-6 text-blue-700">Add Sub Sub Category</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Sub Sub Category ID</label>
            <input
              type="text"
              value={id}
              onChange={(e) => setId(e.target.value)}
              placeholder="Enter sub sub category ID"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Sub Sub Category Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter sub sub category name"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Select Sub Category</label>
            <select
              value={selectedSubMedicineId}
              onChange={(e) => setSelectedSubMedicineId(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="">-- Select a sub category --</option>
              {subMedicines.map((sub) => (
                <option key={sub.Sub_ID} value={sub.Sub_ID}>
                  {sub.Name}
                </option>
              ))}
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Add Sub Sub Category
          </button>

          {message && (
            <p className="text-center text-green-600 font-medium">{message}</p>
          )}
        </form>
      </div>
    </div>
  );
}
