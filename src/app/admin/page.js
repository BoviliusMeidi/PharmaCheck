/* eslint-disable @next/next/no-img-element */
'use client';

import { useState } from 'react';
import { supabase } from '@/lib/supabaseClient';

export default function AdminPage() {
    const [kfaCode, setKfaCode] = useState('');
    const [medicineName, setMedicineName] = useState('');
    const [imageFile, setImageFile] = useState(null);
    const [preview, setPreview] = useState('');
    const [message, setMessage] = useState('');

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setImageFile(file);
        if (file) {
            setPreview(URL.createObjectURL(file));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!kfaCode || !medicineName || !imageFile) {
            setMessage('All fields are required.');
            return;
        }

        const timestamp = Date.now();
        const fileName = `${timestamp}-${imageFile.name}`;

        // 1. Upload to Supabase Storage
        const { data: uploadData, error: uploadError } = await supabase
            .storage
            .from('medicine-images')
            .upload(fileName, imageFile);

        if (uploadError) {
            console.error(uploadError);
            setMessage('Error uploading image.');
            return;
        }

        const { data: { publicUrl } } = supabase
            .storage
            .from('medicine-images')
            .getPublicUrl(fileName);

        const { error: dbError } = await supabase
            .from('medicines')
            .insert([{
                kfa_code: kfaCode,
                medicine_name: medicineName,
                image_url: publicUrl
            }]);

        if (dbError) {
            console.error(dbError);
            setMessage('Error saving to database.');
            return;
        }

        setMessage('Upload successful!');
        setKfaCode('');
        setMedicineName('');
        setImageFile(null);
        setPreview('');
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
  <div className="w-full max-w-xl bg-white rounded-xl shadow-md p-8 space-y-6">
    <div className="text-center">
      <h1 className="text-4xl font-bold text-blue-700 mb-2">Upload Medicine</h1>
      <p className="text-gray-500">Add new medicine with image and KFA code</p>
    </div>

    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">KFA Code</label>
        <input
          type="text"
          placeholder="Enter KFA Code"
          value={kfaCode}
          onChange={(e) => setKfaCode(e.target.value)}
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Medicine Name</label>
        <input
          type="text"
          placeholder="Enter medicine name"
          value={medicineName}
          onChange={(e) => setMedicineName(e.target.value)}
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Medicine Image</label>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="w-full border border-gray-300 rounded-lg px-4 py-2 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-100 file:text-blue-700 hover:file:bg-blue-200"
        />
      </div>

      {preview && (
        <div className="mt-4">
          <p className="text-sm text-gray-600 mb-1">Preview:</p>
          <img
            src={preview}
            alt="Preview"
            className="h-48 w-full object-contain rounded border"
          />
        </div>
      )}

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-200"
      >
        Upload Medicine
      </button>

      {message && (
        <p className="text-center text-sm text-green-600 font-medium">{message}</p>
      )}
    </form>
  </div>
</div>

    );
}
