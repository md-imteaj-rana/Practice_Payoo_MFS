document.getElementById("add_money_btn")
.addEventListener("click",function(e){
    e.preventDefault()
    let bank = document.getElementById("bank_select").value
    let amount = parseInt(document.getElementById("amount_money").value)
    let acc_number = document.getElementById("acc_number").value
    let acc_pin = parseInt(document.getElementById("acc_pin").value)
    let balance = parseInt(document.getElementById("balance").innerText)

    let valid_pin = 4321

    if(acc_number.length < 11){
        alert("ACC Number Incorrect!!")
        return;
    }   

    if(pin !== valid_pin){
        alert("Incorrect Pin!!")
        return;
    }

    let new_balance = balance + amount

    document.getElementById("balance").innerText = new_balance

})


// Toggling feature
// for add money toggle
document.getElementById("add_btn").
    addEventListener("click", function(){
        document.getElementById("cashout").style.display = "none"
        document.getElementById("add_money").style.display = "block"
    })


// for cashout toggle
document.getElementById("cashout_btn").
    addEventListener("click", function(){
        document.getElementById("add_money").style.display = "none"
        document.getElementById("cashout").style.display = "block"
    })