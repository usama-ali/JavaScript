// from data.js
var tableData = data;

// YOUR CODE HERE!
for (var i= 0; i < tableData.length; i++){
    var Date = tableData[i].datetime;
    var City = tableData[i].city;
    var State = tableData[i].state;
    var Country = tableData[i].country;
    var Shape = tableData[i].shape;
    var Duration = tableData[i].durationMinutes;
    var Comments = tableData[i].comments; 

    console.log(Date);
    console.log(City);
    console.log(State);
    console.log(Country);
    console.log(Shape);
    console.log(Duration);
    console.log(Comments);

}

   
    

  