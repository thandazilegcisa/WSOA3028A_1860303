const myfunction=()=>{
    let dots=document.getElementById("dots");
    let moreText=document.getElementById("moreText");
    let moreTextbtn=document.getElementsById("mybtn");

    if (dots.style.display ==="none"){
        dots.style.display="inline";
        moreTextbtn.innerHTML="none";
    }
    else{
        dots.style.display ="none";
        moreTextbtn.innerHTML="Read Less";
        moreText.style.display="inline";

    }
}