/**
 * view.js
 * This file contains code that runs on load for view.html
 */

// TODO: Write the function displayLockerInfo
function displayLockerInfo(locker)
{
  let idarearef=document.getElementById('lockerId');
  let labelarearef=document.getElementById('lockerLabel');
  let colorarearef=document.getElementById('lockerColor');
  let contentsarearef=document.getElementById('lockerContents');

  idarearef.innerHTML=locker._id;
  labelarearef.value=locker._label;
  colorarearef.value=locker._color;
  contentsarearef.value=locker._contents;
   let del=document.getElementById("deleteLocker");
  del.addEventListener("click",deleteThisLocker);
}
// TODO: Write the function unlock
function unlock(locker)
{
   let lockerpin = prompt("Enter the pin.")
    if(lockerpin == locker._pin)
    {
      locker._locked=false;
      locker._pin = "";
      displayLockerInfo(locker);
    }
    else{window.location = "index.html";}
}

// TODO: Write the function deleteThisLocker
function deleteThisLocker()
{
  if (confirm("Are you sure you want to delete this locker??"))
    {
    lockers.removeLocker(locker._id);
    alert("Locker has been deleted!");
    updateLocalStorage(lockers);
    window.location = "index.html";
  }
}

// TODO: Write the function lockLocker
function lockLocker()
{
  if (confirm("Are you very sure you want to lock this locker?"))
{
    let firstprompt = prompt("Enter the locker pin.")
    let secondprompt = prompt("Enter the pin again to confirm.")
    if(firstprompt == secondprompt)
    {
      locker._pin = secondprompt;
      locker._locked = true;
      locker._contents = document.getElementById('lockerContents').value;
      locker._label = document.getElementById('lockerLabel').value;
      locker._color = document.getElementById('lockerColor').value;
      updateLocalStorage(locker);
      updateLocalStorage(lockers);
      alert("Locker is now locked!");
      window.location = "index.html";
    //  console.log(lockers)
    }
    else{alert("Locker pins don't match.")}
}

 }

// TODO: Write the function closeLocker
 function closeLocker()
 {
   if (confirm("Are you sure you want to close the locker without locking?"))
   {
     locker._pin = "";
     locker._locked = false;
     locker._contents = document.getElementById('lockerContents').value;
     locker._label = document.getElementById('lockerLabel').value;
     locker._color = document.getElementById('lockerColor').value;
     updateLocalStorage(locker);
     updateLocalStorage(lockers);
     alert("Warning: You are closing the locker before locking it! ");
     window.location = "index.html";
    }
 }
// Retrieve the stored index from local storage
let index = localStorage.getItem(LOCKER_INDEX_KEY);
// using the getLocker method, retrieve the current Locker instance
let locker = lockers.getLocker(index);

// TODO: Write the code that will run on load here

if(locker._locked == true)
{
unlock(locker)
}
else {displayLockerInfo(locker)}
