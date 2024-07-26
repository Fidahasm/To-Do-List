function AddTask() {
  var taskContent = document.getElementById('task').value;
  var addedtask = document.getElementById('list');
  var title = document.getElementById('title').value;

  if (taskContent.length > 0) {
      const taskItem = document.createElement('li');
      taskItem.textContent = taskContent;

      const dltbtn = document.createElement('i');
      dltbtn.className = 'bx bx-trash';
      dltbtn.addEventListener('click', () => {
          addedtask.removeChild(taskItem);
      });
      taskItem.appendChild(dltbtn);
      addedtask.appendChild(taskItem);

      var weeks = document.getElementById('week').value;
      var days = document.getElementById('day').value;
      document.getElementById('task-head').innerHTML = title;
      document.getElementById('head1').innerHTML = weeks;
      document.getElementById('head2').innerHTML = days;

      document.getElementById('select').style.display = "none";

      if (!document.getElementById('close')) {
          const clsbtn = document.createElement('button');
          clsbtn.textContent = 'Close List';
          clsbtn.id = "close";
          clsbtn.addEventListener('click', () => {
              const taskItems = document.querySelectorAll('#list li');
              const weeks = document.getElementById('head1').textContent;
              const days = document.getElementById('head2').textContent;
              const tl = document.getElementById('task-head').textContent;

              if (taskItems.length !== 0) {
                  const newDiv = document.createElement('div');
                  newDiv.classList.add("content");
                  newDiv.innerHTML = `<h1>${tl}</h1><p class="para">${weeks}</p><p class="para">${days}</p>
                      <div class="icon-id"><i class='bx bx-down-arrow-circle'></i></div>
                      <div class="up-arw"><i class='bx bx-up-arrow-circle'></i></div>`;
                      newDiv.querySelector('.up-arw').style.display = "none";

                  const ul = document.createElement("ul");
                  ul.classList.add("new-ul");
                  taskItems.forEach(item => {
                      const li = document.createElement('li');
                      li.textContent = item.firstChild.textContent;

                      const dltbtn = document.createElement("i");
                      dltbtn.className = 'bx bx-trash';
                      li.appendChild(dltbtn);

                      const tick = document.createElement('i');
                      tick.className = 'bx bx-checkbox-checked';
                      li.appendChild(tick);

                      tick.addEventListener("click", () => {
                          let cmpltlst = newDiv.querySelector(".cmpltlst");
                          if (!cmpltlst) {
                              const cmphead = document.createElement('h6');
                              cmphead.textContent = "Completed Task List";
                              cmphead.classList.add("cmphead");
                              newDiv.appendChild(cmphead);
                              cmpltlst = document.createElement('ul');
                              cmpltlst.classList.add("cmpltlst");
                              newDiv.appendChild(cmpltlst);
                          }
                          const newlist = document.createElement('li');
                          newlist.textContent = li.firstChild.textContent;
                          cmpltlst.appendChild(newlist);
                          ul.removeChild(li);
                      });

                      dltbtn.addEventListener("click", () => {
                          ul.removeChild(li);
                          if (ul.children.length === 0 && !newDiv.querySelector(".cmpltlst")) {
                              newDiv.parentElement.removeChild(newDiv);
                          }
                      });

                      ul.appendChild(li);
                  });

                  newDiv.appendChild(ul);

                  newDiv.querySelector('.icon-id').addEventListener("click", () => {
                      ul.style.display = ul.style.display === "none" ? "block" : "none";
                      newDiv.querySelector('.icon-id').style.display = "none";
                      newDiv.querySelector('.up-arw').style.display = "block";
                      if (ul.style.display === "block") {
                          newDiv.querySelector('.cmphead').style.display = "block";
                          newDiv.querySelector('.cmpltlst').style.display = "block";
                      } else {
                          newDiv.querySelector('.cmphead').style.display = "none";
                          newDiv.querySelector('.cmpltlst').style.display = "none";
                      }
                  });

                  newDiv.querySelector('.up-arw').addEventListener("click", () => {
                      ul.style.display = ul.style.display === "block" ? "none" : "block";
                      newDiv.querySelector('.icon-id').style.display = "block";
                      newDiv.querySelector('.up-arw').style.display = "none";
                      if (ul.style.display === "block") {
                          newDiv.querySelector('.cmphead').style.display = "block";
                          newDiv.querySelector('.cmpltlst').style.display = "block";
                      } else {
                          newDiv.querySelector('.cmphead').style.display = "none";
                          newDiv.querySelector('.cmpltlst').style.display = "none";
                      }
                  });

                  document.getElementById('completed-lists').appendChild(newDiv);
                  ul.style.display = "none";
              }

              document.getElementById('task-head').textContent = '';
              document.getElementById('head1').textContent = '';
              document.getElementById('head2').textContent = '';
              document.getElementById('list').innerHTML = '';

              const clsbtn = document.getElementById("close");
              if (clsbtn) {
                  clsbtn.remove();
              }

              document.getElementById('week').value = '';
              document.getElementById('day').value = '';
              document.getElementById("select").style.display = "inline";
          });
          document.getElementById('task-content').appendChild(clsbtn);
      }

      document.getElementById('task').value = '';
  } else {
      alert("Add a task!!");
  }
}
