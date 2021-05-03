
    const queue = [];
    const addButton = document.querySelector('.button-green');
    const deleteButton = document.querySelector('.button-red');

    function addQueueFunction    ()  {
        const custName = document.querySelector('#customer-name');
        const pickupLoc = document.querySelector('#pickup-location');
        const dropOffLoc = document.querySelector('#drop-off-location'); 
        if (custName.value == "" && pickupLoc.value =="" && dropOffLoc.value == "") {
           return alert(`you can't input an empty string`);
        } 
        else {
           let task = {
                id:null,
                customerName:custName.value,
                pickupLocation:pickupLoc.value,
                dropOffLocation:dropOffLoc.value
            }
            queue.push(task);
            custName.value = "";
            pickupLoc.value ="";
            dropOffLoc.value ="";
            console.log(queue);
        }
           
    }
        

    function onAdd   ()  {
               
    }

    function onDelete    ()  {}
    

addButton.addEventListener('click', addQueueFunction);