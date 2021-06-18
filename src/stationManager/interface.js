/* eslint-disable import/extensions */
/* eslint-disable no-undef */
import * as elementManager from '../common/interface.js';

const STATION_MANAGER = 'station-manager';
const STATION_NAME_INPUT = 'station-name-input';
const STATION_ADD_BUTTON = 'station-add-button';

function makeStationInputDiv() {
  return `
  <div>
    ${elementManager.makeSmallTitle('역 이름')}
    ${elementManager.makeInputWithId(STATION_NAME_INPUT, '역 이름을 입력해주세요.')}
    ${elementManager.makeButtonWithId(STATION_ADD_BUTTON, '역 추가')}
  </div>
  `;
}

function makeStationManagerDiv(managerObj) {
  const $app = document.getElementById('app');
  const $div = document.createElement('div');
  $div.id = STATION_MANAGER;

  $div.insertAdjacentHTML('afterbegin', makeStationInputDiv());
  // TODO: makeStationTableDIv(managerObj);
  $app.appendChild($div);
  // TODO: setEventListener
}

export default function toggleStationManagerDiv(managerObj) {
  const $app = document.getElementById('app');
  const $stationManagerDiv = document.getElementById(STATION_MANAGER);
  if ($stationManagerDiv) {
    $app.removeChild($stationManagerDiv);
  } else {
    makeStationManagerDiv(managerObj);
  }
}
