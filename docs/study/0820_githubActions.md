---
lang: ko-KR
title: GitHub Actions
description: 김선셂님과 Vuepress 스터디에서 활용하는 자료 페이지입니다.
---

# :four: GitHub Actions

## What I've learned
* 내가 원하는 URL로 설정하기
    * [GitHub Pages](https://v2.vuepress.vuejs.org/guide/deployment.html#github-pages)
* GitHub Actions에서 사용할 토큰 생성하기
    * [참고 자료](https://zeddios.tistory.com/1047)


## What I've done
* .github/workflows/docs.yml 생성
    1. **.github** 폴더 생성
    2. 하위에 **workflows** 폴더 생성
    3. 하위에 **docs.yml** 파일 생성
    4. GitHub Pages에서 제공하는 코드(Click to expand sample config) 그대로 복사-붙여넣기
* GitHub Actions 동작용 토큰 생성
    1. 위에 링크한 참고 자료를 보면서 토큰 생성
    2. 생성한 토큰 이름을 **docs.yml** 파일에 등록 
        ```javascript
        env:
        ...
        GITHUB_TOKEN: ${{ secrets.DEPLOY_TOKEN }} // DEPLOY_TOKEN이 생성한 토큰의 이름이다
        ```
* GitHub Actions를 동작할 때 필요한 페이지 설정
    1. GitHub Repository > Settings > Code and automation 하위 **Pages** 열기
    2. Build and deployment 항목 내 Branch를 gh-pages로 변경, 경로는 /(root)로 설정 후 **Save** 클릭