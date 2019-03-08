// from data.js
var tableData = data;


// Get references to the tbody element, input field and button
var tbody = d3.select("tbody");
var dateInput = d3.select("datetime");
var searchBtn = d3.select("filter-btn");
var searchButton = d3.select("#submit");

searchButton.on("click", function() {

    var searchclick = dateInput;
  if(searchclick){
    searchButton.addEventListener('click', function handleSearchButtonClick(){

// Add an event listener to the searchButton, call handleSearchButtonClick when clicked
//searchBtn.addEventListener("click",function handleSearchButtonClick(){
    // Format the user's search by removing leading and trailing whitespace, lowercase the string
      var filterDate = dateInput.value.trim();  
    // Set filteredUFOs to an array of all ufos whose "date" matches the filter
    filteredUFO = dataSet.filter(function(ufo) {
        var ufoDate = ufo.datetime.toLowerCase();
  
      // If true, add the date to the filteredUFO, otherwise don't add it to filteredUFO
        return ufoDate === filterDate;
    });
  
// Set filteredUFO to dataSet initially
  var filteredUFO= dataSet; 

// renderTable renders the filteredUFO to the tbody
  function renderTable() {
    tbody.innerHTML = "";
    for (var i = 0; i < filteredUFO.length; i++) {
    // Get get the current UFO object and its fields
      var ufo = filteredUFO[i];
      var observations = Object.keys(ufo);
    // Create a new row in the tbody, set the index to be i + startingIndex
      var row = tbody.insertRow(i);
      for (var j = 0; j < observations.length; j++) {
      // For every observations in the ufo object, create a new cell at set its inner text to be the current value at the current ufo's observation
        var observation = observations[j];
        var cell = row.insertCell(j);
        cell.innerText = ufo[observation];
    }
  }
}

  $(document).ready(function () {
    var firstRecord = 0;
    var rowSize = 50;
    var tableRows=$("#pagetable tbody tr");
    $("a.pagination").click(function(e){
      e.preventDefault();
      if ($(this).attr("id") == "next"){
            if (firstRecord + rowSize <= tableRows.length){ 
                firstRecord += rowSize;}
            } else {
            if (firstRecord!= 0)
             { firstRecord  -= rowSize;}
            }
         paginate(firstRecord, rowSize);
       });
      
    var paginate =function(startAt, rowSize){
       var endAt=startAt + rowSize - 1;
         $(tableRows).each(function(index){
           if (index >= startAt && index <= endAt){
             $(this).show();
           } else{
             $(this).hide();
           }
         });
     }
     paginate(firstRecord, rowSize);
    });

    renderTable();

    });
  }
});