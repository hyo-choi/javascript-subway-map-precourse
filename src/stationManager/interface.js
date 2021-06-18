/* eslint-disable import/extensions */
/* eslint-disable no-undef */
import * as elementManager from '../common/interface.js';
import setStationManagerEvent from './event.js';

const STATION_MANAGER = 'station-manager';
const STATION_NAME_INPUT = 'station-name-input';
const STATION_ADD_BUTTON = 'station-add-button';
const STATION_DELETE_BUTTON = 'station-delete-button';

function makeStationRows(managerObj) {
  const arr = [];
  if (!managerObj.stations.list) {
    return '';
  }
  managerObj.stations.list.forEach((station) => {
    arr.push(elementManager.makeTableRow('name', station.name,
      elementManager.makeButtonWithClass(STATION_DELETE_BUTTON, '삭제')));
  });
  return arr.join(' ');
}

function makeStationTable(managerObj) {
  return `
  <table>
    ${elementManager.makeTableHeader('역 이름', '설정')}
    ${makeStationRows(managerObj)}
  </table>
  `;
}

function makeStationTableDIv(managerObj) {
  return `
  <div>
    ${elementManager.makeBigTitle('🚉 지하철 역 목록')}
    ${makeStationTable(managerObj)}
  </div>
  `;
}

function makeStationInputDiv() {
  return `
  <div>
    ${elementManager.makeSmallTitle('역 이름')}
    ${elementManager.makeInputWithId(STATION_NAME_INPUT, '역 이름을 입력해주세요.')}
    ${elementManager.makeButtonWithId(STATION_ADD_BUTTON, '역 추가')}
  </div>
  `;
}

function showStationManagerDiv(managerObj) {
  const $app = document.getElementById('app');
  const $div = document.createElement('div');
  $div.id = STATION_MANAGER;

  $div.insertAdjacentHTML('afterbegin', makeStationInputDiv());
  $div.insertAdjacentHTML('beforeend', makeStationTableDIv(managerObj));
  $app.appendChild($div);
  setStationManagerEvent(managerObj);
}

export function hideStationManagerDiv() {
  const $app = document.getElementById('app');
  const $stationManagerDiv = document.getElementById(STATION_MANAGER);
  if ($stationManagerDiv) {
    $app.removeChild($stationManagerDiv);
  }
}

export function toggleStationManagerDiv(managerObj) {
  const $stationManagerDiv = document.getElementById(STATION_MANAGER);
  if ($stationManagerDiv) {
    hideStationManagerDiv();
  } else {
    showStationManagerDiv(managerObj);
  }
  // TODO: hide other div
}
