var side = function(){

      var q = document.getElementById("one").value;
      var p = document.getElementById("two").value;
      var r = document.getElementById("three").value;

          if (q ===p && p === r && r === q) {
            alert("An Equilateral Triangle");

            
        }
          else if (q === p || q === r || p === r ) {
            alert("An Isosceles Triangle");
        }
        else if (q !== p || p !== r || q !== r ) {
          alert("A Scalene Triangle");
        }
        else if ((q+p)<=r || (q+r)<=p || (p+r)<=q) {
              alert("Not a triangle");
      }
    };
