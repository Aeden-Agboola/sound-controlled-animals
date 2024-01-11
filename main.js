function start() {
    navigator.mediaDevices.getUserMedia({
        audio: true
    });
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/QPCqj38je/model.json', modelReady);
}

function modelReady() {
    classifier.classify(gotResults);
}

function gotResults(e, r) {
    if (e) {
        console.error(e)
    } else {
        console.log(r)
        document.getElementById("result_label").innerHTML = "i can hear " + r[0].label;
        document.getElementById("result_confidence").innerHTML = "accuracy:" + (r[0].confidence * 100).toFixed(2);
        a1 = document.getElementById("a1");

        if (r[0].label == "cat") {
            a1.src = "cat.jpg";
        } else if (r[0].label == "dog") {
            a1.src = "dog.jpg";

        } else {
            a1.src = "listen.gif";
            

        }
    }
}