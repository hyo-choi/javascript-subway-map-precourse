/* eslint-disable no-undef */
const STATION_MANAGER_BUTTON = 'station-manager-button';
const LINE_MANAGER_BUTTON = 'line-manager-button';
const SECTION_MANAGER_BUTTON = 'section-manager-button';
const MAP_PRINT_MANAGER_BUTTON = 'map-print-manager-button';

function makeButtonWithId(id, str) {
  return `<button id="${id}">${str}</button>`;
}

export default function makeCommonMenu() {
  const $app = document.getElementById('app');
  const arr = [];
  arr.push(makeButtonWithId(STATION_MANAGER_BUTTON, '1. 역 관리'));
  arr.push(makeButtonWithId(LINE_MANAGER_BUTTON, '2. 노선 관리'));
  arr.push(makeButtonWithId(SECTION_MANAGER_BUTTON, '3. 구간 관리'));
  arr.push(makeButtonWithId(MAP_PRINT_MANAGER_BUTTON, '4. 지하철 노선도 출력'));
  $app.insertAdjacentHTML('beforeend', arr.join(' '));
}
