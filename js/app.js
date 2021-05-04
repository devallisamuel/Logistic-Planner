
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
            setDate();
            secondTableUpdate();
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
        days.className.add('.table-head');
    }
    

    function secondTableUpdate    ()  {
        const cell = document.querySelectorAll('.one');
        const[
            one,
            two,
            three,
            four,
            five,
            six,
            seven,
            eight,
            nine,
            ten,
            eleven,
            twelve,
            thirteen,
            fourteen,
            fifteen,
            sixteen,
            seventeen,
            eighteen,
            nineteen,
            twenty,
            twentyOne,
            twentyTwo,
            twentyThree,
            twentyFour,
            twentyFive,
            twentySix,
            twentySeven,
            TwentyEight

        ]= cell;
        // creates new cell
        // updates new cell
        // moves to the next column when it exceed 4 rows
        for(let i= id; i<=queue.length; i++)  {
            if(i==1) {
               return one.innerHTML = `${tasks.customerName}`; 
            }
            else if(i==2)   {
                return eight.innerHTML = `${tasks.customerName}`; 
            }
            else if(i==3){
                return fifteen.innerHTML = `${tasks.customerName}`; 
            }
            else if(i==4)  {
                return twentyTwo.innerHTML = `${tasks.customerName}`; 
            }
            else if(i==5)  {
                return two.innerHTML = `${tasks.customerName}`; 
            }
            else if(i==6){
                return nine.innerHTML = `${tasks.customerName}`; 
        }
            else if(i==7){
                return sixteen.innerHTML = `${tasks.customerName}`; 
        }
            else if(i==8){
                return twentyThree.innerHTML = `${tasks.customerName}`; 
        }
            else if(i==9){
                return three.innerHTML = `${tasks.customerName}`; 
        }
            else if(i==10){
                return ten.innerHTML = `${tasks.customerName}`; 
        }
            else if(i==11){
                return seventeen.innerHTML = `${tasks.customerName}`; 
        }
            else if(i==12){
                return  twentyFour.innerHTML = `${tasks.customerName}`; 
        }
            else if(i==13){
                return  four.innerHTML = `${tasks.customerName}`; 
        }
            else if(i==14){
                return  eleven.innerHTML = `${tasks.customerName}`; 
        }
            else if(i==15){
                return  eighteen.innerHTML = `${tasks.customerName}`; 
        }
            else if(i==16){
                return  twentyFive.innerHTML = `${tasks.customerName}`; 
        }
            else if(i==17){
                return  five.innerHTML = `${tasks.customerName}`; 
        }
            else if(i==18){
                return  twelve.innerHTML = `${tasks.customerName}`; 
        }
            else if(i==19){
                return  nineteen.innerHTML = `${tasks.customerName}`; 
        }
            else if(i==20){
                return  twentySix.innerHTML = `${tasks.customerName}`; 
        }
            else if(i==21){
                return  six.innerHTML = `${tasks.customerName}`; 
        }
            else if(i==22){
                return  thirteen.innerHTML = `${tasks.customerName}`; 
        }
            else if(i==23){
                return twenty.innerHTML = `${tasks.customerName}`; 
        }
            else if(i==24){
                return twentySeven.innerHTML = `${tasks.customerName}`; 
        }
            else if(i==25){
                return  seven.innerHTML = `${tasks.customerName}`; 
        }
        else if(i==26){
            return  fourteen.innerHTML = `${tasks.customerName}`; 

        }
        else if (i==27)   {
            return twentyOne.innerHTML = `${tasks.customerName}`; 
        }
        else{
            return  TwentyEight.innerHTML = `${tasks.customerName}`; 
        }
    }   
    }
addButton.addEventListener('click', addQueueFunction);
{/* <span><input type = "checkbox" id="${tasks.id}"/></span> */}