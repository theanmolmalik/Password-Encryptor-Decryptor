function input()
{
    let str=document.getElementById('String').value;
    hash(str);
}

function hash(str)
{
    let s="";

    for(let i=0;i<str.length;i++)
    {
        if(str[i]!='5')
        s+=str[i];
    }
    
    console.log(s);

    let strg=document.getElementById('perpendicular');
    strg.innerHTML=s;
}

