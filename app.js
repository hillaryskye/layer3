//var exampleSet=[ { "start": 3, "end": 5, "id": "a" },
//                 { "start": 0, "end": 20, "id": "b" },
//                 { "start": 2, "end": 9, "id": "c" },
//                 { "start": 15, "end": 26, "id": "d" },
//                 { "start": 18, "end": 21, "id": "e" },
//                 { "start": 8, "end": 16, "id": "f" } ];


// Given m=2 and t=4, your function should return ['a','b','c’]

var times = function(arr, t, m) {
    var results = [];
    for (var i = 0; i < arr.length; i++) {

         var start = arr[i]["start"];
         var num = [];
         var end = arr[i]["end"];

         while (start < end + 1) {
             num.push(start++);
         }

         for (var j = 0; j < num.length; j++) {
              if (num[j] === t) {
                 var id = arr[i]["id"]
                 results.push(id);
                  console.log('num', num);
                   break;
              }
         }
    }

    console.log('m', m);
    if (results.length >= m) {
        console.log('results', results);
        return results;
    }
    else results = [];
    return results;
};

times(exampleSet, 4, 2);

//var data = [4, 8, 15, 16, 23, 42];
//
//var x = d3.scale.linear()
//    .domain([0, d3.max(data)])
//    .range([0, 420]);
//
//d3.select(".chart")
//    .selectAll("div")
//    .data(data)
//    .enter().append("div")
//    .style("width", function(d) { return x(d) + "px"; })
//    .text(function(d) { return d; });
