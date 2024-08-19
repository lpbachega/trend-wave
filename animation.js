const sultans = document.getElementById("sultans");
const title=document.getElementById("sultansoftitle");

sultans.addEventListener('mouseover',function(){
    title.style.transition = "2s";
    title.style.marginRight = "0%";
    title.style.opacity = "100%";
});
sultans.addEventListener('mouseout',function(){
    title.style.transition = "2s";
    title.style.marginRight = "82%";
    title.style.opacity = "0%";
});
