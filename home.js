// add money 
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

        if(acc_pin !== valid_pin){
            alert("Incorrect Pin!!")
            return;
        }

        let new_balance = balance + amount

        document.getElementById("balance").innerText = new_balance

    })

// cashout 
document.getElementById("withdraw_btn").
    addEventListener("click", function(e){
        e.preventDefault()

        let cashout_amount = parseInt(document.getElementById("cashout_amount").value)
        let balance_2 = parseInt(document.getElementById("balance").innerText)
        let acc_pin_w = parseInt(document.getElementById("acc_pin_w").value)

        let valid_pin = 4321

        if(agent_number.length < 11){
            alert("Agent Number Incorrect!!")
            return;
        }   

        if(acc_pin_w !== valid_pin){
            alert("Incorrect Pin!!")
            return;
        }
        if(balance_2 < cashout_amount){
            alert("Insufficient balance!!!")
            return;
        }
        let new_balance2 = balance_2 - cashout_amount
        document.getElementById("balance").innerText = new_balance2
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