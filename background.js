// Listener for extension installation event
chrome.runtime.onInstalled.addListener(() => {
  console.log("AI Tools Scraper extension installed.");
});

// Listener for messages from content script
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.toolsData) {
    const toolsData = message.toolsData;

    // Function to fetch description from tool's page
    const fetchDescription = async (url) => {
      try {
        const response = await fetch(url, { mode: 'no-cors' });
        const text = await response.text();
        return text; // Send the raw HTML content back to the content script
      } catch (error) {
        console.error('Error fetching description:', error);
        return '';
      }
    };

    // Function to fetch descriptions for all tools
    const fetchAllDescriptions = async () => {
      for (const tool of toolsData) {
        tool.descriptionHTML = await fetchDescription(tool.link);
      }
      sendResponse({ toolsData });
    };

    fetchAllDescriptions();
    return true; // Will respond asynchronously
  }
});
