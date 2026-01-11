
import React, { useState } from 'react';
import { SiteContent } from '../types';
import { generateMarketingCopy } from '../services/geminiService';
import { LogOut, Save, Sparkles, RefreshCcw } from 'lucide-react';

interface AdminPanelProps {
  content: SiteContent;
  onUpdate: (newContent: SiteContent) => void;
  onLogout: () => void;
}

export const AdminPanel: React.FC<AdminPanelProps> = ({ content, onUpdate, onLogout }) => {
  const [formData, setFormData] = useState<SiteContent>(content);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdate(formData);
    alert('Konten berhasil diperbarui!');
  };

  const handleAIGenerate = async (field: 'heroTitle' | 'heroSubtitle' | 'aboutText') => {
    setIsGenerating(true);
    const result = await generateMarketingCopy(field === 'aboutText' ? 'Tentang kami profesional' : 'Headline menarik');
    setFormData(prev => ({ ...prev, [field]: result }));
    setIsGenerating(false);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-lg border border-gray-100">
      <div className="flex justify-between items-center mb-8 border-b pb-4">
        <h2 className="text-2xl font-bold text-gray-800">Panel Admin Raja Mampet</h2>
        <button 
          onClick={onLogout}
          className="flex items-center gap-2 px-4 py-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition"
        >
          <LogOut size={18} /> Logout
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <section className="space-y-4">
          <h3 className="text-lg font-semibold text-blue-600 flex items-center gap-2 border-l-4 border-blue-600 pl-2">
            Informasi Utama
          </h3>
          <div className="grid gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Judul Utama (Hero Title)</label>
              <div className="flex gap-2">
                <input 
                  type="text" name="heroTitle" value={formData.heroTitle} onChange={handleChange}
                  className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
                />
                <button 
                  type="button" onClick={() => handleAIGenerate('heroTitle')} disabled={isGenerating}
                  className="p-2 bg-blue-50 text-blue-600 rounded-md hover:bg-blue-100" title="AI Suggester"
                >
                  <Sparkles size={18} />
                </button>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Sub-judul Hero</label>
              <div className="flex gap-2">
                <textarea 
                  name="heroSubtitle" value={formData.heroSubtitle} onChange={handleChange} rows={2}
                  className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
                />
                <button 
                  type="button" onClick={() => handleAIGenerate('heroSubtitle')} disabled={isGenerating}
                  className="p-2 bg-blue-50 text-blue-600 rounded-md hover:bg-blue-100" title="AI Suggester"
                >
                  <Sparkles size={18} />
                </button>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Tentang Kami</label>
              <div className="flex gap-2">
                <textarea 
                  name="aboutText" value={formData.aboutText} onChange={handleChange} rows={4}
                  className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
                />
                <button 
                  type="button" onClick={() => handleAIGenerate('aboutText')} disabled={isGenerating}
                  className="p-2 bg-blue-50 text-blue-600 rounded-md hover:bg-blue-100" title="AI Suggester"
                >
                  <Sparkles size={18} />
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h3 className="text-lg font-semibold text-blue-600 flex items-center gap-2 border-l-4 border-blue-600 pl-2">
            Kontak & Lokasi
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">WhatsApp (Format: 628...)</label>
              <input 
                type="text" name="whatsapp" value={formData.whatsapp} onChange={handleChange}
                className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Nomor Telepon Tampil</label>
              <input 
                type="text" name="phone" value={formData.phone} onChange={handleChange}
                className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">Alamat/Lokasi</label>
              <input 
                type="text" name="address" value={formData.address} onChange={handleChange}
                className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
          </div>
        </section>

        <div className="pt-6 border-t flex gap-4">
          <button 
            type="submit"
            className="flex-1 bg-blue-600 text-white py-3 rounded-xl font-bold hover:bg-blue-700 transition shadow-md flex items-center justify-center gap-2"
          >
            <Save size={20} /> Simpan Perubahan
          </button>
        </div>
      </form>
    </div>
  );
};
