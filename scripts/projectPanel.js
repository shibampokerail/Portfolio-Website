const blob = document.getElementById("blob");
document.body.onpointermove = event => {
    const {clientX, clientY} = event;

    // blob.style.left = `${clientX}px`;
    // blob.style.top = `${clientY}px`;

    // blob.animate({
    //     left : `${clientX}px`,
    //     top : `${clientY}px`
    // }, {duration: 3000, fill:"forwards"});
}

background_light = [
`linear-gradient(to right, rgb(86, 247, 94), rgb(251, 252, 251) )`,
 `linear-gradient(to right, aquamarine, mediumpurple )`,
` linear-gradient(to right, rgb(100, 250, 132), rgb(248, 73, 210)) `,
 `linear-gradient(to right, rgb(255, 251, 31), rgb(255, 143, 69) )`,
 `linear-gradient(to right, rgb(252, 252, 252), rgb(247, 151, 151))`,
`linear-gradient(to right, rgb(0, 110, 255), rgb(146, 115, 230))` ]

blob.style.background=background_light[Math.floor(Math.random()*6)];