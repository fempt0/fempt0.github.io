/**
 * shared.js
 * This file contains shared code that runs on both view.html and index.html
 */

// Constants used as KEYS for LocalStorage
const LOCKER_INDEX_KEY = "lockerIndex";
const LOCKER_DATA_KEY = "lockerData";
// Global LockerList instance variable
let lockers = null;

// TODO: Write code to implement the Locker class
class Locker
{
constructor(id)
{
  this._id = id;
  this._label = "";
  this._locked = false;
  this._pin = "";
  this._color = "3399ff";
  this._contents = "";
}
get  id() {return this._id;}
get label() {return this._label;}
get locked() {return this._locked;}
get pin() {return this._pin;}
get color() {return this._color;}
get contents() {return this._contents;}

set label(newlabel) {this._label = newlabel;}
set locked(newlocked) {this._locked = newlocked;}
set pin(newpin) {this._pin = newpin;}
set color(newcolor) {this._color = newcolor;}
set contents(newcontents) {this._contents = newcontents;}

fromData(dataObject)
	{
		this._id = dataObject._id;
		this._label = dataObject._label;
    this._locked = dataObject._locked;
    this._pin = dataObject._pin;
    this._color = dataObject._color;
    this._contents = dataObject._contents;
	}


}

// TODO: Write code to implement the LockerList class
  class LockerList
  {
    constructor()
    {
      this._lockers = [];
    }
//////////////////////////////
    get lockers() {return this._lockers;}
    get count() {return this._lockers.length;}
//////////////////////////////
    addLocker(id)
    {
      let newlocker = new Locker(id);
      this._lockers.push(newlocker);
    }
//////////////////////////////
    getLocker(index)
    {
      return this._lockers[index];
    }
//////////////////////////////
    removeLocker(id)
    {
      for (let i = 0;i<this.count;i++)
      {
        if (id == this._lockers[i]._id)
        {
          this._lockers.splice(i,1);
        }
      }
    }
///////////////////////////////
fromData(dataObject)
	{
		this._lockers = dataObject._lockers;
	}

  }

//creating lockerList instance
lockers = new LockerList();
// TODO: Write the function checkIfDataExistsLocalStorage
function checkIfDataExistsLocalStorage()
{
  let strobj = localStorage.getItem(LOCKER_DATA_KEY);
  if (strobj == null)
  {
    return false;
  }
  else if (!strobj)
  {
    return false;
  }
  else if (strobj == undefined)
  {
    return false;
  }
  else if (strobj === "")
  {
    return false;
  }
  else
  {
    return true;
  }
}

// TODO: Write the function updateLocalStorage
function updateLocalStorage(data)
{
  let strdata = JSON.stringify(data);
  localStorage.setItem(LOCKER_DATA_KEY,strdata);
}

// TODO: Write the function getDataLocalStorage
function getDataLocalStorage()
{
  let retrieve = localStorage.getItem(LOCKER_DATA_KEY);
  let retrieved = JSON.parse(retrieve);
  return retrieved;
}

// TODO: Write the code that will run on load here
if(checkIfDataExistsLocalStorage())
{lockers.fromData(getDataLocalStorage())
}
else{lockers.addLocker("A1")}
