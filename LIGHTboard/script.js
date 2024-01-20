{/* <span id="temp" class=""></span> */}

const tempLoad=()=>{
    let temp = document.getElementById('temp');
    temp.innerHTML = "SAHIL";
    temp.style.color = "#d63031";
    setTimeout(() => {
        temp.innerHTML = "SHRIVASTAVA";
    temp.style.color = "#f8b627";
    }, 1000);
    setTimeout(()=>{
        temp.innerHTML = "SAHIL";
    },1500);
    setTimeout(()=>{
        temp.innerHTML = "SHRIVASTAVA";
    },2000);
    setTimeout(()=>{
        temp.innerHTML = "SAHIL";
        temp.style.color = "#d63031";
    },2500);
}

tempLoad();
setInterval(tempLoad, 3000);