// =======================
// CALIBRATION PARAMETERS
// =======================
window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("splashScreen").style.display = "none";
  }, 2000);
});

const sensors = {
    acetaminophen: {
        slope: 0.05973,
        intercept: 0.2934,
        mw: 151.16,
        therapeutic: [5, 20],
        borderline: [20, 30]
    },
    diclofenac: {
        slope: 0.00467,
        intercept: 0.23693,
        mw: 318.13,
        therapeutic: [0.5, 2.5],
        borderline: [2.5, 5]
    }
};

let currentDrug = "acetaminophen";
let chart;

// =======================
// INITIALIZE
// =======================

window.onload = function() {
    updateSensorInfo();
    initChart();
};

document.getElementById("drugSelect").addEventListener("change", function() {
    currentDrug = this.value;
    updateSensorInfo();
});

// =======================
// UPDATE SENSOR INFO
// =======================

function updateSensorInfo() {
    document.getElementById("slopeDisplay").innerText = sensors[currentDrug].slope + " μA/μM";
    document.getElementById("interceptDisplay").innerText = sensors[currentDrug].intercept + " μA";
}

// =======================
// CALCULATION ENGINE
// =======================

function calculateConcentration() {
    const current = parseFloat(document.getElementById("currentInput").value);
    const sensor = sensors[currentDrug];

    if (isNaN(current)) {
        alert("Enter valid current value.");
        return;
    }

    // Convert μA to μM
    let concentration_uM = (current - sensor.intercept) / sensor.slope;

    // Convert μM to μg/mL
    let concentration_ugmL = (concentration_uM * sensor.mw) / 1000;

    document.getElementById("concentrationOutput").innerText =
        concentration_ugmL.toFixed(2) + " μg/mL";

    classify(concentration_ugmL);
    updateGraph(concentration_ugmL);
}

// =======================
// CLINICAL CLASSIFICATION
// =======================

function classify(value) {
    const sensor = sensors[currentDrug];
    const statusBox = document.getElementById("statusBox");
    const text = document.getElementById("interpretationText");

    if (value < sensor.therapeutic[0]) {
        statusBox.className = "status orange";
        statusBox.innerText = "Low";
        text.innerText = "The detected concentration is below the therapeutic range.";
    }
    else if (value <= sensor.therapeutic[1]) {
        statusBox.className = "status green";
        statusBox.innerText = "Therapeutic";
        text.innerText = "The detected concentration falls within the therapeutic range based on calibrated carbon fiber electrochemical sensing.";
    }
    else {
        statusBox.className = "status red";
        statusBox.innerText = "Elevated";
        text.innerText = "The detected concentration exceeds the recommended therapeutic range.";
    }
}

// =======================
// SAVE DATA
// =======================

function saveData() {
    const reading = {
        drug: currentDrug,
        current: document.getElementById("currentInput").value,
        concentration: document.getElementById("concentrationOutput").innerText,
        timestamp: new Date().toLocaleString()
    };

    let data = JSON.parse(localStorage.getItem("sensorData")) || [];
    data.push(reading);
    localStorage.setItem("sensorData", JSON.stringify(data));

    alert("Reading saved successfully.");
}

// =======================
// AI EXPLANATION
// =======================

function aiExplanation() {
    alert("This interpretation is based on chronoamperometric regression using calibrated QS|CF microsensor parameters integrated into the clinical decision engine.");
}

// =======================
// GRAPH
// =======================

function initChart() {
    const ctx = document.getElementById('chartCanvas').getContext('2d');
    chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: [],
            datasets: [{
                label: 'Concentration (μg/mL)',
                data: []
            }]
        }
    });
}

function updateGraph(value) {
    chart.data.labels.push(new Date().toLocaleTimeString());
    chart.data.datasets[0].data.push(value);
    chart.update();
}