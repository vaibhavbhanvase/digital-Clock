let cl = console.log;
const digitalClock = document.getElementById("digitalClock")
// const setZero =((num) =>{
//     if(num < 10){
//        return "0" + num
//     }else{
//         return num
//     }
// })
const setZero = num => num < 10 ? "0" + num : num

function digitalClocks (){
    let d = new Date()
    let hr = d.getHours()
    let min = d.getMinutes()
    let sec = d.getSeconds()
    let session = "AM"
    if(hr > 12){
        hr = hr - 12
        session = "PM"
    };
    // if(hr < 10){
    //     hr = "0" + hr
    // };
    // if(min < 10){
    //     min = "0" + min
    // };
    // if(sec < 10){
    //     sec = "0" + sec
    // }
    let result = `${setZero(hr)}:${setZero(min)}:${setZero(sec)}${session}`
digitalClock.innerHTML = result;
setTimeout(() => {
    digitalClocks();
}, 1000);
} 
digitalClocks()