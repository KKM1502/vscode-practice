document.querySelector('#push_s').onclick = function(){
    if(document.querySelector('#newtask_s input').value.length==0 ||document.querySelector('#newtask_s input').value.length>=3){
        alert("The Score myabe between 0 and 100")
    }
    else{
        document.querySelector('#tasks_s').innerHTML += `
            <div class="task_s">
                <span id="taskname_s">
                    ${document.querySelector('#newtask_s input').value}
                </span>
            </div>
        `;

        let current_tasks_s = document.querySelectorAll(".task_s");
        for(let i=0; i<current_tasks_s.length; i++){
            current_tasks_s[i].onclick = function(){
                this.remove();
            }
        }


        document.querySelector("#newtask_s input").value = "";
    }
}