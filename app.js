
const express = require('express');
require('dotenv').config();
const mongoose = require('require');
const PORT = process.env.PORT;
const uri = process.env.MONGO_URI;

app.listen(PORT, () => {
  console.log(`Connected to port ${PORT}`);
});