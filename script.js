function generateReport() {
  const name = document.getElementById("name").value;
  const cls = document.getElementById("class").value;
  const roll = document.getElementById("roll").value;

  const m1 = parseInt(document.getElementById("marks1").value) || 0;
  const m2 = parseInt(document.getElementById("marks2").value) || 0;
  const m3 = parseInt(document.getElementById("marks3").value) || 0;
  const m4 = parseInt(document.getElementById("marks4").value) || 0;
  const m5 = parseInt(document.getElementById("marks5").value) || 0;

  const total = m1 + m2 + m3 + m4 + m5;
  const percent = (total / 500 * 100).toFixed(2);

  let grade = "";
  if (percent >= 90) grade = "A+";
  else if (percent >= 80) grade = "A";
  else if (percent >= 70) grade = "B";
  else if (percent >= 60) grade = "C";
  else if (percent >= 50) grade = "D";
  else grade = "F";

  document.getElementById("rName").textContent = name;
  document.getElementById("rClass").textContent = cls;
  document.getElementById("rRoll").textContent = roll;
  document.getElementById("rM1").textContent = m1;
  document.getElementById("rM2").textContent = m2;
  document.getElementById("rM3").textContent = m3;
  document.getElementById("rM4").textContent = m4;
  document.getElementById("rM5").textContent = m5;
  document.getElementById("obtained").textContent = total;
  document.getElementById("percent").textContent = percent;
  document.getElementById("grade").textContent = grade;

  document.getElementById("report").style.display = "block";
}
