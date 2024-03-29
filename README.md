# How much is your life?

How much is your life?는 하룻동안 생산적으로 보낸 시간을 기록하여 금액으로 환산해주는 애플리케이션이다. 생산적인 일을 한 만큼 미래에 보상을 받을 수 있고, 이 보상은 2023년 최저시급인 9,620원으로 계산한다.

당신은 오늘 얼마짜리 삶을 살았나요?

---

## Inspiration

저는 아르바이트를 하면서 'x시간만 견디면 xxxx원이 내 통장에 들어온다...' 라고 생각하며 견딘 적 있다. 하지만 아르바이트 외에 다른 생산적인 일을 할 때는 즉시 댓가를 얻지 못하기 때문에 행동이 느슨해지는 경우를 많이 겪었다.

문득, 하룻동안 생산적으로 살아온 시간을 돈으로 계산하면 얼마일까? 내가 지금 시간을 많이 투자한 만큼 미래에 나에 대한 경제적인 가치가 올라가지 않을까? 떠올리게 되었다.

---

## Stacks

### Environment

<img src="https://img.shields.io/badge/Visual Studio Code-007ACC?style=flat-square&logo=VisualStudioCode&logoColor=white"/>
<img src="https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=GitHub&logoColor=white"/>
<img src="https://img.shields.io/badge/Figma-F24E1E?style=flat-square&logo=Figma&logoColor=white"/>

### Config

<img src="https://img.shields.io/badge/npm-CB3837?style=flat-square&logo=npm&logoColor=white"/>

### Development

<img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=black"/>
<img src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=CSS3&logoColor=white"/>

#### React를 사용한 이유

강의를 통해 배웠던 리스트에 입력 데이터를 추가, 삭제, 수정하는 과정을 복습하고자 하였다.

---

## Functions

#### 1. 한 일 입력

#### 2. 한 일 수정 및 삭제

#### 3. 타임 테이블

#### 4. 최종 데이터

---

## Demo

![](https://velog.velcdn.com/images/yeonsubaek/post/e9bfc0cb-920e-42a8-882d-14aefe474e45/image.gif)

_앱을 시작하고 한 일을 입력한다._

![](https://velog.velcdn.com/images/yeonsubaek/post/94eadd9a-8a30-40b5-bca4-69c6898215eb/image.gif)

_저장된 한 일은 목록과 타임 테이블, 최종 환산에 적용된다._

![](https://velog.velcdn.com/images/yeonsubaek/post/320415eb-62eb-4671-94b4-aca9d86c1e4c/image.gif)

_목록을 클릭해 한 일의 정보를 수정한다._

![](https://velog.velcdn.com/images/yeonsubaek/post/2e3ca971-f79b-4003-bf6e-7fe5f393c041/image.gif)

_목록을 클릭해 한 일을 삭제한다._

---

## Try it out

[how-much-is-your-life.vercel.app](https://how-much-is-your-life.vercel.app/)

---

## Run it locally

### Requirements

For building and running the application you need:

[Node.js 14.16.1](https://nodejs.org/ca/blog/release/v14.16.1/)  
[Npm 6.14.12](https://www.npmjs.com/package/npm/v/6.14.12)

### Installation

```
git clone https://github.com/YeonsuBaek/how-much-is-your-life.git

npm install
npm start
```

---

## I learned it

### 1. Portal을 활용해 Modal 만들기

전에 블로그에 [Portal 사용하는 이유와 방법](https://velog.io/@yeonsubaek/React-Portal-%EC%82%AC%EC%9A%A9%ED%95%98%EB%8A%94-%EC%9D%B4%EC%9C%A0%EC%99%80-%EB%B0%A9%EB%B2%95)에 대해 포스팅한 적 있다. 이론으로만 접했던 Portal을 처음으로 프로젝트에 적용해보았다.

![](https://velog.velcdn.com/images/yeonsubaek/post/8925a827-d702-4e93-b7a7-da9d3380dc12/image.gif)

_시간이 겹치면 경고 메세지를 보여준다._

![](https://velog.velcdn.com/images/yeonsubaek/post/de823c36-37e1-4f8d-9221-a62b7353aa9d/image.gif)

_수정 버튼을 누르면 수정 창이 뜬다._

### 2. 배열로 타임 테이블 기능 구현하기

평소 10분 단위로 플래너 정리하는 것을 좋아해서 꼭 구현해보고 싶은 기능이었다. 그러다 [프로그래머스 대실 문제](https://school.programmers.co.kr/learn/courses/30/lessons/155651)를 접하고 배열을 사용하면 되겠다고 영감을 받았다.

```js
const [timetable, setTimetable] = useState(
  new Array(24).fill(new Array(6).fill(false))
);

const fillTimetable = (startH, startM, endH, endM) => {
  setTimetable(
    timetable.map((hour, hIndex) =>
      hour.map((minute, mIndex) => {
        if (hIndex >= startH && hIndex <= endH) {
          const firstM = hIndex === +startH ? startM : 0;
          const lastM = hIndex === +endH ? endM : 59;
          return mIndex * 10 >= firstM && mIndex * 10 < lastM ? true : minute;
        } else return minute;
      })
    )
  );
};
```

타임 테이블은 가로 6칸(60분), 세로 24칸(24시간)으로 구성되고 한 일로 저장된 시간이 해당되는 칸에 `true`로 표시한다.

```js
{
  timetable.map((time, hour) => {
    return (
      <tr key={hour}>
        <td>{hour}</td>
        <td className={time[0] ? 'checkedTime' : ''}></td>
        <td className={time[1] ? 'checkedTime' : ''}></td>
        <td className={time[2] ? 'checkedTime' : ''}></td>
        <td className={time[3] ? 'checkedTime' : ''}></td>
        <td className={time[4] ? 'checkedTime' : ''}></td>
        <td className={time[5] ? 'checkedTime' : ''}></td>
      </tr>
    );
  });
}
```

map으로 매시간마다 줄바꿈을 하고, `true`인 시간에 checkedTime 클래스로 색을 채운다.

map을 사용해 복잡한 2차원 배열의 값을 수정하고 리스트로 정렬하는 방법을 배우게 되었다.

### 3. 공통된 스타일을 컴포넌트로 분리하기

UI라는 폴더를 만들어 공통된 스타일을 가진 요소들을 컴포넌트로 분리하였다. 이렇게 하면 스타일을 변경할 때 파일 하나만 수정하면 모두 적용되어 유지보수에 효과적이다.

나는 이렇게 리팩터링하는 과정에서 Sass가 떠올랐다. Sass에서는 mixin을 정의해 include를 이용해 재사용하였다.

여러 기능과 스타일을 넣다보니 코드가 길어져 나중에 알아보기 힘든 경우가 있다. 이번 프로젝트에서 컴포넌트를 리팩터링하고 한참 후 다시 코드를 봤을 때 더욱 읽기 쉬웠다. 앞으로도 유지보수와 내 코드를 읽을 다른 사람들을 위해 컴포넌트를 분리하는 습관을 가져야겠다.
