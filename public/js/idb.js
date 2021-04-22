
// *******************************************
// establish a connection to IndexedDB database called 
//'travel_budget' and set it to version 1
// *******************************************
// db stores the 
// database object when the connection is complete.
// After that, we create the request variable to act as
// an event listener for the database.That event listener
// is created when we open the connection to the database
// using the indexedDB.open() method.
// **********************************************  
//  The .open() method takes the following two parameters:
//  - name of the IndexedDB database we're either creating or connecting to 
//  - database version. (1 by default ) which is used to determine
// whether the database's structure has changed between connections.
// *******************************************

let db;
const request = indexedDB.open('travel_budget', 1);

// the onupgradeneeded listener  handles the event of a change to the database
// structure ie when when we first connect to indexedDB or if the version changes.

request.onupgradeneeded = function (event) {
  const db = event.target.result;
  // create a locally-scoped connection to the db &
  // create the object store(table) called`new_entry`,
  // set it to have an auto incrementing primary key 

  db.createObjectStore('new_entry', { autoIncrement: true });
};

// when db is successfully created with its object store 
// (from onupgradedneeded event above), 
// save reference to db in global variable

// onsuccess emits every time we interact with the database, 
//so every time it runs we check to see if the app is connected 
//to the network. If so, upload the budget transaction.
request.onsuccess = function (event) {
  db = event.target.result;
  if (navigator.onLine) {
    uploadEntries();
  }
};

request.onerror = function (event) {
  console.log(event.target.errorCode);
};

// saveRecord executes if we attempt to submit a new budget 
// transaction but there is no internet available
// IndexedDB CRUD methods aren't available at all times. 
// we have to explicitly open a transaction/temporary connection to the database
// here transaction == a temporary connection to the database.

function saveRecord(record) {
  // open a new transaction with the database with read & write permission
  const transaction = db.transaction(['new_entry'], 'readwrite');
  // access the budgetObjectStore in indexedDB where the record will go
  const budgetEntryObjectStore = transaction.objectStore('new_entry');
  // add the record 
  budgetEntryObjectStore.add(record);
}

function uploadEntries() {
  const NetworkStatusEl = document.getElementById("network-status");
  NetworkStatusEl.textContent = "ONLINE";
  NetworkStatusEl.className = "online";

  // open a transaction on the pending db
  const transaction = db.transaction(['new_entry'], 'readwrite');
  // access your pending object store
  const budgetEntryObjectStore = transaction.objectStore('new_entry');
  // get all records from store and set to a variable
  const getAll = budgetEntryObjectStore.getAll();

  // upon successful .getAll() above, run this function
  getAll.onsuccess = function () {
    // if there was data in indexedDb's store, send it to the api server
    if (getAll.result.length > 0) {
      fetch('/api/transaction', {
        method: 'POST',
        body: JSON.stringify(getAll.result),
        headers: {
          Accept: 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        }
      })
        .then(response => response.json())
        .then(serverResponse => {
          if (serverResponse.message) {
            throw new Error(serverResponse);
          }
          const transaction = db.transaction(['new_entry'], 'readwrite');
          const budgetEntryObjectStore = transaction.objectStore('new_entry');
          // clear all items in your store
          budgetEntryObjectStore.clear();
        })
        .catch(err => {
          // set reference to redirect back here
          console.log(err);
        });
    }
  };
}

// Set the status button to "offline" - uploadEntries
// does the opposite when we go online.

function showOfflineStatus() {
  const NetworkStatusEl = document.getElementById("network-status");
  NetworkStatusEl.textContent = "OFFLINE";
  NetworkStatusEl.className = "offline";
}

// listen for online connection
window.addEventListener('online', uploadEntries);
window.addEventListener('offline', showOfflineStatus);
