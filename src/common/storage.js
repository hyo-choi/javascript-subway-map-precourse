/* eslint-disable no-undef */
const STATIONS_LS = 'stations';
const LINES_LS = 'lines';

export function setStations(stations) {
  localStorage.setItem(STATIONS_LS, JSON.stringify(stations));
}

export function setLines(lines) {
  localStorage.setItem(LINES_LS, JSON.stringify(lines));
}

export function getStations() {
  const stations = localStorage.getItem(STATIONS_LS);
  let array;
  try {
    array = JSON.parse(stations);
  } catch (error) {
    array = [];
  }
  return array;
}

export function getLines() {
  const lines = localStorage.getItem(LINES_LS);
  let array;
  try {
    array = JSON.parse(lines);
  } catch (error) {
    array = [];
  }
  return array;
}
