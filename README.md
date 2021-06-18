# 🚇 지하철 노선도 미션

## 📝 이론 정리
### JS의 모듈 시스템과 순환 참조
- 참고 1: [JS 모듈 시스템과 순환 참조 문제](https://ljs0705.medium.com/js-%EB%AA%A8%EB%93%88-%EC%8B%9C%EC%8A%A4%ED%85%9C%EA%B3%BC-%EC%88%9C%ED%99%98-%EC%B0%B8%EC%A1%B0-%EB%AC%B8%EC%A0%9C-a9e0c90c07e5)   
  참고 2(참고 1과 같은 결론): [[번역] 자바스크립트 & 타입스크립트의 순환 참조를 한방에 해결하는 방법](https://rinae.dev/posts/fix-circular-dependency-kr)   
  참고 3: [웹팩이란?](https://joshua1988.github.io/webpack-guide/webpack/what-is-webpack.html)
- 각 모듈은 최초 한 번만 평가된다.
- 자바스크립트 모듈 시스템에서는 순환 참조를 허용한다.
- 그럼에도 순환 참조로 인한 문제가 발생할 수 있다. 이런 경우 모듈의 평가 순서를 정의하는 파일을 별도로 만들어 각 모여을 전부 import해주고, 이 파일을 통해 필요한 모듈을 import하여 사용하는 방식으로 문제를 해결할 수 있다.

### JS의 try...catch
- 참고 1: [V8 엔진의 try...catch 최적화](https://www.html5rocks.com/ko/tutorials/speed/v8/)  
  참고 2: [try-catch in javascript… isn't it a good practice?](https://softwareengineering.stackexchange.com/questions/144326/try-catch-in-javascript-isnt-it-a-good-practice/302656)
- 생성자에서 try...catch 구문을 사용해볼까 했는데, 꼭 필요한 부분(참고 2의 JSON.parse() 함수 등)이 아니면 try...catch를 사용하지 않는 것이 좋을 것 같다.

### localStorage
- [localStorage](https://developer.mozilla.org/ko/docs/Web/API/Window/localStorage)
- [Storage](https://developer.mozilla.org/ko/docs/Web/API/Storage)
- 원래 각 노선 객체가 역 객체의 참조를 배열으로 가지도록 하려 했으나 (1) localStorage를 사용하면 참조 정보를 유지하지 못한다는 것, (2) localStorage에 저장하기 위해 ``JSON.stringfy`` 함수를 거치는 과정에서 참조가 단순 객체로 변환되는 것을 확인하였다. 따라서 역의 이름을 배열으로 가지도록 변경하였다.

### insertAdjacentHTML/Test/Element
- [insertAdjacentHTML/Text/Element](https://ko.javascript.info/modifying-document#ref-48)

<br>

## ✅ 구현할 기능 목록

### > 공통
- 관리 객체 초기화
  - localStorage를 로드하여 관리 객체 내부 프로퍼티 설정
- 메뉴 버튼 생성
  - 역 관리 button 태그 ``#station-manager-button``
  - 노선 관리 button 태그 ``#line-manager-button``
  - 구간 관리 button 태그 ``#section-manager-button``
  - 지하철 노선도 출력 관리 button 태그 ``#map-print-manager-button``
- 각 버튼에 대한 'click' 이벤트 설정(하위 항목들으로 연결)

### > 역 관리
- 내부 요소 생성
  - 지하철 역 입력 input 태그 ``#station-name-input``
  - 지하철 역 추가 button 태그 ``#station-add-button``
- 역 객체 배열에서 역 정보를 가져와 표 형태로 출력하기
  - 지하철 역 삭제 button 태그 ``.station-delete-button``
- 역 추가 button에 대한 'click' 이벤트 설정
  - 역 이름 유효성 검증  
    - 2글자 이상, 중복되지 않은 이름일 것  
    -> 유효하지 않을 시 alert
  - 새로운 역 객체 생성, 배열에 push, 배열으로 localStorage 업데이트
  - 표를 갱신하여 출력
- 역 삭제 button에 대한 'click' 이벤트 설정
  - 역 삭제 가능성 검증  
    - 노선에 등록되지 않은 역일 것  
    -> 유효하지 않을 시 alert
  - 삭제할지 재확인하는 confirm 창 띄우기
  - 역 객체 삭제, 배열에서 삭제, 배열으로 localStorage 업데이트
  - 표를 갱신하여 출력

### > 노선 관리
- 내부 요소 생성
  - 지하철 노선의 이름을 입력하는 input 태그 ``#line-name-input``
  - 지하철 노선의 상행 종점을 선택하는 select 태그 ``#line-start-station-selector``
  - 지하철 노선의 하행 종점을 선택하는 select 태그 ``#line-end-station-selector``
  - 지하철 노선을 추가하는 button 태그 ``#line-add-button``
- 노선 객체 배열에서 노선 정보를 가져와 표 형태로 출력하기
  - 지하철 노선을 삭제하는 button 태그 ``.line-delete-button``
- 노선 추가 button에 대한 'click' 이벤트 설정
  - 노선 이름 유효성 검증  
    - 1글자 이상, 중복되지 않은 이름일 것  
    -> 유효하지 않을 시 alert
  - 종점 유효성 검증  
    - 상행 종점역과 하행 종점역이 동일하지 않을 것  
    -> 유효하지 않을 시 alert  
  - 새로운 노선 객체 생성, 배열에 push, 배열으로 localStorage 업데이트
  - 표를 갱신하여 출력
- 노선 삭제 button에 대한 'click' 이벤트 설정
  - 삭제할지 재확인하는 confirm 창 띄우기
  - 노선 객체 삭제, 배열에서 삭제, 배열으로 localStorage 업데이트
  - 표를 갱신하여 출력

### > 구간 관리

- 노선 객체 배열에서 노선 정보를 가져와 버튼 만들기
  - 지하철 노선을 선택하는 button 태그 ``.section-line-menu-button``  
- 노선 선택 button에 대한 'click' 이벤트 설정  
- 내부 요소 생성  
  - 지하철 구간을 설정할 역 select 태그 ``#section-station-selector``  
  - 지하철 구간의 순서를 입력하는 input 태그 ``#section-order-input``  
  - 지하철 구간을 등록하는 button 태그 ``#section-add-button``  
- 노선 객체에서 구간 정보를 가져와 표 형태로 출력하기
  - 지하철 구간을 제거하는 button 태그 ``.section-delete-button``  
- 구간 추가 button에 대한 'click' 이벤트 설정
  - 역 추가 가능성 검증  
    - 노선에 이미 등록되어 있는 역이 아닐 것  
    -> 유효하지 않을 시 alert  
  - 순서 유효성 검증   
    - 0 이상 ``현재 노선에 등록되어 있는 역 갯수`` 이하의  
    - 정수 값일 것  
    -> 유효하지 않을 시 alert  
  - 노선 객체에 구간 추가, 배열으로 localStorage 업데이트
  - 표를 갱신하여 출력
- 구간 삭제 button에 대한 'click' 이벤트 설정
  - 구간 삭제 유효성 검증  
    - 현재 노선에 등록된 역 갯수가 3개 이상일 것  
    -> 유효하지 않을 시 alert  
  - 삭제할지 재확인하는 confirm 창 띄우기
  - 노선 객체에서 구간 삭제, 배열으로 localStorage 업데이트
  - 표를 갱신하여 출력

### > 지하철 노선도 출력
- 내부 요소 생성
  - 지하철 노선도 출력 버튼을 누르면 ``<div class="map"></div>`` 태그를 만들고 해당 태그 내부에 노선도를 출력

<br>

## ✒ 클래스, 모듈 계획
- 클래스 설정 
  - 관리 클래스  
    - 전체 역 정보 프로퍼티(지하철 역 객체의 배열)  
    - 전체 노선 정보 프로퍼티(노선 객체의 배열)  
  - 지하철 역 클래스  
    - 생성자 인자: 역 이름
    - 역 이름 프로퍼티
  - 노선 클래스  
    - 생성자 인자: 노선 이름, 역 이름 2개
    - 노선 이름 프로퍼티
    - 노선 정보 프로퍼티(지하철 역 **이름**의 배열)
    - 구간 추가 메소드
    - 구간 삭제 메소드  
- 모듈 설정
  - localStorage 관리 모듈
  - DOM element 관리 모듈
  - 이벤트 관리 모듈
  - 에러 핸들링 모듈
  - input 관리 모듈  
  - 유효성 검사 모듈

<br>
 
## 🚀 기능 요구사항

### 지하철 역 관련 기능
- 지하철 역을 등록하고 삭제할 수 있다. (단, 노선에 등록된 역은 삭제할 수 없다)
- 중복된 지하철 역 이름이 등록될 수 없다.
- 지하철 역은 2글자 이상이어야 한다.
- 지하철 역의 목록을 조회할 수 있다.

### 지하철 노선 관련 기능
- 지하철 노선을 등록하고 삭제할 수 있다.
- 중복된 지하철 노선 이름이 등록될 수 없다.
- 노선 등록 시 상행 종점역과 하행 종점역을 입력받는다.
- 지하철 노선의 목록을 조회할 수 있다.

### 지하철 구간 추가 기능
- 지하철 노선에 구간을 추가하는 기능은 노선에 역을 추가하는 기능이라고도 할 수 있다.
  - 역과 역사이를 구간이라 하고 이 구간들의 모음이 노선이다.  
- 하나의 역은 여러개의 노선에 추가될 수 있다.
- 역과 역 사이에 새로운 역이 추가 될 수 있다.
- 노선에서 갈래길은 생길 수 없다.

<img width="500" src="/images/section1.png">

### 지하철 구간 삭제 기능
- 노선에 등록된 역을 제거할 수 있다.
- 종점을 제거할 경우 다음 역이 종점이 된다.
- 노선에 포함된 역이 두개 이하일 때는 역을 제거할 수 없다.

<img width="500" src="/images/section2.png">

### 지하철 노선에 등록된 역 조회 기능
- 노선의 상행 종점부터 하행 종점까지 연결된 순서대로 역 목록을 조회할 수 있다.

<br/>

## 💻 프로그램 실행 결과

### 역관리
<img width="100%" src="/images/station_manager.gif">

### 노선관리
<img width="100%" src="/images/line_manager.gif">

### 구간관리
<img width="100%" src="/images/section_manager.gif">

### 노선도 출력
<img width="100%" src="/images/map_print_manager.gif">


## ✅ 프로그래밍 요구사항

### 메뉴 버튼
- 역 관리 button 태그는 `#station-manager-button` id값을 가진다.
- 노선 관리 button 태그는 `#line-manager-button` id값을 가진다.
- 구간 관리 button 태그는 `#section-manager-button` id값을 가진다.
- 지하철 노선도 출력 관리 button 태그는 `#map-print-manager-button` id값을 가진다.

### 지하철 역 관련 기능
- 지하철 역을 입력하는 input 태그는 `#station-name-input` id값을 가진다.
- 지하철 역을 추가하는 button 태그는 `#station-add-button` id값을 가진다.
- 지하철 역을 삭제하는 button 태그는 `.station-delete-button` class값을 가진다.

### 지하철 노선 관련 기능
- 지하철 노선의 이름을 입력하는 input 태그는 `#line-name-input` id값을 가진다.
- 지하철 노선의 상행 종점을 선택하는 select 태그는 `#line-start-station-selector` id값을 가진다.
- 지하철 노선의 하행 종점을 선택하는 select 태그는 `#line-end-station-selector` id값을 가진다.
- 지하철 노선을 추가하는 button 태그는 `#line-add-button` id값을 가진다.
- 지하철 노선을 삭제하는 button 태그는 `.line-delete-button` class값을 가진다.

### 지하철 구간 추가 기능
- 지하철 노선을 선택하는 button 태그는 `.section-line-menu-button` class값을 가진다.
- 지하철 구간을 설정할 역 select 태그는 `#section-station-selector` id값을 가진다.
- 지하철 구간의 순서를 입력하는 input 태그는 `#section-order-input` id값을 가진다.
- 지하철 구간을 등록하는 button 태그는 `#section-add-button` id값을 가진다.
- 지하철 구간을 제거하는 button 태그는 `.section-delete-button` class값을 가진다.

### 지하철 노선도 출력 기능
- 지하철 노선도 출력 버튼을 누르면 `<div class="map"></div>` 태그를 만들고 해당 태그 내부에 노선도를 출력한다.

### 기존 요구사항

- 사용자가 잘못된 입력 값을 작성한 경우 `alert`을 이용해 메시지를 보여주고, 재입력할 수 있게 한다.
- 외부 라이브러리(jQuery, Lodash 등)를 사용하지 않고, 순수 Vanilla JS로만 구현한다.
- **자바스크립트 코드 컨벤션을 지키면서 프로그래밍** 한다
  - [https://google.github.io/styleguide/jsguide.html](https://google.github.io/styleguide/jsguide.html)
  - [https://ui.toast.com/fe-guide/ko_CODING-CONVENSION/](https://ui.toast.com/fe-guide/ko_CODING-CONVENTION)
- **indent(인덴트, 들여쓰기) depth를 3이 넘지 않도록 구현한다. 2까지만 허용**한다.
  - 예를 들어 while문 안에 if문이 있으면 들여쓰기는 2이다.
  - 힌트: indent(인덴트, 들여쓰기) depth를 줄이는 좋은 방법은 함수(또는 메소드)를 분리하면 된다.
- **함수(또는 메소드)의 길이가 15라인을 넘어가지 않도록 구현한다.**
  - 함수(또는 메소드)가 한 가지 일만 잘 하도록 구현한다.
- 변수 선언시 `var` 를 사용하지 않는다. `const` 와 `let` 을 사용한다.
  - [const](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/const)
  - [let](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/let)
- `import` 문을 이용해 스크립트를 모듈화하고 불러올 수 있게 만든다.
  - [https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/import](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/import)
- `template literal`을 이용해 데이터와 html string을 가독성 좋게 표현한다.
  - [https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Template_literals](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Template_literals)

### 추가된 요구사항
- [data](https://developer.mozilla.org/ko/docs/Learn/HTML/Howto/%EB%8D%B0%EC%9D%B4%ED%84%B0_%EC%86%8D%EC%84%B1_%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0)속성을 활용하여 html 태그에 역, 노선, 구간의 유일한 데이터 값들을 관리한다. 
- [localStorage](https://developer.mozilla.org/ko/docs/Web/API/Window/localStorage)를 이용하여, 새로고침하더라도 가장 최근에 작업한 정보들을 불러올 수 있도록 한다.

<br/>

## 📝 미션 저장소 및 진행 요구사항

- 미션은 [https://github.com/woowacourse/javascript-subway-map-precours](https://github.com/woowacourse/javascript-subway-map-precourse) 저장소를 fork/clone해 시작한다.
- **기능을 구현하기 전에 javascript-subway-precourse/docs/README.md 파일에 구현할 기능 목록**을 정리해 추가한다.
- **git의 commit 단위는 앞 단계에서 README.md 파일에 정리한 기능 목록 단위로 추가**한다.
- [프리코스 과제 제출](https://github.com/woowacourse/woowacourse-docs/tree/master/precourse) 문서 절차를 따라 미션을 제출한다.
