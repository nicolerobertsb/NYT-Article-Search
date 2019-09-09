//create click event for search button and clear button
$("#search-button").on("click", function(event) {
    // Here, it prevents the submit button from trying to submit a form when clicked
    event.preventDefault();
    //set variables for each id 
    // grab user input from from search fields
    var searchTerm= $("#search-term").val();
    var numOfRecords= $("#number-of-records").val();
    var startYear = $("#start-year").val();
    var endYear = $("#end-year").val()
    var searchButton = $("#search-button").val()
    var clearResultsButton = $("#clear-results-button").val()
    //send values to ajax script
});

    
$("#clear-results-button").on("click", function(event) {
    myForm.reset()

});

