/* eslint-disable import/extensions */
import { getStations, setStations } from '../common/storage.js';

export default function StationList() {
  this.list = getStations();
  this.setLocalStorage = () => {
    setStations(this.list);
  };
}
