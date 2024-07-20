 
 
 
 function AddTask()
    {
        document.getElementById('select').style.display="none";
        var taskContent = document.getElementById('task').value;

        if( document.getElementById("task").value.length > 0 )
            {
                const clsbtn=document.createElement('button');
                clsbtn.textContent='Close List';
                clsbtn.id="close";
                clsbtn.addEventListener('click',CloseList);
                function CloseList(){
                    const newDiv=document.createElement('div');
                    newDiv.id="content";
                    const newList=document.createElement('ul');
                    newDiv.appendChild(weeks);
                    newDiv.appendChild(days);
                    newList.appendChild(taskItem);
                    newDiv.appendChild(newList);
                   
                }
                element=document.getElementById('close');
                const taskItem=document.createElement('li');
                taskItem.textContent = taskContent

                const dltbtn = document.createElement('button');
                dltbtn.textContent = 'Delete';
                dltbtn.addEventListener('click',() =>{
                    list.removeChild(taskItem);
                });
                taskItem.appendChild(dltbtn);
                list.appendChild(taskItem);

                if(!element){
                    buttons.appendChild(clsbtn)
                }
               

    
                // list.appendChild(weeks);
                // list.appendChild(days);

                var weeks=document.getElementById('week').value;
                var days=document.getElementById('day').value;
               document.getElementById('head1').innerHTML=weeks;
               document.getElementById('head2').innerHTML=days;
                taskContent=" ";
                

            }
            else{

               alert("Add a task!!");

            }
        
    }


