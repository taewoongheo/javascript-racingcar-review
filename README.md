# javascript-racingcar-precourse

## Order

- [x] 경주할 자동차 이름을 입력받는다.
- [x] 쉼표로 구분하며, 5자 이하인지 확인한다.
- [x] 사용자가 잘못된 자동차 이름을 입력한 경우 `ERROR` 를 발생시킨 후 애플리케이션을 종료한다.
- [x] 몇 번의 이동을 할 것인지 입력받는다.
- [x] 사용자가 잘못된 시도 횟수를 입력한 경우 `ERROR` 를 발생시킨 후 애플리케이션을 종료한다.
- [x] 각 자동차는 0~9 사이의 무작위 값을 구한 뒤, 그 값이 4 이상일 때 전진한다.
- [x] 입력받은 이동 횟수 만큼 경주 게임을 진행한다.
- [x] 전진 시 자동차 이름들을 출력한다.
- [x] 게임 완료 후 우승자를 출력한다.
- [ ] 우승자는 한 명 이상일 수 있다.

## Object

- Racing
  - model: 자동차 경주 게임에서의 데이터 저장 및 가공을 담당
  - view: 자동차 경주 게임에서의 Input, Output을 담당
  - controller: 자동차 경주 게임의 실제 실행을 담당
- Car
  - model: 자동차의 데이터 저장 및 가공을 담당
