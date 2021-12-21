count=0
console.log("JS connected")
function likesCounter(element){
    count += 1;
    var likes=document.querySelector(".no_of_likes");
    console.log(likes)
    likes.innerText = count +" Like(s)"
}