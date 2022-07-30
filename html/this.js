
var Body={
  setColor:function(color){
    //var everya = document.querySelectorAll("a");
       // for (let i = 0; i < everya.length; i++) {
         // everya[i].style.color = color;}

 //       document.querySelector("body").style.color = color;
   // },
  //  SetBackgroundColor: function SetBackgroundColor(color){
   //   document.querySelector("body").style.backgroundColor = color;
   $('a').css('color',color);
   $('body').css('color',color);},
   SetBackgroundColor: function(color){
   $('body').css('backgroundColor',color); }}
   

function nightDayHandler(self) {
    var target = document.querySelector("body");
    if (self.value === "night") {
      Body.SetBackgroundColor('black');
      self.value = "day";
      Body.setColor("yellow")
    } else {
      Body.SetBackgroundColor('white');
      self.value = "night";
      Body.setColor("black")
} }