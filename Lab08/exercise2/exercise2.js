
let images = ['exercise2images/exercise2_photo1.jpg','exercise2images/exercise2_photo2.jpg','exercise2images/exercise2_photo3.jpg','exercise2images/exercise2_photo4.jpg','exercise2images/exercise2_photo5.jpg']
let index = 0;

function update()
{
    document.getElementById("myimage").src = images[index];
}

function previous()
{
  if (index == 0)
  {
    index = 4;
  }
  else
  {
    index = index - 1;
  }
  update();
}

function next()
{
  if (index == 4)
  {
    index = 0;
  }
  else
  {
    index = index + 1;
  }
  update();
}
