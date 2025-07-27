document.getElementById('taskForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const title = document.getElementById('taskTitle').value;
  const assigned = document.getElementById('assignedTo').value;
  const start = document.getElementById('startDate').value;
  const end = document.getElementById('endDate').value;

  const row = `<tr>
    <td>${title}</td>
    <td>${assigned}</td>
    <td>${start}</td>
    <td>${end}</td>
  </tr>`;

  document.querySelector('#taskTable tbody').innerHTML += row;

  e.target.reset();
});

function updatePhase() {
  const phase = document.getElementById('phaseName').value;
  const progress = document.getElementById('progress').value;
  const comments = document.getElementById('comments').value;

  const item = `<li><strong>${phase}:</strong> ${progress}% - ${comments}</li>`;
  document.getElementById('phaseUpdates').innerHTML += item;

  chart.data.datasets[0].data.push(progress);
  chart.data.labels.push(phase);
  chart.update();
}

const chart = new Chart(document.getElementById('progressChart'), {
  type: 'bar',
  data: {
    labels: [],
    datasets: [{
      label: 'Phase Progress',
      backgroundColor: '#4CAF50',
      data: []
    }]
  },
  options: {
    scales: {
      y: { beginAtZero: true, max: 100 }
    }
  }
});
