# MusicPlayer v2

- [소개](#소개)
- [클라이언트](#클라이언트)
- [서버](#서버)
- [설치 및 실행](#설치-및-실행)
- [개선예정사항](#개선예정사항)

## 소개

MusicPlayer v2는 모바일 뷰에서 사용가능한 음악 플레이어 웹앱입니다.

## 클라이언트

### 구현사항

### Top3 Music Page

- 인트로 (페이드 아웃 애니메이션)
- Top3 노래 조회
- 노래 재생 및 정지
- 플레이리스트 추가 및 제거

![Top3](https://user-images.githubusercontent.com/57757719/236743061-2952f741-98fe-47d6-8e4c-b252c4114380.gif)

### PlayList Page

- 플레이리스트 조회
- 플레이리스트에서 노래 삭제
- 노래 재생 상세 화면 이동

![playlist](https://user-images.githubusercontent.com/57757719/236743449-77f0169f-3538-4cc1-a9ff-89d627597fd8.gif)

### Play Page

- 노래 재생 및 정지
- 플레이리스트 이전/다음 노래 재생
- 이전 페이지로 돌아가기
- 현재 노래 재생 상태 표시(프로그레스 바)
- 현재 노래 재생 위치 변경(프로그레스 바에서 원하는 위치 클릭)
- 플레이리스트 랜덤 재생
- 현재 노래 반복 재생

![play](https://user-images.githubusercontent.com/57757719/236744077-2a654bb6-8c46-498a-b1dc-e08654b059fe.gif)

### Search Page

- 검색을 통한 노래 리스트 조회
- debounce를 통한 api 호출 최소화
- 검색을 통한 노래 리스트에서의 간소한 노래 재생 및 정지, 플레이리스트 추가 및 삭제

![search](https://user-images.githubusercontent.com/57757719/236744293-69e78d7f-3338-4c4a-be74-f0c3f8ccd453.gif)

### 공통기능

- 하단 네비게이션(페이지별 라우팅 제어)
- 페이지별 레이아웃(네비게이션으로 이동하는 페이지와 노래 재생 뷰의 상이한 레이아웃)
- 플레이리스트 추가/제거 기능 결과를 표시하는 토스트 UI

![common](https://user-images.githubusercontent.com/57757719/236744486-f4f8e5da-cd2a-4401-9383-ba6274d4fa12.gif)

---

### 기술스택

### next.js

기존 CRA와의 가장 큰 차이점인 서버 사이드 렌더링이 가능한 next를 구현을 통하여 마주치는 여러 에러들에 대해서도 경험해보고 숙련도를 높이고 싶어 도입하게 되었습니다.

### typescript

동적인 자바스크립트언어를 정적으로 사용함으로써 얻을 수 있는 부가효과들이 크다고 생각합니다.

타입을 명시함으로써 자동완성이나 잘못된 타입의 변수/함수 사용에 대해 풍부한 피드백을 받을 수 있으므로 생산성 향상 등의 부가효과들을 경험할 수 있었기에 도입하였습니다.

### tanstack/react-query v4, recoil

기존에 흔히 사용하던 전역 상태관리도구인 redux의 비대한 코드들과 클라이언트 영역과 서버 영역의 애매한 기준의 전역 상태들과 이들의 동기화 관련 문제 역시 간소화하기에 적합하다고 생각하여 도입하였습니다.

클라이언트 영역의 전역 상태 관리는 기존 useState hooks와 비슷한 로직 구성이 가능한 recoil을 활용하였습니다.

서버 영역의 전역 상태 관리는 react-query v4를 활용하였습니다.

### tailwindCSS

기존 emotion을 통한 CSS-in-JS 방식에서 단순 컴포넌트의 HTML 코드 보다 스타일의 코드가 더 복잡한 경우를 경험하였고 디자인을 위한 부가적인 코드가 실제 기능 코드의 가독성을 해친다고 생각하는 부분을 최소화해보고 싶어 도입하게 되었습니다.

### twin.macro + emotion

tailwindCSS를 도입한 이유에서 설명했듯이 emotion을 사용하며 불편했던 경험을 해소할 수 있었지만 emotion을 사용하며 편리했던 경험이 사라지자 불편하게 다가온 경험이 있었는데 바로 동적 스타일링이였습니다.

가변적인 변수를 받아와 스타일을 적용하는게 불가능했던 tailwind에 기존의 emotion으로 가능했던 동적 스타일을 혼합하여 사용하기 위해 tailwindCSS를 유연하게 사용가능한 방법으로 twin.macro를 도입하게 되었습니다.

### axios

interceptor를 통한 data fetch의 간소한 코드와 커스터마이징을 통한 타입추론 역시 간단하기에 도입하게 되었습니다.

### react-responsive

PC에서는 "모바일로 이용해달라는 경고 텍스트"를 모바일에서는 정상적인 화면을 보여주려고 반응형을 구현할 때 단순 css media-query로 작성하면 항상 두가지 케이스를 작성해야하여 비대해지는 코드를 간소화하기 위해 hooks를 활용하여 media-query를 적용하기 위해 도입하였습니다.

---

### 구조설계

구조설계에 있어 고민한 내용들은 아래 트러블슈팅에 작성하였으며 주요 폴더 설명을 위해 전체가아닌 중요 폴더들을 위주로 간략하게 정리하였습니다.

```
📦client
 ┣ 📂public
 ┣ 📂src
 ┃ ┣ 📂api
 ┃ ┣ 📂components
 ┃ ┣ 📂hooks
 ┃ ┣ 📂models
 ┃ ┣ 📂pages
 ┃ ┃ ┣ 📂main
 ┃ ┃ ┣ 📂play
 ┃ ┃ ┣ 📂playlist
 ┃ ┃ ┣ 📂search
 ┃ ┣ 📂store
 ┃ ┣ 📂styles
 ┃ ┗ 📂utils
```

| 폴더           | 용도                                                                            |
| -------------- | ------------------------------------------------------------------------------- |
| **public**     | 정적 파일을 관리                                                                |
| **api**        | 서버와 호출하는 api와 axios 인스턴스 세팅을 관리                                |
| **components** | 특정 위치에서만 사용되는 것이 아닌 여러번 사용되는 컴포넌트들을 전역화하여 관리 |
| **hooks**      | 특정 위치에서만 사용되는 것이 아닌 여러번 사용되는 hook들을 전역화하여 관리     |
| **models**     | react-query를 통해 관리되는 서버 전역상태의 캐쉬 키를 관리                      |
| **pages**      | 라우팅이 가능한 페이지들을 관리                                                 |
| **store**      | recoil을 통해 관리되는 클라이언트 전역상태를 관리                               |
| **styles**     | 전역 스타일 관리                                                                |
| **utils**      | 특정 기능에 종속적이지 않은 간단한 함수 관리                                    |

---

### 트러블슈팅

#### 중첩 레이아웃과 페이지별 레이아웃

반응형 구현을 위한 공통의 루트 레이아웃과 개별 페이지의 공통 레이아웃을 중첩시키기 위한 방법에 대해 고민하였습니다.

기존 \_app파일에서 사용되는 타입을 커스텀하여 각각의 페이지에 개별 레이아웃 구현이 가능하도록 설계하였습니다.

각각의 페이지 컴포넌트에 레이아웃이 설정되어있다면 그 레이아웃을 적용시키고 적용되어 있지않다면 Next의 기본 페이지 설정이 적용되도록 하였습니다.

```typescript
// _app.tsx
export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page);

  return getLayout(
    ...
  );
};

// 상이한 페이지 레이아웃
PlayPage.getLayout = (page: ReactElement) => {
  return <RootLayout>{page}</RootLayout>;
};

MainPage.getLayout = (page: ReactElement) => {
  return <TabMenuLayout>{page}</TabMenuLayout>;
};
```

#### 관심사에 따른 디렉터리 구조 설정

구조설계부분에서 언급하였듯이 상당히 많은 시간을 고민했습니다.

특정 page에서만 사용되는 컴포넌트를 최상위 컴포넌트 폴더에 포함시켜야할까? 사용되는 page에 컴포넌트 폴더를 구성하여 관리하는게 더 접근성이 용이하지 않을까? 이런 생각을 하게 되었습니다.

개발을 진행하다보니 여러 페이지에서 사용되는 컴포넌트들을 구현하게 되었고 이러한 컴포넌트들과 훅들을 최상위 컴포넌트와 훅 폴더들로 이전하여 아래와 같이 관리하였습니다.

```
📂src
 ┃ ┣ 📂api
 ┃ ┣ 📂components // 전역
 ┃ ┣ 📂hooks // 전역
 ┃ ┣ 📂models
 ┃ ┣ 📂pages
 ┃ ┃ ┣ 📂main
 ┃ ┃ ┃ ┣ 📂components // 개별
 ┃ ┃ ┃ ┣ 📂hooks // 개별
 ┃ ┃ ┣ 📂play
 ┃ ┃ ┃ ┣ 📂components
 ┃ ┃ ┃ ┣ 📂hooks
 ┃ ┃ ┣ 📂playlist
 ┃ ┃ ┃ ┣ 📂components
 ┃ ┃ ┃ ┣ 📂hooks
 ┃ ┃ ┣ 📂search
 ┃ ┃ ┃ ┣ 📂components
 ┃ ┃ ┃ ┣ 📂hooks
```

이부분에 대해 여러 키워드를 검색해보다 리액트의 VAC 디자인 패턴에 대해 접하게 되었습니다.

VAC 패턴에 대해 기록하여 공부할 수 있었고 이 프로젝트에도 적용해보았습니다.

[VAC패턴 학습기록](https://velog.io/@codenmh0822/React-VAC-%ED%8C%A8%ED%84%B4)

#### audio 객체의 크롬 자동재생 정책

현재 프로젝트는 playlist 페이지에서 노래를 클릭하면 play 페이지로 이동하며 노래가 자동재생되는 UI 흐름으로 구성되어 있습니다.

하지만 play 페이지에서의 새로고침이 진행되면 사용자의 동작이 없이 audio 객체의 play() 메소드가 실행되는 크롬 경고문과 함께 정상동작이 이루어지지 않는 에러를 직면하게 되었습니다.

이 에러는 알고보니 크롬에서의 audio 객체에 대한 자동재생 정책에 의한 에러였습니다. 사용자의 동작 없이 audio 객체를 자동재생하면 사용자가 어떤 상황에 직면할지 모르기에 이를 금지하는 내용의 정책이였습니다.

기존의 정상 동작하는 UI 흐름은 플레이리스트 노래 선택을 통한 페이지 이동을 통해 사용자의 click 이벤트에 따른 페이지 라우팅에 의해 자동재생이 가능하였습니다.

하지만 라우팅된 play 페이지에서 새로고침이 이루어진 후의 시점은 사용자의 동작이 없기에 audio 재생이 정상적으로 이루어지지 못했음을 인지할 수 있었습니다. 이에 대해 트릭이 존재할까 구글링 해봤지만 정책을 금하는 트릭을 구현하는 것은 잘못되었다 생각하여 새로고침이 이루어지는 경우는 사용자의 음악 재생 동작을 통해 음악이 재생되도록 구현하며 문제를 해결하였습니다.

---

## 서버

### 개발환경

Express, typescript, low DB

### 3계층구조

Control, Service, Model의 3계층 설계를 생각하며 개발하였습니다.

로컬 서버를 실행하면 `db/db.json`이 DB 역할을 하며 존재하지 않다면 `db/data.json` 기본 데이터 파일을 기반으로 `db/db.json`이 생성되며 삭제시 DB가 초기화 되는 구조로 DB를 구현하였습니다.

```
📦server
 ┣ 📂db
 ┣ 📂src
 ┃ ┣ 📂constants
 ┃ ┣ 📂controllers
 ┃ ┣ 📂interfaces
 ┃ ┣ 📂models
 ┃ ┣ 📂routes
 ┃ ┣ 📂services
 ┃ ┗ 📂utils
```

| 폴더            | 용도                                                                     |
| --------------- | ------------------------------------------------------------------------ |
| **db**          | db.json을 통한 데이터 저장소                                             |
| **constants**   | 상수값 관리, 주로 반환 에러에 대한 메시지를 상수로 활용                  |
| **controllers** | 사용자 요청에 따라 적절한 서비스를 호출하고 그 결과를 반환하는 로직 관리 |
| **interfaces**  | 데이터 모델에 대한 반환 타입을 관리                                      |
| **models**      | 데이터 저장소 및 초기 데이터 관리                                        |
| **routes**      | 사용자 요청 url을 관리하며 적절한 컨트롤러를 호출                        |
| **services**    | controller로 부터 전달된 요청에 비지니스 로직을 통한 결과를 반환         |
| **utils**       | 특정 기능에 종속적이지 않은 간단한 함수 관리                             |

---

### API

<details>
<summary>getTop3Musics</summary>
<div markdown="1">

URL

- GET `/top3`

RESPONSE

```
{
  "data": [
    {
      id: string;
      title: string;
      artists: string[];
      cover: string;
      source: string;
      vote: number;
      hasPlaylist: boolean;
    },
    {
      id: string;
      title: string;
      artists: string[];
      cover: string;
      source: string;
      vote: number;
      hasPlaylist: boolean;
    },
    {
      id: string;
      title: string;
      artists: string[];
      cover: string;
      source: string;
      vote: number;
      hasPlaylist: boolean;
    }
  ]
}
```

</div>
</details>

<details>
<summary>getPlayList</summary>
<div markdown="1">

URL

- GET `/playlist`

RESPONSE

```
{
  "data": [
    {
      id: string;
      title: string;
      artists: string[];
      cover: string;
      source: string;
      vote: number;
      nextId: string;
      prevId: string;
    },

    ...
  ]
}
```

</div>
</details>

<details>
<summary>getPlayMusic</summary>
<div markdown="1">

URL

- GET `/play/:id`

RESPONSE

```
{
  "data":
    {
      id: string;
      title: string;
      artists: string[];
      cover: string;
      source: string;
      vote: number;
      nextId: string;
      prevId: string;
    }
}
```

</div>
</details>

<details>
<summary>addPlayList</summary>
<div markdown="1">

URL

- POST `/playlist/:id`

RESPONSE

```
{
  "data":
    {
      id: string;
      title: string;
      artists: string[];
      cover: string;
      source: string;
      vote: number;
    }
}
```

</div>
</details>

<details>
<summary>deletePlayList</summary>
<div markdown="1">

URL

- DELETE `/playlist/:id`

RESPONSE

```
{
  "data": ""
}
```

</div>
</details>

<details>
<summary>getSearchPlayList</summary>
<div markdown="1">

URL

- GET `/search/:query`

RESPONSE

```
{
  "data": [
    {
      id: string;
      title: string;
      artists: string[];
      cover: string;
      source: string;
      vote: number;
      hasPlaylist: boolean;
    }

    ...
  ]
}
```

</div>
</details>

---

## 설치 및 실행

Node (v16.17.0)

Npm (v8.15.0)

```
server
npm ci
npm start

client
.env.local // add
NEXT_PUBLIC_API_URL=http://localhost:8080
RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED=false

npm ci
npm run dev

localhost:3000
```

---

## 개선예정사항

- Suspense 및 Error Boundary 적용
- github Action을 활용한 CI/CD 구축

---
