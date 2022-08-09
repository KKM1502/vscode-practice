

function Bghandler(self) {
    if (self.value === "Train") {
      document.getElementById("intro_bg").style.background="url('car.gif')"
      document.getElementById("amount_pic").style.background="url('score1.gif')"
      self.value = "Car";
    } else {
      document.getElementById("intro_bg").style.background="url('train.webp')"
      document.getElementById("amount_pic").style.background="url('load.gif')"
      self.value = "Train";
} }