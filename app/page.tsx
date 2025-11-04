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
    <main className="min-h-screen bg-[#f9f9f7] text-[#1a1a1a] px-[3rem] py-[4.854rem] font-[Inter]">
      <div className="max-w-7xl mx-auto space-y-[4.854rem]">
        <header className="text-center space-y-[1.618rem]">
          <h1 className="text-[3rem] md:text-[3.854rem] font-bold tracking-tight text-[#111]">
          To Run Click On View Fullscreen 
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A curated gallery of hero section designs — clean, responsive, and Click on View Fullscreen to see each demo in its full creative.
         
          </p>
        </header>

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
                  {/* <a
                    href={`/hero-demos/${hero.file}`}
                    target="_blank"
                    className="text-[0.9rem] font-medium text-[#b8860b] hover:text-[#daa520] transition-colors"
                  >
                    View Fullscreen →
                  </a> */}
                  <a
  href={`/hero-demos/${hero.file}`}
  target="_blank"
  className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-[#b80b0b] text-white text-[1.5rem]  hover:bg-[#daa520] transition-colors"
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

        <footer className="text-center text-gray-500 text-sm mt-[4rem]">
          © {new Date().getFullYear()} — Designed with ♡ using the Golden Ratio.
        </footer>
      </div>
    </main>
  );
}
