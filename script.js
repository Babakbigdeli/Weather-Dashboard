let apiKey = "eb41e266ed6ca53d9946184d90b8d779";
let searchBtn = $(".search-button");
let searchInput = $(".form-control");

// Search container and current date variables
let cityNameEl = $("#cityName");
let currentDateEl = $(".currentDate");
let weatherIconEl = $("#current-pic");
let searchHistoryEl = $("#history");
let tempEl = $("#temperature");
let humidityEl = $("#humidity");
let windSpeedEl = $("#wind-speed");
let uvIndexEl = $("#UV-index");
let cardRow = $(".card-row");

// Create a current date variable
var today = new Date();
let dd = String(today.getDate()).padStart(2, '0');
let mm = String(today.getMonth() + 1).padStart(2, '0');
let yyyy = today.getFullYear();
var today = dd + '/' + mm + '/' + yyyy;




