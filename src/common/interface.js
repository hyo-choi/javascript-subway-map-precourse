/* eslint-disable no-undef */
const STATION_MANAGER_BUTTON = 'station-manager-button';
const LINE_MANAGER_BUTTON = 'line-manager-button';
const SECTION_MANAGER_BUTTON = 'section-manager-button';
const MAP_PRINT_MANAGER_BUTTON = 'map-print-manager-button';

export function makeSmallTitle(title) {
  return `<h3>${title}</h3>`;
}

export function makeBigTitle(title) {
  return `<h2>${title}</h2>`;
}

export function makeButtonWithId(id, str) {
  return `<button id="${id}">${str || ''}</button>`;
}

export function makeButtonWithClass(className, str) {
  return `<button class="${className}">${str || ''}</button>`;
}

export function makeInputWithId(id, str) {
  return `<input id="${id}" placeholder="${str || ''}"></input>`;
}

export function makeTableHeader(...titles) {
  const arr = [];
  arr.push('<tr data-title="tableTitle">');
  titles.forEach((title) => {
    arr.push(`<th><b>${title}</b></th>`);
  });
  arr.push('</tr>');
  return arr.join(' ');
}

export function makeTableRow(dataName, ...contents) {
  const arr = [];
  arr.push(`<tr data-${dataName}="${contents[0]}">`);
  contents.forEach((content) => {
    arr.push(`<td>${content}</td>`);
  });
  arr.push('</tr>');
  return arr.join(' ');
}

export function makeCommonMenu() {
  const $app = document.getElementById('app');
  const arr = [];
  arr.push(makeButtonWithId(STATION_MANAGER_BUTTON, '1. 역 관리'));
  arr.push(makeButtonWithId(LINE_MANAGER_BUTTON, '2. 노선 관리'));
  arr.push(makeButtonWithId(SECTION_MANAGER_BUTTON, '3. 구간 관리'));
  arr.push(makeButtonWithId(MAP_PRINT_MANAGER_BUTTON, '4. 지하철 노선도 출력'));
  $app.insertAdjacentHTML('beforeend', arr.join(' '));
}
