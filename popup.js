
document.addEventListener('DOMContentLoaded', function () {
    const speakButton = document.getElementById('speak-button');
    const dropdown = document.getElementById('language-dropdown');
    const status = document.getElementById('status');
    let selectedText = '';

    // Request the selected text from the content script
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.scripting.executeScript({
            target: { tabId: tabs[0].id },
            function: getSelectedText
        }, (result) => {
            if (result && result[0] && result[0].result) {
                selectedText = result[0].result;
                status.innerText = 'Selected Text: ' + selectedText;
                console.log("Selected text:", selectedText);
            }
        });
    });

    // Adding event listener to the speak button
    speakButton.addEventListener('click', function () {
        if (selectedText) {
            const selectedLanguage = dropdown.value || 'hi-IN';
            console.log("Text to translate and speak:", selectedText, "Language:", selectedLanguage);
            translateAndSpeak(selectedText, selectedLanguage);
        } else {
            status.innerText = 'Please select some text.';
        }
    });

    // Translate text and speak it
    function translateAndSpeak(text, language) {
        // Placeholder translation API - replace with your actual API or logic
        const apiUrl = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=en|${language}`;

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                // If API returns an object
                const translatedText = data.responseData.translatedText || text;
                status.innerText = 'Translated Text: ' + translatedText;
                console.log("Translated Text:", translatedText);

                // Call text-to-speech
                textToSpeech(translatedText, language);
            })
            .catch(error => {
                console.error('Error:', error);
                status.innerText = 'Translation failed.';
            });
    }

    // Function to trigger speech synthesis
    function textToSpeech(text, language) {
        console.log("Speaking Text:", text, "Language:", language);
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = language;
        utterance.rate = 1;  // Set the rate (speed) for the speech
        utterance.onstart = function () {
            status.innerText = 'Speaking...';
        };
        utterance.onend = function () {
            status.innerText = 'Finished speaking.';
        };
        utterance.onerror = function (event) {
            console.error('Speech synthesis error:', event);
            status.innerText = 'Error during speech synthesis.';
        };

        window.speechSynthesis.speak(utterance);
    }
});

// Function to get the selected text from the webpage
function getSelectedText() {
    return window.getSelection().toString();
}