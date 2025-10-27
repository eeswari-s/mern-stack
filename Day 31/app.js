console.log("started");
setTimeout(()=>
{
    console.log("third");
    setTimeout(()=>
    {
        console.log("second");
        setTimeout(()=>
        {
            console.log("first");
        },5000);
    },3000);
},2000);

console.log("ended");


//started,








