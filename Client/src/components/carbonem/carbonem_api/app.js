const express = require("express");
const csv = require("csv-parser");
const fs = require("fs");
const bodyParser = require("body-parser");

const app = express();
const carData = [];
app.use(bodyParser.json());

// Load the dataset into memory
fs.createReadStream("CARSdb.csv")
  .pipe(csv())
  .on("data", (row) => {
    carData.push(row);
  })
  .on("end", () => {
    console.log("Dataset loaded successfully");
  });

// Define a route for calculating carbon emissions
app.post("/calculate_emission", (req, res) => {
  if (!req.body || !req.body.car_model) {
    return res.status(400).json({ error: "Car model not provided" });
  }

  const car_model = req.body.car_model; // Corrected line

  const car = carData.find((car) => {
    const carModel = car[
      "ID,Car_Model,Purchase_Year,Recent_Servicing_Year,Carbon_Emission_Rate"
    ]
      .split(",")[1]
      .trim();
    return carModel === car_model;
  });

  if (!car) {
    return res.status(404).json({ error: "Car model not found" });
  }

  console.log("this is the car", car);
  console.log("this is the car", car.ID);

  const carModelData =
    car[
      "ID,Car_Model,Purchase_Year,Recent_Servicing_Year,Carbon_Emission_Rate"
    ].split(",");
  const CarID = parseFloat(carModelData);
  const carModel = carModelData[1].trim();
  const purchaseYear = parseInt(carModelData[2]);
  const serviceYear = parseInt(carModelData[3]);
  const carbonEmissionRate = parseFloat(carModelData[4]);

  let carbon_emission_rate = carbonEmissionRate;
  console.log(req.body, req.body.purchase_year);
  // Calculate emission rate based on purchase year
  if (req.body.purchase_year >= 2015 && req.body.purchase_year <= 2020) {
    carbon_emission_rate *= 1.02;
  } else if (req.body.purchase_year > 2020 && req.body.purchase_year <= 2024) {
    carbon_emission_rate *= 1.01;
  }

  // Calculate emission rate based on recent service year
  const service_difference = serviceYear - req.body.service_year;
  carbon_emission_rate -= 0.2 * service_difference;

  console.log(carbon_emission_rate);

  // Calculate total carbon emission for the given distance
  const total_emission = (carbon_emission_rate * req.body.distance) / 1000; // Assuming distance is in kilometers

  res.json({ total_emission });
});

app.post("/", (req, res) => {
  console.log("hey");
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
