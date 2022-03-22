const inputBox = document.querySelector(".inputField input");
const addBtn = document.querySelector(".inputField button"); 
const todoList = document.querySelector(".todo-list");
const deleteAllBtn = document.querySelector(".footer button");
    
    
    inputBox.onkeyup = ()=>{
    let userEnteredValue = inputBox.value; 
    if(userEnteredValue.trim() != 0){ 
      addBtn.classList.add("active"); 
    }else{
      addBtn.classList.remove("active"); 
    }
  }
  showTasks();
  addBtn.onclick = ()=>{
      let userEnteredValue =inputBox.value;
      let getLocalStorageData =localStorage.getItem("New Task");
      if(getLocalStorageData == null){
          listArr =[];
      }else{
          listArr =JSON.parse(getLocalStorageData);
      }
      listArr.push(userEnteredValue)
      localStorage.setItem("New Task", JSON.stringify(listArr));
      showTasks();
    }

    function showTasks(){
      let getLocalStorageData=localStorage.getItem("New Task");
      if(getLocalStorageData == null){
        listArr=[];
      }else{
        listArr =JSON.parse(getLocalStorageData);
    }
    const pendingTasksNumb = document.querySelector(".pendingTasks");
    pendingTasksNumb.textContent = listArr.length;

    let newLiTag ="";
    listArr.forEach((element,index)=>{

      newLiTag += `<li>${element}<span class="icon" onclick="deleteTask(${index})"><i class="fas fa-trash"></i></span></li>`;
  });
  todoList.innerHTML = newLiTag; 
  inputBox.value = ""; //once task added leave the input field blank
}
    function deleteTask(index){
      let getLocalStorageData =localStorage.getItem("New Task");
      listArr =JSON.parse(getLocalStorageData);
      listArr.splice(index,1);
      localStorage.setItem("New Task",JSON.stringify(listArr));
      showTasks();
    }
    deleteAllBtn.onclick = ()=>{
      listArr =[];
      localStorage.setItem("New Task",JSON.stringify(listArr));
      showTasks();

    }
