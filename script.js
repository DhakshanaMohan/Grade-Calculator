function add() {
    const tamil = document.getElementById('tamil').value;
    const english = document.getElementById('english').value;
    const maths = document.getElementById('maths').value;
    const science = document.getElementById('science').value;
    const social = document.getElementById('social').value;

    if (!tamil || !english || !maths || !science || !social) {
        alert("Please enter all subject marks.");
        return;
    }

    const tamilNum = Number(tamil);
    const englishNum = Number(english);
    const mathsNum = Number(maths);
    const scienceNum = Number(science);
    const socialNum = Number(social);

    if (
        tamilNum < 0 || tamilNum > 100 ||
        englishNum < 0 || englishNum > 100 ||
        mathsNum < 0 || mathsNum > 100 ||
        scienceNum < 0 || scienceNum > 100 ||
        socialNum < 0 || socialNum > 100
    ) {
        alert("Marks must be between 0 and 100.");
        return;
    }

    const result = tamilNum + englishNum + mathsNum + scienceNum + socialNum;
    const average = result / 5;

    let grade = '';
    let color = '';

    if (average >= 90) {
        grade = 'A+';
        color = 'green';
    } else if (average >= 80) {
        grade = 'A';
        color = 'green';
    } else if (average >= 70) {
        grade = 'B';
        color = 'green';
    } else if (average >= 60) {
        grade = 'C';
        color = 'green';
    } else if (average >= 50) {
        grade = 'D';
        color = 'green';
    } else if (average >= 40) {
        grade = 'E';
        color = 'orange';
    } else {
        grade = 'Fail';
        color = 'red';
    }

    const resultDiv = document.getElementById('result');
    const gradeDiv = document.getElementById('grade');

    resultDiv.innerHTML = `Total: ${result}, Average: ${average.toFixed(2)}`;
    gradeDiv.innerHTML = `Grade: ${grade}`;

    gradeDiv.className = '';
    gradeDiv.classList.add(color);
}
