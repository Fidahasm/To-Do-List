document.addEventListener('DOMContentLoaded', function() {
     const tl = "Title";
     const weeks = "Weeks content";
     const days = "Days content";
   
     const newDiv = document.getElementById('newDiv');
     newDiv.innerHTML = `<h1>${tl}</h1><p id="weeks">${weeks}</p><p id="days">${days}</p><a href="" id="icon-id"><i class='bx bxs-right-top-arrow-circle'></i><a>`;
   
    // Function to handle button click
     function yourFunction() {
       alert('Button was clicked!');
     }
   
     //Add event listener to the button after it has been added to the DOM
     document.getElementById('icon-id').onclick = yourFunction;
   });
   