function listView(){
document.getElementsByClassName('gridbtn')[0].classList.remove('active');
document.getElementsByClassName('listbtn')[0].classList.add('active');


var elements = document.getElementsByClassName("box");
    for (i = 0; i < elements.length; i++) {
        elements[i].style.width = "50%";
    }
}

function gridView(){

document.getElementsByClassName('listbtn')[0].classList.remove('active');
document.getElementsByClassName('gridbtn')[0].classList.add('active');


var elements = document.getElementsByClassName("box");
    for (i = 0; i < elements.length; i++) {
        elements[i].style.width = "45%";
    }
}
