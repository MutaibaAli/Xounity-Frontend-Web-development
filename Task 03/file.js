let age = parseInt(prompt("Enter your age:")); 
let isStudent = confirm("Are you a student? Click OK for Yes, Cancel for No."); 
function checkDiscount(age, isStudent) {
    if (age >= 65) {
        alert("You get a 10% discount");
    } else if (age >= 18 && age <= 25 && isStudent) {
        alert("You get a 5% discount");
    } else {
        alert("No discount");
    }
}

checkDiscount(age, isStudent);
