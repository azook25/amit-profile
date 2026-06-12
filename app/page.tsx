"use client";

import { useState } from "react";

const tabs = ["Bio", "Stats", "Highlights", "Full Games"];

export default function Home() {
  const [activeTab, setActiveTab] = useState("Bio");

  return (
    <main className="bg-[#0f0f0f] text-white min-h-screen">
      {/* HERO */}
      <section className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-24 flex flex-col lg:flex-row justify-between items-center gap-12">
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

            <div className="mt-10 flex justify-center lg:justify-start gap-8 sm:gap-16">
              <Stat number="10.7" label="PPG" />
              <Stat number="6.2" label="RPG" />
              <Stat number="4.4" label="APG" />
            </div>
          </div>

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
        </div>
      </section>
    </main>
  );
}

/* ---------------- COMPONENTS ---------------- */

function Stat({ number, label }: { number: string; label: string }) {
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
      <div className="lg:col-span-2">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6">Biography</h2>

        <p className="text-gray-700 leading-relaxed">
        Amit Zuker is a 6'4" (1.93m) Point Guard/Shooting Guard from Tel Aviv, Israel.
        <br />
        <br />
        Currently playing for Ironi Kiryat Ono “Shiko” in the Israeli National League
        (development team of Maccabi Ramat Gan in the Israeli Premier League).
        <br />
        <br />
        Grew up in and graduated from the prestigious academy of Maccabi Tel Aviv.
        <br />
        During his high school years, won four national championships with his team, along
        with multiple awards.
      </p>


        <h3 className="text-xl sm:text-2xl font-semibold mt-10 mb-4">
          Awards & Honors
        </h3>

        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>20/21 U15 National Championship</li>
          <li>21/22 U16 Cup Holders</li>
          <li>21/22 U16 National Championship</li>
          <li>22/23 U18 National Cup Holders</li>
          <li>22/23 U18 National Championship</li>
          <li>22/23 National High Schools Championship</li>
          <li>2023 City Of Tel Aviv "Outstanding Youth Athlete"</li>
          <li>23/24 U18 National Championship</li>
          <li>23/24 National High Schools Championship</li>
        </ul>
      </div>

      <div className="bg-gray-100 p-6 border">
        <h3 className="text-xl font-semibold mb-4">Quick Facts & Academics</h3>
        <div className="space-y-2 text-gray-700 text-sm sm:text-base">
          <p><strong>Born:</strong> January 6, 2006</p>
          <p><strong>Hometown:</strong> Tel Aviv, Israel</p>
          <p><strong>High School:</strong> Hadash Tel Aviv</p>
          <p><strong>HS Major:</strong> Computer Science</p>
          <p><strong>SAT Score:</strong> 1350</p>
          
          <p><strong>Team:</strong> Ironi Kiryat Ono "Shiko"</p>
          <p><strong>Position:</strong> PG / SG</p>
          <p><strong>Height:</strong> 6'4" (1.93m)</p>
          <p><strong>Weight:</strong> 192lbs / 87kg</p>

        </div>
      </div>
    </div>
  );
}

