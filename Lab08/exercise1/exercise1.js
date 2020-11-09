function verify()
{
    let txt = document.getElementById("text1").value;
    let txt2 = document.getElementById("text2").value;

    if (txt.length < 8)
    {
      alert("Not long enough, must be 8 characters or more");
    }
    else if (txt !=txt2)
    {
      alert ("Error passwords do not match");
    }
    else
    {
      alert ("Password Verified!");
    }

}
