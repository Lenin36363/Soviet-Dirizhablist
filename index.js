// let job = document.getElementById("job");
// console.log(typeof(job));

document.getElementById("subscribe").onclick = function(){
    let bday = document.getElementById("bday").value;
    let fiveYears = document.getElementById("fiveYears").value;
    let email = document.getElementById("email").value;
    let cardNumber = document.getElementById("cardNumber").value;
    let rubleAccount = document.getElementById("rubleAccount").value;
    let alcohol = document.getElementById("alcohol").value;
    let education = document.getElementById("education").value;
    let job = document.getElementById("job").value;
    let products = document.getElementById("products").value;
    let spy = document.getElementById("spy").value;

    if (bday != '1870-04-22' & bday != "" ){
        alert("Контра!");
    }

    let data = [bday, fiveYears, email, cardNumber, rubleAccount, alcohol, education, job, products, spy];

    //alert("Подписка оформлена, данные переданы КГБ");
    console.log(data);
}





