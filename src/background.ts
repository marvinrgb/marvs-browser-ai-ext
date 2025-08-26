// -----------------------------------------------------------------------------
// 1. SETTINGS & CONFIGURATION
// -----------------------------------------------------------------------------
const GEMINI_API_KEY = 'AIzaSyDP9CC8fVq-EAjvkD-2neGfXdGyMmVfEWk';


// -----------------------------------------------------------------------------
// 2. CONTEXT MENU SETUP
// This function runs once when the extension is installed.
// -----------------------------------------------------------------------------

function setupContextMenu(): void {
  // Main Parent Menu
  chrome.contextMenus.create({
    id: "main",
    title: "Marv's AI Web-Tools",
    contexts: ["selection"]
  });

  // --- Category: Marketing & SEO ---
  chrome.contextMenus.create({ id: 'cat-marketing', title: 'Marketing & SEO', parentId: 'main', contexts: ['selection'] });
  chrome.contextMenus.create({ id: 'marketing-extractKeywords', title: 'Extract SEO Keywords', parentId: 'cat-marketing', contexts: ['selection'] });
  chrome.contextMenus.create({ id: 'marketing-generateAdCopy', title: 'Generate Ad Copy (PPC)', parentId: 'cat-marketing', contexts: ['selection'] });
  chrome.contextMenus.create({ id: 'marketing-defineAudience', title: 'Define Target Audience', parentId: 'cat-marketing', contexts: ['selection'] });
  chrome.contextMenus.create({ id: 'marketing-suggestCTAs', title: 'Suggest Calls to Action', parentId: 'cat-marketing', contexts: ['selection'] });
  chrome.contextMenus.create({ id: 'marketing-createEmailSubjects', title: 'Create Email Subject Lines', parentId: 'cat-marketing', contexts: ['selection'] });

  // --- Category: Social Media Management ---
  chrome.contextMenus.create({ id: 'cat-social', title: 'Social Media Management', parentId: 'main', contexts: ['selection'] });
  chrome.contextMenus.create({ id: 'social-createPost', title: 'Create Post/Thread from Text', parentId: 'cat-social', contexts: ['selection'] });
  chrome.contextMenus.create({ id: 'social-generateHashtags', title: 'Generate Relevant Hashtags', parentId: 'cat-social', contexts: ['selection'] });
  chrome.contextMenus.create({ id: 'social-draftReply', title: 'Draft a Reply (Positive/Negative)', parentId: 'cat-social', contexts: ['selection'] });
  chrome.contextMenus.create({ id: 'social-findPullQuote', title: 'Find a "Pull Quote"', parentId: 'cat-social', contexts: ['selection'] });
  chrome.contextMenus.create({ id: 'social-suggestContentIdeas', title: 'Suggest 3 Content Ideas', parentId: 'cat-social', contexts: ['selection'] });

  // --- Category: E-commerce & Shopping ---
  chrome.contextMenus.create({ id: 'cat-ecommerce', title: 'E-commerce & Shopping', parentId: 'main', contexts: ['selection'] });
  chrome.contextMenus.create({ id: 'ecommerce-summarizeReviews', title: 'Summarize Product Reviews', parentId: 'cat-ecommerce', contexts: ['selection'] });
  chrome.contextMenus.create({ id: 'ecommerce-compareProducts', title: 'Compare Two Products', parentId: 'cat-ecommerce', contexts: ['selection'] });
  chrome.contextMenus.create({ id: 'ecommerce-extractSpecs', title: 'Extract Key Specifications', parentId: 'cat-ecommerce', contexts: ['selection'] });
  chrome.contextMenus.create({ id: 'ecommerce-findDealbreakers', title: 'Identify Potential Deal-Breakers', parentId: 'cat-ecommerce', contexts: ['selection'] });
  chrome.contextMenus.create({ id: 'ecommerce-draftSellerQuestion', title: 'Draft a Question for the Seller', parentId: 'cat-ecommerce', contexts: ['selection'] });

  // --- Category: Productivity & Project Management ---
  chrome.contextMenus.create({ id: 'cat-productivity', title: 'Productivity & Project Management', parentId: 'main', contexts: ['selection'] });
  chrome.contextMenus.create({ id: 'productivity-extractActionItems', title: 'Extract Action Items', parentId: 'cat-productivity', contexts: ['selection'] });
  chrome.contextMenus.create({ id: 'productivity-draftFollowUp', title: 'Draft a Follow-Up Email', parentId: 'cat-productivity', contexts: ['selection'] });
  chrome.contextMenus.create({ id: 'productivity-prioritizeTasks', title: 'Prioritize a Task List', parentId: 'cat-productivity', contexts: ['selection'] });
  chrome.contextMenus.create({ id: 'productivity-estimateDuration', title: 'Estimate Task Duration', parentId: 'cat-productivity', contexts: ['selection'] });
  chrome.contextMenus.create({ id: 'productivity-formatAsUpdate', title: 'Reformat to a Project Update', parentId: 'cat-productivity', contexts: ['selection'] });

  // --- Category: Learning & Education ---
  chrome.contextMenus.create({ id: 'cat-learning', title: 'Learning & Education', parentId: 'main', contexts: ['selection'] });
  chrome.contextMenus.create({ id: 'learning-createFlashcards', title: 'Create Flashcards', parentId: 'cat-learning', contexts: ['selection'] });
  chrome.contextMenus.create({ id: 'learning-generateQuiz', title: 'Generate a Quiz', parentId: 'cat-learning', contexts: ['selection'] });
  chrome.contextMenus.create({ id: 'learning-identifyCoreConcepts', title: 'Identify Core Concepts', parentId: 'cat-learning', contexts: ['selection'] });
  chrome.contextMenus.create({ id: 'learning-findRelatedTopics', title: 'Find Related Topics for Deeper Study', parentId: 'cat-learning', contexts: ['selection'] });
  chrome.contextMenus.create({ id: 'learning-simplifyJargon', title: 'Simplify Technical Jargon', parentId: 'cat-learning', contexts: ['selection'] });

  // --- Category: Travel Planning ---
  chrome.contextMenus.create({ id: 'cat-travel', title: 'Travel Planning', parentId: 'main', contexts: ['selection'] });
  chrome.contextMenus.create({ id: 'travel-summarizeHotel', title: 'Summarize Hotel/Airbnb Description', parentId: 'cat-travel', contexts: ['selection'] });
  chrome.contextMenus.create({ id: 'travel-createItinerary', title: 'Create a Mini-Itinerary', parentId: 'cat-travel', contexts: ['selection'] });
  chrome.contextMenus.create({ id: 'travel-extractDetails', title: 'Extract Practical Details', parentId: 'cat-travel', contexts: ['selection'] });
  chrome.contextMenus.create({ id: 'travel-getCulturalTips', title: 'Get Cultural "Do\'s and Don\'ts"', parentId: 'cat-travel', contexts: ['selection'] });
  chrome.contextMenus.create({ id: 'travel-checkForRedFlags', title: 'Check for Red Flags in Reviews', parentId: 'cat-travel', contexts: ['selection'] });
  
  // --- Category: Developer Tools ---
  chrome.contextMenus.create({ id: 'cat-developer', title: 'Developer Tools', parentId: 'main', contexts: ['selection'] });
  chrome.contextMenus.create({ id: 'developer-generateDocs', title: 'Generate Code Documentation', parentId: 'cat-developer', contexts: ['selection'] });
  chrome.contextMenus.create({ id: 'developer-refactorCode', title: 'Refactor & Improve Code', parentId: 'cat-developer', contexts: ['selection'] });
  chrome.contextMenus.create({ id: 'developer-translateCode', title: 'Translate Between Languages', parentId: 'cat-developer', contexts: ['selection'] });
  chrome.contextMenus.create({ id: 'developer-writeUnitTests', title: 'Write Unit Tests', parentId: 'cat-developer', contexts: ['selection'] });
  chrome.contextMenus.create({ id: 'developer-generateRegex', title: 'Generate Regex from Description', parentId: 'cat-developer', contexts: ['selection'] });

  // --- Category: Creative & Brainstorming ---
  chrome.contextMenus.create({ id: 'cat-creative', title: 'Creative & Brainstorming', parentId: 'main', contexts: ['selection'] });
  chrome.contextMenus.create({ id: 'creative-generateAnalogies', title: 'Generate Analogies & Metaphors', parentId: 'cat-creative', contexts: ['selection'] });
  chrome.contextMenus.create({ id: 'creative-suggestVisuals', title: 'Suggest a Visual Theme', parentId: 'cat-creative', contexts: ['selection'] });
  chrome.contextMenus.create({ id: 'creative-brainstormSlogans', title: 'Brainstorm Slogans/Taglines', parentId: 'cat-creative', contexts: ['selection'] });
  chrome.contextMenus.create({ id: 'creative-expandIdea', title: 'Expand on an Idea', parentId: 'cat-creative', contexts: ['selection'] });
  chrome.contextMenus.create({ id: 'creative-mindMap', title: 'Mind Map Core Concepts', parentId: 'cat-creative', contexts: ['selection'] });

  // --- Category: Career & Professional Development ---
  chrome.contextMenus.create({ id: 'cat-career', title: 'Career & Professional Development', parentId: 'main', contexts: ['selection'] });
  chrome.contextMenus.create({ id: 'career-improveBio', title: 'Improve LinkedIn Bio/Summary', parentId: 'cat-career', contexts: ['selection'] });
  chrome.contextMenus.create({ id: 'career-draftNetworkingMessage', title: 'Draft a Networking Message', parentId: 'cat-career', contexts: ['selection'] });
  chrome.contextMenus.create({ id: 'career-formatAccomplishments', title: 'Format Accomplishments for Review', parentId: 'cat-career', contexts: ['selection'] });
  chrome.contextMenus.create({ id: 'career-generateSTAR', title: 'Generate "STAR" Interview Story', parentId: 'cat-career', contexts: ['selection'] });
  chrome.contextMenus.create({ id: 'career-extractAdvice', title: 'Extract Actionable Career Advice', parentId: 'cat-career', contexts: ['selection'] });

  // --- Category: Communication & Interpersonal ---
  chrome.contextMenus.create({ id: 'cat-communication', title: 'Communication & Interpersonal', parentId: 'main', contexts: ['selection'] });
  chrome.contextMenus.create({ id: 'communication-makePersuasive', title: 'Make Text More Persuasive', parentId: 'cat-communication', contexts: ['selection'] });
  chrome.contextMenus.create({ id: 'communication-makeDiplomatic', title: 'Make Text More Diplomatic', parentId: 'cat-communication', contexts: ['selection'] });
  chrome.contextMenus.create({ id: 'communication-analyzeSentiment', title: 'Analyze Text Sentiment', parentId: 'cat-communication', contexts: ['selection'] });
  chrome.contextMenus.create({ id: 'communication-findQuestion', title: 'Identify the Underlying Question', parentId: 'cat-communication', contexts: ['selection'] });
  chrome.contextMenus.create({ id: 'communication-draftPoliteNo', title: 'Draft a Polite "No"', parentId: 'cat-communication', contexts: ['selection'] });

  // --- Category: Cooking & Recipes ---
  chrome.contextMenus.create({ id: 'cat-cooking', title: 'Cooking & Recipes', parentId: 'main', contexts: ['selection'] });
  chrome.contextMenus.create({ id: 'cooking-adjustServing', title: 'Adjust Serving Size', parentId: 'cat-cooking', contexts: ['selection'] });
  chrome.contextMenus.create({ id: 'cooking-generateShoppingList', title: 'Generate a Shopping List', parentId: 'cat-cooking', contexts: ['selection'] });
  chrome.contextMenus.create({ id: 'cooking-suggestSubstitutions', title: 'Suggest Ingredient Substitutions', parentId: 'cat-cooking', contexts: ['selection'] });
  chrome.contextMenus.create({ id: 'cooking-estimateTime', title: 'Estimate Total Time', parentId: 'cat-cooking', contexts: ['selection'] });
  chrome.contextMenus.create({ id: 'cooking-simplifyInstructions', title: 'Simplify Instructions', parentId: 'cat-cooking', contexts: ['selection'] });
}


