// document.getElementById("button").addEventListener('click', (loadData) => {
//     //create an XHR OBJECT
//     const xhr = new XMLHttpRequest();//method

//     //OPEN- it specifies the type of request we are making and the url or filename we are making it to
//     xhr.open('GET','data.txt',true)
// //the GET is a type of request the 'data.txt' is the type of file we want to get, the true is whether we want the request to be asynchronous or synchronous
//     xhr.onload = function () {
//        if (this.status === 200) {
//         console.log(this.responseText);
//        } 
//     }
//     xhr.onreadystatechange = function(){
//         if (this.status === 200 && this.readyState === 4) {
            
//         }
//     }
//     xhr.send();

// })


let c = 2 * 2
util.log(c);