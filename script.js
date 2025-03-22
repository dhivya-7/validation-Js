function validateVowels() {

    let inputText = document.getElementById("userInput").value;
    let vowelcount = /[aeiouAEIOU]/;  
    let resultElement = document.getElementById("result");

    if (vowelcount.test(inputText)) {
        resultElement.textContent = "Valid: The string contains vowels!";
    } else {    
        resultElement.textContent = "Invalid: No vowels found!";
    }
}