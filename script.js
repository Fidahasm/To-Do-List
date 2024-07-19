 function AddTask()
    {
        if( document.getElementById("task").value.length > 0 )
            {
                // document.getElementById("list").innerHTML = document.getElementById("task").value;
                const taskItem=document.createElement('li');
                taskItem.textContent = document.getElementById('task').value;

                const dltbtn = document.createElement('button');
                dltbtn.textContent = 'Delete';
                dltbtn.addEventListener('click',() =>{
                    list.removeChild(taskItem);
                });
                taskItem.appendChild(dltbtn);
                list.appendChild(taskItem);
                
                document.getElementById('task').value=" ";
                

            }
            else{

                //var task1=document.getElementById('task').value;
               alert("Add a task!!");

            }
        
    }


