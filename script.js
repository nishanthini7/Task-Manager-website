var input= document.getElementById("task")
        var ul= document.querySelector(".list-container")
        function display_task(){
            if(input.value==""){
                alert("Enter the task to be done!")
            }
            else{
                var listItem=document.createElement("li")
                listItem.innerHTML=input.value +  "<button onclick='remove_task(event)' id='id3'>Delete</button>"
                ul.append(listItem)
            }
            input.value=""    
        }
        function remove_task(event){
            event.target.parentElement.remove()
        }
        ul.addEventListener("click",function(e)
        {
            if(e.target.tagName ==="LI"){
                e.target.classList.toggle("checked");
            }
           
        },false);
