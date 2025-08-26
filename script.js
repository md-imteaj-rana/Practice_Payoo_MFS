// login_btn func
document.getElementById("login_btn")
.addEventListener("click", function(e){
    e.preventDefault() // this will prevent loading everytime after login button
    let phn_num = 123456789
    let pin_num = 4321
    let phn_num_val = document.getElementById("phn_number").value
    let phn_num_val_converted = parseInt(phn_num_val)

    let pin_num_val = document.getElementById("pin_number").value
    let pin_num_val_converted = parseInt(pin_num_val)

    if(phn_num_val_converted === phn_num && pin_num_val_converted === pin_num){
        window.location.href="homepage.html"
    }
    else{
        alert("Invalid Mobile Number or Pin")
    }
})