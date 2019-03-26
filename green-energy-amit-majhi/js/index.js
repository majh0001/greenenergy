var resources = [
   {
        heading: "group", 
        path: "img/group.png",
        body: "libero, finibus non faucibus sit amet, efficitur vitae mauris. Nullam sed scelerisque elit. Duis malesuada felis vel augue imperdiet mattis."
    },
    
    {
        heading: "phone",
        path: "img/phone.png",
        body: "molestie metus. Sed vitae ligula egestas, vulputate lacus eu, congue nibh. Curabitur finibus leo eros, blandit dignissim turpis rhoncus nec. Ut placerat dolor enim, nec scelerisque ligula placerat id. Fusce tristique eu magna non rhoncus. Praesent sit amet vestibulum erat, vitae sodales elit. Aenean lacinia odio nec molestie dapibus."
    },
    
    {
        heading: "icon",
        path: "img/icon.png",
        body: "Morbi auctor vestibulum metus, a cursus magna elementum et. Aenean vehicula pharetra euismod. Vivamus hendrerit ut odio at tincidunt. Quisque sed aliquam ligula. Etiam libero est, finibus"
    },
    
];

let btns = document.querySelectorAll(".btns");
console.log(btns);
let bucket = document.querySelector(".current-content");

function load(e) {
    let event = e.currentTarget.innerHTML;
    console.log(event);
    
    if(event == "<img src=\"img/group.png\">")
    {
        console.log("match");
        bucket.innerHTML = `<article>
                                <h1>${resources[0].heading}</h1>
                                <div class="row">
                                    <div class="col-md-4">
                                        <img class="img-fluid"> src="${resources[0].path}">
                                    </div>
                                    <div class="col-md-8">
                                        <p>${resources[0].body}</p>
                                    </div>
                                </div>
                            </article>`;
    } 
    
    else if(event == "<img src=\"img/phone.png\">")
    {
        console.log("match");  
        bucket.innerHTML = `<article>
                                <h1>${resources[1].heading}</h1>
                                <div class="row">
                                    <div class="col-md-4">
                                        <img class="img-fluid"> 
                                <img src="${resources[1].path}">
                                    </div>
                                    <div class="col-md-8">
                                <p>${resources[1].body}</p>
                                    </div>
                                </div>
                            </article>`;
    }
    
    else if(event == "<img src=\"img/icon.png\">")
    {
        console.log("match");  
        bucket.innerHTML = `<article>
                                <h1>${resources[2].heading}</h1>
                                <div class="row">
                                    <div class="col-md-4">
                                        <img class="img-fluid"> 
                                <img src="${resources[2].path}">
                                    </div>
                                    <div class="col-md-8">
                                <p>${resources[2].body}</p>
                                    </div>
                                </div>
                            </article>`;
    }
}

btns[0].addEventListener("click",load);
btns[1].addEventListener("click",load);
btns[2].addEventListener("click",load);