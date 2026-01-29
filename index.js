const inputElement = document.getElementById("inputAudio");
const audioElement = document.getElementById("audio");

inputElement.addEventListener("change", (event) =>{
    const file = event.target.files[0];

    const fileUrl = URL.createObjectURL(file);

    audioElement.src = fileUrl
    audioElement.play();
})

const audioCtx = new AudioContext();
const analyser = audioCtx.createAnalyser();


