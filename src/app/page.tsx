'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Phone, Mail, MapPin, CheckCircle, ArrowRight, Building, HardHat, Wrench, Clock } from 'lucide-react';

export default function Home() {
  const [activeTab, setActiveTab] = useState('all');

  const services = [
    {
      icon: <Building className="w-8 h-8 text-blue-600" />,
      title: 'Desain & Konstruksi',
      description: 'Perencanaan dan pelaksanaan konstruksi gedung industri dengan standar internasional'
    },
    {
      icon: <HardHat className="w-8 h-8 text-blue-600" />,
      title: 'Manajemen Proyek',
      description: 'Pengelolaan proyek dari perencanaan hingga penyelesaian dengan efisiensi tinggi'
    },
    {
      icon: <Wrench className="w-8 h-8 text-blue-600" />,
      title: 'Maintenance & Renovasi',
      description: 'Perawatan dan renovasi fasilitas industri untuk memastikan operasional optimal'
    }
  ];

  const projects = [
    {
      id: 1,
      title: 'Factory Manufacturing Facility',
      category: 'manufacturing',
      description: 'Konstruksi fasilitas manufaktur seluas 10,000m² dengan teknologi terkini',
      image: '/project1.jpg',
      status: 'completed'
    },
    {
      id: 2,
      title: 'Industrial Warehouse Complex',
      category: 'warehouse',
      description: 'Kompleks gudang industri modern dengan sistem logistik terintegrasi',
      image: '/project2.jpg',
      status: 'completed'
    },
    {
      id: 3,
      title: 'Processing Plant Building',
      category: 'plant',
      description: 'Gedung plant pengolahan dengan standar keselamatan internasional',
      image: '/project3.jpg',
      status: 'ongoing'
    }
  ];

  const filteredProjects = activeTab === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeTab);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <img src="/logo.png" alt="PT AMNI PRESISI PROLITAS" className="h-10 w-auto" />
              <div>
                <h1 className="text-lg font-bold text-gray-900">PT AMNI PRESISI PROLITAS</h1>
                <p className="text-xs text-gray-600">Konstruksi Gedung Industri</p>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors">Beranda</a>
              <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">Layanan</a>
              <a href="#projects" className="text-gray-700 hover:text-blue-600 transition-colors">Proyek</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">Tentang</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Kontak</a>
              <a href="/privacy" className="text-gray-700 hover:text-blue-600 transition-colors">Privacy</a>
              <a href="/terms" className="text-gray-700 hover:text-blue-600 transition-colors">Terms</a>
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700">
              Hubungi Kami
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/hero-bg.jpg" 
            alt="Construction Site" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-800/80"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <Badge className="mb-6 bg-yellow-500 text-black px-4 py-2 text-sm font-semibold">
            🏗️ Konstruksi Gedung Industri Profesional
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            PT AMNI PRESISI PROLITAS
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Mitra Terpercaya untuk Konstruksi Gedung Industri dengan Standar Presisi dan Kualitas Terbaik
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-4">
              Konsultasi Proyek
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4">
              Lihat Portfolio
            </Button>
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400">50+</div>
              <div className="text-blue-100">Proyek Selesai</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400">15+</div>
              <div className="text-blue-100">Tahun Pengalaman</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400">100%</div>
              <div className="text-blue-100">Kepuasan Klien</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-800">Layanan Kami</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Solusi Konstruksi Komprehensif
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Dari perencanaan hingga penyelesaian, kami menyediakan layanan konstruksi gedung industri yang terintegrasi dan profesional
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow duration-300 border-0 shadow-lg">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 p-3 bg-blue-50 rounded-full w-fit">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl text-gray-900">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-800">Portfolio Proyek</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Proyek Unggulan Kami
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hasil karya terbaik kami dalam konstruksi gedung industri di seluruh Indonesia
            </p>
          </div>
          
          {/* Filter Tabs */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex rounded-lg border border-gray-200 bg-white p-1">
              <button
                onClick={() => setActiveTab('all')}
                className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeTab === 'all' 
                    ? 'bg-blue-600 text-white' 
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                Semua
              </button>
              <button
                onClick={() => setActiveTab('manufacturing')}
                className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeTab === 'manufacturing' 
                    ? 'bg-blue-600 text-white' 
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                Manufacturing
              </button>
              <button
                onClick={() => setActiveTab('warehouse')}
                className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeTab === 'warehouse' 
                    ? 'bg-blue-600 text-white' 
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                Warehouse
              </button>
              <button
                onClick={() => setActiveTab('plant')}
                className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeTab === 'plant' 
                    ? 'bg-blue-600 text-white' 
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                Plant
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Card key={project.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className={project.status === 'completed' ? 'bg-green-500' : 'bg-yellow-500'}>
                      {project.status === 'completed' ? 'Selesai' : 'Berjalan'}
                    </Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg text-gray-900">{project.title}</CardTitle>
                  <CardDescription className="text-gray-600">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full">
                    Lihat Detail
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-blue-100 text-blue-800">Tentang Perusahaan</Badge>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Mengapa Memilih <span className="text-blue-600">PT AMNI PRESISI PROLITAS</span>?
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Kami adalah perusahaan konstruksi gedung industri terkemuka yang berkomitmen untuk memberikan hasil terbaik dengan presisi tinggi. Dengan pengalaman lebih dari 15 tahun, kami telah mengerjakan berbagai proyek industri di seluruh Indonesia.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Standar Kualitas Internasional</h3>
                    <p className="text-gray-600">Menerapkan standar keselamatan dan kualitas global</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Tim Profesional Berpengalaman</h3>
                    <p className="text-gray-600">Didukung oleh ahli konstruksi dan insinyur terbaik</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Hemat Waktu dan Biaya</h3>
                    <p className="text-gray-600">Efisiensi proyek dengan perencanaan matang</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Garansi & Maintenance</h3>
                    <p className="text-gray-600">Jaminan kualitas dan layanan purnajual</p>
                  </div>
                </div>
              </div>
              
              <Button className="bg-blue-600 hover:bg-blue-700 px-6 py-3">
                Pelajari Lebih Lanjut
              </Button>
            </div>
            
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 text-white">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <Clock className="w-12 h-12 mx-auto mb-3 text-yellow-400" />
                  <div className="text-3xl font-bold mb-2">15+</div>
                  <div className="text-blue-100">Tahun Pengalaman</div>
                </div>
                <div className="text-center">
                  <Building className="w-12 h-12 mx-auto mb-3 text-yellow-400" />
                  <div className="text-3xl font-bold mb-2">50+</div>
                  <div className="text-blue-100">Proyek Selesai</div>
                </div>
                <div className="text-center">
                  <HardHat className="w-12 h-12 mx-auto mb-3 text-yellow-400" />
                  <div className="text-3xl font-bold mb-2">100+</div>
                  <div className="text-blue-100">Tim Profesional</div>
                </div>
                <div className="text-center">
                  <CheckCircle className="w-12 h-12 mx-auto mb-3 text-yellow-400" />
                  <div className="text-3xl font-bold mb-2">100%</div>
                  <div className="text-blue-100">Kepuasan Klien</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-800">Hubungi Kami</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Siap Mewujudkan Proyek Industri Anda?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Konsultasikan kebutuhan konstruksi gedung industri Anda dengan tim profesional kami
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="p-8">
              <CardHeader className="px-0 pt-0">
                <CardTitle className="text-2xl text-gray-900 mb-2">Kirim Pesan</CardTitle>
                <CardDescription>
                  Isi formulir di bawah ini dan tim kami akan segera menghubungi Anda
                </CardDescription>
              </CardHeader>
              <CardContent className="px-0 pb-0">
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nama Lengkap
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Masukkan nama lengkap Anda"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="email@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Subjek
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Subjek pesan"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Pesan
                    </label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Jelaskan kebutuhan proyek Anda"
                    ></textarea>
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 py-3">
                    Kirim Pesan
                  </Button>
                </form>
              </CardContent>
            </Card>
            
            <div className="space-y-6">
              <Card className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-blue-100 rounded-lg">
                    <MapPin className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Alamat Kantor</h3>
                    <p className="text-gray-600">
                      Jalan Kembang Bakung Nomor 7, Desa/Kelurahan Komet, Kec. Banjarbaru Utara, Kota Banjarbaru, Provinsi Kalimantan Selatan
                    </p>
                  </div>
                </div>
              </Card>
              
              <Card className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-blue-100 rounded-lg">
                    <Phone className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Telepon</h3>
                    <p className="text-gray-600">082382466172</p>
                  </div>
                </div>
              </Card>
              
              <Card className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-blue-100 rounded-lg">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <p className="text-gray-600">info@amnipresisiprolitas.co.id</p>
                  </div>
                </div>
              </Card>
              
              <Card className="p-6 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
                <h3 className="font-semibold text-xl mb-3">Jam Operasional</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Senin - Jumat:</span>
                    <span>08:00 - 17:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sabtu:</span>
                    <span>08:00 - 12:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Minggu:</span>
                    <span>Tutup</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <img src="/logo.png" alt="PT AMNI PRESISI PROLITAS" className="h-10 w-auto" />
                <div>
                  <h3 className="text-xl font-bold">PT AMNI PRESISI PROLITAS</h3>
                  <p className="text-gray-400 text-sm">Konstruksi Gedung Industri</p>
                </div>
              </div>
              <p className="text-gray-400 mb-4 max-w-md">
                Mitra terpercaya untuk konstruksi gedung industri dengan presisi tinggi dan kualitas terbaik di Indonesia.
              </p>
              <div className="flex space-x-4">
                <Badge className="bg-blue-600">ISO 9001:2015</Badge>
                <Badge className="bg-green-600">SMK3</Badge>
                <Badge className="bg-yellow-600">K3</Badge>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Layanan</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Desain & Konstruksi</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Manajemen Proyek</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Maintenance</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Konsultasi</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Perusahaan</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#about" className="hover:text-white transition-colors">Tentang Kami</a></li>
                <li><a href="#projects" className="hover:text-white transition-colors">Portfolio</a></li>
                <li><a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="/terms" className="hover:text-white transition-colors">Terms & Conditions</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 PT AMNI PRESISI PROLITAS. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}