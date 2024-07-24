 
 
 
 function AddTask()
    {
        var taskContent = document.getElementById('task').value;
        var addedtask = document.getElementById('list');
        var title = document.getElementById('title').value;

        if( document.getElementById("task").value.length > 0  )
            {
                
                const taskItem = document.createElement('li');
                taskItem.textContent = taskContent

                const dltbtn = document.createElement('button');
                dltbtn.textContent = 'Delete';
                dltbtn.addEventListener('click',() =>
                {
                    list.removeChild(taskItem);
                });
                taskItem.appendChild(dltbtn);
                list.appendChild(taskItem);

                var weeks = document.getElementById('week').value;
                var days = document.getElementById('day').value;
                document.getElementById('task-head').innerHTML=title;
                document.getElementById('head1').innerHTML=weeks;
                document.getElementById('head2').innerHTML=days;

                document.getElementById('select').style.display = "none";

            
                if(!document.getElementById('close')){
                    const clsbtn = document.createElement('button');
                    clsbtn.textContent='Close List';
                    clsbtn.id = "close";
                    clsbtn.addEventListener('click',() =>
                    {
                        const taskItems = document.getElementById('list').querySelectorAll('li');
                         const weeks = document.getElementById('head1').textContent;
                        const days = document.getElementById('head2').textContent;
                        const tl = document.getElementById('task-head').textContent;
                       // const taskContent = document.getElementById('list').innerHTML;
                        if(document.getElementById('list').children.length !== 0)
                            {

                        const newDiv=document.createElement('div');
                        newDiv.id="content";
                        newDiv.innerHTML = `<h1>${tl}</h1><p  class="para">${weeks}</p><p class="para">${days}</p><a href="" id="icon-id" ><i class='bx bx-right-top-arrow-circle' ></i><a>`;

                        const ul=document.createElement("ul");
                        ul.id = "new-ul";
                        taskItems.forEach(item => {
                            const li=document.createElement('li');
                            li.textContent = item.firstChild.textContent;

                            const dltbtn = document.createElement("button");
                            dltbtn.textContent = "Delete";
                            li.appendChild(dltbtn);
                            dltbtn.addEventListener("click",() => {
                                ul.removeChild(li);
                                if (ul.children.length === 0){
                                    newDiv.parentElement.removeChild(newDiv);
                                }

                            });
                            ul.appendChild(li);
                             

                         });
                         
                         newDiv.appendChild(ul);
                        
                        document.getElementById('completed-lists').appendChild(newDiv);
                        document.getElementById('new-ul').style.display = "none";


                        // function ExtendDiv(){
                        //     document.getElementById('new-ul').style.display = "block";

                        // }
                        // document.getElementById('icon-id').onclick=ExtendDiv;
                   

                        }
                        
                       
                        
                        document.getElementById('task-head').textContent = ' ';
                        document.getElementById('head1').textContent = ' ';
                        document.getElementById('head2').textContent = ' ';
                        document.getElementById('list').innerHTML = ' ';

                        const clsbtn = document.getElementById("close");
                        if(clsbtn){
                            clsbtn.remove();
                        }   
                        document.getElementById('week').value = ' ' ;
                        document.getElementById('day').value = ' ' ;
                        document.getElementById("select").style.display = "inline";  

                    });
                    document.getElementById('task-content').appendChild(clsbtn);
                }

                document.getElementById('task').value = ' ';
            }
            else{

               alert("Add a task!!");

            }
        
    }

