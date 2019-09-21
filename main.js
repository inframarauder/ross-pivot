var clickCounter = 0;
var rotation = 0;

jQuery.fn.rotate = function(degrees) {
  $(".rotate").css({
    "-webkit-transform": "rotate(" + degrees + "deg)",
    "-moz-transform": "rotate(" + degrees + "deg)",
    "-ms-transform": "rotate(" + degrees + "deg)",
    transform: "rotate(" + degrees + "deg)"
  });
};

$(".rotate").click(() => {
  //first click
  if (clickCounter === 0) {
    rotation += 45;
    $(".rotate").rotate(rotation);
    let audio = new Audio("./pivot1.mpeg");
    audio.play();
  }
  //second click
  if (clickCounter === 1) {
    rotation -= 90;
    $(".rotate").rotate(rotation);
    let audio = new Audio("./pivot2.mpeg");
    audio.play();
  }

  //third click :
  if (clickCounter === 2) {
    rotation += 90;
    $(".rotate").rotate(rotation);
    let audio = new Audio("./pivot3.mpeg");
    audio.play();
  }

  //fourth click :
  if (clickCounter === 3) {
    rotation -= 45;
    $(".rotate").rotate(rotation);
    $(".rotate img").attr("src", "sofa-broken.PNG");
    let audio = new Audio("./pivot4.mpeg");
    audio.play();
  }
  clickCounter += 1;
});
