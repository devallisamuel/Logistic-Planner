
    const queue = [];
    const addButton = document.querySelector('.button-green');
    const deleteButton = document.querySelector('.button-red');
    let id = 0;

    function addQueueFunction    ()  {
        const custName = document.querySelector('#customer-name');
        const pickupLoc = document.querySelector('#pickup-location');
        const dropOffLoc = document.querySelector('#drop-off-location'); 
        if (custName.value == "" && pickupLoc.value =="" && dropOffLoc.value == "") {
           return alert(`you can't input an empty string`);
        } 
        else {
           let tasks = {
                id:id++,
                customerName:custName.value,
                pickupLocation:pickupLoc.value,
                dropOffLocation:dropOffLoc.value
            }
            queue.push(tasks);
            custName.value = "";
            pickupLoc.value ="";
            dropOffLoc.value ="";
            console.log(queue);
        }
           
    }
        

    function onAdd   ()  {
        // udate the list of queue when called
        // map through queue
               queue.map(task =>{
                   
               });
    }

    function onDelete    ()  {}
    

addButton.addEventListener('click', addQueueFunction);