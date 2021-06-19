/* eslint-disable no-alert */
/* eslint-disable no-undef */
/* eslint-disable import/extensions */
import Line from './Line.js';

const LINES_LS = 'lines';

function getLocalStorage() {
  const lines = localStorage.getItem(LINES_LS);
  let array = [];
  try {
    array = JSON.parse(lines);
  } catch (error) {
    alert('localStorage data is corrupted');
  }
  if (!array) {
    array = [];
  }
  return array;
}

export default function LineList() {
  this.list = getLocalStorage();

  this.setLocalStorage = () => {
    localStorage.setItem(LINES_LS, JSON.stringify(lines));
  };
}
