
    const queue = [];
    const addButton = document.querySelector('.button-green');
    const deleteButton = document.querySelector('.button-red');
    let id = 0;
    let tasks;
    

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
        }
           
    }
        

    function onAdd   ()  {
        // udate the list of queue when called
        // map through queue
                console.log(tasks);
                   let list = document.querySelector(".table-container");
                   let listItem = document.createElement("div");
                   listItem.className = "first-row";
                   listItem.innerHTML = `
                   <span><input type = "checkbox" id="${tasks.id}"/></span>
                   <span>${tasks.id}</span>
                   <span>${tasks.customerName}</span>
                   <span>${tasks.pickupLocation}</span>
                   <span>${tasks.dropOffLocation}</span>
                   `;
                   list.append(listItem);
                //    if statement for the other table
               }

    function onDelete    ()  {}
    

addButton.addEventListener('click', addQueueFunction);