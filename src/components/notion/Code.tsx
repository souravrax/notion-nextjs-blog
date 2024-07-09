"use client";
import { CodeBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { RichText } from "./RichText";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import * as prismThemes from "react-syntax-highlighter/dist/esm/styles/prism";
import { CopyIcon, PaletteIcon } from "lucide-react";
import { use, useMemo, useState } from "react";
import Image from "next/image";

export default function Code({
  content,
}: {
  content: CodeBlockObjectResponse["code"];
}) {
  const themes = useMemo(
    () => Object.keys(prismThemes) as Array<keyof typeof prismThemes>,
    [],
  );
  const [theme, setTheme] = useState<number>(10 % themes.length);
  return (
    <div className="relative overflow-hidden rounded-lg bg-[#282a36] font-mono text-white">
      <div
        id="code-header"
        className="flex items-center justify-between px-6 py-2"
      >
        <span id="Language">{content.language}</span>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setTheme((t) => (t + 1) % themes.length)}
            className="flex items-center gap-1 rounded-full bg-primary px-2 py-0.5 capitalize"
          >
            Copy
            <CopyIcon size={16} className="text-white" />
          </button>
          <button
            onClick={() => setTheme((t) => (t + 1) % themes.length)}
            className="flex items-center gap-1 rounded-full bg-primary px-2 py-0.5 capitalize"
          >
            {themes[theme]}
            <PaletteIcon size={16} />
          </button>
        </div>
      </div>
      <SyntaxHighlighter
        language="cpp"
        showLineNumbers
        style={prismThemes[themes[theme]]}
        customStyle={{
          marginTop: "0px",
          marginBottom: "0px",
        }}
      >
        {content.rich_text.map((item, index) => item.plain_text).join("\n")}
      </SyntaxHighlighter>
      <div
        id="code-footer"
        className="flex w-full items-center justify-center p-2 text-sm text-white/50 shadow-sm"
      >
        <RichText items={content.caption} />
      </div>
    </div>
  );
}
