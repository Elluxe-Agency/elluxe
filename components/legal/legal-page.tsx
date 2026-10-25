import React from "react";

type Block =
  | { type: "h1"; text: string }
  | { type: "h2"; text: string }
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] };

function parse(md: string): Block[] {
  const lines = md.split("\n");
  const blocks: Block[] = [];
  let para: string[] = [];
  let list: string[] | null = null;
  const flush = () => {
    if (para.length) { blocks.push({ type: "p", text: para.join(" ") }); para = []; }
    if (list) { blocks.push({ type: "ul", items: list }); list = null; }
  };
  for (const raw of lines) {
    const line = raw.trimEnd();
    if (!line.trim()) { flush(); continue; }
    if (line.startsWith("# ")) { flush(); blocks.push({ type: "h1", text: line.slice(2) }); continue; }
    if (line.startsWith("## ")) { flush(); blocks.push({ type: "h2", text: line.slice(3) }); continue; }
    if (line.startsWith("- ")) { if (para.length) flush(); (list ??= []).push(line.slice(2)); continue; }
    if (list) flush();
    para.push(line.trim());
  }
  flush();
  return blocks;
}

function inline(text: string): React.ReactNode[] {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
    part.startsWith("**") && part.endsWith("**") ? (
      <strong key={i} className="font-semibold text-white">{part.slice(2, -2)}</strong>
    ) : (
      <React.Fragment key={i}>{part}</React.Fragment>
    )
  );
}

const LegalPage = ({ markdown }: { markdown: string }) => {
  const blocks = parse(markdown);
  return (
    <main className="w-full bg-primary-black">
      <div className="container mx-auto px-6 pt-16 pb-24 md:pt-24 md:pb-32 max-w-[52rem] text-white/85 text-[1rem] md:text-[1.0625rem] leading-relaxed">
        {blocks.map((b, i) => {
          if (b.type === "h1") return <h1 key={i} className="text-white text-h3-mobile md:text-h3 mb-6">{b.text}</h1>;
          if (b.type === "h2") return <h2 key={i} className="text-white text-[1.25rem] md:text-[1.5rem] font-semibold mt-10 mb-3">{b.text}</h2>;
          if (b.type === "ul") return (
            <ul key={i} className="list-disc pl-6 flex flex-col gap-2 mb-4">
              {b.items.map((it, j) => <li key={j}>{inline(it)}</li>)}
            </ul>
          );
          return <p key={i} className="mb-4">{inline(b.text)}</p>;
        })}
      </div>
    </main>
  );
};

export default LegalPage;