/* STATS */
function NBAStats() {
  const [view, setView] = useState("Per Game");

  // Recalculated based on 11 total games played
  const perGame = {
    GP: 11,
    MIN: "22:01",
    PTS: 10.7,
    REB: 6.2,
    AST: 4.3,
    STL: 1.6,
    BLK: 0,
    TO: 1.3,
    PF: "1.6", // Included fouls per game now that data is available
    FGM_A: "4.1/9.1",
    FG_PCT: 46.4,
    FG3M_A: "1.0/3.0",
    FG3_PCT: 33.3,
    FG2M_A: "3.1/6.1",
    FG2_PCT: 50.7,
    FTM_A: "1.5/2.3",
    FT_PCT: 68.0,
    PM: "+4.5",
  };

  // Recalculated total sums including the new game
  const totals = {
    GP: 11,
    MIN: "242:11",
    PTS: 118,
    REB: 68,
    AST: 47,
    STL: 18,
    BLK: 0,
    TO: 14,
    PF: 18, 
    FGM_A: "45/97",
    FG_PCT: 46.4,
    FG3M_A: "11/33",
    FG3_PCT: 33.3,
    FG2M_A: "34/67",
    FG2_PCT: 50.7,
    FTM_A: "17/25",
    FT_PCT: 68.0,
    PM: "+49",
  };

  const data = view === "Per Game" ? perGame : totals;

  const gameLog = [
    // NEW GAME ADDED AT THE TOP (CHRONOLOGICAL ORDER)
    { date: "31/05/26", opp: "@ Kfar Saba", min: "19:10", pts: 11, fg: "5/10", fgp: "50.0", fg3: "1/3", fg3p: "33.3", fg2: "4/7", fg2p: "57.1", ft: "0/0", ftp: "-", reb: 9, ast: 3, stl: 1, to: 1, pf: 5, pm: "-7" },
    { date: "24/05/26", opp: "@ Nesher", min: "26:40", pts: 19, fg: "9/13", fgp: "69.2", fg3: "0/1", fg3p: "0.0", fg2: "9/12", fg2p: "75.0", ft: "1/2", ftp: "50.0", reb: 7, ast: 3, stl: 1, to: 1, pf: "-", pm: "-1" },
    { date: "17/05/26", opp: "@ Hod HaSharon", min: "24:55", pts: 12, fg: "5/7", fgp: "71.4", fg3: "2/2", fg3p: "100.0", fg2: "3/5", fg2p: "60.0", ft: "0/0", ftp: "-", reb: 7, ast: 6, stl: 3, to: 1, pf: "-", pm: "+14" },
    { date: "10/05/26", opp: "vs Megiddo", min: "22:23", pts: 7, fg: "1/7", fgp: "14.3", fg3: "0/4", fg3p: "0.0", fg2: "1/3", fg2p: "33.3", ft: "5/6", ftp: "83.3", reb: 7, ast: 5, stl: 1, to: 1, pf: "-", pm: "+11" },
    { date: "05/05/26", opp: "@ Givat Shmuel", min: "26:55", pts: 13, fg: "3/8", fgp: "37.5", fg3: "2/4", fg3p: "50.0", fg2: "1/4", fg2p: "25.0", ft: "5/6", ftp: "83.3", reb: 6, ast: 7, stl: 2, to: 1, pf: "-", pm: "+4" },
    { date: "26/04/26", opp: "vs Hadera", min: "18:22", pts: 8, fg: "3/8", fgp: "37.5", fg3: "1/3", fg3p: "33.3", fg2: "2/5", fg2p: "40.0", ft: "1/3", ftp: "33.3", reb: 7, ast: 5, stl: 2, to: 4, pf: "-", pm: "+16" },
    { date: "19/04/26", opp: "@ Kiryat Bialik", min: "10:25", pts: 1, fg: "0/9", fgp: "0.0", fg3: "0/4", fg3p: "0.0", fg2: "0/5", fg2p: "0.0", ft: "1/2", ftp: "50.0", reb: 4, ast: 3, stl: 1, to: 1, pf: "-", pm: "+5" },
    { date: "30/11/25", opp: "vs Nof Hagalil", min: "27:53", pts: 8, fg: "4/10", fgp: "40.0", fg3: "0/4", fg3p: "0.0", fg2: "4/6", fg2p: "66.7", ft: "0/0", ftp: "-", reb: 4, ast: 5, stl: 2, to: 2, pf: 4, pm: "-2" },
    { date: "18/11/25", opp: "vs Modiin", min: "24:30", pts: 13, fg: "6/9", fgp: "66.7", fg3: "1/2", fg3p: "50.0", fg2: "5/7", fg2p: "71.4", ft: "0/1", ftp: "0.0", reb: 3, ast: 4, stl: 2, to: 0, pf: 2, pm: "+1" },
    { date: "11/11/25", opp: "vs Motzkin", min: "20:16", pts: 15, fg: "5/8", fgp: "62.5", fg3: "2/3", fg3p: "66.7", fg2: "3/5", fg2p: "60.0", ft: "3/3", ftp: "100.0", reb: 6, ast: 3, stl: 2, to: 1, pf: 1, pm: "+6" },
    { date: "04/11/25", opp: "@ Kfar Saba", min: "20:54", pts: 11, fg: "4/8", fgp: "50.0", fg3: "2/3", fg3p: "66.7", fg2: "2/5", fg2p: "40.0", ft: "1/2", ftp: "50.0", reb: 8, ast: 3, stl: 1, to: 1, pf: 3, pm: "+2" },
  ];

  return (
    <div className="space-y-12 text-black">
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-extrabold uppercase border-l-4 border-blue-600 pl-3">
            2025-26 Regular Season
          </h2>

          <div className="flex gap-4">
            {["Per Game", "Totals"].map((option) => (
              <button
                key={option}
                onClick={() => setView(option)}
                className={`text-xs font-bold uppercase pb-1 transition ${
                  view === option
                    ? "border-b-2 border-black text-black"
                    : "text-gray-400 hover:text-black"
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        <div className="overflow-x-auto border rounded-sm">
          <table className="w-full text-xs text-center border-collapse">
            <thead className="bg-gray-100 uppercase text-gray-600 font-bold border-b">
              <tr>
                <th className="p-3">GP</th>
                <th className="p-3">MIN</th>
                <th className="p-3">PTS</th>
                <th className="p-3">FGM/A</th>
                <th className="p-3">FG%</th>
                <th className="p-3">3PM/A</th>
                <th className="p-3">3P%</th>
                <th className="p-3">2PM/A</th>
                <th className="p-3">2P%</th>
                <th className="p-3">FTM/A</th>
                <th className="p-3">FT%</th>
                <th className="p-3">REB</th>
                <th className="p-3">AST</th>
                <th className="p-3">STL</th>
                <th className="p-3">TO</th>
                <th className="p-3">PF</th>
                <th className="p-3">+/-</th>
              </tr>
            </thead>

            <tbody className="bg-white">
              <tr className="font-medium hover:bg-gray-50 transition">
                <td className="p-4 border-b">{data.GP}</td>
                <td className="p-4 border-b">{data.MIN}</td>
                <td className="p-4 border-b font-bold text-blue-600">{data.PTS}</td>
                <td className="p-4 border-b">{data.FGM_A}</td>
                <td className="p-4 border-b">{data.FG_PCT}%</td>
                <td className="p-4 border-b">{data.FG3M_A}</td>
                <td className="p-4 border-b">{data.FG3_PCT}%</td>
                <td className="p-4 border-b">{data.FG2M_A}</td>
                <td className="p-4 border-b">{data.FG2_PCT}%</td>
                <td className="p-4 border-b">{data.FTM_A}</td>
                <td className="p-4 border-b">{data.FT_PCT}%</td>
                <td className="p-4 border-b">{data.REB}</td>
                <td className="p-4 border-b">{data.AST}</td>
                <td className="p-4 border-b">{data.STL}</td>
                <td className="p-4 border-b">{data.TO}</td>
                <td className="p-4 border-b">{data.PF}</td>
                <td className="p-4 border-b font-bold">{data.PM}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* GAME LOG */}
      <div className="space-y-6">
        <h3 className="text-xl font-bold uppercase">Game Log</h3>

        <div className="overflow-x-auto border rounded-sm">
          <table className="w-full text-[11px] text-center border-collapse whitespace-nowrap">
            <thead className="bg-gray-800 text-white uppercase font-bold">
              <tr>
                <th className="p-3 text-left border-r border-gray-700">Date</th>
                <th className="p-3 text-left border-r border-gray-700">Opponent</th>
                <th className="p-3">MIN</th>
                <th className="p-3">PTS</th>
                <th className="p-3">FGM/A</th>
                <th className="p-3">FG%</th>
                <th className="p-3">3PM/A</th>
                <th className="p-3">3P%</th>
                <th className="p-3">2PM/A</th>
                <th className="p-3">2P%</th>
                <th className="p-3">FTM/A</th>
                <th className="p-3">FT%</th>
                <th className="p-3">REB</th>
                <th className="p-3">AST</th>
                <th className="p-3">STL</th>
                <th className="p-3">TO</th>
                <th className="p-3">PF</th>
                <th className="p-3">+/-</th>
              </tr>
            </thead>

            <tbody>
              {gameLog.map((game, i) => (
                <tr key={i} className="border-b hover:bg-gray-50 transition last:border-0">
                  <td className="p-3 text-left font-bold">{game.date}</td>
                  <td className="p-3 text-left text-gray-500 font-medium">{game.opp}</td>
                  <td className="p-3 font-medium">{game.min}</td>
                  <td className="p-3 font-bold text-blue-600">{game.pts}</td>
                  <td className="p-3">{game.fg}</td>
                  <td className="p-3 font-semibold">{game.fgp}%</td>
                  <td className="p-3">{game.fg3}</td>
                  <td className="p-3 font-semibold">{game.fg3p}%</td>
                  <td className="p-3">{game.fg2}</td>
                  <td className="p-3 font-semibold">{game.fg2p}%</td>
                  <td className="p-3">{game.ft}</td>
                  <td className="p-3 font-semibold">
                    {game.ftp === "-" ? "-" : `${game.ftp}%`}
                  </td>
                  <td className="p-3 font-medium">{game.reb}</td>
                  <td className="p-3 font-medium">{game.ast}</td>
                  <td className="p-3 font-medium">{game.stl}</td>
                  <td className="p-3 font-medium text-gray-600">{game.to}</td>
                  <td className="p-3 font-medium text-gray-600">{game.pf}</td>
                  <td className="p-3 font-bold">{game.pm}</td>
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
      <Video title="25/26 Season Highlights" id="R_6L7SLY1fY" />
      <Video title="24/25 Post-ACL Return" id="TGruuOCDHY0" />
      <Video title="ACL Rehab Clip" id="KQmSIrrXXGc" />
      <Video title="23/24 Season Highlights" id="UIuipXL0tNc" />
      <Video title="22/23 Season Highlights" id="hneIKkoEpd4" />
    </div>
  );
}

/* FULL GAMES */
function FullGames() {
  return (
    <div className="space-y-12 max-w-4xl mx-auto">
      <Video
        title="25/26 Israel National League (vs Hod Hasharon)| 24:55 MIN • 12 PTS • 7 REB • 6 AST"
        id="oc10MY5ZvuQ"
      />
      <Video
        title="25/26 Israel National League (vs Kfar Saba)| 20:16 MIN • 11 PTS • 8 REB • 3 AST"
        id="QpBbFDnvlDg"
      />
      <Video
        title="25/26 Israel National League (vs Nof Hagalil)| 27:53 MIN • 8 PTS • 4 REB • 5 AST"
        id="hqL6CIgLFU0"
      />
      <Video
        title="25/26 Israel National League Cup (vs Modii'n) | 24:30 MIN • 13 PTS • 3 REB • 4 AST"
        id="qFllnaeCF68"
      />
      <Video
        title="25/26 Israel National League (vs Motzkin) | 20:16 MIN • 15 PTS • 6 REB • 3 AST"
        id="ff5KJwMuoKg"
      />
    </div>
  );
}

/* VIDEO COMPONENT */
function Video({ title, id }: { title: string; id: string }) {
  return (
    <div>
      <h3 className="text-lg sm:text-xl font-bold mb-4 uppercase border-l-4 border-black pl-3">
        {title}
      </h3>

      <div className="relative w-full pb-[56.25%] rounded-lg overflow-hidden shadow-lg border">
        <iframe
          title={title}
          className="absolute top-0 left-0 w-full h-full"
          src={`https://www.youtube.com/embed/${id}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
}
