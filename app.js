const firebaseConfig = {
    apiKey: "AIzaSyBKT2bLMf9fTWn3czQAN1Xflx_DXsjmRc8",
    authDomain: "todo-app-f4d43.firebaseapp.com",
    projectId: "todo-app-f4d43",
    storageBucket: "todo-app-f4d43.appspot.com",
    messagingSenderId: "570760642416",
    appId: "1:570760642416:web:7ab7abda8cdfb3196019b5"
  };

  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);
  console.log(app)
function addItem(){
    var val = document.getElementById('item');
    if(!val.value.trim()){
alert("Enter your task")
    }
    else{

var table = document.getElementById('table');



var txtTd = document.createElement('td');
var editBtnTd = document.createElement('td');
var delBtnTd = document.createElement('td');

var editBtn = document.createElement("button");
var delBtn = document.createElement("button");



var taskText = document.createTextNode(val.value);
txtTd.appendChild(taskText);
app.database().ref("/user").push(val.value)

var editBtnTxt = document.createTextNode("Edit");
var delBtnTxt = document.createTextNode("Delete");

editBtn.appendChild(editBtnTxt);
delBtn.appendChild(delBtnTxt);
editBtn.setAttribute('class',"editBtn");
delBtn.setAttribute('class',"delBtn");

editBtn.setAttribute('onclick',"editItem(this)");
delBtn.setAttribute('onclick',"delItem(this)");


editBtnTd.appendChild(editBtn);
delBtnTd.appendChild(delBtn);

txtTd.setAttribute('class',"firstTd");
editBtnTd.setAttribute('class',"secondTd");
delBtnTd.setAttribute('class',"thirdTd");

var tr = document.createElement("tr");
tr.appendChild(txtTd);
tr.appendChild(editBtnTd);
tr.appendChild(delBtnTd);


table.appendChild(tr);

val.value = ""
}
}



function editItem(e){
console.log(e);

var  val  = e.parentNode.previousSibling.innerText;
var uptval = prompt('Enter new Task',val)

if(!uptval.trim()){
    alert("Empty Input, Changes not saved")
}
else{
    e.parentNode.previousSibling.innerText = uptval
    app.database().ref("/user"+key).update(val.value)
}


}

function delItem(e){
    e.parentNode.parentNode.remove();
    app.database().ref("/user"+e).child("/").remove(e)

}


function deleteAll(){
    var table = document.getElementById('table');
    table.innerHTML = ""
    app.database().ref("/user").child("/").remove()

}