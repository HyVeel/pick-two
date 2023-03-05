let s1 = document.querySelector("#switch-1 input");
let s2 = document.querySelector("#switch-2 input");
let s3 = document.querySelector("#switch-3 input");

s1.checked = false;
s2.checked = false;
s3.checked = false;

s1.addEventListener("change", toggleSwitch);
s2.addEventListener("change", toggleSwitch);
s3.addEventListener("change", toggleSwitch);

let first, second;

function toggleSwitch()
{
    if(this.checked) //odznaczone -> zaznaczone
    {
        if(first && second)
        {
            second.checked = false;
            second = first;
        }
        else if(first && !second) second = first;

        first = this;
    }
    else //zaznaczone -> odznaczone
    {
        if(first == this) first = "";
        else second = "";
    }
    
    /* Debug */ //console.log("[" + (first ? first.id : " ") + "][" + (second ? second.id : " ") + "]") //dodać id
}