
function drawCountChart(){
    const ctx=document.getElementById("countChart").getContext("2d");
    if(window.countChart)window.countChart.destroy();
    window.countChart=new Chart(ctx,{
        type:'doughnut',
        data:{labels:['Fake','Genuine'],datasets:[{data:[fake,genuine],backgroundColor:['#ff6b6b','#33fc98']}]},
        options:{plugins:{legend:{display:false}}}
    });
}

function drawFakePercentageChart(fakePercent){
    const ctx=document.getElementById("confidenceChart").getContext("2d");
    if(window.confidenceChart)window.confidenceChart.destroy();
    window.confidenceChart=new Chart(ctx,{
        type:'doughnut',
        data:{datasets:[{data:[fakePercent,100-fakePercent],backgroundColor:['#ff6b6b','rgba(255,255,255,0.2)']}]},
        options:{plugins:{legend:{display:false}}}
    });
}

function drawCharts(){
    drawCountChart();
    drawFakePercentageChart(fakeConfidencePercentage);
}
