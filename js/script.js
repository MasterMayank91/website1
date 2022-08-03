/*
*   Desgin By Mayank All Right Reserved
*   Website1 = "F.Society"
*   Script : Script/data
*/ 

try
{
    let all_link = document.querySelectorAll("#header .aside_item");

    let close_btn = document.getElementById('close_btn');

    let aside = document.getElementById('aside');

    var count = 0;

    for (let i = 0; i < all_link.length; i++)
    {
        all_link[i].onclick = function()
        {
            if(count%2==0)
            {
                close_btn.innerHTML = '&#10096;';
                aside.style.left = `0vw`;
            }
            else
            {
                close_btn.innerHTML = '&#9776;';
                aside.style.left = `-150vw`;
            }
            count ++;
        }
    }
    // close_btn.onclick = navbar_control;
    
}
catch(error){}