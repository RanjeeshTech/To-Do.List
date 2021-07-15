function changecolor(){
    if(document.getElementById("mySelect").value=="low"){
        document.getElementById("addtasks").onclick = function() { addtask("#c6f6c6") };
    }
    else if(document.getElementById("mySelect").value=="medium"){
        document.getElementById("addtasks").onclick = function() { addtask("#fff1ca") };
    }
    else if(document.getElementById("mySelect").value=="high"){
        document.getElementById("addtasks").onclick = function() { addtask("#ff9797") };
    }

    function addtask(color){
      var task = document.getElementById("newtask").value;
        if(task==""){
            alert("Please enter a task");
        }
        else if(document.getElementById("mySelect").value=="select"){
            alert("Please select a priority for the work");
        }
        else{
        if(task!=""){
            //creates a list
            var list = document.createElement("LI");
            var textnode = document.createTextNode(task);
            list.appendChild(textnode);
            list.onclick = function() { complete() };
            list.style.backgroundColor = color;   
            list.setAttribute('content_value', "Click to complete");    
            //appending the list to the all_tasks ul
            document.getElementById("all_tasks").appendChild(list);
                          
            document.getElementById("newtask").value = "";  
            document.getElementById("mySelect").value="select";
        }
        else{
            alert("Please enter a task")
        }
        //complete() function completes the task
        function complete(){  
            list.style.listStyleImage = "url('./assets/tick2.png')";
            list.onclick =function(){ deletetask() };
        }   
        function deletetask(){
            var gettask = document.getElementById("all_tasks");
            //Removing the list from the all_tasks div
            gettask.removeChild(list);
        }    
        }
    }
}
//To display the low priority tasks
function lowtasks(){
  var ul = document.getElementById("all_tasks");
  var items = ul.getElementsByTagName("li");
  var color="rgb(198, 246, 198)";
    for(let i=0;i<items.length;++i){
      if(items[i].style.backgroundColor!=color){
        items[i].style.display="none";
      }
      else{
        items[i].style.display="";
      }
    }
}
//To display the medium priority tasks
function mediumtasks(){
    var ul = document.getElementById("all_tasks");
  var items = ul.getElementsByTagName("li");
  var color="rgb(255, 241, 202)";
    for(let i=0;i<items.length;i++){
      if(items[i].style.backgroundColor!=color){
        items[i].style.display="none";
      }
      else{
        items[i].style.display="";
      }
    }
}
//To display the high priority tasks
function hightasks(){
  var ul = document.getElementById("all_tasks");
  var items = ul.getElementsByTagName("li");
  var color="rgb(255, 151, 151)";
    for(let i=0;i<items.length;i++){
      if(items[i].style.backgroundColor!=color){
        items[i].style.display="none";
      }
      else{
        items[i].style.display="";
      }
    }
}
//To display the alltasks
function alltasks(){
  var ul = document.getElementById("all_tasks");
  var items = ul.getElementsByTagName("li");
    for(let i=0;i<items.length;i++){
        items[i].style.display="";
    }
}