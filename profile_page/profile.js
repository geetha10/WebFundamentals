function sign_out(element){
    if(element.innerText == "Sign In"){
        element.innerText="Sign Out"
    }
    else{
        element.innerText="Sign In"
    }
}

function editProfile(){
    var userNameTag=document.querySelector("#user_name")
    if(userNameTag.innerText == "Geethanjali Medisetty"){
        userNameTag.innerText="Geetha Medisetty"
    } 
    else{
        userNameTag.innerText="Geethanjali Medisetty"
    }
}

function reqAccepted(id){
    element= document.querySelector(id)
    element.remove()
    connections=document.querySelector(".no_of_connections")
    conn_count=Number(connections.innerText)
    connections.innerText=conn_count+1;
    req_count=document.querySelector(".no_of_requests").innerText;
    document.querySelector(".no_of_requests").innerText=req_count-1;
}

function reqDeclined(id){
    element= document.querySelector(id)
    element.remove()
    req_count=document.querySelector(".no_of_requests").innerText;
    document.querySelector(".no_of_requests").innerText=req_count-1;
}