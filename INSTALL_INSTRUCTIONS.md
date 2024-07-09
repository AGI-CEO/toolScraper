# AI Tools Scraper Chrome Extension Installation Instructions

## Prerequisites
- Google Chrome browser installed on your computer.
- The `ai_tools_scraper_extension.zip` file containing the Chrome extension files.

## Installation Steps

1. **Enable Developer Mode in Chrome:**
   - Open the Chrome browser.
   - Click on the three vertical dots in the upper-right corner to open the menu.
   - Navigate to `More tools` > `Extensions`.
   - Toggle the `Developer mode` switch in the upper-right corner to enable it.

2. **Load the Unpacked Extension:**
   - Click on the `Load unpacked` button that appears after enabling Developer mode.
   - In the file dialog that opens, navigate to the directory where you extracted the `ai_tools_scraper_extension.zip` file.
   - Select the folder containing the extension files and click `Select Folder`.

3. **Verify Extension Installation:**
   - You should see the `AI Tools Scraper` extension listed among your installed extensions.
   - Ensure that the extension is enabled (the toggle switch should be on).

## Using the Extension

1. **Navigate to the Target Website:**
   - Open a new tab in Chrome and navigate to `https://theresanaiforthat.com/just-launched/`.

2. **Run the Extension:**
   - The extension will automatically run the content script to scrape the AI tools data from the website.
   - The scraped data, including tool names, links, and categories, will be sent to the background script for further processing.

3. **Check the Console for Logs:**
   - Open the Chrome Developer Tools by pressing `Ctrl+Shift+I` (Windows/Linux) or `Cmd+Option+I` (Mac).
   - Navigate to the `Console` tab to see logs indicating the progress of the scraping process and any responses from the background script.

## Troubleshooting

- If the extension does not appear to be working, ensure that Developer mode is enabled and that the extension is properly loaded.
- Check the `Console` tab in Chrome Developer Tools for any error messages or logs that can help diagnose issues.
- Ensure that you have a stable internet connection, as the extension relies on network requests to fetch data.

## Additional Notes

- The extension is designed to scrape data from the `https://theresanaiforthat.com/just-launched/` page. If the website's structure changes, the extension may need to be updated accordingly.
- The extension currently scrapes tool names, links, and categories. Descriptions are fetched by the background script from individual tool pages.

For any further assistance or questions, please contact the developer.
