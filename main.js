
let starsCountNumber;
let starsCount = document.querySelectorAll(".stars-count button");
let container = document.querySelector(".container");
let submit = document.querySelector(".submit");

// Click Event
starsCount.forEach((button,index)=>{
    button.addEventListener("click",()=>{
        // Add The index Number
        starsCountNumber = index + 1;
        console.log(starsCountNumber);

        // Remove The Class From All Buttons
        starsCount.forEach((button)=>{
            button.className = "not-hovered"
        })
        // Add Hovered Class
        button.className = "hovered";
    })
})

submit.addEventListener("click",()=>{
    container.innerHTML = `    <div class="message">
        <img src="./images/illustration-thank-you.svg">
        <h3>You selected <span>${starsCountNumber}</span> out of 5</h3>
        <h2>Thank You!</h2>
        <p>We appreciate you taking the time to give a rating if uou ever need more support, don't hesitate to get in touch!</p>
    </div>`
})