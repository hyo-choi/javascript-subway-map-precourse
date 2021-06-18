/* eslint-disable import/extensions */
/* eslint-disable no-new */
import StationList from './class/StationList.js';
import LineList from './class/LineList.js';
import initPage from './common/init.js';

export default function SubwayManager() {
  this.stations = new StationList();
  this.lines = new LineList();

  initPage(this);
}

new SubwayManager();
