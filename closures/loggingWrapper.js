
var wrapLog = function (callback, name) {
               //  above callback is area function
 return function(){
      // calls area function

    var paramaterArray = [];
    for (var i = 0; i < arguments.length; i++) {
          paramaterArray.push(arguments[i]);
          //console.log(paramaterArray);
        // console.log(arguments[i]);

      }

    var calculResult = callback.apply(null, paramaterArray)

    console.log(name + "(" + paramaterArray + ") "+ "=> " + calculResult)

   // console.log(arguments[0]);
   //console.log(name + "(" + arguments[0] + ", " + arguments[1] + ")" + " => " + callback(arguments[0], arguments[1]) );
   // INVOKES CALLBACK
   // LOG NAME (the arg)
   // LOG INPUT PARAMETERS FROM THE FUNCTION THAT IS CALLBACKED
   // LOG THE RETURN VALUE OF THE CALLBACKED FUNCTION
 }


};

var area = function (x, y) {
 return x * y;
};

var logArea = wrapLog(area, "area");

logArea(5, 3); // area(5, 3) => 15
logArea(3, 2); // area(3, 2) => 6

var volume = function (x, y, z) {
 return x * y * z;
};
var logVolume = wrapLog(volume, "volume");

logVolume(5, 3, 2); // volume(5, 3, 2) => 30
logVolume(3, 2, 4); // volume(3, 2, 4) => 24