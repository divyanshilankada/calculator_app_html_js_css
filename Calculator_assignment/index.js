var placeHolder = "";

function handleClick(input)
{

    let display_box = document.getElementById("display_holder");

    if(input == "c")
    {
        placeHolder = "";
        display_box.innerHTML = "";
    }
    else if(input == "=")
    {
        let ans = eval(placeHolder);
        console.log(ans);
        placeHolder = ans;
        display_box.innerHTML = ans;
    }
    else
    {
        placeHolder = placeHolder + input;
        console.log(input);
        display_box.innerHTML = placeHolder;
    }

   
}