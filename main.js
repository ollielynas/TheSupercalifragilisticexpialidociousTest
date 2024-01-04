

var started = false;


var done = "";
var to_to = "supercalifragilisticexpialidocious";
var timer;
var text;
var start = new Date().getTime();
window.addEventListener("load", () => {
    timer = document.getElementById("timer");
    text = document.getElementById("text");
});

document.addEventListener("keydown", function (event) {

    if (to_to == "") {
      to_to = "supercalifragilisticexpialidocious";
      done = "";
    }

  if (event.key == to_to[0]) {
    done = done + to_to[0]
    to_to = to_to.replace(to_to[0], "");
}
  text.innerHTML = done + "<i>" + to_to + "</i>"; 
});


let timer_timeout = setInterval(() => {
    if (done != ""  && to_to != "") {
        timer.innerText = (new Date().getTime() - start)/1000;
    }
}, 1);

function update_timer() {

}

