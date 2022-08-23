import Head from "next/head";
import Card from "../components/Card";
import Content from "../components/Content";
import Slidebar from "../components/Slidebar";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Dashboard</title>
      </Head>
      <Slidebar />
      <Content>
        {/* Judul */}
        <h1 className="pl-5 pt-10 pb-10 text-3xl font-semibold text-zinc-800">
          Dashboard
        </h1>
        {/* Card */}
        <div className="px-5 pb-10 shadow-xl">
          <div className="grid grid-cols-3 gap-4">
            <Card
              judul="Node Js"
              isi=" Node.js adalah runtime untuk lingkungan JavaScript di luar peramban web yang dibangun di atas mesin JavaScript V8..."
            />
            <Card
              judul="Next Js"
              isi="Next.js adalah kerangka kerja pengembangan web sumber terbuka yang dibangun di atas Node Js..."
            />
            <Card
              judul="JavaScript"
              isi="JavaScript adalah bahasa pemrograman tingkat tinggi dan dinamis. JavaScript populer di internet dan dapat bekerja di..."
            />
            <Card
              judul="React JS"
              isi="React adalah pustaka JavaScript front-end sumber terbuka dan gratis untuk membangun antarmuka engguna berdasarkan komponen UI..."
            />
            <Card
              judul="Express Js"
              isi="Express.js, atau cukup Express, adalah kerangka aplikasi web back end untuk Node.js, dirilis sebagai perangkat lunak gratis..."
            />
            <Card
              judul="UI UX"
              isi="Desain pengalaman pengguna adalah proses pembuatan desain interaksi berbasis bukti antara pengguna manusia dan produk atau situs web..."
            />
          </div>
        </div>
      </Content>
    </div>
  );
}
