// function to get input val
function get_input_val_num(id){
    let input_field = document.getElementById(id)
    let input_field_val = input_field.value
    let input_field_val_num = parseInt(input_field_val)

    return input_field_val_num
    // we will use this function from now to get input value which need to be converted.
}

function get_input_val(id){
    let input_field = document.getElementById(id)
    let input_field_val = input_field.value

    return input_field_val
}

function get_inner_text_num(id){
    let input_field = document.getElementById(id)
    let input_field_val = input_field.value
    let input_field_val_num = parseInt(input_field_val)

    return input_field_val_num
}

function set_inner_text(val){
    let available_balance = document.getElementById("balance")
    available_balance.innerText = val
}

function toggle_cards(id){
    let cards = document.getElementsByClassName("cat_card")

    for(let i of cards){
        i.style.display = "none"
    }
    document.getElementById(id).style.display = "block"
}

function toggle_btn(id){
    let btns = document.getElementsByClassName("catgr_cards")

    for(let i of btns){
        i.classList.remove("border-[#0874f2]", "bg-[#0874f20d]")
        i.classList.add("border-gray-300")
    }

    document.getElementById(id).classList.remove("border-gray-300")
    document.getElementById(id).classList.add("border-[#0874f2]", "bg-[#0874f20d]")

}

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
        let agent_number = get_input_val("agent_number")

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
        if(cashout_amount <= 0){
            alert("Invalid Amount!!")
            return;
        }
        let new_balance2 = balance_2 - cashout_amount
        document.getElementById("balance").innerText = new_balance2
    })

// transfer
document.getElementById("send_btn").addEventListener("click", function(e){
    e.preventDefault()

    let user_acc_num = get_input_val("user_acc_number")
    let transfer_amount = get_input_val_num("transfer_amount")
    let pin_t = get_input_val_num("acc_pin_t")
    let balance_t = get_inner_text_num("balance")
    let valid_pin = 4321

    if(user_acc_num.length < 11){
        alert("Invalid Account Number")
        return;
    }

    if(pin_t !== valid_pin){
            alert("Incorrect Pin!!")
            return;
    }

    if(transfer_amount > balance_t){
        alert("Invalid Amount")
        return;
    }

    let new_balance_t = balance_t - transfer_amount

    set_inner_text(new_balance_t)
})

    
// Toggling feature
// for add money toggle
document.getElementById("add_btn").
    addEventListener("click", function(){
        toggle_cards("add_money")
        toggle_btn("add_btn")
    })


// for cashout toggle
document.getElementById("cashout_btn").
    addEventListener("click", function(){
        toggle_cards("cashout")
        toggle_btn("cashout_btn")
    })

// for transfer toggle
document.getElementById("transfer_btn").addEventListener("click", function(){
    toggle_cards("transfer")
    toggle_btn("transfer_btn")
})