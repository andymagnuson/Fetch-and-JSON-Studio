
function sortTime(a, b){
    
    return b.hoursInSpace - a.hoursInSpace;
   }



window.addEventListener("load", function() {
    fetch('https://handlers.education.launchcode.org/static/astronauts.json').then(function(response){
        response.json().then(function(json){
            const div = document.getElementById("container");
            const count = document.getElementById("count");
            count.innerHTML = `Count: ${json.length}`
           
            for (let i=0; i<json.length; i++){
                          
              json.sort(sortTime);  
                div.insertAdjacentHTML("beforeend", `
                    <div class="astronaut">
                    <div class="bio">
                        <h3>${json[i].firstName} ${json[i].lastName}</h3> 
                            <ul>
                                <li>Hours in space: ${json[i].hoursInSpace}</li>
                                <li id='${json[i].id}' >Active: ${json[i].active}</li>
                                <li>Skills:${json[i].skills}</li>
                            </ul>
                     </div>
                     <img class="avatar" src="${json[i].picture}">
                    </div>
                    ` )
                    
            if (json[i].active){
                 document.getElementById(json[i].id).style.color='green'
            } 
         
            }
            
          })
      
      });
   });