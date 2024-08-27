function calculateBMI(){
    let height=document.getElementById("height").value/100;
    let weight=document.getElementById("weight").value ;
    let bmi=(weight/ (height*height)).toFixed (2);
    document.getElementById('bmi-result').innerText=bmi;
    let category = "";
    if (bmi<18.5){category = "Underweight"} 
    else if (bmi >= 18.5 && bmi<=24.9){category="Normal weight";}
    else if (bmi >= 25 && bmi<=24.9){category="Overweight";} 
    else {category="obese";}
    document.getElementById('bmi-category').innerText = 'category: ' + category;
}