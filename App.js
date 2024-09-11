window.onload = () => {

  // body variable
  let body = document.querySelector("body");

  // input variable holder
  let input1Variable = document.getElementById("input1");

  // enter button variable holder
  let btn = document.getElementById("btn");

  //event listener for enter click
  btn.addEventListener("click", function () {
    let username = input1Variable.value;
    var newDiv = document.createElement("h3");
    newDiv.innerHTML = " hello  " + username;

    body.appendChild(newDiv);
    input1Variable.value = '';
    console.log(username)

  });

  // delete button variable holder
  let deleteButton = document.getElementById("deleteBtn");
   deleteButton.addEventListener("click",() =>{
    
    let divToRemove = document.querySelector('h3');
    divToRemove.remove();

  }

  );
   
  
};
// operators

