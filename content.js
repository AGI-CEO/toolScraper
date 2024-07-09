// Content script for scraping AI tools data from the website

// Function to scrape the data
async function scrapeData() {
  const tools = [];
  const toolElements = document.querySelectorAll('li[data-name]'); // Select all list items with a data-name attribute
  for (const toolElement of toolElements) {
    const name = toolElement.getAttribute('data-name'); // Extract the tool's name from the data-name attribute
    const linkElement = toolElement.querySelector('a'); // Find the first anchor tag within the list item
    const link = linkElement ? linkElement.href : ''; // Extract the href attribute or use an empty string if not found
    const categoryElement = toolElement.querySelector('div > a'); // Updated selector for category
    const category = categoryElement ? categoryElement.textContent.trim() : ''; // Extract and trim the category text or use an empty string if not found

    tools.push({ name, link, category }); // Add the tool's data to the tools array
  }
  return tools; // Return the array of tools
}

// Send the scraped data to the background script
scrapeData().then((toolsData) => {
  chrome.runtime.sendMessage({ toolsData }, (response) => {
    console.log('Tools data sent to background script:', response); // Log the response from the background script
  });
});
