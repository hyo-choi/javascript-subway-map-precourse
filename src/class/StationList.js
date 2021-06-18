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

  this.setLocalStorage = () => {
    setStations(this.list);
  };

  this.addStation = (name) => {
    if (!isValidStationName.bind(this)(name)) {
      alert('2글자 이상의 중복되지 않은 이름을 입력해주세요.');
      return null;
    }
    this.list.push(new Station(name));
    this.setLocalStorage();
    return name;
  };
}
