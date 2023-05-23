function calculate(){
    let weight = document.getElementById('weight').value
    let height = document.getElementById('height').value

    let bmi = (weight / (height * height) 
).toFixed(2);
// alert(bmi)

if (bmi<18.5){
    alert('Your BMI is '+bmi +' and you are Underweight 🔵')
}
else if(18.5<=bmi&&bmi<=24.9){
    alert('Your BMI is '+bmi +' and you are Healthy🟢')
}

else if(25<=bmi&&bmi<=29.9){
    alert('Your BMI is '+bmi +' and you are Overweight🟡')
}

else if (30<=bmi&&bmi<=34.9){
    alert('Your BMI is '+bmi +' and you are Obese 🟠')
}
else if(35<=bmi){
    alert('Your BMI is '+ bmi + ' and you are Extremely Obese 🔴')

    
}

}


 
function clr() {
    // let clear =height.value; weight.value 
    document.getElementById('weight').value = "";
    weight.value = "";
    document.getElementById('height').value ="",
    height.value="";
}