// -----------------------------------------------------------------------------
// 3. EVENT LISTENERS & API CALL LOGIC
// -----------------------------------------------------------------------------

// Run the setup function when the extension is first installed.
chrome.runtime.onInstalled.addListener(setupContextMenu);

// Listens for a click on any of our context menu items.
chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (!tab || !tab.id) {
    console.error("Tab information is missing.");
    return;
  }
  // Check if the clicked item ID exists as a key in our prompts object.
  // This is the magic that makes the system scalable.
  if (info.menuItemId in prompts) {
    const prompt = promptBuilder(info.menuItemId as keyof typeof prompts, info.selectionText || "");
    callGeminiAPI(prompt, tab.id);
  }
});

// Main function to call the Gemini API
async function callGeminiAPI(prompt: string, tabId: number): Promise<void> {
  // NOTE: You've used gemini-2.5-flash which is not a valid model name. 
  // The correct model is 'gemini-1.5-flash'. I've updated it.
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_API_KEY}`;

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        "contents": [{ "parts": [{ "text": prompt }] }]
      })
    });

    if (!response.ok) {
      const errorBody = await response.json();
      console.error('API call failed:', response.status, errorBody);
      throw new Error(`API call failed: ${errorBody.error.message}`);
    }

    const data = await response.json();

    if (data.candidates && data.candidates[0]) {
      const resultText = data.candidates[0].content.parts[0].text;
      chrome.scripting.executeScript({
        target: { tabId: tabId },
        func: (text) => alert(text),
        args: [resultText]
      });
    } else {
      // Handle cases where the API returns a 200 OK but with no candidates
      // (e.g., due to safety settings blocking the prompt or response).
      console.error("API response was successful but contained no candidates:", data);
      throw new Error("The AI returned an empty response, possibly due to safety filters.");
    }

  } catch (error: any) {
    console.error('Error in callGeminiAPI function:', error);
    chrome.scripting.executeScript({
      target: { tabId: tabId },
      func: (errorMsg) => alert(`An error occurred: ${errorMsg}`),
      args: [error.message]
    });
  }
}

// -----------------------------------------------------------------------------
// 4. PROMPT ENGINEERING LOGIC
// -----------------------------------------------------------------------------

// Simple builder to inject the selected text into the correct prompt template.
function promptBuilder(task: keyof typeof prompts, content: string): string {
  if (!content) return "Please select some text first.";
  return prompts[task].replace("$content", content);
}

// The master object containing all prompt templates.
// The key for each prompt MUST match the ID of the context menu item.
const prompts = {
  // --- Marketing & SEO ---
  'marketing-extractKeywords': `Analyze the following text and extract a list of the 10 most relevant SEO keywords and keyphrases a user might search for to find this content. Text: --- $content ---`,
  'marketing-generateAdCopy': `From the following product description, generate 3 short, punchy headlines (max 30 chars) and 2 descriptions (max 90 chars) for a Google PPC ad. Text: --- $content ---`,
  'marketing-defineAudience': `Based on the following text, describe the likely target audience in terms of demographics, interests, and pain points. Text: --- $content ---`,
  'marketing-suggestCTAs': `Read the following marketing copy and suggest 5 compelling, relevant calls to action (CTAs) to add. Text: --- $content ---`,
  'marketing-createEmailSubjects': `From the body of this promotional email, generate 5 different subject lines that are engaging and have a high open-rate potential. Email Body: --- $content ---`,

  // --- Social Media Management ---
  'social-createPost': `Take the following long-form text and convert it into a concise and engaging LinkedIn post. Use emojis where appropriate and include a concluding question. Text: --- $content ---`,
  'social-generateHashtags': `Analyze the following text and generate a list of 15 relevant and trending hashtags for Instagram and LinkedIn. Text: --- $content ---`,
  'social-draftReply': `Based on the following comment, draft a professional and empathetic reply. Analyze if the comment is positive or negative and tailor the response accordingly. Comment: --- $content ---`,
  'social-findPullQuote': `Scan the following article and find the most interesting, impactful, or shareable sentence to use as a pull quote for a social media graphic. Article: --- $content ---`,
  'social-suggestContentIdeas': `From the following topic, brainstorm 3 related content ideas for future social media posts or videos. Topic: --- $content ---`,

  // --- E-commerce & Shopping ---
  'ecommerce-summarizeReviews': `Summarize the following product reviews, highlighting the 3 most common pros and 3 most common cons mentioned. Reviews: --- $content ---`,
  'ecommerce-compareProducts': `Create a markdown comparison table of the key features from the two product descriptions I've selected. Products: --- $content ---`,
  'ecommerce-extractSpecs': `From this product description, extract the key technical specifications into a clean, bulleted list. Description: --- $content ---`,
  'ecommerce-findDealbreakers': `Analyze these product reviews and highlight any recurring negative themes or deal-breakers like "poor battery life" or "bad customer service". Reviews: --- $content ---`,
  'ecommerce-draftSellerQuestion': `From this product description, generate a specific question to ask the seller to clarify a vague feature or missing information. Description: --- $content ---`,

  // --- Productivity & Project Management ---
  'productivity-extractActionItems': `From these meeting notes, identify and list all clear action items, assigning them to the relevant person if mentioned. Notes: --- $content ---`,
  'productivity-draftFollowUp': `Summarize the selected meeting notes and put them into a polite follow-up email format, including any extracted action items. Notes: --- $content ---`,
  'productivity-prioritizeTasks': `Given this list of tasks, re-order them based on logical priority (urgency and impact) and provide a brief justification for the new order. Task List: --- $content ---`,
  'productivity-estimateDuration': `Analyze this task description and provide a rough estimate of the time it might take to complete (e.g., "30-60 minutes", "2-4 hours"). Task: --- $content ---`,
  'productivity-formatAsUpdate': `Take these messy notes and structure them into a formal project update with "What's Done", "What's Next", and "Blockers" sections. Notes: --- $content ---`,

  // --- Learning & Education ---
  'learning-createFlashcards': `From this text, create flashcards by formatting the content into a "Question: / Answer:" format. Text: --- $content ---`,
  'learning-generateQuiz': `Analyze this educational text and generate a 5-question multiple-choice quiz to test comprehension, including an answer key at the end. Text: --- $content ---`,
  'learning-identifyCoreConcepts': `Read this complex text and list the 3-5 most important core concepts or vocabulary terms the reader must understand. Text: --- $content ---`,
  'learning-findRelatedTopics': `Based on the selected text, suggest 5 related topics or concepts the user could research next to deepen their understanding. Text: --- $content ---`,
  'learning-simplifyJargon': `Rewrite this paragraph, replacing dense technical jargon with simpler, more accessible language without losing the core meaning. Text: --- $content ---`,

  // --- Travel Planning ---
  'travel-summarizeHotel': `From this hotel description, extract the key amenities, check-in/out times, and house rules into a quick bulleted summary. Description: --- $content ---`,
  'travel-createItinerary': `From this article about things to do, create a simple 1-day itinerary that logically groups nearby attractions. Article: --- $content ---`,
  'travel-extractDetails': `Scan this travel blog post and pull out all practical details like addresses, opening hours, prices, and transportation tips. Post: --- $content ---`,
  'travel-getCulturalTips': `Based on this text about a country or region, generate a list of key cultural "Do's and Don'ts" for a traveler. Text: --- $content ---`,
  'travel-checkForRedFlags': `Analyze these reviews and specifically look for and list any recurring complaints or potential red flags (e.g., "hidden fees," "noisy," "not as pictured"). Reviews: --- $content ---`,
  
  // --- Developer Tools ---
  'developer-generateDocs': `Act as a senior software engineer. Select a function or class and generate a detailed "docstring" explaining its purpose, parameters, and return value. Code: --- $content ---`,
  'developer-refactorCode': `Analyze this code snippet and suggest a more efficient, readable, or modern way to write it. Explain your reasoning. Code: --- $content ---`,
  'developer-translateCode': `Translate this code snippet to another language. Infer the languages from the code. If the target language is ambiguous, default to Python. Code: --- $content ---`,
  'developer-writeUnitTests': `Based on the selected function, generate a set of unit tests using a common testing framework for that language to verify its functionality and cover edge cases. Code: --- $content ---`,
  'developer-generateRegex': `From this description of a pattern, generate the corresponding regular expression (regex). Description: --- $content ---`,

  // --- Creative & Brainstorming ---
  'creative-generateAnalogies': `For the selected concept, brainstorm 5 different analogies or metaphors to explain it more creatively. Concept: --- $content ---`,
  'creative-suggestVisuals': `From this descriptive text, suggest a corresponding visual theme, including a color palette, mood, and imagery ideas. Text: --- $content ---`,
  'creative-brainstormSlogans': `Based on this product description or company mission, generate 10 potential slogans or taglines. Text: --- $content ---`,
  'creative-expandIdea': `Take this single sentence or concept and write a full paragraph expanding on it, exploring its implications or potential. Idea: --- $content ---`,
  'creative-mindMap': `Analyze this text and generate a text-based mind map (using markdown with indentation) of the central topic and its related sub-topics. Text: --- $content ---`,

  // --- Career & Professional Development ---
  'career-improveBio': `Rewrite this professional bio to be more impactful, using stronger action verbs and a clearer narrative. Bio: --- $content ---`,
  'career-draftNetworkingMessage': `Based on this person's bio, draft a concise and personalized LinkedIn connection request message. Bio: --- $content ---`,
  'career-formatAccomplishments': `Take these project notes and reformat them into clear, quantifiable accomplishments suitable for a performance review, using the structure "Accomplished X, as measured by Y, by doing Z". Notes: --- $content ---`,
  'career-generateSTAR': `From this description of a project, create a behavioral interview answer using the STAR method (Situation, Task, Action, Result). Project: --- $content ---`,
  'career-extractAdvice': `From this career-focused article, pull out a bulleted list of the most actionable tips and strategies. Article: --- $content ---`,

  // --- Communication & Interpersonal ---
  'communication-makePersuasive': `Analyze this argument and rewrite it to be more compelling, authoritative, and persuasive, using rhetorical techniques if appropriate. Text: --- $content ---`,
  'communication-makeDiplomatic': `Take this blunt or confrontational text and rewrite it to be more diplomatic, polite, and constructive while preserving the core message. Text: --- $content ---`,
  'communication-analyzeSentiment': `Read the selected text and provide an analysis of its emotional tone (e.g., "Appears frustrated," "Sounds positive and encouraging"). Text: --- $content ---`,
  'communication-findQuestion': `From this long email or message, extract the core question or the main point the sender is trying to make in a single sentence. Text: --- $content ---`,
  'communication-draftPoliteNo': `Based on this request, draft a clear, polite, and respectful message declining the request without giving false hope or burning bridges. Request: --- $content ---`,
  
  // --- Cooking & Recipes ---
  'cooking-adjustServing': `Take the following recipe and rewrite the ingredient quantities to double the serving size. If it says 'double', halve it instead. Recipe: --- $content ---`,
  'cooking-generateShoppingList': `Extract all ingredients from this recipe and format them into a clean checklist for shopping. Recipe: --- $content ---`,
  'cooking-suggestSubstitutions': `For the selected ingredient from a recipe, suggest 3-5 common and suitable substitutions. Ingredient: --- $content ---`,
  'cooking-estimateTime': `Read through these recipe instructions and provide an estimated breakdown of prep time, cook time, and total time. Instructions: --- $content ---`,
  'cooking-simplifyInstructions': `Rewrite these complex recipe steps into a simple, numbered list with clear, direct commands. Steps: --- $content ---`,
};