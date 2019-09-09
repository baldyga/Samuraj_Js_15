const sentences = ["Walcz!","Przemyśl to jeszcze :("];

const btnAdvice = () => {
    const index = Math.floor(Math.random() * sentences.length);
    document.querySelector('h1').textContent = sentences[index];
    
}
const btnAdd = (e) => {
    e.preventDefault();
    const input = document.querySelector('input');
    sentences.push(input.value);
    alert(`Została dodana opcja ${input.value}`)
    input.value = "";
}
const btnClean = (e) => {
    e.preventDefault();
    sentences.length=0;  
    document.querySelector('h1').textContent = ""; 
}
const btnOpt = () => {
    alert(sentences.join("  --- ---  "));
}

document.querySelector('.add').addEventListener('click', btnAdd);
document.querySelector('.clean').addEventListener('click', btnClean);
document.querySelector('.showAdvice').addEventListener('click', btnAdvice);
document.querySelector('.showOptions').addEventListener('click', btnOpt);