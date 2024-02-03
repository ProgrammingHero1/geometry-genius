function calculatePentagonArea(){
    const perimeter = getInputValueById('pentagon-perimeter');
    const apothem = getInputValueById('pentagon-apothem');
    
    const area = 0.5 * perimeter * apothem;
    setInnerTextById('pentagon-area', area);
}

function getInputValueById(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputValueText = inputField.value;
    const value = parseFloat(inputValueText);
    return value;
}

function setInnerTextById(elementId, area){
    const element = document.getElementById(elementId);
    element.innerText = area;
}