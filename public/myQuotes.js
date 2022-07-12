const myURL = "http://localhost:4000";
let addQuoteModalBtn = document.getElementById("add-quote-button");
let wrapperQuoteModal = document.getElementById("add-quote-modal");
let closeBtn = document.getElementsByClassName("close")[0];
let quoteModal = document.getElementsByClassName("modal")[0];
let addQuoteForm = document.getElementById("add-quote-form");
let myQuoteContainer = document.getElementById("my-quotes-container");

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
    }).catch((err) => console.log(`This is an error${err})`))
    
    // Creating elements for card
    let container = document.createElement("div");
    let quoteContentDiv = document.createElement("div");
    let quoteWordsContent = document.createElement("p");
    let speakerContentDiv = document.createElement("div");
    let speakerWordsContent = document.createElement("p");
    // Adding classes
    container.classList.add("quote-card");
    quoteContentDiv.classList.add("quote-content");
    quoteWordsContent.classList.add("quote-words-content");
    speakerContentDiv.classList.add("speaker-content");
    speakerWordsContent.classList.add("speaker-p");
    // Appending
    quoteContentDiv.appendChild(quoteWordsContent);
    container.appendChild(quoteContentDiv);
    speakerContentDiv.appendChild(speakerWordsContent)
    container.appendChild(speakerContentDiv);
    // Adding text content
    quoteWordsContent.textContent = `${quoteContent}`;
    speakerWordsContent.textContent = `${speakerContent}`
    // Adding card to container
    myQuoteContainer.appendChild(container)
    
}

addQuoteForm.addEventListener("submit", postQuote);
addQuoteModalBtn.addEventListener("click", addQuoteModalToggle)
closeBtn.addEventListener("click", closeModal)
wrapperQuoteModal.addEventListener("click", closeModal)