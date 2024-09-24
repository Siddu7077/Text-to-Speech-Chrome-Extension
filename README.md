# Text-to-Speech Chrome Extension 🚀

## Problem Statement
While traveling or multitasking, it is often difficult to read information on webpages. Whether you're commuting, driving, or performing tasks that require your hands and eyes, reading can become inconvenient or unsafe. The problem is to access that textual content on-the-go, hands-free, by listening to it instead.

## Solution
This Chrome extension allows users to select text on any webpage, choose a language (e.g., English, Hindi, Telugu), and have the text read aloud using the browser's speech synthesis capabilities. It makes consuming information easier, especially in situations where reading is impractical.

---

## Files Structure

### 1. `manifest.json`
Defines the Chrome extension, its permissions, and which files are associated with various parts of the extension. This file declares the extension's popup page, required permissions (such as access to active tabs and executing scripts), and metadata.

### 2. `popup.html`
This file contains the basic structure of the extension's UI. It includes:
- A text area to display the selected text.
- A dropdown for users to select their preferred language (English, Hindi, Telugu).
- A "Speak" button that triggers the speech synthesis.
  
### 3. `popup.js`
Contains the main logic for the extension, which includes:
- Retrieving the user's selected text from the active webpage.
- Translating the text (if necessary) using the MyMemory Translation API.
- Using the Web Speech API to read the text aloud in the selected language.
- Adding event listeners to handle user interactions like selecting a language and clicking the "Speak" button.

### 4. `styles.css`
Basic CSS file to style the popup interface. It provides layout and aesthetic improvements such as font settings, button styles, and the general appearance of the popup.

---

## How It Works

1. **Selecting Text**:
   - When you highlight text on a webpage, the extension captures the selected text and displays it in the popup UI.

2. **Language Selection**:
   - The user can choose from the available languages (English, Hindi, Telugu) via a dropdown menu.

3. **Speaking the Text**:
   - Once the user clicks the "Speak" button, the extension translates the selected text (if a language other than English is chosen) using the MyMemory Translation API.
   - After translation, the Web Speech API is invoked to read the translated (or original) text aloud in the chosen language.

---

## Execution Steps

### 1. Load the Extension in Chrome:
- Open the Chrome browser and navigate to `chrome://extensions/`.
- Enable **Developer Mode** by toggling the switch at the top right corner of the page.
- Click **Load Unpacked** and select the directory where you cloned the project.

### 2. Activate the Extension:
- After loading the extension, you will see the extension icon in the Chrome toolbar.

### 3. Using the Extension:
- **Step 1**: Select any text on a webpage.
- **Step 2**: Click the extension icon in the toolbar to open the popup.
- **Step 3**: The selected text will appear in the popup. Choose the desired language from the dropdown menu.
- **Step 4**: Click the "Speak" button to hear the text read aloud in the selected language.

---
## Technologies Used

- **JavaScript**: Core logic to handle text selection, translation, and speech synthesis.
- **Chrome Extensions API**: For interacting with the browser and capturing user actions.
- **Web Speech API**: For converting text to speech in the selected language.
- **MyMemory Translation API**: To translate the selected text into the desired language before reading it aloud.
---
## Supported Languages

- Hindi
- English
- Spanish
---
## Future Enhancements

- Add more languages and improve the accuracy of translation.
- Provide different voice options for users.
- Add more customization options like speech rate, pitch, and volume controls.
---
## Conclusion

This Chrome extension aims to enhance the user experience by enabling seamless interaction with text while on the go. By allowing users to select text on any webpage and convert it into speech in multiple languages, it addresses the common challenge of reading information while traveling. With continuous improvements and potential feature expansions, this tool seeks to provide greater accessibility and convenience to users in their daily lives.
