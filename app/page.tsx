"use client";
import { useEffect, useState } from "react";

type Hero = { title: string; file: string; html: string };

export default function Page() {
  const [heroes, setHeroes] = useState<Hero[]>([]);

  useEffect(() => {
    const loadHeroes = async () => {
      const res = await fetch("/api/heroes");
      const data = await res.json();
      setHeroes(data);
    };
    loadHeroes();
  }, []);

  return (
    <main className="min-h-screen bg-[#f9f9f7] text-[#1a1a1a] font-[Inter]">

      {/* HEADER */}
      <header className="w-full border-b border-gray-200 bg-white/80 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-[3rem] py-5 flex items-center justify-between">
          <h1 className="text-[1.4rem] font-bold tracking-tight text-[#111]">
            Owes Niyazi — Hero UI Collection
          </h1>

          <div className="flex items-center gap-3">
            <a
              href="https://github.com/OwesNiyazi"
              target="_blank"
              className="px-4 py-2 rounded-lg bg-[#111] text-white text-sm font-medium hover:bg-[#333] transition-colors"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/owes-niyazi-4ba1b9207/"
              target="_blank"
              className="px-4 py-2 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto space-y-[4.854rem] px-[3rem] py-[4.854rem]">

        <div className="text-center space-y-[1.618rem]">
          <h2 className="text-[3rem] md:text-[3.854rem] font-bold tracking-tight text-[#111]">
            To Run Click On View Fullscreen
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A gallery of hero section designs — clean, responsive static pages.
            Click on View Fullscreen to see each demo in its full creative view.
          </p>
        </div>

        {heroes.length === 0 ? (
          <p className="text-center text-gray-500 text-lg">
            Loading hero demos...
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[3rem]">
            {heroes.map((hero, index) => (
              <div
                key={`${hero.file}-${index}`}
                className="bg-white rounded-[1.618rem] border border-gray-200 shadow-[0_4px_24px_rgba(0,0,0,0.05)] overflow-hidden transition-transform duration-300 hover:scale-[1.015]"
              >
                <div className="flex justify-between items-center px-[1.618rem] py-[1rem] border-b border-gray-100 bg-[#fafafa]">
                  <h2 className="font-semibold text-[1.25rem] text-gray-800 capitalize">
                    {hero.title.replace(/[-_]/g, " ")}
                  </h2>

                  <a
                    href={`/hero-demos/${hero.file}`}
                    target="_blank"
                    className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-[#b80b0b] text-white text-[1.1rem] hover:bg-[#daa520] transition-colors"
                  >
                    View Fullscreen →
                  </a>
                </div>

                <iframe
                  srcDoc={hero.html}
                  className="w-full h-[34rem] border-0"
                  sandbox="allow-scripts allow-same-origin"
                />
              </div>
            ))}
          </div>
        )}

      </div>

      {/* FOOTER */}
      <footer className="text-center text-gray-500 text-sm py-6 border-t border-gray-200 bg-white/70 backdrop-blur-lg">
        © {new Date().getFullYear()} — Designed & Built with ❤️ by <span className="font-semibold">Owes Niyazi</span>
      </footer>
    </main>
  );
}
