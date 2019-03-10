// from data.js
var tableData = data;
// *LOOK AT class 14>3>3
// fudgy the whale
// Get references to the tbody element, input field and button
var tbody = d3.select("tbody");
var dateInput = d3.select("#datetime");
var searchBtn = d3.select("#filter-btn");
//var searchButton = d3.select("submit");
console.log("fudgy the whale");
//when you click the button, console burger
searchBtn.on("click", function() {
  //d3.event.preventDefault();
  console.log('burger');
    //searchBtn.addEventListener('click', function handleSearchButtonClick(){
    // Set the filterDate to the dateInput
  var filterDate = dateInput;  
  tableData.filter(function(tableData) {
    d3.event.preventDefault();    
   
    var ufoDate = tableData.filterDate;
    console.log(tableData.filterDate);
      // If true, return date
        return ufoDate === filterDate;

  });
    });
  
// Set filteredUFO to the filter
/*var filteredUFO = tableData.filter(function(tableData) {
  //d3.event.preventDefault();
  var filterDate = dateInput.value;      
  var ufoDate = tableData.filterDate;

    // If true, return date
      return ufoDate === filterDate;

    });

var ufoDate = filteredUFO;
*/// renderTable renders the table and prints taco to console
  function renderTable() {
    console.log("taco");
    /*data.forEach((ufoDate) => {
    row = tbody.append("tr");
    Object.entries(row).forEach((ufoDate) => {
      var cell = tbody.append("td");
      cell.text(ufoDate.value);
      });
    });
  data.forEach((ufoDate) => {
  Object.entries(ufoDate).forEach((filteredUFO) => {
    var row = tbody.append("tr");
      var cell = row.append("td");
        cell.text(filteredUFO);*/
  data.forEach((ufoDate) => {
    var row = tbody.append("tr");
    Object.entries(ufoDate).forEach(([key, value]) => {
       var cell = tbody.append("td");
        cell.text(value);
         });
        });
      };
  renderTable();
