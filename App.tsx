
import React, { useState, useEffect } from 'react';
import { SiteContent, AppState } from './types';
import { DEFAULT_CONTENT } from './constants';
import { AdminPanel } from './components/AdminPanel';
import { IconMap, Droplets, Phone, MapPin, Settings, Menu, X, ShieldCheck, Clock, Zap, CheckCircle2, MessageCircle, Star, Sparkles } from './components/Icons';

const App: React.FC = () => {
  const [content, setContent] = useState<SiteContent>(() => {
    const saved = localStorage.getItem('site_content');
    return saved ? JSON.parse(saved) : DEFAULT_CONTENT;
  });

  const [isAdmin, setIsAdmin] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [loginForm, setLoginForm] = useState({ user: '', pass: '' });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('site_content', JSON.stringify(content));
  }, [content]);

  const handleUpdateContent = (newContent: SiteContent) => {
    setContent(newContent);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (loginForm.user === 'admin' && loginForm.pass === 'bali2024') {
      setIsAdmin(true);
      setShowLogin(false);
    } else {
      alert('Username atau Password salah!');
    }
  };

  if (isAdmin) {
    return (
      <div className="min-h-screen bg-gray-50 py-10 px-4">
        <AdminPanel 
          content={content} 
          onUpdate={handleUpdateContent} 
          onLogout={() => setIsAdmin(false)} 
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-morphism border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-2">
              <div className="bg-blue-600 p-2 rounded-lg text-white">
                <Droplets size={24} />
              </div>
              <span className="text-xl font-extrabold text-blue-900 tracking-tight">
                RAJA MAMPET <span className="text-blue-600">RYAN</span>
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#layanan" className="text-gray-600 hover:text-blue-600 font-medium transition">Layanan</a>
              <a href="#tentang" className="text-gray-600 hover:text-blue-600 font-medium transition">Tentang</a>
              <a href="#testimoni" className="text-gray-600 hover:text-blue-600 font-medium transition">Testimoni</a>
              <button 
                onClick={() => setShowLogin(true)}
                className="text-gray-400 hover:text-blue-600 transition"
                title="Admin Login"
              >
                <Settings size={20} />
              </button>
              <a 
                href={`https://wa.me/${content.whatsapp}`}
                className="bg-blue-600 text-white px-6 py-2.5 rounded-full font-semibold hover:bg-blue-700 transition shadow-lg shadow-blue-200"
              >
                Hubungi Kami
              </a>
            </div>

            {/* Mobile Toggle */}
            <button 
              className="md:hidden p-2 text-gray-600"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 right-0 bg-white border-b p-4 flex flex-col gap-4 animate-in slide-in-from-top duration-300">
            <a href="#layanan" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium p-2 hover:bg-gray-50 rounded">Layanan</a>
            <a href="#tentang" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium p-2 hover:bg-gray-50 rounded">Tentang</a>
            <a href="#testimoni" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium p-2 hover:bg-gray-50 rounded">Testimoni</a>
            <a 
              href={`https://wa.me/${content.whatsapp}`}
              className="bg-blue-600 text-white p-4 rounded-xl font-bold text-center"
            >
              Chat WhatsApp Sekarang
            </a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-bold tracking-wider uppercase">
              <Sparkles size={16} /> Ahli Saluran Bali #1
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-blue-950 leading-tight">
              {content.heroTitle}
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed max-w-xl mx-auto md:mx-0">
              {content.heroSubtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a 
                href={`https://wa.me/${content.whatsapp}?text=Halo%20Raja%20Mampet%20Ryan%20Bali%2C%20saya%20butuh%20bantuan%20saluran%20mampet.`}
                className="flex items-center justify-center gap-3 bg-green-500 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-green-600 transition shadow-xl shadow-green-100"
              >
                <MessageCircle size={24} /> WhatsApp 24 Jam
              </a>
              <a 
                href={`tel:${content.phone}`}
                className="flex items-center justify-center gap-3 bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-blue-700 transition shadow-xl shadow-blue-100"
              >
                <Phone size={24} /> Telpon Langsung
              </a>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-6 pt-4">
              <div className="flex flex-col items-center md:items-start">
                <span className="text-2xl font-bold text-blue-900">100%</span>
                <span className="text-xs text-gray-500 font-medium">Bergaransi</span>
              </div>
              <div className="w-px h-10 bg-gray-200"></div>
              <div className="flex flex-col items-center md:items-start">
                <span className="text-2xl font-bold text-blue-900">Bali</span>
                <span className="text-xs text-gray-500 font-medium">Area Layanan</span>
              </div>
              <div className="w-px h-10 bg-gray-200"></div>
              <div className="flex flex-col items-center md:items-start">
                <span className="text-2xl font-bold text-blue-900">Pro</span>
                <span className="text-xs text-gray-500 font-medium">Teknisi Ahli</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-blue-400 blur-[120px] opacity-20 rounded-full"></div>
            <img 
              src="https://picsum.photos/seed/plumbing/800/600" 
              alt="Plumbing Service Bali" 
              className="relative rounded-[2rem] shadow-2xl border-8 border-white object-cover aspect-[4/3]"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="layanan" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900">Layanan Spesialis Kami</h2>
            <p className="text-gray-600 text-lg italic">"Cepat, Bersih, Tuntas Tanpa Bongkar"</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {content.services.map((svc) => (
              <div key={svc.id} className="group p-8 bg-gray-50 rounded-3xl hover:bg-blue-600 hover:shadow-2xl hover:shadow-blue-200 transition-all duration-300">
                <div className="mb-6 p-4 bg-white rounded-2xl w-fit shadow-sm group-hover:bg-blue-500 group-hover:text-white transition-colors">
                  {IconMap[svc.icon]}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-white">{svc.title}</h3>
                <p className="text-gray-600 group-hover:text-blue-50 leading-relaxed">{svc.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="tentang" className="py-24 px-4 sm:px-6 lg:px-8 bg-blue-950 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 p-20 opacity-10">
          <Droplets size={400} />
        </div>
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <div className="space-y-8">
            <h2 className="text-3xl sm:text-4xl font-black leading-tight">Solusi Terbaik Untuk Sanitasi Anda di Bali</h2>
            <p className="text-blue-100 text-lg leading-relaxed italic">
              {content.aboutText}
            </p>
            <div className="grid gap-6">
              <div className="flex gap-4 items-start">
                <div className="p-2 bg-blue-500 rounded-lg"><ShieldCheck size={24} /></div>
                <div>
                  <h4 className="font-bold text-xl">Layanan Bergaransi</h4>
                  <p className="text-blue-200">Setiap pekerjaan kami berikan garansi demi kepuasan pelanggan.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="p-2 bg-blue-500 rounded-lg"><Clock size={24} /></div>
                <div>
                  <h4 className="font-bold text-xl">Respon Cepat</h4>
                  <p className="text-blue-200">Kami paham masalah mampet adalah keadaan darurat. Teknisi kami segera meluncur.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="p-2 bg-blue-500 rounded-lg"><Zap size={24} /></div>
                <div>
                  <h4 className="font-bold text-xl">Peralatan Modern</h4>
                  <p className="text-blue-200">Menggunakan teknik canggih untuk hasil maksimal tanpa merusak properti.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white/10 p-2 rounded-[2.5rem] backdrop-blur-sm border border-white/20">
             <img src="https://picsum.photos/seed/bali/700/800" alt="Bali Service" className="rounded-[2rem] w-full h-[500px] object-cover" />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimoni" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4">Apa Kata Pelanggan Kami?</h2>
            <div className="flex justify-center gap-1">
              {[...Array(5)].map((_, i) => <Star key={i} className="text-yellow-400 fill-current" />)}
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {content.testimonials.map((t, idx) => (
              <div key={idx} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition">
                <div className="flex gap-1 mb-4">
                  {[...Array(t.rating)].map((_, i) => <Star key={i} size={16} className="text-yellow-400 fill-current" />)}
                </div>
                <p className="text-gray-700 mb-6 italic">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">
                    {t.name.charAt(0)}
                  </div>
                  <span className="font-bold text-gray-900">{t.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-600 text-white">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <h2 className="text-3xl sm:text-5xl font-black">Punya Masalah Mampet Sekarang?</h2>
          <p className="text-xl text-blue-100">Jangan biarkan kotoran meluap dan mengganggu kenyamanan rumah atau bisnis Anda.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <a href={`https://wa.me/${content.whatsapp}`} className="bg-white text-blue-600 px-10 py-5 rounded-2xl font-black text-xl hover:bg-gray-100 transition shadow-2xl flex items-center justify-center gap-3">
                <MessageCircle size={28} /> Chat Kami Sekarang
             </a>
          </div>
        </div>
      </section>

      {/* Footer Info */}
      <footer className="bg-white pt-16 pb-8 px-4 sm:px-6 lg:px-8 border-t">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 mb-12">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="bg-blue-600 p-2 rounded-lg text-white">
                <Droplets size={20} />
              </div>
              <span className="text-lg font-black text-blue-950">RAJA MAMPET RYAN</span>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Jasa spesialis pipa tersumbat dan sedot WC terpercaya di seluruh area Bali. Melayani rumah tangga, hotel, resto, dan villa.
            </p>
          </div>
          <div className="space-y-6">
            <h4 className="font-bold text-gray-900 text-lg">Area Layanan</h4>
            <ul className="grid grid-cols-2 gap-2 text-gray-600">
              <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-blue-500" /> Denpasar</li>
              <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-blue-500" /> Badung</li>
              <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-blue-500" /> Gianyar</li>
              <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-blue-500" /> Kuta/Seminyak</li>
              <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-blue-500" /> Sanur</li>
              <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-blue-500" /> Nusa Dua</li>
            </ul>
          </div>
          <div className="space-y-6">
            <h4 className="font-bold text-gray-900 text-lg">Kontak</h4>
            <div className="space-y-3">
              <a href={`tel:${content.phone}`} className="flex items-center gap-3 text-gray-600 hover:text-blue-600 transition">
                <Phone size={18} /> {content.phone}
              </a>
              <div className="flex items-center gap-3 text-gray-600">
                <MapPin size={18} /> {content.address}
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto pt-8 border-t text-center text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} Raja Mampet Ryan Bali. All rights reserved.
        </div>
      </footer>

      {/* Floating Buttons */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-40">
        <a 
          href={`https://wa.me/${content.whatsapp}`}
          className="bg-green-500 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center gap-2"
          title="Chat WhatsApp"
        >
          <MessageCircle size={28} />
          <span className="hidden sm:inline font-bold pr-2">Butuh Bantuan?</span>
        </a>
      </div>

      {/* Login Modal */}
      {showLogin && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-8 max-w-sm w-full shadow-2xl relative animate-in fade-in zoom-in duration-300">
            <button 
              onClick={() => setShowLogin(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <X size={24} />
            </button>
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900">Admin Login</h3>
              <p className="text-gray-500">Gunakan kredensial admin</p>
            </div>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Username</label>
                <input 
                  type="text" 
                  value={loginForm.user}
                  onChange={(e) => setLoginForm({...loginForm, user: e.target.value})}
                  className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none" 
                  placeholder="admin"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                <input 
                  type="password" 
                  value={loginForm.pass}
                  onChange={(e) => setLoginForm({...loginForm, pass: e.target.value})}
                  className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none" 
                  placeholder="bali2024"
                />
              </div>
              <button 
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-xl font-bold hover:bg-blue-700 transition"
              >
                Login ke Dashboard
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
