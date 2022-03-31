function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/kA4F-80yW/model.json' ,  modelReady);
}

function modelReady()
{
    classifier.classify(gotResults);

}
function gotResults(error , results)
{

    if(error)
    {
        console.error(error);


    }
    else{
        console.log(results);
        random_number_r=Math.floor(Math.random()*255)+1;
        random_number_g=Math.floor(Math.random()*255)+1;
        random_number_b=Math.floor(Math.random()*255)+1;

        document.getElementById("result_label").innerHTML='I can Hear' + results[0].label;
        document.getElementById("result_confidence").innerHTML='Accuracy' + (results[0].confidence*100).toFixed(2) + "%";
        document.getElementById("result_label").style.color="rgb("+random_number_r+" , "+random_number_g+" , "+random_number_b+")";
        document.getElementById("result_confidence").style.color="rgb("+random_number_r+" , "+random_number_g+" , "+random_number_b+")";


        img=document.getElementById('lion.png');
        img1=document.getElementById('tiger.png');
        img2=document.getElementById('cow.png');
        img3=document.getElementById('dog.png');
        img4=document.getElementById('cow.png');


        if(results[0].label=="meowing")
        {
            img.src='cat.gif';
            img1.src='lion.png';
            img2.src='tiger.png';
            img3.src='dog.png';
            img4.src='cow.png';
        }
        else if(results[0].label=="roaring")
        {
            img.src='cat.png';
            img1.src='lion.gif';
            img2.src='tiger.png';
            img3.src='dog.png';
            img4.src='cow.png';
        }

        else if(results[0].label=="snapping")
        {
            img.src='cat.png';
            img1.src='lion.png';
            img2.src='tiger.gif';
            img3.src='dog.png';
            img4.src='cow.png';
        }

        else if(results[0].label=="mooing")
        {
            img.src='cat.png';
            img1.src='lion.png';
            img2.src='tiger.gif';
            img3.src='dog.png';
            img4.src='cow.png';
        }
       
        else 
        
        {
            img.src='cat.png';
            img1.src='lion.png';
            img2.src='tiger.png';
            img3.src='dog.gif';
            img4.src='cow.png';

        }

    }
}

