"use client";
import { CodeBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { RichText } from "./RichText";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import * as prismThemes from "react-syntax-highlighter/dist/esm/styles/prism";
import copy from "copy-to-clipboard";
import {
  CheckCheckIcon,
  CheckIcon,
  ClipboardIcon,
  CopyIcon,
  PaletteIcon,
} from "lucide-react";
import { use, useMemo, useRef, useState } from "react";
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

  const [copied, setCopied] = useState(false);
  const ref = useRef<any>(null);

  const copyCode = () => {
    if (ref.current) clearTimeout(ref.current);
    copy(content.rich_text.map((item) => item.plain_text).join("\n"));
    setCopied(true);
    ref.current = setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative overflow-hidden rounded-lg bg-[#282a36] font-mono text-white">
      <div
        id="code-header"
        className="flex items-center justify-between px-6 py-2"
      >
        <span id="Language">{content.language}</span>
        <div className="flex items-center gap-2">
          <button
            onClick={copyCode}
            className="flex items-center gap-1 rounded-full bg-primary px-2 py-0.5 capitalize text-primary-foreground"
            disabled={copied}
          >
            {copied ? "Copied" : "Copy"}
            {copied ? (
              <CheckCheckIcon size={16} />
            ) : (
              <ClipboardIcon size={16} />
            )}
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
        className="flex w-full items-center justify-between px-6 py-2 text-sm shadow-sm"
      >
        <p className="text-foreground/50">
          <RichText items={content.caption} />
        </p>
        <button
          onClick={() => setTheme((t) => (t + 1) % themes.length)}
          className="flex items-center gap-1 rounded-full bg-primary px-2 py-0.5 capitalize text-primary-foreground"
        >
          {themes[theme]}
          <PaletteIcon size={16} />
        </button>
      </div>
    </div>
  );
}
