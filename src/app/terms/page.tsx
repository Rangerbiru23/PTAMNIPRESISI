'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, FileText, AlertTriangle, Shield, Users, Clock } from 'lucide-react';

export default function TermsAndConditions() {
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
            <FileText className="w-8 h-8 text-blue-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Syarat dan Ketentuan
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Syarat dan ketentuan penggunaan layanan PT AMNI PRESISI PROLITAS untuk konstruksi gedung industri
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
                Selamat datang di Syarat dan Ketentuan PT AMNI PRESISI PROLITAS. Dokumen ini mengatur penggunaan website dan layanan konstruksi gedung industri yang kami sediakan.
              </p>
              <p>
                Dengan mengakses website kami atau menggunakan layanan kami, Anda setuju untuk terikat oleh syarat dan ketentuan ini. Jika Anda tidak setuju dengan bagian mana pun dari syarat dan ketentuan ini, Anda tidak boleh menggunakan website atau layanan kami.
              </p>
            </CardContent>
          </Card>

          {/* Definitions */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900">Definisi</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <p>Dalam syarat dan ketentuan ini, istilah-istilah berikut memiliki makna sebagai berikut:</p>
              
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold">"Perusahaan"</h4>
                  <p>Merujuk pada PT AMNI PRESISI PROLITAS, perusahaan konstruksi gedung industri yang terdaftar sesuai dengan hukum yang berlaku di Indonesia.</p>
                </div>
                
                <div>
                  <h4 className="font-semibold">"Klien"</h4>
                  <p>Merujuk pada individu atau perusahaan yang menggunakan layanan konstruksi dari Perusahaan.</p>
                </div>
                
                <div>
                  <h4 className="font-semibold">"Layanan"</h4>
                  <p>Merujuk pada semua layanan konstruksi gedung industri yang disediakan oleh Perusahaan, termasuk desain, konstruksi, manajemen proyek, dan maintenance.</p>
                </div>
                
                <div>
                  <h4 className="font-semibold">"Proyek"</h4>
                  <p>Merujuk pada pekerjaan konstruksi spesifik yang disepakati antara Perusahaan dan Klien.</p>
                </div>
                
                <div>
                  <h4 className="font-semibold">"Website"</h4>
                  <p>Merujuk pada website resmi PT AMNI PRESISI PROLITAS yang dapat diakses melalui internet.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Services */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Users className="w-6 h-6 text-blue-600" />
                <span className="text-2xl text-gray-900">Layanan Kami</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <h3 className="font-semibold text-lg">Layanan Konstruksi yang Kami Sediakan:</h3>
              
              <div className="space-y-2">
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p><strong>Desain dan Perencanaan:</strong> Jasa desain arsitektur dan rekayasa untuk gedung industri</p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p><strong>Konstruksi Bangunan:</strong> Pelaksanaan konstruksi gedung industri dari awal hingga selesai</p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p><strong>Manajemen Proyek:</strong> Koordinasi dan pengawasan seluruh aspek proyek konstruksi</p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p><strong>Renovasi dan Maintenance:</strong> Perawatan dan peningkatan fasilitas industri yang ada</p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p><strong>Konsultasi Teknis:</strong> Konsultasi mengenai kebutuhan dan solusi konstruksi industri</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Client Responsibilities */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Shield className="w-6 h-6 text-blue-600" />
                <span className="text-2xl text-gray-900">Kewajiban Klien</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <p>Sebagai Klien, Anda memiliki kewajiban sebagai berikut:</p>
              
              <div className="space-y-2">
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p><strong>Informasi Akurat:</strong> Memberikan informasi yang akurat dan lengkap mengenai kebutuhan proyek</p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p><strong>Dokumen Legal:</strong> Menyediakan dokumen legal yang diperlukan untuk pelaksanaan proyek</p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p><strong>Izin Lokasi:</strong> Memastikan lokasi proyek memiliki izin yang sesuai dengan peraturan</p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p><strong>Pembayaran Tepat Waktu:</strong> Melakukan pembayaran sesuai dengan jadwal yang disepakati</p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p><strong>Kerjasama:</strong> Bekerjasama dengan tim kami untuk kelancaran proyek</p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p><strong>Akses Lokasi:</strong> Memberikan akses yang memadai untuk pelaksanaan pekerjaan</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Payment Terms */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900">Syarat Pembayaran</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <h3 className="font-semibold text-lg">Struktur Pembayaran:</h3>
              
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold">Uang Muka (Down Payment)</h4>
                  <p>Sebesar 30% dari total nilai kontrak dibayar saat penandatanganan kontrak.</p>
                </div>
                
                <div>
                  <h4 className="font-semibold">Pembayaran Tahapan</h4>
                  <p>Pembayaran dilakukan sesuai dengan milestone yang telah disepakati dalam kontrak.</p>
                </div>
                
                <div>
                  <h4 className="font-semibold">Pembayaran Akhir</h4>
                  <p>Sisa pembayaran dilunasi setelah proyek selesai dan serah terima diterima.</p>
                </div>
                
                <div>
                  <h4 className="font-semibold">Metode Pembayaran</h4>
                  <p>Pembayaran dapat dilakukan melalui transfer bank ke rekening resmi PT AMNI PRESISI PROLITAS.</p>
                </div>
              </div>
              
              <div className="bg-yellow-50 p-4 rounded-lg">
                <div className="flex items-start space-x-2">
                  <AlertTriangle className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                  <p className="text-sm">
                    <strong>Perhatian:</strong> Keterlambatan pembayaran dapat menghambat kelancaran proyek dan dikenakan denda sesuai dengan ketentuan kontrak.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Project Timeline */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Clock className="w-6 h-6 text-blue-600" />
                <span className="text-2xl text-gray-900">Jadwal dan Waktu Pengerjaan</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <h3 className="font-semibold text-lg">Estimasi Waktu:</h3>
              
              <div className="space-y-2">
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p><strong>Perencanaan:</strong> 2-4 minggu tergantung kompleksitas proyek</p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p><strong>Konstruksi:</strong> 6-24 bulan tergantung skala proyek</p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p><strong>Finishing:</strong> 4-8 minggu untuk penyelesaian akhir</p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p><strong>Serah Terima:</strong> 1-2 minggu untuk inspeksi final</p>
                </div>
              </div>
              
              <p className="text-sm text-gray-600">
                <strong>Catatan:</strong> Jadwal dapat berubah tergantung pada cuaca, ketersediaan material, dan faktor eksternal lainnya.
              </p>
            </CardContent>
          </Card>

          {/* Warranty */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900">Garansi dan Jaminan</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <h3 className="font-semibold text-lg">Jaminan Kualitas:</h3>
              
              <div className="space-y-2">
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p><strong>Garansi Struktur:</strong> 10 tahun untuk struktur bangunan utama</p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p><strong>Garansi Kebocoran:</strong> 5 tahun untuk atap dan sistem waterproofing</p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p><strong>Garansi Pekerjaan:</strong> 1 tahun untuk pekerjaan finishing</p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p><strong>Garansi Material:</strong> Sesuai dengan garansi dari produsen material</p>
                </div>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-sm">
                  <strong>Syarat Garansi:</strong> Garansi berlaku jika perawatan rutin dilakukan sesuai dengan petunjuk yang kami berikan dan tidak ada modifikasi struktur tanpa persetujuan kami.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Limitation of Liability */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900">Batasan Tanggung Jawab</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <p>PT AMNI PRESISI PROLITAS tidak bertanggung jawab atas:</p>
              
              <div className="space-y-2">
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p><strong>Kerugian Tidak Langsung:</strong> Kerugian bisnis atau keuntungan yang hilang</p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p><strong>Force Majeure:</strong> Bencana alam, perang, atau kejadian di luar kendali kami</p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p><strong>Kesalahan Pihak Ketiga:</strong> Masalah yang disebabkan oleh supplier atau kontraktor lain</p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p><strong>Penggunaan Tidak Sesuai:</strong> Kerusakan akibat penggunaan bangunan tidak sesuai fungsi</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Intellectual Property */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900">Hak Kekayaan Intelektual</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <p>Semua desain, gambar teknis, dan dokumen yang dibuat oleh PT AMNI PRESISI PROLITAS merupakan hak kekayaan intelektual Perusahaan.</p>
              
              <div className="space-y-2">
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p><strong>Hak Cipta Desain:</strong> Desain arsitektur dan rekayasa tetap menjadi milik Perusahaan</p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p><strong>Penggunaan Terbatas:</strong> Dokumen hanya boleh digunakan untuk proyek yang disepakati</p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p><strong>Dilarang Menyalin:</strong> Tidak diperkenankan menyalin atau mendistribusikan dokumen tanpa izin</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Dispute Resolution */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900">Penyelesaian Sengketa</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <p>Setiap sengketa yang timbul dari penggunaan layanan kami akan diselesaikan melalui:</p>
              
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold">1. Negosiasi</h4>
                  <p>Upaya penyelesaian secara musyawarah antara kedua belah pihak.</p>
                </div>
                
                <div>
                  <h4 className="font-semibold">2. Mediasi</h4>
                  <p>Jika negosiasi gagal, sengketa akan dibawa ke mediasi dengan mediator netral.</p>
                </div>
                
                <div>
                  <h4 className="font-semibold">3. Arbitrase</h4>
                  <p>Sebagai langkah terakhir, sengketa akan diselesaikan melalui arbitrase di Badan Arbitrase Nasional Indonesia (BANI).</p>
                </div>
              </div>
              
              <p className="text-sm text-gray-600">
                <strong>Yurisdiksi:</strong> Semua sengketa tunduk pada hukum yang berlaku di Republik Indonesia.
              </p>
            </CardContent>
          </Card>

          {/* Termination */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900">Pengakhiran Kontrak</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <p>Kontrak dapat diakhiri dalam kondisi berikut:</p>
              
              <div className="space-y-2">
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p><strong>Kesepakatan Bersama:</strong> Kedua belah pihak setuju untuk mengakhiri kontrak</p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p><strong>Wanprestasi:</strong> Salah satu pihak tidak memenuhi kewajibannya</p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p><strong>Force Majeure:</strong> Kejadian di luar kendali yang membuat proyek tidak dapat dilanjutkan</p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p><strong>Kepailitan:</strong> Salah satu pihak dinyatakan pailit</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900">Hubungi Kami</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <p>Jika Anda memiliki pertanyaan tentang syarat dan ketentuan ini, silakan hubungi kami:</p>
              
              <div className="bg-blue-50 p-6 rounded-lg space-y-3">
                <div>
                  <strong>Email:</strong> legal@amnipresisiprolitas.co.id
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
              <CardTitle className="text-2xl text-gray-900">Pembaruan Syarat dan Ketentuan</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <p>
                Syarat dan ketentuan ini dapat diperbarui dari waktu ke waktu untuk mencerminkan perubahan dalam layanan kami atau perubahan hukum yang berlaku. Setiap perubahan akan diposting di halaman ini dengan tanggal pembaruan terakhir.
              </p>
              <p>
                Kami menyarankan Anda untuk secara berkala meninjau syarat dan ketentuan ini untuk tetap mendapatkan informasi terbaru.
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