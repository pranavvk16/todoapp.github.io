var database = [];
var todo = document.querySelector("input");
var y = window.localStorage;
todo.addEventListener("keyup", (e) => {
    if (e.code === "Enter" && todo.value != "" && todo.value.length < 100) {
        database.push(todo.value)
        // console.log(todo.value)
        submit();
        todo.value = "";

    }
},
);
//printing list
var list = document.querySelector("ul");
function submit() {
    list.innerHTML = ``;
    database.map((itm, index) => {
        y.setItem(index, itm);
        list.innerHTML += `<li>${itm} &nbsp; <button id="done" class="btn" onclick=done(${index}); >✓</button> &nbsp;
         <button onclick=cut(${index}); id="cut" class="btn">X</button></li>`;
    })
}

//deleting list item
const cut = (index) => {
    database.splice(index, 1)
    submit();
}

const done = (index) => {
    database[index] = database[index].strike();
    submit();
}
//getting time 
var mytime = document.querySelector(".time")
setInterval(() => {
    var time = new Date;
    var hour = time.getHours();
    var minutes = time.getMinutes();
    var sec = time.getSeconds();
    var ampm = hour >= 12 ? "pm" : "am"
    hour = hour % 12;
    hour = hour ? hour : 12;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    sec = sec < 10 ? '0' + sec : sec;
    currtime = hour + " : " + minutes + " : " + sec + " : " + ampm;
    mytime.innerHTML = currtime;
}, 1000)


// var update=()=>{
//     if(y.length){
//     var k=0;
//     for(var x in y){
//       if(k<y.length){
//     console.log(y.getItem(x))
//         database.push(y.getItem(x));
//       }
//       k++;
//     }}
//     }

console.log("hviy");

