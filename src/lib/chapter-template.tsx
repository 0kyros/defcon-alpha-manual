import type { ReactNode } from "react";
import type { Locale } from "@/i18n/routing";
import type { ChapterContent } from "./chapter-content";

export type Block =
  | { type: "p"; text: string }
  | { type: "ul"; items: ReadonlyArray<string> }
  | { type: "ol"; items: ReadonlyArray<string> }
  | { type: "quote"; text: string }
  | { type: "callout"; title: string; body: string }
  | { type: "radio"; title?: string; lines: ReadonlyArray<string> }
  | {
      type: "table";
      headers: ReadonlyArray<string>;
      rows: ReadonlyArray<ReadonlyArray<string>>;
    }
  | { type: "warn"; title: string; body: string };

export interface Section {
  heading: string;
  blocks: ReadonlyArray<Block>;
}

export interface StandardChapter {
  intro: string;
  sections: ReadonlyArray<Section>;
}

function renderBlock(block: Block, key: string): ReactNode {
  switch (block.type) {
    case "p":
      return <p key={key}>{block.text}</p>;
    case "ul":
      return (
        <ul key={key}>
          {block.items.map((item, i) => (
            <li key={`${key}-${i}`}>{item}</li>
          ))}
        </ul>
      );
    case "ol":
      return (
        <ol key={key} style={{ listStyle: "decimal", paddingLeft: "1.5rem" }}>
          {block.items.map((item, i) => (
            <li key={`${key}-${i}`} style={{ marginBottom: "0.35rem" }}>
              {item}
            </li>
          ))}
        </ol>
      );
    case "quote":
      return <blockquote key={key}>{block.text}</blockquote>;
    case "callout":
      return (
        <div key={key} className="callout">
          <div className="callout-title">{block.title}</div>
          <p>{block.body}</p>
        </div>
      );
    case "warn":
      return (
        <div
          key={key}
          className="callout"
          style={{ borderColor: "var(--warn)" }}
        >
          <div
            className="callout-title"
            style={{ color: "var(--warn)" }}
          >
            {block.title}
          </div>
          <p>{block.body}</p>
        </div>
      );
    case "radio":
      return (
        <div key={key} className="callout">
          <div className="callout-title">{block.title ?? "RADIO"}</div>
          {block.lines.map((line, i) => (
            <p
              key={`${key}-${i}`}
              className="mono"
              style={{ marginBottom: "0.4rem" }}
            >
              {line}
            </p>
          ))}
        </div>
      );
    case "table":
      return (
        <table key={key}>
          <thead>
            <tr>
              {block.headers.map((h) => (
                <th key={h}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {block.rows.map((row, i) => (
              <tr key={`${key}-${i}`}>
                {row.map((cell, j) => (
                  <td
                    key={`${key}-${i}-${j}`}
                    className={j === 0 ? "mono" : undefined}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      );
  }
}

export function renderStandard(data: StandardChapter): ChapterContent {
  return {
    intro: data.intro,
    body: (
      <>
        {data.sections.map((sec, i) => (
          <section key={`sec-${i}`}>
            <h2>{sec.heading}</h2>
            {sec.blocks.map((b, j) => renderBlock(b, `b-${i}-${j}`))}
          </section>
        ))}
      </>
    ),
  };
}

export function fromLocales(
  data: Record<Locale, StandardChapter>,
): (locale: Locale) => ChapterContent {
  return (locale) => renderStandard(data[locale]);
}
