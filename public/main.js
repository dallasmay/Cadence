const myURL = "http://localhost:4000"
let quoteContainer = document.getElementById("home-quote-container");
let speakerContainer = document.getElementById("speaker-container");
let addQuoteModalBtn = document.getElementById("add-quote-button");
let wrapperQuoteModal = document.getElementById("add-quote-modal");
let closeBtn = document.getElementsByClassName("close")[0];
let quoteModal = document.getElementsByClassName("modal")[0];
let addQuoteForm = document.getElementById("add-quote-form");
let myQuoteContainer = document.getElementById("my-quotes-container");


const getDisplayQuote = () => {
    axios.get(`${myURL}/api/get-famous-quote`)
    .then((res) => {
        const {  quote, speaker  } = res.data
        let words;
            words = quote.split(" ");
            words.unshift('"');
            words.push('"');

            async function myAsyncFunction() {
                for (let i = 0; i < words.length; i++) {
                    // Setting default delay time, testing for commas or periods to add pause by increasing delayTime (skipping the first element in the array as it will try to do .includes of undefined, throwing an error)
                    let delayTime = 250;
                    if (i !== 0) {
                        if (words[(i - 1)].includes(",")) {
                            delayTime = 950;
                        } else if (words[(i - 1)].includes(".")) {
                            delayTime = 1250;
                        }
                    };
                    // Creating span element (inline) and adding "hidden" class to it
                    let hiddenSpan = document.createElement("span");
                    hiddenSpan.classList.add("hidden");
                    
                    // Changing text content to current word and appending it to container
                    hiddenSpan.textContent = words[i] + " ";
                    quoteContainer.appendChild(hiddenSpan);
        
                    // Where the fun begins. Waits .25 seconds for all words minus words after commas or periods. Waits .95 seconds for words after commas and 1.25 seconds for words after periods
                    await delay(delayTime);
                    hiddenSpan.classList.toggle("reveal");
                };
                // Adding speaker to quote
                let speakerElement = document.createElement("div");
                speakerElement.classList.add("hidden");
                speakerElement.classList.add("speaker");
                speakerElement.textContent = "-" + speaker;
                quoteContainer.appendChild(speakerElement);
                await delay(1500);
                speakerElement.classList.toggle("reveal");
            };
            myAsyncFunction();
    })
}
// Setting up time delay function, makes setTimeout function run synchronously
function delay(n){
    return new Promise(function(resolve){
        setTimeout(resolve, n);
    });
};

const addQuoteModalToggle = () => {
    quoteModal.style.display = "block"
}

const closeModal = (event) => {
    if (event.target.id === "modal-close") {
        quoteModal.style.display = "none";
    }
    if (event.target.id !== "add-quote-modal") {
        return
    }
        quoteModal.style.display = "none";
}

const postQuote = (e) => {
    e.preventDefault()
    let quoteContent = document.getElementById("quote-input").value;
    let speakerContent = document.getElementById("speaker-input").value;
    let quoteObj = {
        quote: `${quoteContent}`,
        speaker: `${speakerContent}`
    };
    axios.post(`${myURL}/api/post-my-quote`, quoteObj)
    .then(() => {
        // Creating elements for card
        let container = document.createElement("div");
        let quoteContent = document.createElement("div");
        let quoteWordsContent = document.createElement("p");
        let speakerContent = document.createElement("div");
        let speakerWordsContent = document.createElement("p");
        // Adding classes
        container.classList.add("quote-card");
        quoteContent.classList.add("quote-content");
        quoteWordsContent.classList.add("quote-words-content");
        speakerContent.classList.add("speaker-content");
        speakerWordsContent.classList.add("speaker-p");
        // Appending
        quoteContent.appendChild(quoteWordsContent);
        container.appendChild(quoteContent);
        speakerContent.appendChild(speakerWordsContent)
        container.appendChild(speakerContent);
        // Adding text content
        quoteWordsContent.textContent = `${quote}`;
        speakerWordsContent.textContent = `${speaker}`
        // Adding card to container
        myQuoteContainer.appendChild(container)
    }).catch((err) => console.log(err))
    
}

// addQuoteForm.addEventListener("submit", postQuote);
// addQuoteModalBtn.addEventListener("click", addQuoteModalToggle)
// closeBtn.addEventListener("click", closeModal)
// wrapperQuoteModal.addEventListener("click", closeModal)

getDisplayQuote();