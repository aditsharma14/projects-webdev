const addpatientbutton=document.getElementById("addPatient");
const report=document.getElementById("report");
const btnsearch=document.getElementById("btnsearch");
const patients=[];
function addPatient(){
    const name=document.getElementById("name").value;
    const age=document.getElementById("age").value;
    const gender=document.querySelector('input[name="gender"]:checked');
    const condition=document.getElementById("condition").value;
    if(name&&age&&gender&&condition){
        patients.push({name,gender:gender.value,age,condition});
        resetForm();
        generateReport();

    }

}
function resetForm(){
    document.getElementById("name")="";
    document.getElementById("age")="";
    document.querySelector('input[name="gender"]:checked').checked=false;
    document.getElementById("condition").value="";

}
function generateReport(){
    const numPatients=patients.length;
    const conditionCount={
        Diabetes:0,
        Thyroid:0,
        "High Blood Pressure":0,
    };
    const genderConditionsCount={
        Male:{
            Diabetes:0,
            Thyroid:0,
            "High Blood Pressure":0,
        },
        Female:{
            Diabetes:0,
            Thyroid:0,
            "High Blood Pressure":0

        },
    };
    for(const patient of patients){
        conditionCount[patient.condition]++;
        genderConditionsCount[patient.gender][patient.condition]++;

    }
    report.innerHTML=`Number of patients:${numPatients}<br><br>`;
    report.innerHTML=`Conditions Breakdown:<br>`;
    for(const condition in conditionCount){
        report.innerHTML+=`${condition}:${conditionCount[condition]}<br>`;

    }
    report.innerHTML+=`<br>Gender-Based Conditions:<br>`;
    for(const gender in genderConditionsCount){
        report.innerHTML+=`${gender}:<br>`;
        for(const condition in genderConditionsCount[gender]){
            report.innerHTML+=`&nbsp;&nbsp;${condition}: ${genderConditionsCount[gender][condition]}<br>`;

        }
    }
}
addpatientbutton.addEventListener("click",addPatient);
