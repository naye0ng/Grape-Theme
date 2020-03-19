var modal = '';

function open_modal(id){
    modal = document.getElementById(id)
    modal.style.display = "block"
    console.log(modal)
}
function close_modal(){
    modal.style.display = "none"
}

var dp = ''

function on_hover(id){
       
    document.getElementById(id).src = "/assets/img/dp1.jpg"
     
}

function not_on_hover(id){
    document.getElementById(id).src = "/assets/img/dp.jpg"
}

function hover_name(){
       
    document.getElementById("user_name").innerHTML = "@iammarco11"
     
}

function not_hover_name(){
    document.getElementById("user_name").innerHTML = "Akshay Praveen Nair"
}