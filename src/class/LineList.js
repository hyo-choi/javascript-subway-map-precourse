/* eslint-disable import/extensions */
import { getLines, setLines } from '../common/storage.js';

export default function LineList() {
  this.list = getLines();
  this.setLocalStorage = () => {
    setLines(this.list);
  };
}
