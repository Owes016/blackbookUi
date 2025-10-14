import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  const dir = path.join(process.cwd(), "public/hero-demos");
  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".html"));

  const heroes = files.map((file) => {
    const html = fs.readFileSync(path.join(dir, file), "utf8");
    return {
      title: file.replace(".html", ""),
      file,
      html,
    };
  });

  return NextResponse.json(heroes);
}
