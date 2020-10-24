/**
 * main.js
 * This file contains code that runs on load for index.html
 */

// TODO: Write the function displayLockers
function displayLockers(data)
{
  let outputarearef = document.getElementById('lockerDisplay');
  let output="";
  let lockerstatus=""
  for(let c=0;c<data.count;c++)
  {
    if(data._lockers[c]._locked)
    {
      lockerstatus=`<i class="material-icons">lock</i>`
    }
    else{lockerstatus = `<i class="material-icons">lock_open</i>`}
    output+=`  <div class="mdl-cell mdl-cell--4-col">
          <div class="mdl-card mdl-shadow--2dp locker" style="background-color:#${data._lockers[c]._color}">
              <div class="mdl-card__title mdl-card--expand">
                  <h2>${data._lockers[c]._id}</h2>
              </div>
              <div class="mdl-card__actions mdl-card--border">
                  <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" onclick="view(${c})">Open Locker</a>
                  <div class="mdl-layout-spacer"></div>
                  ${lockerstatus}
              </div>
          </div>
      </div>`;
  }
  outputarearef.innerHTML = output
}

// TODO: Write the function addNewLocker
function addNewLocker()
{
 let id_input = prompt("Please enter an ID.")
 lockers.addLocker(id_input);
 updateLocalStorage(lockers);
 displayLockers(lockers);
}

// TODO: Write the function view
function view(index)
{
localStorage.setItem(LOCKER_INDEX_KEY,index)
  window.location = "view.html";
}

// TODO: Write the code that will run on load here
displayLockers(lockers);
