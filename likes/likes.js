
console.log("JS connected")
var like_count=[0,0,0]
var users=[document.querySelector("#post_1"),
document.querySelector("#post_2"),
document.querySelector("#post_3")
]

function likesCounter(id){
    console.log("Inside onclick")
    like_count[id]++;
    users[id].innerHTML = like_count[id]+" like(s)"
}
