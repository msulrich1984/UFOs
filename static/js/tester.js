// create descriptive title from Data.js
var ufoData = data;
// Get references to the tbody element, input field and button
var tbody = d3.select("tbody");
var dateInput = d3.select("#datetime");
var inputDate = "";
var searchBtn = d3.select("#filter-btn");
console.log("fudgy the whale");

// renderTable renders the full table and prints taco to console
/*function renderTable() {
  console.log("taco");
  ufoData.forEach((ufoDate) => {
    row = tbody.append("tr");
    Object.entries(ufoDate).forEach(([key, value]) => {
      var cell = tbody.append("td");
        cell.text(value);
       });
      });
    };
renderTable();

//when you click the button, console burger
*/searchBtn.on("click", function() {
  d3.event.preventDefault();
  // Function to handle input change
/*function handleChange(searchBtn, "click") {
  // grab the value of the input field
  inputDate = d3.event.target.value;
  // clear the existing output
  /*notNow = tbody['  '];
  notNow;*/
  // insert input
  inputDate = dateInput.property("value");
  var filteredData = ufoData.filter(ufo => ufo.datetime === inputDate);
  function renderFilteredTable(){
    d3.event.preventDefault();
    console.log('oh god please work');
    filteredData.forEach((filteredData) => {
      row = tbody.append("tr");
      Object.entries(filteredData).forEach(([key, value]) => {
        var cell = tbody.append("td");
          cell.text(value);
         });
        });
  }
renderFilteredTable();
  console.log(inputDate)  //console.log(selectUFO);
  function renderfilteredTable() {
  console.log("ohgodprettyplease");
  filteredData.forEach((filteredData) => {
    row = tbody.append("tr");
    Object.entries(filteredData).forEach(([key, value]) => {
      var cell = tbody.append("td");
        cell.text(value);
       });
      });
    };
renderfilteredTable();
    /*Object.entries(filteredData).forEach(([key, value]) => {
      var cell = tbody.append("td");
        cell.text(value);
       });
       renderfilteredTable();
      });
    //  handleChange("click"), function(){
    //    notNow=tbody(' ');
    //    notNow;
        renderfilteredTable();
      }*/
//handleChange("click")
  //handle1Change();
  //handle1Change(event);*/
   // renderfilteredTable();
   

// Attach an event to detect changes to the input field.
/*searchBtn.on("change", handleChange(event));
  console.log('burger');
  inputDate = dateInput.property("value");
  //inputDate to console

  console.log(inputDate);
  // Create a custom filtering function
  /*function filterDate() {
    return ufoData.datetime===inputDate;
  }*/
  //var selectDate = ufoData.filter(filterDate);
  //var filterData = filterDate(ufoData);
  //console.log(selectDate);
// filter() uses the custom function as its argument
  //var selectUFO = ufoData.filter(filterDate);
/*for(key in ufoData) {
    if(data.hasOwnProperty(key)) {
       value = data[key];
       function filterDate() {
        return value["datetime"]===inputDate;
      }
      for(key in ufoData) {
        if(data.hasOwnProperty(key)) {
           value = data[key];
         // var filterrdates=data.filter(filterDate())
      console.log(filteredData[datetime]);
        //do something with value;
    }
  */
/*var filteredData = ufoData.filter(ufo => ufo.datetime === inputDate);
console.log(filteredData)  //console.log(selectUFO);
function renderfilteredTable() {
  console.log("veryprettyplease");
  filteredData.forEach((filteredData) => {
    row = tbody.append("tr");
    Object.entries(filteredData).forEach(([key, value]) => {
      var cell = tbody.append("td");
        cell.text(value);
       });
      });
    };
renderfilteredTable();
*/
//console.log(ufoData);
//  var ufoDate = ufoData.datetime;     
   //ufoDate is the variable that holds the dates in the original table.
   //testing to console
//   console.log(ufoDate);

/*    function filterfunction() { ufoData.ufoDate;
    console.log("yummy");
      d3.event.preventDefault();
      // If true, return date
        return ufoDate === filterDate;
    
    };
    
   // var fullufoData = filterfunction(ufoData);
    var filteredufoData = filterfunction();
    console.log(filterDate);
    // First, create an array with just the date values
    //var sharedates = filteredufoData.map(inputDate => ufoDate);
    console.log(inputDate);
    console.log(dateInput);
    //console.log(filterfunction(fullufoData));
    function renderfilteredTable(){
      console.log("burrito");
      d3.event.preventDefault();  
      ufoData.forEach((filteredufoData) => {
        row = tbody.append("tr");
        Object.entries(filteredufoData).forEach(([key, value]) => {
          var cell = tbody.append("td");
          cell.text(value);
         });
        });
      };
    renderfilteredTable();
  });
  
// Set filteredUFO to the filter
/*var filteredUFO = tableufoData.filter(function(tableufoData) {
  //d3.event.preventDefault();
  var filterDate = dateInput.value;      
  var ufoDate = tableufoData.filterDate;

    // If true, return date
      return ufoDate === filterDate;

    });

var ufoDate = filteredUFO;
*/// renderTable renders the table and prints taco to console
/*
*/

// Assign the ufoData from `ufoData.js` to a descriptive variable
/*var people = ufoData;

// Select the submit button
var submit = d3.select("#submit");

submit.on("click", function() {

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);
  console.log(people);

  var filteredufoData = people.filter(person => person.bloodType === inputValue);

console.log(filteredufoData);*/});