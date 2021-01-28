let speechRecognizer = new window.webkitSpeechRecognition();


const answers = [
    'I am fine. How are You?',
    'Hi',
    'Hello!How can I help you?',
    'Abhradeep is a world known coder who built several softwares like google,facebook,opengl. He is now working on the communication with aliens.',
    'subhradeep is a burden of the world. He have no rights to live.',
    'your welcome',
    'my name is kaka',
    'How does our solar system keeps its pants up? With an asteroid belt.',
    "Did you hear about my Dad's restaurant on the moon? The food is ok, but it had no atmosphere",
    "The cold air in the fridge stops the ripening process and ripening is what gives tomatoes their flavor. The fridge will also alter the texture of the tomatoes. Instead of putting tomatoes in the fridge, store them in a paper bag …",
    'bye bye!'

]
// selecting the required dom element
const startButton = document.querySelector('button');
const div = document.querySelector('div');

const synthesizer = window.speechSynthesis;
console.log(synthesizer.getVoices());

const utterance = new window.SpeechSynthesisUtterance();
utterance.pitch = 1.5;
utterance.lang = 'en-US';
utterance.volume = 1;
utterance.rate = 1.2;
startButton.onclick = function(event){
    speechRecognizer.start();
}

speechRecognizer.onerror = function(event){
    console.error('speechRecognizer.onerror');
}
utterance.onerror = function (event) {
    console.error('SpeechSynthesisUtterance.onerror');
}
speechRecognizer.onsoundend = (event)=>{
    speechRecognizer.stop();
}
speechRecognizer.onresult = (event)=>{
    const result = event.results[0][0].transcript;
    div.innerHTML = `<p>${result}</p>`;
    utterance.text = "I don't know what you say";

    if (result.includes('hi')||result.includes('hello')||result.includes('how are you')){
        utterance.text = answers[Math.floor(Math.random()*3)];
    }
    else if(result.includes('who is Avro')){
        utterance.text = answers[3];
    }
    else if(result.includes('who is subhra')){
        utterance.text = answers[4];
    }
    else if(result.includes('thank')){
        utterance.text = answers[5];
    }
    else if(result.includes('your name')){
        utterance.text = answers[6];
    }
    else if(result.includes('joke')){
        utterance.text = answers[7 + Math.floor(Math.random()*2)];
    }
    else if(result.includes('put tomatoes into fridge')){
        utterance.text = answers[9];
    }
    else if(result.includes('bye')){
        utterance.text = answers[10];
    }
    synthesizer.speak(utterance);
}