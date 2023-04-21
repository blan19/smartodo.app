<!-- PROJECT LOGO -->
<p align="center">
  <h3 align="center">Smartodo.app</h3>
  <p align="center">
    <span>
    스마트한 투두리스트를 체험해보세요
    </span>
</p>

### Built with

<img src="https://img.shields.io/badge/Next.JS-000000?style=for-the-badge&logo=Next.js&logoColor=white">

<img src="https://img.shields.io/badge/Next_Auth-000000?style=for-the-badge&logo=Next.js&logoColor=white">

<img src="https://img.shields.io/badge/Tanstack_Query-EF4444?style=for-the-badge&logo=recoil&logoColor=white">

<img src="https://img.shields.io/badge/React_Hook_Form-EC5A90?style=for-the-badge&logo=react_hook_form&logoColor=white">

<img src="https://img.shields.io/badge/Turborepo-000000?style=for-the-badge&logo=react_hook_form&logoColor=white">

<img src="https://img.shields.io/badge/Typescript-3278C6?style=for-the-badge&logo=react_hook_form&logoColor=white">

### Service Environment

- `Web`
- `PWA`
- `Android`

### Apps and Packages

- `web`: SupercarMarket_Client
- `config`: `eslint` and `prettier` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `feature`: react content api
- `hooks`: common hooks on project
- `lib`: common `api` and `util function` on project
- `tsconfig`: `tsconfig.json`s used throughout the monorepo
- `types`: `type` used throughout the monorepo
- `ui`: design system for project

### Convention

##### Commit

- feat: 새로운 기능을 추가할 경우
- fix: 버그를 고친 경우
- design: CSS 등 사용자 UI 디자인 변경
- !BREAKING CHANGE: 커다란 API 변경의 경우
- !HOTFIX: 급하게 치명적인 버그를 고쳐야하는 경우
- style: 코드 포맷 변경, 세미 콜론 누락, 코드 수정이 없는 경우
- refactor: 프로덕션 코드 리팩토링
- comment: 필요한 주석 추가 및 변경
- docs: 문서를 수정한 경우
- test: 테스트 추가, 테스트 리팩토링(프로덕션 코드 변경 X)
- chore: 빌드 테스트 업데이트, 패키지 매니저를 설정하는 경우(프로덕션 코드 변경 X)
- rename: 파일 혹은 폴더명을 수정하거나 옮기는 작업만인 경우
- remove: 파일을 삭제하는 작업만 수행한 경우

Commit은 다음으로 맞춰주세요.

[Commit 종류] (workspace): [Commit 내용]
Ex-1: feat(web): 투두리스트 목록을 구현하였습니다.
Ex-2: design(ui): ui 컴포넌트의 스타일을 수정하였습니다.

<br />

Branch

- 머지 전략은 `스쿼시`를 기본으로 하되, 필요한 경우 `리베이스`도 사용합니다.

Branch는 다음으로 맞춰주세요.

[Branch 종류]/[Branch 이름]
Ex-1: feat/todo

> ⛔️ 풀리퀘스트 볼륨을 크게 가져가지 말아주세요.

Code

- 함수 네이밍과 변수명은 카멜케이스를 원칙으로 합니다.
- JsDoc을 통한 주석 작성을 생활화해주세요.

### Build

```
cd smartodo.app
pnpm run build
```

### Develop

```
cd smartodo.app
pnpm install
npm run dev
```

### Contributors
