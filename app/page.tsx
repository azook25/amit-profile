"use client";

import { useState } from "react";

const tabs = ["Bio", "Stats", "Highlights", "Full Games", "Photos"];

export default function Home() {
  const [activeTab, setActiveTab] = useState("Bio");

  return (
    <main className="bg-[#0f0f0f] text-white min-h-screen">

      {/* HERO */}
      <section className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-24 flex flex-col lg:flex-row justify-between items-center gap-12">

          {/* LEFT SIDE */}
          <div className="text-center lg:text-left">

            <div className="text-xs uppercase tracking-widest text-gray-400 mb-4">
              Ironi Kiryat Ono • #25 • Guard
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold leading-tight">
              AMIT ZUKER
            </h1>

            <div className="mt-4 text-gray-400 text-sm sm:text-base">
              6'4" (1.93m) • 192 lbs • Age 20
            </div>

            {/* Averages - Updated with spreadsheet math */}
            <div className="mt-10 flex justify-center lg:justify-start gap-8 sm:gap-16">
              <Stat number="11.8" label="PPG" />
              <Stat number="5.3" label="RPG" />
              <Stat number="3.8" label="APG" />
            </div>
          </div>

          {/* IMAGE */}
          <img
            src="/amit-hero.jpg"
            alt="Amit Zuker"
            className="w-60 sm:w-80 lg:w-[420px] object-contain drop-shadow-2xl"
          />

        </div>
      </section>

      {/* TABS */}
      <section className="sticky top-0 z-50 bg-[#0f0f0f] border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex gap-6 sm:gap-10 py-4 text-xs sm:text-sm font-semibold uppercase tracking-wide overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-2 whitespace-nowrap transition ${
                  activeTab === tab
                    ? "border-b-2 border-white text-white"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="bg-white text-black min-h-[500px]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12 lg:py-16">

          {activeTab === "Bio" && <BioSection />}
          {activeTab === "Stats" && <NBAStats />}
          {activeTab === "Highlights" && <Highlights />}
          {activeTab === "Full Games" && <FullGames />}
          {activeTab === "Photos" && <Photos />}

        </div>
      </section>
    </main>
  );
}

/* ---------------- COMPONENTS ---------------- */

function Stat({ number, label }: any) {
  return (
    <div className="text-center">
      <div className="text-3xl sm:text-5xl font-extrabold">{number}</div>
      <div className="text-xs text-gray-400 mt-1">{label}</div>
    </div>
  );
}

/* BIO */
function BioSection() {
  return (
    <div className="grid lg:grid-cols-3 gap-12">

      {/* LEFT SIDE */}
      <div className="lg:col-span-2">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6">Biography</h2>

        <p className="text-gray-700 leading-relaxed">
        Amit Zuker is a 6'4 (1.93m) point guard/shooting guard from Tel Aviv, Israel. 
        He is currently playing for Ironi Kiryat Ono “Shiko” in the Israeli League. 
        Amit grew up in the prestigious academy of Maccabi Tel Aviv and during his high school years, won four national championships with his team, along with multiple awards.
        </p>

        <h3 className="text-xl sm:text-2xl font-semibold mt-10 mb-4">
          Awards & Honors
        </h3>

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

      {/* RIGHT SIDE */}
      <div className="bg-gray-100 p-6 border">
        <h3 className="text-xl font-semibold mb-4">Quick Facts</h3>
        <div className="space-y-2 text-gray-700 text-sm sm:text-base">
          <p><strong>Born:</strong> January 6, 2006</p>
          <p><strong>Hometown:</strong> Tel Aviv, Israel</p>
          <p><strong>High School:</strong> Hadash Tel Aviv</p>
          <p><strong>Team:</strong> Ironi Kiryat Ono "Shiko"</p>
          <p><strong>Position:</strong> PG / SG</p>
          <p><strong>Height:</strong> 6'4" (1.93m)</p>
          <p><strong>Weight:</strong> 87kg / 192lbs</p>
        </div>
      </div>

    </div>
  );
}

