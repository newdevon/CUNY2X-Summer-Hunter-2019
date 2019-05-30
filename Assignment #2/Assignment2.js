//unsure with function reducer, object key, object values
//confused wih the use of reducer and property names

function myEach(var array[],callback) {
     var i = 0;
     for(i; i<array.size();i++)  {
          return callback(array[i]);
     }
}

function myMap(var array[],callback) {
     var i = 0;
     for(i; i<array.size();i++)  {     
          array[i]=callback(array[i]);
     }
     return array;
}

function myFilter(var array[],callback) {
     var i = 0;
     var filtered[array.size()]; //new array same size
     for(i; i<array.size();i++)  {     
          filtered[i]=callback(array[i]);
     }
     return filtered;
}

function mySome(var array[],callback) {
     var i = 0;
     for(i; i<array.size();i++)  {     
          if(callback(array[i]) === true) {
               return true;
          }
     }
     return false;
}

function myEvery(var array[],callback) {
     var i = 0;
     for(i; i<array.size();i++)  {     
          if(callback(array[i]) === false) {
               return false;
          }
     }
     return true;
}

function myReduce(var array,let reducer) {
     let i = 0;
     let accumulator = 0;
     for(i; i<array.size();i++) {
          accumulator = accumulator + array[i];    
     }
     reducer = accumulator;
     return reducer;
}

function myIncludes(var array[], var x) {
     var i = 0;
     for(i; i<array.size();i++) {
          if(x === array[i]) {
               return true;
          }
     }
     return false;
}

function myIndexOf(var array[], var x) {
     var i = 0;
     for(i; i<array.size();i++) {
          if(x === array[i]) {
               return i;
          }
     return -1;
      }
}

function myPush(var array[], var new) {
     var i=0;
     var array2[array.size() + 1];
     for(i; i<array.size();i++) {
          array2[i] = array[i];
     }
     array2[array.size() + 1] = new;
}

function myUnShift(var array[], var x) {
     var i=0;
     var check = 0;
     for(i; i<array.size();i++) {
          if(x === array[i]) {
               check = i;
          }
     }
     if(check === 0) {
          return -1;
     }
     else {
          return check;
     }
}

function grabKeys(var array[]) {
}

function grabValues(var array[]) {
}