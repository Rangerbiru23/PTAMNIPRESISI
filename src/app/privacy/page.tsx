'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Shield, Eye, Lock, Database } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-3">
              <img src="/logo.png" alt="PT AMNI PRESISI PROLITAS" className="h-10 w-auto" />
              <div>
                <h1 className="text-lg font-bold text-gray-900">PT AMNI PRESISI PROLITAS</h1>
                <p className="text-xs text-gray-600">Konstruksi Gedung Industri</p>
              </div>
            </Link>
            <Link href="/">
              <Button variant="outline" className="flex items-center space-x-2">
                <ArrowLeft className="w-4 h-4" />
                <span>Kembali ke Beranda</span>
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
            <Shield className="w-8 h-8 text-blue-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Kebijakan Privasi
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            PT AMNI PRESISI PROLITAS berkomitmen untuk melindungi privasi dan keamanan data pribadi Anda
          </p>
        </div>

        <div className="space-y-8">
          {/* Introduction */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900">Pendahuluan</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <p>
                Selamat datang di Kebijakan Privasi PT AMNI PRESISI PROLITAS. Dokumen ini menjelaskan bagaimana kami mengumpulkan, menggunakan, melindungi, dan membagikan informasi pribadi Anda ketika Anda menggunakan website kami atau menghubungi kami untuk layanan konstruksi gedung industri.
              </p>
              <p>
                Dengan menggunakan website kami, Anda menyetujui praktik-praktik yang dijelaskan dalam kebijakan privasi ini.
              </p>
            </CardContent>
          </Card>

          {/* Information Collection */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Database className="w-6 h-6 text-blue-600" />
                <span className="text-2xl text-gray-900">Pengumpulan Informasi</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <h3 className="font-semibold text-lg">Informasi yang Kami Kumpulkan:</h3>
              
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold">Informasi Pribadi</h4>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Nama lengkap</li>
                    <li>Alamat email</li>
                    <li>Nomor telepon</li>
                    <li>Alamat perusahaan atau rumah</li>
                    <li>Jabatan atau peran dalam perusahaan</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold">Informasi Bisnis</h4>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Nama perusahaan</li>
                    <li>Bidang usaha</li>
                    <li>Kebutuhan proyek konstruksi</li>
                    <li>Anggaran proyek</li>
                    <li>Jadwal proyek</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold">Informasi Teknis</h4>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Alamat IP</li>
                    <li>Jenis browser</li>
                    <li>Sistem operasi</li>
                    <li>Waktu akses website</li>
                    <li>Halaman yang dikunjungi</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Information Usage */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Eye className="w-6 h-6 text-blue-600" />
                <span className="text-2xl text-gray-900">Penggunaan Informasi</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <p>Kami menggunakan informasi yang dikumpulkan untuk:</p>
              
              <div className="space-y-2">
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p><strong>Layanan Pelanggan:</strong> Merespons pertanyaan dan permintaan informasi tentang layanan konstruksi</p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p><strong>Konsultasi Proyek:</strong> Memberikan penawaran dan konsultasi untuk kebutuhan konstruksi gedung industri</p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p><strong>Marketing:</strong> Mengirim informasi tentang layanan, promosi, dan update terbaru dari PT AMNI PRESISI PROLITAS</p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p><strong>Penelitian:</strong> Menganalisis data untuk meningkatkan kualitas layanan dan pengalaman pengguna</p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p><strong>Keamanan:</strong> Melindungi website dan mencegah aktivitas ilegal atau penipuan</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Data Protection */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Lock className="w-6 h-6 text-blue-600" />
                <span className="text-2xl text-gray-900">Perlindungan Data</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <p className="font-semibold">Langkah-langkah Keamanan yang Kami Terapkan:</p>
              
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold">Enkripsi Data</h4>
                  <p>Semua data pribadi dienkripsi menggunakan teknologi SSL/TLS untuk melindungi informasi selama transmisi.</p>
                </div>
                
                <div>
                  <h4 className="font-semibold">Akses Terbatas</h4>
                  <p>Hanya personel yang berwenang yang dapat mengakses informasi pribadi Anda untuk keperluan yang sah.</p>
                </div>
                
                <div>
                  <h4 className="font-semibold">Keamanan Server</h4>
                  <p>Server kami dilindungi dengan firewall, antivirus, dan sistem deteksi intrusi yang terupdate.</p>
                </div>
                
                <div>
                  <h4 className="font-semibold">Backup Rutin</h4>
                  <p>Data pribadi Anda di-backup secara rutin dan disimpan di lokasi yang aman.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Third Party Sharing */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900">Pembagian Informasi dengan Pihak Ketiga</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <p>Kami tidak menjual, menyewakan, atau membagikan informasi pribadi Anda kepada pihak ketiga tanpa persetujuan Anda, kecuali dalam kondisi berikut:</p>
              
              <div className="space-y-2">
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p><strong>Partner Bisnis:</strong> Mitra kerja sama yang membantu menyediakan layanan konstruksi</p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p><strong>Penyedia Layanan:</strong> Pihak ketiga yang membantu operasional website dan layanan</p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p><strong>Otoritas Hukum:</strong> Jika diwajibkan oleh hukum atau permintaan resmi dari pemerintah</p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p><strong>Perlindungan Hak:</strong> Untuk melindungi hak, properti, atau keselamatan PT AMNI PRESISI PROLITAS dan pelanggan</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* User Rights */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900">Hak Anda sebagai Pengguna</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <p>Sebagai pengguna, Anda memiliki hak untuk:</p>
              
              <div className="space-y-2">
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p><strong>Mengakses Data:</strong> Meminta salinan data pribadi yang kami simpan tentang Anda</p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p><strong>Memperbaiki Data:</strong> Memperbarui atau memperbaiki informasi pribadi yang tidak akurat</p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p><strong>Menghapus Data:</strong> Meminta penghapusan data pribadi Anda dari sistem kami</p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p><strong>Menolak Marketing:</strong> Menolak menerima komunikasi marketing dari kami</p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p><strong>Portabilitas Data:</strong> Meminta transfer data pribadi Anda kepada pihak ketiga</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Cookies */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900">Kebijakan Cookie</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <p>Website kami menggunakan cookie untuk:</p>
              
              <div className="space-y-2">
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p><strong>Cookie Esensial:</strong> Untuk fungsi dasar website seperti navigasi dan keamanan</p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p><strong>Cookie Performa:</strong> Untuk menganalisis dan meningkatkan performa website</p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p><strong>Cookie Fungsional:</strong> Untuk mengingat preferensi Anda</p>
                </div>
              </div>
              
              <p>Anda dapat mengatur browser untuk menolak cookie atau memberi tahu saat cookie dikirim.</p>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900">Hubungi Kami</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <p>Jika Anda memiliki pertanyaan tentang kebijakan privasi ini atau ingin menggunakan hak Anda, silakan hubungi kami:</p>
              
              <div className="bg-blue-50 p-6 rounded-lg space-y-3">
                <div>
                  <strong>Email:</strong> privacy@amnipresisiprolitas.co.id
                </div>
                <div>
                  <strong>Telepon:</strong> 082382466172
                </div>
                <div>
                  <strong>Alamat:</strong> Jalan Kembang Bakung Nomor 7, Desa/Kelurahan Komet, Kec. Banjarbaru Utara, Kota Banjarbaru, Provinsi Kalimantan Selatan
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Policy Updates */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900">Pembaruan Kebijakan</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <p>
                Kebijakan privasi ini dapat diperbarui dari waktu ke waktu untuk mencerminkan perubahan dalam praktik kami atau perubahan hukum yang berlaku. Setiap perubahan akan diposting di halaman ini dengan tanggal pembaruan terakhir.
              </p>
              <p>
                Kami menyarankan Anda untuk secara berkala meninjau kebijakan privasi ini untuk tetap mendapatkan informasi tentang bagaimana kami melindungi informasi Anda.
              </p>
              <p className="text-sm text-gray-600">
                <strong>Tanggal berlaku:</strong> 1 Januari 2024<br />
                <strong>Pembaruan terakhir:</strong> 1 Januari 2024
              </p>
            </CardContent>
          </Card>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p>&copy; 2024 PT AMNI PRESISI PROLITAS. All rights reserved.</p>
            <div className="mt-4 space-x-4">
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">Terms & Conditions</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}