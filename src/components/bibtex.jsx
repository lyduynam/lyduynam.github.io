"use client";
import { useId, useRef, useState } from "react";
import Icon from "@/components/icon";
export default function Bibtex({ value, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  const [copied, setCopied] = useState(false);
  const [copyFailed, setCopyFailed] = useState(false);
  const code = useRef(null);
  const id = useId();
  if (!value) return null;
  async function copy() {
    try {
      await navigator.clipboard.writeText(value.trim());
      setCopied(true); setCopyFailed(false);
    } catch {
      if (code.current) {
        const range = document.createRange(); range.selectNodeContents(code.current);
        const selection = window.getSelection(); selection.removeAllRanges(); selection.addRange(range);
      }
      setCopyFailed(true);
    }
  }
  return <div className="bibtex">
    {!defaultOpen && <button className="text-button" type="button" aria-expanded={open} aria-controls={id} onClick={() => setOpen(!open)}>{open ? "Hide BibTeX" : "BibTeX"} <span aria-hidden="true">{open ? "−" : "+"}</span></button>}
    {open && <div className="bibtex-panel" id={id}>
      <div className="bibtex-toolbar"><span>BIBTEX</span><button type="button" className="copy-button" onClick={copy}><Icon name={copied ? "check" : "copy"} size={15} />{copied ? "Copied" : "Copy citation"}</button></div>
      <pre ref={code} tabIndex={0}>{value.trim()}</pre>
      <span className={copyFailed ? "copy-feedback" : "sr-only"} role="status">{copyFailed ? "Citation selected. Press Ctrl+C or ⌘C to copy." : copied ? "Citation copied to clipboard." : ""}</span>
    </div>}
  </div>;
}
