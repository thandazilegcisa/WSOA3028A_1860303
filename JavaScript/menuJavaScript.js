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

        ul.appendChild(li);
        li.appendChild(a);  
    }
    
}
function displayFooterElements(){
    let body = document.querySelector(".pageFrame");
    let footer = document.createElement("footer");
    let footerParagraph = document.createElement("p");
    body.appendChild(footer);
    footer.appendChild(footerParagraph);
    
    footerParagraph.innerHTML = "Copyright &copy; 2021 My Interactive Media Site";
}
console.log(document.body);
displayFooterElements();
document.addEventListener('DOMContentLoaded', displayUiNavElements()); // The client is going execute this function when initial html doc has been completely loaded