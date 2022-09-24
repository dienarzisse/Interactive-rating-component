
var ele = document.activeElement;
document.querySelectorAll('.rating-element').forEach(item => {
    item.addEventListener('click', event => {
        ele = document.activeElement;
    })
  })

document.getElementById("btn-submit").addEventListener("click", function() {
    if(["1","2","3","4","5"].includes(ele.innerHTML))
        {
            document.getElementById("thank-you").style.display = "flex";
            document.getElementById("review").style.display = "none";
            document.getElementById("selected-rating").innerHTML = ele.innerHTML;
            console.log(ele.innerHTML);
        }      
});