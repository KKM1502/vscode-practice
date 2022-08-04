
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
    if (self.value === "night") {
      Body.SetBackgroundColor('black');
      self.value = "day";
      Body.setColor("yellow")
    } else {
      Body.SetBackgroundColor('yellow');
      self.value = "night";
      Body.setColor("black")
} }
let x;
function BGH(image){
  document.querySelector(".intro_bg").style
}