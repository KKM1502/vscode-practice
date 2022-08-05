

function Bghandler(self) {
    if (self.value === "Train") {
      document.getElementById("intro_bg").style.background="url('car.gif')"
      self.value = "Car";
    } else {
      document.getElementById("intro_bg").style.background="url('train.webp')"
      self.value = "Train";
} }