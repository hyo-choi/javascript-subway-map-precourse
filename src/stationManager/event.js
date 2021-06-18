/* eslint-disable import/extensions */
/* eslint-disable no-undef */
import { makeTableRow, makeButtonWithClass } from '../common/interface.js';

const STATION_NAME_INPUT = 'station-name-input';
const STATION_ADD_BUTTON = 'station-add-button';
const STATION_DELETE_BUTTON = 'station-delete-button';

function handleRemoveEvent() {
  // TODO: handleRemoveEvent
}

function handleAddEvent(managerObj) {
  const $addInput = document.getElementById(STATION_NAME_INPUT);
  const $table = document.querySelector('tbody');

  if (managerObj.stations.addStation($addInput.value)) {
    $table.insertAdjacentHTML('beforeend', makeTableRow('name',
      $addInput.value, makeButtonWithClass(STATION_DELETE_BUTTON, '삭제')));
  }
  $addInput.value = '';
}

export default function setStationManagerEvent(managerObj) {
  const $addButton = document.getElementById(STATION_ADD_BUTTON);

  $addButton.addEventListener('click', () => {
    handleAddEvent(managerObj);
  });
  // TODO: handleRemoveEvent
}
