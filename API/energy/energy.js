const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const csv = require('csv-parser');

const app = express();
const PORT = process.env.PORT || 5002;

// Define the conversion rates
const COAL_PER_KWH = 0.0129; // kg
const PETROLEUM_PER_KWH = 0.09; // liters

// Middleware to parse JSON requests
app.use(bodyParser.json());

// Function to read the CSV file
function readCSVFile(filePath) {
    return new Promise((resolve, reject) => {
        const data = [];
        fs.createReadStream(filePath)
            .pipe(csv())
            .on('data', (row) => {
                data.push(row);
            })
            .on('end', () => {
                resolve(data);
            })
            .on('error', (error) => {
                reject(error);
            });
    });
}

// API endpoint to calculate consumption based on kWh input
app.post('/calculate_consumption', async (req, res) => {
    try {
        const kwh = req.body.kwh;

        // Read data from the CSV file
        const data = await readCSVFile('energy.csv');

        let totalCoalConsumption = 0;
        let totalPetroleumConsumption = 0;
        let totalCount = 0;

        data.forEach(row => {
            const rowKwh = parseInt(row['Units(Kwh)']);
            if (rowKwh === kwh) {
                totalCount++;
                totalCoalConsumption += COAL_PER_KWH * kwh;
                totalPetroleumConsumption += PETROLEUM_PER_KWH * kwh;
            }
        });

        if (totalCount === 0) {
            return res.status(400).json({ error: 'kWh value not found in the data' });
        }

        // Calculate average consumption
        const averageCoalConsumption = totalCoalConsumption / totalCount;
        const averagePetroleumConsumption = totalPetroleumConsumption / totalCount;

        res.json({
            averageCoalConsumption,
            averagePetroleumConsumption
        });
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
