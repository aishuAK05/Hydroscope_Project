


// Function to parse CSV data
function parseCSV(data) {
    const lines = data.split('\n').filter(line => line.trim() !== ''); // Remove empty lines
    const headers = lines[0].split(',').map(header => header.trim());
    const results = [];

    for (let i = 1; i < lines.length; i++) {
        const obj = {};
        const currentLine = lines[i].split(',').map(value => value.trim());

        // Ensure that the line has the same number of columns as headers
        if (currentLine.length === headers.length) {
            for (let j = 0; j < headers.length; j++) {
                obj[headers[j]] = currentLine[j];
            }
            results.push(obj);
        } else {
            console.error('Skipping line due to column mismatch:', lines[i]);
        }
    }
    return results;
}

// Event listener for water levels file input change
document.getElementById('fileInput').addEventListener('change', async function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = async function(e) {
            try {
                const data = e.target.result;
                const jsonData = parseCSV(data);
                createChartFromData(jsonData);
            } catch (error) {
                console.error('Error processing file:', error);
            }
        };
        reader.readAsText(file);
    }
});

// Function to create the chart from water levels data
function createChartFromData(data) {
    // Check if data is valid and has the expected columns
    if (!data || data.length === 0 || !data[0]['Year'] || !data[0]['Water Level']) {
        console.error('Invalid data or missing required columns.');
        return;
    }

    // Initialize objects to hold water levels
    const preMonsoonLevels = {};
    const postMonsoonLevels = {};

    // Process data
    data.forEach(row => {
        const year = row['Year'];
        const waterLevel = parseFloat(row['Water Level']);
        
        if (!isNaN(waterLevel)) {
            if (row['Water Level'].includes('Pre Monsoon')) {
                if (!preMonsoonLevels[year]) {
                    preMonsoonLevels[year] = { total: 0, count: 0 };
                }
                preMonsoonLevels[year].total += waterLevel;
                preMonsoonLevels[year].count += 1;
            } else if (row['Water Level'].includes('Post Monsoon')) {
                if (!postMonsoonLevels[year]) {
                    postMonsoonLevels[year] = { total: 0, count: 0 };
                }
                postMonsoonLevels[year].total += waterLevel;
                postMonsoonLevels[year].count += 1;
            }
        } else {
            console.error('Invalid water level value:', row['Water Level']);
        }
    });

    // Calculate averages
    const years = Array.from(new Set([...Object.keys(preMonsoonLevels), ...Object.keys(postMonsoonLevels)]));
    const preMonsoonAverages = years.map(year => {
        const { total, count } = preMonsoonLevels[year] || { total: 0, count: 0 };
        return count ? total / count : null;
    });
    const postMonsoonAverages = years.map(year => {
        const { total, count } = postMonsoonLevels[year] || { total: 0, count: 0 };
        return count ? total / count : null;
    });

    // Create the chart
    const ctx = document.getElementById('waterLevelChart').getContext('2d');
    const waterLevelChart = new Chart(ctx, {
        type: 'bar', // You can change this to 'line', 'pie', etc.
        data: {
            labels: years, // X-axis labels (years)
            datasets: [
                {
                    label: 'Average Pre Monsoon Water Level (meters)',
                    data: preMonsoonAverages, // Y-axis data (average pre-monsoon water level)
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1
                },
                {
                    label: 'Average Post Monsoon Water Level (meters)',
                    data: postMonsoonAverages, // Y-axis data (average post-monsoon water level)
                    backgroundColor: 'rgba(153, 102, 255, 0.2)',
                    borderColor: 'rgba(153, 102, 255, 1)',
                    borderWidth: 1
                }
            ]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Water Level (meters)'
                    },
                    grid: {
                        display: false // Hide Y-axis grid lines
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: 'Year'
                    },
                    grid: {
                        display: false // Hide X-axis grid lines
                    }
                }
            }
        }
    });
}

// Event listener for per capita water availability file input change
document.getElementById('fileInputAvailability').addEventListener('change', async function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = async function(e) {
            try {
                const data = e.target.result;
                const jsonData = parseCSV(data);
                createAvailabilityChart(jsonData);
            } catch (error) {
                console.error('Error processing file:', error);
            }
        };
        reader.readAsText(file);
    }
});

// Function to create the chart for per capita water availability
function createAvailabilityChart(data) {
    // Check if data is valid and has the expected columns
    if (!data || data.length === 0 || !data[0]['State'] || !data[0]['District'] || !data[0]['Value']) {
        console.error('Invalid data or missing required columns.');
        return;
    }

    // Count occurrences of each water availability category
    const availabilityCounts = data.reduce((acc, row) => {
        const category = row['Value'];
        if (category) {
            acc[category] = (acc[category] || 0) + 1;
        }
        return acc;
    }, {});

    const categories = Object.keys(availabilityCounts);
    const counts = categories.map(category => availabilityCounts[category]);

    // Create the chart
    const ctx = document.getElementById('availabilityChart').getContext('2d');
    const availabilityChart = new Chart(ctx, {
        type: 'pie', // You can change this to 'bar', 'doughnut', etc.
        data: {
            labels: categories, // Labels for the pie chart
            datasets: [{
                data: counts, // Data values for each category
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            let label = context.label || '';
                            if (label) {
                                label += ': ' + context.raw;
                            }
                            return label;
                        }
                    }
                }
            }
        }
    });
}
