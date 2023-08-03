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

 
## 5. 기능 시연
 