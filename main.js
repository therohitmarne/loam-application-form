function totalEmi() {
    var amount = parseInt(document.querySelector('#loan').value);
    var year = parseInt(document.querySelector('#tenure').value);
    var month = parseInt(year * 12);

    var rate = 0.091;
    var emical = parseInt(((amount) + (amount * rate * year)) / month);

    document.querySelector('#show').innerHTML = "Rs." + " " + emical + " " + "/- month";
}
function submit() {
    var namee = document.querySelector('#name').value;
    var email = document.querySelector('#email').value;
    var otp = Math.ceil(1000 + Math.random() * 10000);

    sessionStorage.setItem("firstName", namee);
    sessionStorage.setItem("Email", email);
    sessionStorage.setItem("Otp", otp);

}