const myURL = "http://localhost:4000";
const findQuotesFilterForm = document.getElementById("find-quotes-filter-form");




// API FUNCTIONS
const findQuotes = (e) => {
    e.preventDefault();
    let sourceValue = document.getElementById("sources-select").value;
    let speakerValue = document.getElementById("speaker-select").value;
    let searchParamsObj = {
        source: `${sourceValue}`,
        speakerVal: `${speakerValue}`
    }
    axios.post(`${myURL}/api/find-quotes`, searchParamsObj)
    .then((res) => {
        // let resultArr = res.data
        // for (let i = 0; i < resultArr; i++) {

        // }
        console.log(res.data)
    })
}

findQuotesFilterForm.addEventListener("submit", findQuotes);