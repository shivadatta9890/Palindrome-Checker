const textInput = document.querySelector("input");
checkBtn = document.querySelector("button");

let soundBtn = document.querySelector("i");

resultText = document.querySelector(".result-text");

let filterInput;


checkBtn.addEventListener("click",()=>{
    let reverseText = filterInput.split("").reverse().join("");
    resultText.style.display = "block";

    if(filterInput != reverseText){

        return resultText.innerHTML = `No, <span>'${textInput.value}'</span> isn't a palindrome `;

    }
    resultText.innerHTML = `Yes, <span>'${textInput.value}'</span> is a palindrome`;
});


textInput.addEventListener("keyup",()=>{

    filterInput = textInput.value.toLowerCase().replace(/[^A-Z0-9]/ig,"");
    // console.log(filterInput);
if(filterInput){

    return checkBtn.classList.add("active");

}
    resultText.style.display = "none";

checkBtn.classList.remove("active");
});

soundBtn.addEventListener("click",()=>{
    let utterance = new SpeechSynthesisUtterance(`${resultText.innerText}`);
    speechSynthesis.speak(utterance);
    // console.log("working");
});