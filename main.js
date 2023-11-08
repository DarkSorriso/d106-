function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/CbT5fgQaU/model.json', modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error,results){
    if(error) {
        console.error(error);
    } else {
        console.log(results);
        radom_number_r = Math.floor(Math.random() * 255) +1;
        radom_number_g = Math.floor(Math.random() * 255) +1;
        radom_number_b = Math.floor(Math.random() * 255) +1;

        document.getElementById("result_label").innerHTML = 'Posso ouvir -'+ results[0].label;
        document.getElementById("result_confidence").innerHTML = 'Precisão -'+ (results[0].confidence*100).toFixed(2)+" %";
        document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
        document.getElementById("result_confidence").style.color= "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";

        img = document.getElementById('dalmata')
        img1 = document.getElementById('gato')
        img2 = document.getElementById('pato')
        

        if(results[0].label== "dalmata") {
            img.src = 'dalmata.gif';
            img1.src = 'gato.png';
            img2.src = 'pato.png';
        } else if (results[0].label == "gato") {
            img.src = 'dalmata.png';
            img1.src = 'gato.gif';
            img2.src = 'pato.png';
       
    } else if (results[0].label == "pato") {
        img.src = 'dalmata.png';
        img1.src = 'gato.png';
        img2.src = 'pato.gif';
} else  {
    img.src = 'dalmata.gif';
    img1.src = 'gato.gif';
    img2.src = 'pato.gif';
}
}
}






