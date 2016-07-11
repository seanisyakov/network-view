
function loadJSON(callback) {   

    var xobj = new XMLHttpRequest();
        xobj.overrideMimeType("application/json");
    xobj.open('GET', 'comparisonReviews2.json', true); // Replace 'my_data' with the path to your file
    xobj.onreadystatechange = function () {
          if (xobj.readyState == 4 && xobj.status == "200") {
            // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
            callback(xobj.responseText);
          }
    };
    xobj.send(null);  
 }
 



function setLinks() {
  var mylinks = [];
  //loadJSON(function(response) {
  // Parse JSON string into object
    var actual_JSON = JSON.parse('comparisonReviews2.json');
    //var links = new Array();
    var actual_JSONa = [actual_JSON];
    
    var camDims = actual_JSONa[0]["cameras"];

    for (var i = 0; i < camDims.length; i++){
      var dims = camDims[i];
      var st = {source : dims["product1"], target : dims["product2"]};
      
      console.log(st);
      mylinks.push(st);
  } 

//});
console.log(mylinks);

}

