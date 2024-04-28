import { launch } from "puppeteer-core";
import chrome from "chrome-aws-lambda";

export async function getScreenshot(url, width, height) {
  const browser = await launch({
    args: chrome.args,
    executablePath: await chrome.executablePath,
    headless: chrome.headless,
  });
  const page = await browser.newPage();
  await page.goto(url);
  await page.setViewport({
    width: Number(width) || 1280,
    height: Number(height) || 720,
    deviceScaleFactor: 2,
  });
  return await page.screenshot();
}
