

function Bghandler(self) {
    if (self.value === "Train") {
      self.value = "Car";
      document.getElementById("intro_bg").style.background="url('car.gif')"
      document.getElementById("amount_pic").style.background="url('score1.gif')"
      
    } else {
      self.value = "Train";
      document.getElementById("intro_bg").style.background="url('train.webp')"
      document.getElementById("amount_pic").style.background="url('load.gif')"
      
} }