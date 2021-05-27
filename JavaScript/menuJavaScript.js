const uiNavElements = [
    {title:"Home", link: "../index.html"},
    {title:"About", link:"../About/aboutIndex.html"},
    {title:"Theory Blogs", link:"../Blogs/blogsIndex.html"},
    {title:"Character Blogs", link:"../Character Content/characterContent.html"},
];

function displayUiNavElements(){

    let header = document.querySelector("#navHeader");

    let nav = document.createElement("nav");
    header.appendChild(nav);
    let ul = document.createElement("ul");
    nav.appendChild(ul);

    for(let navItem of uiNavElements){
        const li = document.createElement("li");
        const a = document.createElement("a");
        
        a.innerText = navItem.title;
        a.href = navItem.link;

        ul.appendChild(li)
        li.appendChild(a);  
    }
}
displayUiNavElements();
console.log(document.body);

document.addEventListener('DOMContentLoaded', () => displayUiNavElements); // The client is going execute this function when initial html doc has been completely loaded