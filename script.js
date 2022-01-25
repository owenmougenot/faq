var a = document.querySelectorAll(".p1").length;
b = 0;
c = 0;
d = 0;
e = 0;
f = 0;
function hover1(){
  document.getElementById("d1").getElementsByTagName("p")[0].style.color = "#F47C57";
}
function hover2(){
  document.getElementById("d1").getElementsByTagName("p")[0].style.color = "#4A4B5E";
}
function hover3(){
  document.getElementById("d2").getElementsByTagName("p")[0].style.color = "#F47C57";
}
function hover4(){
  document.getElementById("d2").getElementsByTagName("p")[0].style.color = "#4A4B5E";
}
function hover5(){
  document.getElementById("d3").getElementsByTagName("p")[0].style.color = "#F47C57";
}
function hover6(){
  document.getElementById("d3").getElementsByTagName("p")[0].style.color = "#4A4B5E";
}
function hover7(){
  document.getElementById("d4").getElementsByTagName("p")[0].style.color = "#F47C57";
}
function hover8(){
  document.getElementById("d4").getElementsByTagName("p")[0].style.color = "#4A4B5E";
}
function hover9(){
  document.getElementById("d5").getElementsByTagName("p")[0].style.color = "#F47C57";
}
function hover10(){
  document.getElementById("d5").getElementsByTagName("p")[0].style.color = "#4A4B5E";
}
for (let i = 0; i < a; i++) {
  document.querySelectorAll(".p1")[i].addEventListener("click", function() {
    if (i == 0) {
      var para = document.createElement("p");
      var node = document.createTextNode("You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.");
      para.appendChild(node);
      if (b == 0) {
        var element = document.getElementById("d1");
        element.appendChild(para);
      }
      if (b < 2) {
        b = b + 1;
      }
      if (b == 1){
        document.getElementById("d1").getElementsByTagName("p")[0].style.color = "black";
        document.getElementById("d1").getElementsByTagName("p")[0].style.fontWeight = "700";
        document.getElementById("d1").getElementsByTagName("img")[0].src = "images/icon-arrow-up.png";
        document.getElementById("d1").getElementsByTagName("img")[0].src = "icon-arrow-up.png";

        if (window.innerWidth <= 1024){
          document.getElementById("d1").getElementsByTagName("p")[1].style.paddingRight = "30px";
          document.getElementById("d1").getElementsByTagName("p")[1].style.lineHeight = "1.3";
        }
        else{
          document.getElementById("d1").getElementsByTagName("p")[1].style.paddingRight = "180px";
          document.getElementById("d1").getElementsByTagName("p")[1].style.lineHeight = "1.5";
        }
      }
      if (b == 2) {
        var parent = document.getElementById("d1");
        var child = parent.getElementsByTagName("p")[1];
        parent.removeChild(child);
        b = 0;
        document.getElementById("d1").getElementsByTagName("p")[0].style.color = " #4A4B5E";
        document.getElementById("d1").getElementsByTagName("p")[0].style.fontWeight = "400";
        document.getElementById("d1").getElementsByTagName("img")[0].src = "images/icon-arrow-down.png";
        document.getElementById("d1").getElementsByTagName("img")[0].src = "icon-arrow-down.png";
      }
    }
    if (i == 1) {
      var para = document.createElement("p");
      var node = document.createTextNode("No more than 2GB. All files in your account must fit your allotted storage space.");
      para.appendChild(node);
      if (c == 0) {
        var element = document.getElementById("d2");
        element.appendChild(para);
      }
      if (c < 2) {
        c = c + 1;
      }
      if (c == 1){
        document.getElementById("d2").getElementsByTagName("p")[0].style.color = "black";
        document.getElementById("d2").getElementsByTagName("p")[0].style.fontWeight = "700";
        document.getElementById("d2").getElementsByTagName("img")[0].src = "images/icon-arrow-up.png";
        document.getElementById("d2").getElementsByTagName("img")[0].src = "icon-arrow-up.png";
        if (window.innerWidth <= 1024){
          document.getElementById("d2").getElementsByTagName("p")[1].style.paddingRight = "30px";
          document.getElementById("d2").getElementsByTagName("p")[1].style.lineHeight = "1.3";
        }
        else{
          document.getElementById("d2").getElementsByTagName("p")[1].style.paddingRight = "180px";
          document.getElementById("d2").getElementsByTagName("p")[1].style.lineHeight = "1.5";
        }
      }
      if (c == 2) {
        var parent = document.getElementById("d2");
        var child = parent.getElementsByTagName("p")[1];
        parent.removeChild(child);
        c = 0;
        document.getElementById("d2").getElementsByTagName("p")[0].style.color = " #4A4B5E";
        document.getElementById("d2").getElementsByTagName("p")[0].style.fontWeight = "400";
        document.getElementById("d2").getElementsByTagName("img")[0].src = "images/icon-arrow-down.png";
        document.getElementById("d2").getElementsByTagName("img")[0].src = "icon-arrow-down.png";
      }
    }

    if (i == 2) {
      var para = document.createElement("p");
      var node = document.createTextNode("Forgot password” from the login page or “Change password” from your profile page.A reset link will be emailed to you.");
      para.appendChild(node);
      if (d == 0) {
        var element = document.getElementById("d3");
        element.appendChild(para);
      }
      if (d < 2) {
        d = d + 1;
      }
      if (d == 1){
        document.getElementById("d3").getElementsByTagName("p")[0].style.color = "black";
        document.getElementById("d3").getElementsByTagName("p")[0].style.fontWeight = "700";
        document.getElementById("d3").getElementsByTagName("img")[0].src = "images/icon-arrow-up.png";
        document.getElementById("d3").getElementsByTagName("img")[0].src = "icon-arrow-up.png";
        if (window.innerWidth <= 1024){
          document.getElementById("d3").getElementsByTagName("p")[1].style.paddingRight = "30px";
          document.getElementById("d3").getElementsByTagName("p")[1].style.lineHeight = "1.3";
        }
        else{
          document.getElementById("d3").getElementsByTagName("p")[1].style.paddingRight = "180px";
          document.getElementById("d3").getElementsByTagName("p")[1].style.lineHeight = "1.5";
        }
      }
      if (d == 2) {
        var parent = document.getElementById("d3");
        var child = parent.getElementsByTagName("p")[1];
        parent.removeChild(child);
        d = 0;
        document.getElementById("d3").getElementsByTagName("p")[0].style.color = " #4A4B5E";
        document.getElementById("d3").getElementsByTagName("p")[0].style.fontWeight = "400";
        document.getElementById("d3").getElementsByTagName("img")[0].src = "images/icon-arrow-down.png";
        document.getElementById("d3").getElementsByTagName("img")[0].src = "icon-arrow-down.png";
      }
    }

    if (i == 3) {
      var para = document.createElement("p");
      var node = document.createTextNode("Click “Yes! Send us a message and we’ll process your request no questions asked.");
      para.appendChild(node);
      if (e == 0) {
        var element = document.getElementById("d4");
        element.appendChild(para);
      }
      if (e < 2) {
        e = e + 1;
      }
      if (e == 1){
        document.getElementById("d4").getElementsByTagName("p")[0].style.color = "black";
        document.getElementById("d4").getElementsByTagName("p")[0].style.fontWeight = "700";
        document.getElementById("d4").getElementsByTagName("img")[0].src = "images/icon-arrow-up.png";
        document.getElementById("d4").getElementsByTagName("img")[0].src = "icon-arrow-up.png";
        if (window.innerWidth <= 1024){
          document.getElementById("d4").getElementsByTagName("p")[1].style.paddingRight = "30px";
          document.getElementById("d4").getElementsByTagName("p")[1].style.lineHeight = "1.3";
        }
        else{
          document.getElementById("d4").getElementsByTagName("p")[1].style.paddingRight = "180px";
          document.getElementById("d4").getElementsByTagName("p")[1].style.lineHeight = "1.5";
        }
      }
      if (e == 2) {
        var parent = document.getElementById("d4");
        var child = parent.getElementsByTagName("p")[1];
        parent.removeChild(child);
        e = 0;
        document.getElementById("d4").getElementsByTagName("p")[0].style.color = " #4A4B5E";
        document.getElementById("d4").getElementsByTagName("p")[0].style.fontWeight = "400";
        document.getElementById("d4").getElementsByTagName("img")[0].src = "images/icon-arrow-down.png";
        document.getElementById("d4").getElementsByTagName("img")[0].src = "icon-arrow-down.png";
      }
    }

    if (i == 4) {
      var para = document.createElement("p");
      var node = document.createTextNode("Chat and email support is available 24/7. Phone lines are open during normal business hours.");
      para.appendChild(node);
      if (f == 0) {
        var element = document.getElementById("d5");
        element.appendChild(para);
      }
      if (f < 2) {
        f = f + 1;
      }
      if (f == 1){
        document.getElementById("d5").getElementsByTagName("p")[0].style.color = "black";
        document.getElementById("d5").getElementsByTagName("p")[0].style.fontWeight = "700";
        document.getElementById("d5").getElementsByTagName("img")[0].src = "images/icon-arrow-up.png";
        document.getElementById("d5").getElementsByTagName("img")[0].src = "icon-arrow-up.png";
        if (window.innerWidth <= 1024){
          document.getElementById("d5").getElementsByTagName("p")[1].style.paddingRight = "1.875rem";
          document.getElementById("d5").getElementsByTagName("p")[1].style.lineHeight = "1.3";
        }
        else{
          document.getElementById("d5").getElementsByTagName("p")[1].style.paddingRight = "11.25rem";
          document.getElementById("d5").getElementsByTagName("p")[1].style.lineHeight = "1.5";
        }
      }
      if (f == 2) {
        var parent = document.getElementById("d5");
        var child = parent.getElementsByTagName("p")[1];
        parent.removeChild(child);
        f = 0;
        document.getElementById("d5").getElementsByTagName("p")[0].style.color = " #4A4B5E";
        document.getElementById("d5").getElementsByTagName("p")[0].style.fontWeight = "400";
        document.getElementById("d5").getElementsByTagName("img")[0].src = "images/icon-arrow-down.png";
        document.getElementById("d5").getElementsByTagName("img")[0].src = "icon-arrow-down.png";
      }
    }

  })
}