/* STATS */
function NBAStats() {
  const [view, setView] = useState("Per Game");

  // Accurate Data based on the spreadsheet provided
  const perGame = {
    GP: 4, MIN: 23.3, PTS: 11.8, REB: 5.3, AST: 3.8, FG: 54.3, THREE: 41.6, FT: 82.1,
  };

  const totals = {
    GP: 4, MIN: 93, PTS: 47, REB: 21, AST: 15, FG: 54.3, THREE: 41.6, FT: 82.1,
  };

  const data = view === "Per Game" ? perGame : totals;

  const gameLog = [
    { date: "30/11/25", matchup: "vs Nof Hagalil", min: "27:53", pts: 8, fg: "40.0", threep: "0.0", reb: 4, ast: 5, stl: 2, pm: "-2" },
    { date: "18/11/25", matchup: "vs Modiin (Cup)", min: "24:30", pts: 13, fg: "66.6", threep: "50.0", reb: 3, ast: 4, stl: 2, pm: "+1" },
    { date: "11/11/25", matchup: "vs Motzkin", min: "20:16", pts: 15, fg: "62.5", threep: "66.6", reb: 6, ast: 3, stl: 2, pm: "+6" },
    { date: "04/11/25", matchup: "@ Kfar Saba", min: "20:54", pts: 11, fg: "50.0", threep: "66.6", reb: 8, ast: 3, stl: 1, pm: "+2" },
  ];

  return (
    <div className="space-y-12">

      {/* SEASON AVERAGES SECTION */}
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <h2 className="text-2xl sm:text-3xl font-extrabold uppercase border-l-4 border-blue-600 pl-3">
            2025-26 Regular Season
          </h2>

          <select className="border px-3 py-1 text-sm bg-white cursor-pointer">
            <option>2025-26</option>
          </select>
        </div>

        {/* Toggle */}
        <div className="flex gap-6 text-xs sm:text-sm font-semibold uppercase border-b pb-2">
          {["Per Game", "Totals"].map(option => (
            <button
              key={option}
              onClick={() => setView(option)}
              className={`transition ${
                view === option
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-500 hover:text-black"
              }`}
            >
              {option}
            </button>
          ))}
        </div>

        {/* Totals Table */}
        <div className="overflow-x-auto border rounded-sm">
          <table className="w-full text-xs sm:text-sm text-center">
            <thead className="bg-gray-100 uppercase text-gray-600 font-bold">
              <tr>
                <th className="p-3 border-b">GP</th>
                <th className="p-3 border-b">MIN</th>
                <th className="p-3 border-b">PTS</th>
                <th className="p-3 border-b">REB</th>
                <th className="p-3 border-b">AST</th>
                <th className="p-3 border-b">FG%</th>
                <th className="p-3 border-b">3P%</th>
                <th className="p-3 border-b">FT%</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white hover:bg-gray-50 transition">
                <td className="p-4">{data.GP}</td>
                <td className="p-4">{data.MIN}</td>
                <td className="p-4 font-bold text-blue-600">{data.PTS}</td>
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

      {/* GAME LOG SECTION */}
      <div className="space-y-6">
        <h3 className="text-xl sm:text-2xl font-bold uppercase">Game Log</h3>
        
        <div className="overflow-x-auto border rounded-sm">
          <table className="w-full text-xs sm:text-sm text-center whitespace-nowrap">
            <thead className="bg-gray-100 uppercase text-gray-600 font-bold">
              <tr>
                <th className="p-3 text-left border-b">Date</th>
                <th className="p-3 text-left border-b">Matchup</th>
                <th className="p-3 border-b">MIN</th>
                <th className="p-3 border-b font-extrabold text-blue-600">PTS</th>
                <th className="p-3 border-b">FG%</th>
                <th className="p-3 border-b">3P%</th>
                <th className="p-3 border-b">REB</th>
                <th className="p-3 border-b">AST</th>
                <th className="p-3 border-b">STL</th>
                <th className="p-3 border-b">+/-</th>
              </tr>
            </thead>
            <tbody>
              {gameLog.map((game, i) => (
                <tr key={i} className="bg-white hover:bg-gray-50 transition border-b last:border-0">
                  <td className="p-3 text-left font-semibold">{game.date}</td>
                  <td className="p-3 text-left">{game.matchup}</td>
                  <td className="p-3 text-gray-600">{game.min}</td>
                  <td className="p-3 font-bold">{game.pts}</td>
                  <td className="p-3">{game.fg}</td>
                  <td className="p-3">{game.threep}</td>
                  <td className="p-3">{game.reb}</td>
                  <td className="p-3">{game.ast}</td>
                  <td className="p-3">{game.stl}</td>
                  <td className={`p-3 font-semibold ${game.pm.startsWith('+') ? 'text-green-600' : 'text-red-500'}`}>
                    {game.pm}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}

/* HIGHLIGHTS */
function Highlights() {
  return (
    <div className="space-y-12 max-w-4xl mx-auto">
      <Video title="25/26 Season Highlights" id="NfuQ-S2K5Ek" />
      <Video title="24/25 Post-ACL Return" id="TGruuOCDHY0" />
      <Video title="ACL Rehab Clip" id="CsDl7rCqUGQ" />
      <Video title="23/24 Season Highlights" id="UIuipXL0tNc" />
      <Video title="22/23 Season Highlights" id="hneIKkoEpd4" />
    </div>
  );
}

function FullGames() {
  return (
    <div className="space-y-12 max-w-4xl mx-auto">
      <Video 
        title="25/26 Israel National League Round 2 | 20:16 MIN • 15 PTS • 6 REB • 3 AST" 
        id="QpBbFDnvlDg" 
      />
      <Video 
        title="25/26 Israel National League Round 4 | 27:53 MIN • 8 PTS • 4 REB • 5 AST" 
        id="hqL6CIgLFU0" 
      />
      <Video 
        title="25/26 Israel National League Cup Round of 32 | 24:30 MIN • 13 PTS • 3 REB • 4 AST" 
        id="qFllnaeCF68" 
      />
    </div>
  );
}

/* VIDEO COMPONENT */
function Video({ title, id }: any) {
  return (
    <div>
      <h3 className="text-lg sm:text-xl font-bold mb-4 uppercase border-l-4 border-black pl-3">{title}</h3>
      <div className="relative w-full pb-[56.25%] rounded-lg overflow-hidden shadow-lg border">
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src={`https://www.youtube.com/embed/${id}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
}

/* PHOTOS */
function Photos() {
  const images = [
    "one.jpg","two.JPG","three.JPG","four.jpg","five.JPG",
    "six.jpg","seven.jpg","eight.jpg","nine.jpg","ten.jpg",
    "eleven.jpg","twelve.jpg"
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
      {images.map((img, i) => (
        <img
          key={i}
          src={`/${img}`}
          alt={`Gallery image ${i + 1}`}
          className="w-full h-40 sm:h-56 object-cover rounded-lg shadow hover:scale-105 transition duration-300"
        />
      ))}
    </div>
  );
}