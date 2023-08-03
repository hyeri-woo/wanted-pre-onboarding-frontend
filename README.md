# WANTED 프리온보딩 프론트엔트 인턴쉽 선발 과제 
지원자: 우혜리
<details>
<summary>Commit 컨벤션</summary>
<div markdown="1">

|태그 이름|설명|이모지|
|---------|----|------|
|Initial|시스템 초기 설정|🎉|
|Feat|새로운 기능을 추가할 경우|✨|
|Fix|버그를 고친 경우|🐛|
|Design|CSS 등 사용자 UI 디자인 변경|💄|
|Style|코드 포맷 변경, 세미 콜론 누락, 코드 수정이 없는 경우|🎨|
|Refactor|프로덕션 코드 리팩토링|♻️|
|Comment|필요한 주석 추가 및 변경|💬|
|Docs|문서를 수정한 경우|📝|
|Chore|빌드 태스트 업데이트, 패키지 매니저를 설정하는 경우(프로덕션 코드 변경 X)|📦|
|Rename|파일 혹은 폴더명을 수정하거나 옮기는 작업만인 경우|🚚|
|Remove|파일을 삭제하는 작업만 수행한 경우|🔥|
|Merge|파일 또는 브랜치 병합할 경우|🔀|
|Dir|폴더 및 문서 구조 변경할 경우 | 📁|
|!BREAKING CHANGE	|커다란 API 변경의 경우|👽|

</div>
</details>


## 1. 배포 링크
https://wantedtodo-hyeriwoo.netlify.app/

## 2. 사용 라이브러리
```js
"axios": "^1.4.0",
"react-router-dom": "^6.14.2",
"styled-components": "^6.0.5",
```

## 3. 프로젝트 실행 방법
1. 프로젝트 패키지 설치
```
npm install 
```
2. 프로젝트 실행
```
npm start
```

## 4. 프로젝트 구조
```

📦 src
├── 📂 api
├── 📂 components
│   ├── 📂 Common
│   ├── 📂 Auth
│   │    └── 📄 Form
│   ├── 📂 Todo
│   │    ├── 📂 TodoItem
│   │    |    ├── 📄 TodoEdit
│   │    |    ├── 📄 TodoItem
│   │    |    └── 📄 TodoView
│   │    ├── 📄 TodoForm
│   │    ├── 📄 TodoList
│   │    └── 📄 TodoNav
├── 📂 hooks
│   │    ├── 📄 useEmail
│   │    └── 📄 usePassword
├── 📂 pages
│   ├── 📄 Home
│   ├── 📄 SignIn
│   ├── 📄 SignUp
│   └── 📄 Todo
├── 📂 routes
│   │    ├── 📄 PrivateRoute
│   │    └── 📄 Router
└── 📂 styles

```
**핵심 구조 설명**
* TodoItem.jsx에서 mode에 따라 TodoView (보기 모드) TodoEdit (수정 모드)를 불러옵니다. 
* TodoList에서 TodoItem을 map으로 순환하며 불러옵니다. 
* 유효성 검사를 로그인/회원가입을 두 곳에서 해야하기에 custom hook (useEmail, usePassword)를 만들어 Form component 안에서 유효성 검사를 진행했습니다. 
* 로그인 여부에 따른 리다이렉트 처리를 위해 PrivateRoute를 따로 작성해 인증이 필요한 페이지와 인증이 필요하지 않은 페이지의 router를 따로 설정해주었습니다. 

 
## 5. 기능 시연
### ⭐️ 로그인 , 회원가입
![ezgif com-video-to-gif](https://github.com/hyeri-woo/wanted-pre-onboarding-frontend/assets/107099724/1dae4e1b-a2f5-4308-a264-fd66d019b112)

✅ Assignment 1
* 이메일/비밀번호 유효성 검사
    * 이메일 조건: @ 포함
    * 비밀번호 조건: 8자 이상
* 유효성 검사 통과시 button 활성화

✅ Assignment 2
* 회원가입 성공 시 `/signin` 경로로 이동



![ezgif com-video-to-gif (1)](https://github.com/hyeri-woo/wanted-pre-onboarding-frontend/assets/107099724/5f7ed686-bbda-4a62-8b88-66ad2dd66b3c)

✅ Assignment 3
* 로그인 성공 시 `/todo` 경로로 이동
* JWT 로컬 스토리지에 저장

📌 추가 구현
* 로그아웃 
    * 로컬 스토리지에서 토큰 삭제
    * `/todo` 에서 `/` 로 이동

![ezgif com-video-to-gif (2)](https://github.com/hyeri-woo/wanted-pre-onboarding-frontend/assets/107099724/5620992f-e64b-4167-b2a0-88aea81b33c1)

✅ Assignment 4
* 로그인 여부에 따른 리다이렉트 처리
    * 로컬 스토리지에 토큰이 있는 상태로 / 페이지에 접속한다면 /todo 경로로 리다이렉트 
    * 로컬 스토리지에 토큰이 없는 상태로 /todo페이지에 접속한다면 `/signin` 경로로 리다이렉트

___
### ⭐️ To Do
![ezgif com-video-to-gif (3)](https://github.com/hyeri-woo/wanted-pre-onboarding-frontend/assets/107099724/704aefa7-a66b-403e-81a7-eae55748a10b)

✅ Assignment 5
* `/todo` 경로에 접속 시 투두 리스트 불러오기
* todo의 내용과 완료 여부 표시

✅ Assignment 6
* todo input에 버튼 클릭시 새로운 todo 추가
* 새로고침해도 추가한 todo 목록에 유지

✅ Assignment 7
* todo의 체크박스를 통해 완료 여부 수정

![ezgif com-video-to-gif (4)](https://github.com/hyeri-woo/wanted-pre-onboarding-frontend/assets/107099724/2717c04a-2d95-48df-962b-39635f524536)

✅ Assignment 8, 9, 10
* todo 삭제 기능
* todo 수정 기능
 
 ![ezgif com-video-to-gif (5)](https://github.com/hyeri-woo/wanted-pre-onboarding-frontend/assets/107099724/dbc6c0dd-c302-402e-a824-485819e0be5b)

📌 추가 구현 
* 체크여부 (전체, 완료, 미완)에 따라 필터링
