import{_ as t,o as e,c as a,V as s}from"./chunks/framework.dd09f4ba.js";const _=JSON.parse('{"title":"git commit 가이드","description":"","frontmatter":{},"headers":[],"relativePath":"guide/commit.md"}'),d={name:"guide/commit.md"},o=s(`<h1 id="git-commit-가이드" tabindex="-1">git commit 가이드 <a class="header-anchor" href="#git-commit-가이드" aria-label="Permalink to &quot;git commit 가이드&quot;">​</a></h1><p>git commit은 각 부분별로 하나씩, 나눠서 하는 것이 좋습니다. 더불어 큰별문학상의 개발자들은 대부분이 한국어를 사용할 것이므로, 기술적 용어를 제외하면 commit 메시지에도 한국어를 사용하는 것이 바람직합니다.</p><p>아래는 추가적인 commit시 스타일 권장 사항입니다.</p><h2 id="_1-제목" tabindex="-1">1. 제목 <a class="header-anchor" href="#_1-제목" aria-label="Permalink to &quot;1. 제목&quot;">​</a></h2><p><code>(태그): (요약메시지)</code> 형식으로 작성합니다. (*띄어쓰기는 <code>:</code> 뒤에만 있습니다)</p><p>제목은 가급적 동사로 시작합니다. (예. <code>Docs: 추가-reade.md</code>)</p><p>문장의 끝에는 특수문자를 삽입하지 않습니다.</p><table><thead><tr><th><em><strong>태그</strong></em></th><th><em><strong>설명</strong></em></th></tr></thead><tbody><tr><td>Feat</td><td>새로운 기능을 추가한 경우</td></tr><tr><td>Fix</td><td>에러를 수정한 경우</td></tr><tr><td>Design</td><td>CSS 등 UI 디자인을 변경한 경우</td></tr><tr><td>BREAKING CHANGE</td><td>중대한 API를 변경한 경우</td></tr><tr><td>HOTFIX</td><td>급하게 치명적인 에러를 고친 경우</td></tr><tr><td>Style</td><td>코드 포맷 변경을 하거나 세미 콜론 누락하여 추가하면서 코드 수정이 없는 경우</td></tr><tr><td>Refactor</td><td>코드를 리팩토링한 경우</td></tr><tr><td>Comment</td><td>주석을 추가하거나 변경한 경우</td></tr><tr><td>Docs</td><td>문서를 수정한 경우</td></tr><tr><td>Test</td><td>테스트 코드를 추가, 변경, 리팩토링한 경우</td></tr><tr><td>Chore</td><td>기타 변경사항 (빌드 스크립트 수정, 패키지 매니징 설정 등)</td></tr><tr><td>Rename</td><td>파일 or 폴더명 수정하거나 옮기는 경우</td></tr><tr><td>Remove</td><td>파일을 삭제하는 작업만 수행한 경우</td></tr><tr><td><em>*태그 내용</em></td><td></td></tr></tbody></table><h2 id="_2-본문" tabindex="-1">2. 본문 <a class="header-anchor" href="#_2-본문" aria-label="Permalink to &quot;2. 본문&quot;">​</a></h2><p>본문은 양과 관계 없이, 최대한 상세히 작성하세요. 어떻게 변경했는지 보다는 무엇을 변경했는지, 왜 변경했는지를 설명합니다.</p><h2 id="_3-꼬리말-선택" tabindex="-1">3. 꼬리말(선택) <a class="header-anchor" href="#_3-꼬리말-선택" aria-label="Permalink to &quot;3. 꼬리말(선택)&quot;">​</a></h2><p>꼬릿말은 본문 아래에 붙이는 것으로, <code>(유형): (issue 번호)</code>형식으로 작성합니다. (*역시 띄어쓰기는 <code>:</code> 뒤에만 있습니다)</p><table><thead><tr><th><em><strong>유형</strong></em></th><th><em><strong>설명</strong></em></th></tr></thead><tbody><tr><td>Fixes</td><td>issue 수정중(아직 해결되지 않음)</td></tr><tr><td>Resolves</td><td>issue를 해결함</td></tr><tr><td>Ref</td><td>참고할 issue가 있음</td></tr><tr><td>Related to</td><td>해당 commit과 관련된 issue(아직 해결되지는 않음)</td></tr><tr><td><em>*유형 내용</em></td><td></td></tr></tbody></table><h2 id="_4-모범-사례" tabindex="-1">4. 모범 사례 <a class="header-anchor" href="#_4-모범-사례" aria-label="Permalink to &quot;4. 모범 사례&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">Feat: 추가-로그인 함수</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">- 로그인 API 개발</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">Resolves: #123</span></span>
<span class="line"><span style="color:#A6ACCD;">Ref: #456</span></span>
<span class="line"><span style="color:#A6ACCD;">Related to: #48, #45</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">Docs: 수정-git commit 가이드</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">- 제목, 본문, 꼬리말 지정 가이드</span></span>
<span class="line"><span style="color:#A6ACCD;">- 모범 사례</span></span></code></pre></div><h2 id="_5-출처" tabindex="-1">5. 출처 <a class="header-anchor" href="#_5-출처" aria-label="Permalink to &quot;5. 출처&quot;">​</a></h2><p><a href="https://overcome-the-limits.tistory.com/entry/%ED%98%91%EC%97%85-%ED%98%91%EC%97%85%EC%9D%84-%EC%9C%84%ED%95%9C-%EA%B8%B0%EB%B3%B8%EC%A0%81%EC%9D%B8-git-%EC%BB%A4%EB%B0%8B%EC%BB%A8%EB%B2%A4%EC%85%98-%EC%84%A4%EC%A0%95%ED%95%98%EA%B8%B0" target="_blank" rel="noreferrer">https://overcome-the-limits.tistory.com/entry/협업-협업을-위한-기본적인-git-커밋컨벤션-설정하기</a></p>`,18),r=[o];function n(l,i,c,p,m,h){return e(),a("div",null,r)}const A=t(d,[["render",n]]);export{_ as __pageData,A as default};
