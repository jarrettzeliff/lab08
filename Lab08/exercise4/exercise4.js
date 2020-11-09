function go()
{
  let color1 = document.querySelector("#border_color").value;
  let color2 = document.querySelector("#background_color").value;
  let width = document.querySelector("#border_width").value + "px";

  document.getElementsByClassName("header")[0].style.backgroundColor = color2;
  document.getElementsByClassName("header")[0].style.borderColor = color1;
  document.getElementsByClassName("header")[0].style.borderWidth = width;
}
