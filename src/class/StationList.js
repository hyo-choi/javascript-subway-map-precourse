/* eslint-disable no-restricted-globals */
/* eslint-disable no-undef */
/* eslint-disable no-alert */
/* eslint-disable import/extensions */
import Station from './Station.js';
import { getStations, setStations } from '../common/storage.js';

export default function StationList() {
  this.list = getStations();

  function isValidStationName(name) {
    return name.length > 1 && this.list.every((station) => station.name !== name);
  }

  function isRemovable(name, lines) {
    return lines.list.every((line) => line.stations.every((station) => station !== name));
  }

  this.setLocalStorage = () => {
    setStations(this.list);
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
    if (!isRemovable(name, lines)) {
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
