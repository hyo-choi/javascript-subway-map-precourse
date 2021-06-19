/* eslint-disable no-restricted-globals */
/* eslint-disable no-undef */
/* eslint-disable no-alert */
/* eslint-disable import/extensions */
import Station from './Station.js';

const STATIONS_LS = 'stations';

function isValidStationName(name) {
  return name.length > 1 && this.list.every((station) => station.name !== name);
}

function isRemovableStation(name, lines) {
  return lines.list.every((line) => line.stations.every((station) => station !== name));
}

function getLocalStorage() {
  const stations = localStorage.getItem(STATIONS_LS);
  let array = [];
  try {
    array = JSON.parse(stations);
  } catch (error) {
    alert('localStorage data is corrupted');
  }
  if (!array) {
    array = [];
  }
  return array;
}

export default function StationList() {
  this.list = getLocalStorage();

  this.setLocalStorage = () => {
    localStorage.setItem(STATIONS_LS, JSON.stringify(this.list));
  };

  this.addStation = (name) => {
    if (!isValidStationName.bind(this)(name)) {
      alert('2글자 이상의 중복되지 않은 이름을 입력해주세요.');
      return false;
    }
    this.list.push(new Station(name));
    this.setLocalStorage();
    return true;
  };

  this.removeStation = (name, lines) => {
    if (!isRemovableStation(name, lines)) {
      alert('노선에 등록되어 있는 역은 삭제할 수 없습니다.');
      return false;
    }
    if (!confirm('정말로 삭제하시겠습니까?')) {
      return false;
    }
    const toBeRemoved = this.list.findIndex((element) => element.name === name);
    if (toBeRemoved === -1) {
      return false;
    }
    this.list.splice(toBeRemoved, 1);
    this.setLocalStorage();
    return true;
  };
}
