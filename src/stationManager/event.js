/* eslint-disable import/extensions */
/* eslint-disable no-undef */
import { makeTableRow, makeButtonWithClass } from '../common/interface.js';

const STATION_NAME_INPUT = 'station-name-input';
const STATION_ADD_BUTTON = 'station-add-button';
const STATION_DELETE_BUTTON = 'station-delete-button';

const DATA_STATION_NAME = 'station-name';

function handleRemoveEvent($target, managerObj) {
  const $table = document.querySelector('tbody');

  if (managerObj.stations.removeStation($target.dataset.stationName, managerObj.lines)) {
    $table.removeChild($target);
  }
}

function handleAddEvent(managerObj) {
  const $addInput = document.getElementById(STATION_NAME_INPUT);
  const $table = document.querySelector('tbody');

  if (managerObj.stations.addStation($addInput.value)) {
    $table.insertAdjacentHTML('beforeend', makeTableRow(DATA_STATION_NAME,
      $addInput.value, makeButtonWithClass(STATION_DELETE_BUTTON, '삭제')));
  }
  $addInput.value = '';
}

export default function setStationManagerEvent(managerObj) {
  const $addButton = document.getElementById(STATION_ADD_BUTTON);
  const $table = document.querySelector('table');

  $addButton.addEventListener('click', () => {
    handleAddEvent(managerObj);
  });
  $table.addEventListener('click', (e) => {
    if (e.target.classList.contains(STATION_DELETE_BUTTON)) {
      handleRemoveEvent(e.target.closest('tr'), managerObj);
    }
  });
}
