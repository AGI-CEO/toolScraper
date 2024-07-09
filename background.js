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
        const response = await fetch(url);
        const text = await response.text();
        const parser = new DOMParser();
        const doc = parser.parseFromString(text, 'text/html');
        const descriptionElement = doc.querySelector('meta[name="description"]');
        return descriptionElement ? descriptionElement.getAttribute('content') : '';
      } catch (error) {
        console.error('Error fetching description:', error);
        return '';
      }
    };

    // Function to fetch descriptions for all tools
    const fetchAllDescriptions = async () => {
      for (const tool of toolsData) {
        tool.description = await fetchDescription(tool.link);
      }
      sendResponse({ toolsData });
    };

    fetchAllDescriptions();
    return true; // Will respond asynchronously
  }
});
