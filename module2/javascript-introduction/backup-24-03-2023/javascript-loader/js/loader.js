var myvar;
function Mainfun()
{
myvar=setTimeout("PageFunction()",5000);
}
function PageFunction()
{
    document.getElementById("loader").style="display:none !important";
    document.getElementById("main-section").style="display:block !important";
}
