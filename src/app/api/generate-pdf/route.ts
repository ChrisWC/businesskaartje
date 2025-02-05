import puppeteer from "puppeteer-core";
import { NextResponse } from "next/server";

// ✅ Set the correct path to Chromium (for DigitalOcean)
const CHROMIUM_PATH = "/usr/bin/google-chrome-stable";

export async function GET() {
  let browser;
  try {
    browser = await puppeteer.launch({
      executablePath: CHROMIUM_PATH, // ✅ Set correct Chromium path
      args: [
        "--no-sandbox",
        "--disable-setuid-sandbox",
        "--disable-gpu",
        "--disable-dev-shm-usage",
        "--single-process",
      ],
      headless: true,
    });

    const page = await browser.newPage();
    
    // ✅ Load your actual site (replace with your domain)
    await page.goto("https://catton.nl", { waitUntil: "networkidle2" });
    await page.evaluate(() => {
      const rootElement = document.documentElement; // Captures styles from the root
      const computedStyles = window.getComputedStyle(rootElement);

      // Apply detected background color and other styles
      document.body.style.backgroundColor = computedStyles.backgroundColor;
      document.body.style.color = computedStyles.color;
    });

    // ✅ Ensure Tailwind styles and backgrounds are applied
    await page.emulateMediaType("screen");

    // ✅ Generate the PDF
    const pdfBuffer = await page.pdf({
      format: "A4",
      printBackground: true, // ✅ Ensures background colors are included
    });

    await browser.close();

    // ✅ Correctly return the PDF buffer
    return new NextResponse(pdfBuffer, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": 'attachment; filename="styled-page.pdf"',
      },
    });

  } catch (error) {
    console.error("PDF Generation Error:", error);
    return new NextResponse("Error generating PDF", { status: 500 });
  }
}

