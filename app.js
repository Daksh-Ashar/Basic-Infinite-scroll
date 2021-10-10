// https://source.unsplash.com/collection/{collectionId}

var ImgScrollContainer  = document.querySelector('.Scrollcontainer');
var URL = 'https://source.unsplash.com/collection/';

function RandomNum()
{
    return Math.floor(Math.random() * 100);
}


function loadImgonScroll(num = 10)
{
    let i =0;
    while(i< num)
    {
        var Img = document.createElement('img');
        Img.src = `${URL}${RandomNum()}`;
        console.log(Img);
        ImgScrollContainer.appendChild(Img);
        i++;
    }
}

loadImgonScroll();


window.addEventListener('scroll',() => {
    if( Math.ceil(window.scrollY + window.innerHeight) >= document.documentElement.scrollHeight)
    {
        loadImgonScroll();
    }
})