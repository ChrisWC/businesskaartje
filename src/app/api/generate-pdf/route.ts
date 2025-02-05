import puppeteer from "puppeteer";
import { NextResponse } from "next/server";

export async function GET() {
  const browser = await puppeteer.launch({
    headless: true, // Prevents deprecation warnings
    args: ["--no-sandbox", "--disable-setuid-sandbox"], // Required for some environments
  });

  const page = await browser.newPage();
  
  // Navigate to your own page
  await page.goto("http://localhost:3000", { waitUntil: "networkidle2" });

  //await page.emulateMediaType("screen");

  await page.evaluate(() => {
    const rootElement = document.documentElement; // Captures styles from the root
    const computedStyles = window.getComputedStyle(rootElement);

    // Apply detected background color and other styles
    document.body.style.backgroundColor = computedStyles.backgroundColor;
    document.body.style.color = computedStyles.color;
  });
  // Generate the PDF
  const pdfBuffer = await page.pdf({
    format: "A4",
    printBackground: true, // Ensures background colors/images are included
  });

  await browser.close();

  // Send the PDF response
  return new NextResponse(pdfBuffer, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": 'attachment; filename="page.pdf"',
    },
  });
}

