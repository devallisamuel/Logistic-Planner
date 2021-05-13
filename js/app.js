
    const queue = [];
    const addButton = document.querySelector('.button-green');
    const deleteButton = document.querySelector('.button-red');
    let id = 0;
    let tasks;
    let showDate = false;
    

    function addQueueFunction    ()  {
        const custName = document.querySelector('#customer-name');
        const pickupLoc = document.querySelector('#pickup-location');
        const dropOffLoc = document.querySelector('#drop-off-location'); 
        if (custName.value == "" && pickupLoc.value =="" && dropOffLoc.value == "") {
           return alert(`you can't input an empty string`);
        } 
        else {
            id++
            tasks = {
                id:id,
                customerName:custName.value,
                pickupLocation:pickupLoc.value,
                dropOffLocation:dropOffLoc.value
            }
            queue.push(tasks);
            custName.value = "";
            pickupLoc.value ="";
            dropOffLoc.value ="";
            console.log(queue);
            onAdd();
            return !showDate? setDate(): null;
        }
           
    }
        

    function onAdd   ()  {
        // udate the list of queue when called
        // map through queue
                   let list = document.querySelector(".table-container");
                   let listItem = document.createElement("div");
                   listItem.className = "first-row";
                   listItem.innerHTML = `
                   <span>${tasks.id}</span>
                   <span>${tasks.customerName}</span>
                   <span>${tasks.pickupLocation}</span>
                   <span>${tasks.dropOffLocation}</span>
                   `;
                   listItem.setAttribute("draggable", "true");
                   listItem.setAttribute("ondragstart", "drag(event)");
                   listItem.setAttribute("id", "drag1");
                   list.append(listItem);
                //    if statement for the other table
               }

    function setDate    ()  {
        var days = document.querySelectorAll('.days');
        const [
            firstDay,
            secondDay,
            thirdDay,
            fourthDay,
            fifthDay,
            sixthDay,
            seventhDay
        ] = days;
        let date = new Date();
        firstDay.innerHTML =`${new Date(date.setDate(date.getDate() + 1)).toDateString()}`;
        secondDay.innerHTML =`${new Date(date.setDate(date.getDate() + 1)).toDateString()}`;
        thirdDay.innerHTML=`${new Date(date.setDate(date.getDate() + 1)).toDateString()}`;
        fourthDay.innerHTML=`${new Date(date.setDate(date.getDate() + 1)).toDateString()}`;
        fifthDay.innerHTML=`${new Date(date.setDate(date.getDate() + 1)).toDateString()}`;
        sixthDay.innerHTML=`${new Date(date.setDate(date.getDate() + 1)).toDateString()}`;
        seventhDay.innerHTML = `${new Date(date.setDate(date.getDate() + 1)).toDateString()}`; 
    }
function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}
    
addButton.addEventListener('click', addQueueFunction);
