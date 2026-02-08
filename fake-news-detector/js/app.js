
let currentPage='welcome';

function goPage(pg){currentPage=pg;renderPage();}
function showToast(msg){alert(msg);}

function renderPage(){
const app=document.getElementById('app');

if(currentPage==='welcome'){
app.innerHTML=`<div class="main-card">
<h1>📰 Fake News Detector</h1>
<button onclick="goPage('login')">Start</button>
</div>`;
}

else if(currentPage==='login'){
app.innerHTML=`<div class="main-card">
<h2>Login</h2>
<form onsubmit="return userLogin()">
<input type="text" placeholder="Username" required><br><br>
<input type="password" placeholder="Password" required><br><br>
<button>Login</button>
</form>
</div>`;
}

else if(currentPage==='detector'){
app.innerHTML=`<div class="main-card">
<h2>Fake News Analyzer</h2>
<form onsubmit="return runDetection(event)">
<textarea id="newsText" placeholder="Paste news here"></textarea><br>
<button>Analyze</button>
</form>
<h3>${resultText||"Ready to analyze"}</h3>
<canvas id="confidenceChart"></canvas>
<canvas id="countChart"></canvas>
</div>`;
drawCharts();
}
}
renderPage();
