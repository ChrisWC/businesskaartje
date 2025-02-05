"use client";

import { Resume } from "./resume";
import Image from "next/image";

export default function Home() {
  const generatePDF = async () => {
    const response = await fetch("/api/generate-pdf");
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "page.pdf";
    a.click();
    window.URL.revokeObjectURL(url);
  };
  //const doc = <ResumePDF />;
  return <div>
    <button
        onClick={generatePDF}
        className="print:hidden mt-4 px-2 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition absolute m-2 right-0"
      >
        <Image
          alt="print pdf"
          aria-hidden
          className="object-contain"
          src="/pdf.svg" width="32" height="32"/>
      </button>
    <Resume />
  </div>
}
