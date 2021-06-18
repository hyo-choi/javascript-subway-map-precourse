/* eslint-disable import/extensions */
import { makeCommonMenu } from './interface.js';
import setMenuEvent from './menuEvent.js';

export default function initPage(managerObj) {
  makeCommonMenu();
  setMenuEvent(managerObj);
}
