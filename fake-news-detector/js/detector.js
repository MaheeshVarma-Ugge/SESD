
let fake=0, genuine=0, resultText='', isFake=null;
let fakeConfidencePercentage = 0;

let analysisResult = {preview:'', explanation:'', correctInfo:''};

function simulateDetection(text){
    isFake = Math.random() > 0.5;
    let confidence = Math.floor(Math.random()*30)+65;

    if(isFake){
        fakeConfidencePercentage = confidence;
        fake++;
        resultText = `❌ FAKE - ${fakeConfidencePercentage}% Fake Confidence`;
    }else{
        fakeConfidencePercentage = 100-confidence;
        genuine++;
        resultText = `✅ GENUINE - ${fakeConfidencePercentage}% Fake Confidence`;
    }
}

function runDetection(event){
    event.preventDefault();
    const newsText=document.getElementById('newsText').value.trim();
    if(!newsText){
        showToast("Please enter text to analyze.");
        return false;
    }
    simulateDetection(newsText);
    renderPage();
    return false;
}
