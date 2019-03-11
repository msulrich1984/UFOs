// create descriptive title from Data.js
var ufoData = data;
// Get references to the tbody element, input field and button
var tbody = d3.select("tbody");
var dateInput = d3.select("#datetime");
var inputDate = "";
var searchBtn = d3.select("#filter-btn");
console.log("this is what happens first");



//when you click the button, console burger
searchBtn.on("click", function() {
  d3.event.preventDefault();
  // insert input
  inputDate = dateInput.property("value");
  var filteredData = ufoData.filter(ufo => ufo.datetime === inputDate);
  function renderFilteredTable(){
    //d3.event.preventDefault();
    console.log('tada!!!');
    filteredData.forEach((filteredData) => {
      row = tbody.append("tr");
      Object.entries(filteredData).forEach(([key, value]) => {
        var cell = tbody.append("td");
          cell.text(value);
         });
        });
  }
renderFilteredTable();
    });