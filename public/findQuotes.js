const myURL = "http://localhost:4000";
const findQuotesFilterForm = document.getElementById("find-quotes-filter-form");
const findQuotesContainer = document.getElementById("find-my-quotes-container");



// API FUNCTIONS
const findQuotes = (e) => {
    e.preventDefault();
    findQuotesContainer.innerHTML = "";
    let sourceValue = document.getElementById("sources-select").value;
    let speakerValue = document.getElementById("speaker-select").value;
    let searchParamsObj = {
        source: `${sourceValue}`,
        speakerVal: `${speakerValue}`
    }
    axios.post(`${myURL}/api/find-quotes`, searchParamsObj)
    .then((res) => {
        let resultArr = res.data
        async function displayCardsAnimation() {
            for (let i = 0; i < resultArr.length; i++) {
                const { quote, speaker } = resultArr[i];
                let delayTime = 100;
                // Creating elements for card
                let container = document.createElement("div");
                let quoteContentDiv = document.createElement("div");
                let quoteWordsContent = document.createElement("p");
                let speakerContentDiv = document.createElement("div");
                let speakerWordsContent = document.createElement("p");
                // Adding classes
                container.classList.add("find-quote-card");
                container.classList.add("hidden");
                quoteContentDiv.classList.add("quote-content");
                quoteWordsContent.classList.add("quote-words-content");
                speakerContentDiv.classList.add("speaker-content");
                speakerWordsContent.classList.add("speaker-p");
                // Appending
                quoteContentDiv.appendChild(quoteWordsContent);
                container.appendChild(quoteContentDiv);
                speakerContentDiv.appendChild(speakerWordsContent);
                container.appendChild(speakerContentDiv);
                // Adding text content
                quoteWordsContent.textContent = `"${quote}"`;
                speakerWordsContent.textContent = `-${speaker}`;
                // Adding card to container
                findQuotesContainer.appendChild(container);
                await delay(delayTime);
                container.classList.toggle("reveal")
            };
        };
        displayCardsAnimation();
    })
}
// Setting up time delay function, makes setTimeout function run synchronously
function delay(n){
    return new Promise(function(resolve){
        setTimeout(resolve, n);
    });
};

findQuotesFilterForm.addEventListener("submit", findQuotes);