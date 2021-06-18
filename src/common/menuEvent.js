/* eslint-disable import/extensions */
/* eslint-disable no-undef */
import toggleStationManagerDiv from '../stationManager/interface.js';

const STATION_MANAGER_BUTTON = 'station-manager-button';
const LINE_MANAGER_BUTTON = 'line-manager-button';
const SECTION_MANAGER_BUTTON = 'section-manager-button';
const MAP_PRINT_MANAGER_BUTTON = 'map-print-manager-button';

function setStationManagerButton(managerObj) {
  const $button = document.getElementById(STATION_MANAGER_BUTTON);

  $button.addEventListener('click', () => {
    toggleStationManagerDiv(managerObj);
  });
}

function setLineManagerButton(managerObj) {
  const $button = document.getElementById(LINE_MANAGER_BUTTON);

  $button.addEventListener('click', () => {
    // TODO: makeLineManagerDiv
  });
}

function setSectionManagerButton(managerObj) {
  const $button = document.getElementById(SECTION_MANAGER_BUTTON);

  $button.addEventListener('click', () => {
    // TODO: makeSectionManagerDiv
  });
}

function setMapPrintManagerButton(managerObj) {
  const $button = document.getElementById(MAP_PRINT_MANAGER_BUTTON);

  $button.addEventListener('click', () => {
    // TODO: makeMapPrintManagerDiv
  });
}

export default function setMenuEvent(managerObj) {
  setStationManagerButton(managerObj);
  setLineManagerButton(managerObj);
  setSectionManagerButton(managerObj);
  setMapPrintManagerButton(managerObj);
}
