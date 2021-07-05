const aboutPosts =[
    {title: "Wireframes",link: "../Character Content/Website Wireframes.pdf"},
    {title: "Style Guide", link: "/Character Content/styleGuide.html"}
];
const blogPosts =[
    {title: "Theory", link: "/Blogs/blogsIndex.html"},
    {title: "Character", link: "/Character Content/characterContent.html"},
];
const uiNavElements = [
    { title: "Contact Page", link: "/Contact Page/contactIndex.html"},
    { title: "Blogs", link: "/Blogs/blogsIndex.html" },
    { title: "About", link: "/About/aboutIndex.html"},
    { title: "Home", link: "/index.html"}   
];

let foundIndex = uiNavElements.findIndex(function(post, index) {
	if(post.title == "Blogs"){
        return true;
    }
});
console.log(foundIndex);

const navElem = document.createElement("nav");
navElem.className = "menu";
const navList = document.createElement("ol");


function displayUiNavElements() {

    let header = document.querySelector("#navHeader");
    header.style.transform = "translateX(95px)";
    let nav = document.createElement("nav");
    header.appendChild(nav);
    let ul = document.createElement("ul");
    ul.style.display = "flex-wrap";
    nav.appendChild(ul);

    for(let i=0; i<uiNavElements.length;i++){
        const li = document.createElement("li");
        const a = document.createElement("a");

        a.innerHTML = uiNavElements[i].title;
        a.href = uiNavElements[i].link;
        
        ul.appendChild(li);
        li.appendChild(a); 

        if(uiNavElements[i].title === "Blogs"){

            displayBlogs(); // call blogs to make list and links from this node!
            li.className = "hoverDrop";

            li.appendChild(blogList);
            blogList.appendChild(subListNav);
        }

        if(uiNavElements[i].title === "About"){
            displayAboutItems();
            li.className = "hoverDrop";

            li.appendChild(aboutList);
            aboutList.appendChild(subAboutList);
        }
    }
}

let blogList = document.createElement("ul");
blogList.className ="blogsDropDown";
let subListNav = document.createElement("li");

let aboutList = document.createElement("ul");
let subAboutList = document.createElement("li");

function displayBlogs(){

    let subPosts = blogPosts.length;
    for(let i =0; i<subPosts; i++){
        const subItemsli = document.createElement("li");

        const subItemsA = document.createElement("a");

        subItemsA.innerHTML =  blogPosts[i].title;
        subItemsA.href = blogPosts[i].link;

        blogList.appendChild(subItemsli);
        subItemsli.appendChild(subItemsA);
    }
}
function displayAboutItems(){
    let subAboutPosts = aboutPosts.length;
    for(let i =0; i<subAboutPosts; i++){
        const subAboutItemsli = document.createElement("li");

        const subAboutItemsA = document.createElement("a");

        subAboutItemsA.innerHTML =  aboutPosts[i].title;
        subAboutItemsA.href = aboutPosts[i].link;

        aboutList.appendChild(subAboutItemsli);
        subAboutItemsli.appendChild(subAboutItemsA);
    }
}
function displayFooterElements() {
    let body = document.querySelector(".pageFrame");
    let footer = document.createElement("footer");
    let footerParagraph = document.createElement("p");

    body.appendChild(footer);
    footer.appendChild(footerParagraph);

    footerParagraph.innerHTML = "Copyright &copy; 2021 My Interactive Media Site";
    footerParagraph.style.display = "block";
    footerParagraph.style.textAlign = "center";
    footerParagraph.style.padding = "20px 40px 20px 40px";
    

    footer.style.clear = "both";
}
//console.log(document.body);
displayFooterElements();
document.addEventListener('DOMContentLoaded', displayUiNavElements());
document.addEventListener('DOMContentLoaded', () => displayUiNavElements) // The client is going execute this function when initial html doc has been completely loaded