const addpatientbutton = document.getElementById("addPatient");
const report = document.getElementById("report");
const btnSearch = document.getElementById("btnSearch");
const patients = [];

function addPatient() {
    const name = document.getElementById("name").value.trim();
    const ageVal = document.getElementById("age").value;
    const age = ageVal === "" ? null : Number(ageVal);
    const genderEl = document.querySelector('input[name="gender"]:checked');
    const condition = document.getElementById("condition").value;

    if (name && age && genderEl && condition) {
        patients.push({ name, gender: genderEl.value, age, condition });
        resetForm();
        generateReport();
    } else {
        alert("Please fill out all fields before adding a patient.");
    }
}

function resetForm() {
    const nameEl = document.getElementById("name");
    const ageEl = document.getElementById("age");
    const genderChecked = document.querySelector('input[name="gender"]:checked');
    const conditionEl = document.getElementById("condition");

    if (nameEl) nameEl.value = "";
    if (ageEl) ageEl.value = "";
    if (genderChecked) genderChecked.checked = false;
    if (conditionEl) conditionEl.value = "";
}

function generateReport() {
    const numPatients = patients.length;
    const conditionCount = {
        Diabetes: 0,
        Thyroid: 0,
        "High Blood Pressure": 0,
    };
    const genderConditionsCount = {
        Male: { Diabetes: 0, Thyroid: 0, "High Blood Pressure": 0 },
        Female: { Diabetes: 0, Thyroid: 0, "High Blood Pressure": 0 },
    };

    for (const patient of patients) {
        if (conditionCount.hasOwnProperty(patient.condition)) {
            conditionCount[patient.condition]++;
        }
        if (
            genderConditionsCount.hasOwnProperty(patient.gender) &&
            genderConditionsCount[patient.gender].hasOwnProperty(patient.condition)
        ) {
            genderConditionsCount[patient.gender][patient.condition]++;
        }
    }

    let html = `<strong>Number of patients:</strong> ${numPatients}<br><br>`;
    html += `<strong>Conditions Breakdown:</strong><br>`;
    for (const condition in conditionCount) {
        html += `${condition}: ${conditionCount[condition]}<br>`;
    }
    html += `<br><strong>Gender-Based Conditions:</strong><br>`;
    for (const gender in genderConditionsCount) {
        html += `${gender}:<br>`;
        for (const condition in genderConditionsCount[gender]) {
            html += `&nbsp;&nbsp;${condition}: ${genderConditionsCount[gender][condition]}<br>`;
        }
    }

    if (report) report.innerHTML = html;
}

if (addpatientbutton) addpatientbutton.addEventListener("click", addPatient);

function searchCondition() {
    const input = document.getElementById("conditionInput").value.trim().toLowerCase();
    const resultDiv = document.getElementById("result");
    if (resultDiv) resultDiv.innerHTML = "";

    if (!input) {
        if (resultDiv) resultDiv.innerHTML = "Please enter a condition to search.";
        return;
    }

    fetch("health_analysis.json")
        .then((response) => {
            if (!response.ok) throw new Error("Network response was not ok");
            return response.json();
        })
        .then((data) => {
            const list = data.conditions || [];
            const condition = list.find((item) => item.name.toLowerCase() === input);
            if (condition) {
                const symptoms = (condition.symptoms || []).join(", ");
                const prevention = (condition.prevention || []).join(", ");
                const treatment = condition.treatment || "";
                let html = `<h2>${condition.name}</h2>`;
                if (condition.imagesrc) html += `<img src="${condition.imagesrc}" alt="${condition.name}" style="max-width:200px">`;
                html += `<p><strong>Symptoms:</strong> ${symptoms}</p>`;
                if (prevention) html += `<p><strong>Prevention:</strong> ${prevention}</p>`;
                html += `<p><strong>Treatment:</strong> ${treatment}</p>`;
                resultDiv.innerHTML = html;
            } else {
                resultDiv.innerHTML = `Condition not found...`;
            }
        })
        .catch((error) => {
            console.error("Error:", error);
            if (resultDiv) resultDiv.innerHTML = "An error occurred while fetching data.";
        });
}

if (btnSearch) btnSearch.addEventListener("click", searchCondition);
