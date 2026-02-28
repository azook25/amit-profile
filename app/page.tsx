"use client";

import { useState } from "react";

const tabs = ["Bio", "Stats", "Highlights", "Full Games", "Photos"];

export default function Home() {
  const [activeTab, setActiveTab] = useState("Bio");

  return (
    <main className="bg-[#0A1F44] text-white min-h-screen">

            {/* NBA-STYLE HERO */}
<section className="bg-[#0f0f0f] border-b border-gray-800">
  <div className="max-w-7xl mx-auto px-8 py-24 flex flex-col lg:flex-row justify-between items-end">

    {/* LEFT SIDE */}
    <div>

      {/* Team Line */}
      <div className="text-xs uppercase tracking-widest text-gray-400 mb-6">
        Ironi Kiryat Ono • #25 • Guard
      </div>

      {/* Name */}
      <h1 className="text-7xl lg:text-8xl font-extrabold leading-none tracking-tight">
        AMIT ZUKER
      </h1>

      {/* Physical Info */}
      <div className="mt-6 text-gray-400 text-lg">
        6'4" (1.93m) • 192 lbs (87kg) • Age 20
      </div>

      {/* Averages Strip */}
      <div className="mt-16 flex gap-20">

        <div>
          
          <div className="text-6xl font-extrabold">11.8</div>
          <div className="text-sm text-gray-500">PPG</div>
        </div>

        <div>
          
          <div className="text-6xl font-extrabold">5.0</div>
          <div className="text-sm text-gray-500">RPG</div>
        </div>

        <div>
          
          <div className="text-6xl font-extrabold">3.9</div>
          <div className="text-sm text-gray-500">APG</div>
        </div>

      </div>
    </div>

    {/* PLAYER IMAGE */}
    <div className="mt-16 lg:mt-0">
      <img
        src="/amit-hero.jpg"
        className="w-[420px] object-contain drop-shadow-2xl"
      />
    </div>

  </div>
</section>

      {/* TABS */}
      <section className="sticky top-0 z-50 bg-[#0A1F44] border-b border-blue-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex gap-10 py-4 text-sm font-semibold uppercase tracking-wide">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-2 transition ${
                  activeTab === tab
                    ? "border-b-2 border-white text-white"
                    : "text-blue-200 hover:text-white"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-16 bg-white text-black">

        {activeTab === "Bio" && (
          <div className="grid lg:grid-cols-3 gap-12">

            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold mb-6">Biography</h2>
              <p className="leading-relaxed text-gray-700">
                Amit Zuker is a 6'4 (1.93m) point guard/shooting guard from Tel Aviv, Israel.
                Currently playing for Ironi Kiryat Ono "Shiko", Amit has built a winning
                youth career including multiple national championships and cup titles.
              </p>

              <h3 className="text-2xl font-semibold mt-10 mb-4">Awards & Honors</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>21/22 U16 Cup Holders</li>
                <li>21/22 U16 National Championship</li>
                <li>22/23 U18 National Cup Holders</li>
                <li>22/23 U18 National Championship</li>
                <li>22/23 National High Schools Championship</li>
                <li>22/23 Tel Aviv "Outstanding Youth Athlete"</li>
                <li>23/24 U18 National Championship</li>
                <li>23/24 National High Schools Championship</li>
              </ul>
            </div>

            <div className="bg-gray-100 p-6 border">
              <h3 className="text-xl font-semibold mb-4">Quick Facts</h3>
              <div className="space-y-2 text-gray-700">
                <p><strong>Born:</strong> January 6th, 2006</p>
                <p><strong>Hometown:</strong> Tel Aviv, Israel</p>
                <p><strong>High School:</strong> Hadash Tel Aviv</p>
                <p><strong>Team:</strong> Ironi Kiryat Ono</p>
                <p><strong>Position:</strong> PG / SG</p>
              </div>
            </div>

          </div>
        )}

{activeTab === "Stats" && <NBAStats />}

{activeTab === "Highlights" && (
  <div>
    <h2 className="text-3xl font-bold mb-8">Highlights</h2>

    <div className="space-y-12">

      {/* 25/26 Season */}
      <div>
        <h3 className="text-xl font-semibold mb-4">25/26 Season Highlights</h3>
        <iframe
          className="w-full h-[450px]"
          src="https://www.youtube.com/embed/NfuQ-S2K5Ek"
          allowFullScreen
        ></iframe>
      </div>

      {/* 24/25 Season */}
      <div>
        <h3 className="text-xl font-semibold mb-4">24/25 Season Highlights (Post-ACL Return)</h3>
        <iframe
          className="w-full h-[450px]"
          src="https://www.youtube.com/embed/TGruuOCDHY0"
          allowFullScreen
        ></iframe>
      </div>

      {/* Rehab Clip */}
      <div>
        <h3 className="text-xl font-semibold mb-4">ACL Rehab Clip</h3>
        <iframe
          className="w-full h-[450px]"
          src="https://www.youtube.com/embed/CsDl7rCqUGQ"
          allowFullScreen
        ></iframe>
      </div>

      {/* 23/24 Season */}
      <div>
        <h3 className="text-xl font-semibold mb-4">23/24 Season Highlights (U18 National League)</h3>
        <iframe
          className="w-full h-[450px]"
          src="https://www.youtube.com/embed/UIuipXL0tNc"
          allowFullScreen
        ></iframe>
      </div>

      {/* 22/23 Season */}
      <div>
        <h3 className="text-xl font-semibold mb-4">22/23 Season Highlights (U18 National League)</h3>
        <iframe
          className="w-full h-[450px]"
          src="https://www.youtube.com/embed/hneIKkoEpd4"
          allowFullScreen
        ></iframe>
      </div>

    </div>
  </div>
)}

{activeTab === "Full Games" && (
  <div>
    <h2 className="text-3xl font-bold mb-8">Full Games</h2>
    <p className="text-gray-600">
      Full game footage will be uploaded soon.
    </p>
    <h3 className="text-xl font-semibold mb-4">25/26 Israel National League Round 2</h3>
    <iframe
  className="w-full h-[450px]"
  src="https://www.youtube.com/embed/QpBbFDnvlDg"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
></iframe>
  </div>
  
)}

      {activeTab === "Photos" && (
        <div>
          <h2 className="text-3xl font-bold mb-8">Photos</h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

            
            <img src="/one.jpg" className="w-full h-64 object-cover rounded-lg shadow-lg hover:scale-105 transition duration-300" />
            <img src="/two.JPG" className="w-full h-64 object-cover rounded-lg shadow-lg hover:scale-105 transition duration-300" />
            <img src="/three.JPG" className="w-full h-64 object-cover rounded-lg shadow-lg hover:scale-105 transition duration-300" />
            <img src="/four.jpg" className="w-full h-64 object-cover rounded-lg shadow-lg hover:scale-105 transition duration-300" />
            <img src="/five.JPG" className="w-full h-64 object-cover rounded-lg shadow-lg hover:scale-105 transition duration-300" />
            <img src="/six.jpg" className="w-full h-64 object-cover rounded-lg shadow-lg hover:scale-105 transition duration-300" />
            <img src="/seven.jpg" className="w-full h-64 object-cover rounded-lg shadow-lg hover:scale-105 transition duration-300" />
            <img src="/eight.jpg" className="w-full h-64 object-cover rounded-lg shadow-lg hover:scale-105 transition duration-300" />
            <img src="/nine.jpg" className="w-full h-64 object-cover rounded-lg shadow-lg hover:scale-105 transition duration-300" />
            <img src="/ten.jpg" className="w-full h-64 object-cover rounded-lg shadow-lg hover:scale-105 transition duration-300" />
            <img src="/eleven.jpg" className="w-full h-64 object-cover rounded-lg shadow-lg hover:scale-105 transition duration-300" />
            <img src="/twelve.jpg" className="w-full h-64 object-cover rounded-lg shadow-lg hover:scale-105 transition duration-300" />

          </div>
        </div>
      )}

      </section>
    </main>
  );
}
function NBAStats() {
  const [view, setView] = useState("Per Game");

  const perGame = {
    GP: 4,
    MIN: 21.4,
    PTS: 11.8,
    REB: 5.0,
    AST: 3.8,
    FG: 47.2,
    THREE: 38.5,
    FT: 82.1,
  };

  const totals = {
    GP: 4,
    MIN: 85,
    PTS: 47,
    REB: 20,
    AST: 15,
    FG: 47.2,
    THREE: 38.5,
    FT: 82.1,
  };

  const data = view === "Per Game" ? perGame : totals;

  return (
    <div className="max-w-7xl mx-auto px-8 py-20 space-y-12">

      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-4xl font-extrabold text-black">
          2025-26 Regular Season
        </h2>

        <select className="border px-4 py-2 text-sm">
          <option>2025-26</option>
        </select>
      </div>

      {/* Toggle */}
      <div className="flex gap-6 text-sm font-semibold uppercase">
        {["Per Game", "Totals"].map(option => (
          <button
            key={option}
            onClick={() => setView(option)}
            className={`pb-2 ${
              view === option
                ? "border-b-2 border-black"
                : "text-gray-500"
            }`}
          >
            {option}
          </button>
        ))}
      </div>

      {/* Table */}
      <div className="border overflow-x-auto">
        <table className="w-full text-sm text-center">
          <thead className="bg-gray-100 uppercase text-gray-600">
            <tr>
              <th className="p-4">GP</th>
              <th className="p-4">MIN</th>
              <th className="p-4">PTS</th>
              <th className="p-4">REB</th>
              <th className="p-4">AST</th>
              <th className="p-4">FG%</th>
              <th className="p-4">3P%</th>
              <th className="p-4">FT%</th>
            </tr>
          </thead>

          <tbody>
            <tr className="border-t">
              <td className="p-4">{data.GP}</td>
              <td className="p-4">{data.MIN}</td>
              <td className="p-4 font-semibold">{data.PTS}</td>
              <td className="p-4">{data.REB}</td>
              <td className="p-4">{data.AST}</td>
              <td className="p-4">{data.FG}%</td>
              <td className="p-4">{data.THREE}%</td>
              <td className="p-4">{data.FT}%</td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  );
}