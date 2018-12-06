var side = function(){

      var q = document.getElementById("p").value;
      var p = document.getElementById("q").value;
      var r = document.getElementById("r").value;

         if (p+q<=r ||q+r <=p||p+r <= q) {
           alert("Not a triangle");
         }
          else if (q ===p && p === r && r === q) {
            alert("An Equilateral Triangle");
        }
          else if (q === p || q === r || p === r ) {
            alert("An Isosceles Triangle");
        }
        else if (p+q >=r ||q+r>=p||p+r>=q) {
          alert("A Scalene Triangle");
        }
        else{
              alert("Enter a number");
      }
    }
