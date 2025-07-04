// Chart.js configuration for both charts
const brilliantBlues = {
  dark: '#004AAD',
  medium: '#008DDA',
  light: '#41C9E2',
  extraLight: '#ACE2E1'
};

// Radar chart for technical skills
const ctxTechSkills = document.getElementById('techSkillsChart').getContext('2d');
new Chart(ctxTechSkills, {
  type: 'radar',
  data: {
    labels: ['SQL', 'Python', 'R', 'Power BI', 'Tableau', 'Excel'],
    datasets: [{
      label: 'Proficiency Level',
      data: [9, 7, 7, 8, 8, 9],
      backgroundColor: 'rgba(0, 141, 218, 0.2)',
      borderColor: brilliantBlues.medium,
      pointBackgroundColor: brilliantBlues.medium,
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: brilliantBlues.medium
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      r: {
        angleLines: { color: 'rgba(0, 0, 0, 0.1)' },
        grid: { color: 'rgba(0, 0, 0, 0.1)' },
        pointLabels: { 
          font: { size: 14, weight: 'bold' },
          color: brilliantBlues.dark 
        },
        ticks: {
          backdropColor: 'transparent',
          color: 'rgba(0, 0, 0, 0.5)',
          stepSize: 2
        },
        min: 0,
        max: 10
      }
    },
    plugins: {
      legend: { display: false }
    }
  }
});

// Bar chart for career paths
const wrapLabel = (label, maxWidth) => {
  if (label.length <= maxWidth) return label;
  const words = label.split(' ');
  const lines = [];
  let currentLine = '';
  words.forEach(word => {
    if ((currentLine + ' ' + word).trim().length > maxWidth) {
      lines.push(currentLine.trim());
      currentLine = word;
    } else {
      currentLine = (currentLine + ' ' + word).trim();
    }
  });
  lines.push(currentLine.trim());
  return lines;
};

const ctxCareerPaths = document.getElementById('careerPathsChart').getContext('2d');
const rawCareerLabels = ['Data Analyst', 'Business Analyst', 'Production Control Clerk', 'Retail Store Manager'];
const wrappedCareerLabels = rawCareerLabels.map(label => wrapLabel(label, 16));

new Chart(ctxCareerPaths, {
  type: 'bar',
  data: {
    labels: wrappedCareerLabels,
    datasets: [{
      label: 'Skill Alignment Score',
      data: [9, 8, 8, 7],
      backgroundColor: [
        brilliantBlues.medium,
        brilliantBlues.light,
        brilliantBlues.dark,
        brilliantBlues.extraLight
      ],
      borderColor: '#FFFFFF',
      borderWidth: 2
    }]
  },
  options: {
    indexAxis: 'y',
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        beginAtZero: true,
        grid: { display: false },
        ticks: { display: false }
      },
      y: {
        grid: { display: false },
        ticks: {
          color: brilliantBlues.dark,
          font: { size: 14, weight: '600' }
        }
      }
    },
    plugins: {
      legend: { display: false }
    }
  }
});