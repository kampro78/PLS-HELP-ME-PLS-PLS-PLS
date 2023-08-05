
Webcam.set({
    width:350,
    height:300,
    img_format:'png',
    png_quality:90
});

camera = document.getElementById("camera");
Webcam.attach('#camera');

function take_snapshot()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    });
}
console.log(ml5.version,"-version")
classifier = ml5.imageClassifer("https://teachablemachine.withgoogle.com/models/7gCwA3IBDe/model.json")
function modelLoaded() {
    console.log("LOADED");
}
function speak(){
    var synth = window.speechSynthesis;
    speak_data_1 = "The First Prediction is"+ prediction_1;
    speak_data_2 = "And The Second Prediction is"+ prediction_2;
    var utterThis = new SpeechSynthesisUtterance(speak_data_1+speak_data_2);
    synth.speak(utterThis);
    
}
function check() {
    img = document.getElementById('captured_image');
    classifier.classify(img,gotResult);
}
function gotResult(error,results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        document.getElementById("result_emotion_name").innerHTML = results[0].label;
        document.getElementById("result_emotion_name2").innerHTML = results[1].label;
        prediction_1 = results[0].label;
        prediction_2 = results[1].label;
        speak();
        if(results[0].label == "hapi") {
            document.getElementById('update_emoji').innerHTML = "&#128522"
        }
        if(results[0].label == "sad") {
            document.getElementById('update_emoji').innerHTML = "&#128532"
        }
        if(results[0].label == "mad") {
            document.getElementById('update_emoji').innerHTML = "&#128548"
        }
        if(results[0].label == "The image of depressiion") {
            document.getElementById('update_emoji').innerHTML = "<img src='data:image/jpeg;base64,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'>"
        }
    }
}