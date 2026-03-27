# 김현탁 포트폴리오 디자인 아이디어

## 디자인 방향: 심플 · 테크 · 깔끔 (흰 배경 + 파랑 포인트 + Pretendard)

---

<response>
<text>

## 아이디어 A: "Engineering Precision" — 테크 미니멀리즘

**Design Movement**: Swiss International Style + Modern Tech Documentation

**Core Principles**:
- 정보의 위계를 엄격한 그리드로 표현
- 여백이 곧 디자인 요소 — 텍스트와 공간의 긴장감
- 타이포그래피가 주인공, 장식은 최소화
- 코드 에디터 감성의 모노스페이스 액센트

**Color Philosophy**:
- 배경: 순백 #FFFFFF — 깨끗하고 신뢰감 있는 캔버스
- 포인트: #2563EB (파랑) — 기술적 신뢰와 집중
- 보조: #F1F5F9 (연회색) — 섹션 구분용
- 텍스트: #0F172A (거의 검정) — 강한 대비
- 코드 액센트: #10B981 (에메랄드) — 터미널 감성

**Layout Paradigm**:
- 좌측 정렬 기반 비대칭 레이아웃
- Hero: 대형 타이포그래피 + 우측 코드 스니펫 장식
- 섹션마다 번호 레이블 (01. About, 02. Skills...)
- 프로젝트: 수평 스크롤 카드 또는 2열 그리드

**Signature Elements**:
- 섹션 번호 레이블 (01, 02, 03...)
- 코드 블록 스타일 장식 요소 (배경에 희미한 코드 텍스트)
- 파란 밑줄 호버 효과

**Interaction Philosophy**:
- 스크롤 진입 시 좌측에서 페이드인
- 버튼 호버: 배경 채우기 애니메이션
- 스킬 바: 숫자 카운트업

**Animation**:
- 섹션 진입: translateX(-20px) → 0 + opacity 0 → 1 (0.5s ease-out)
- 카드 호버: translateY(-4px) + box-shadow 강화
- 스킬 태그: scale(1) → scale(1.05)

**Typography System**:
- 헤딩: Pretendard ExtraBold (800) — 강렬한 존재감
- 본문: Pretendard Regular (400)
- 코드 액센트: JetBrains Mono — 개발자 감성
- 섹션 번호: Pretendard Light (300) + 대형 사이즈로 배경 장식

</text>
<probability>0.08</probability>
</response>

---

<response>
<text>

## 아이디어 B: "Blueprint Developer" — 청사진 테크 스타일 ✅ 선택

**Design Movement**: Technical Blueprint + Modern SaaS Landing

**Core Principles**:
- 흰 배경 위에 파란 포인트 컬러로 핵심 정보 강조
- 카드 기반 정보 구조 — 각 정보 단위가 명확히 분리됨
- 섬세한 선(border)과 그림자로 깊이감 표현
- 개발자다운 정확성: 코드 태그, 기술 뱃지, 수치 강조

**Color Philosophy**:
- 배경: #FFFFFF — 청결함과 전문성
- 포인트: #2563EB — 신뢰, 기술, 집중
- 카드 배경: #F8FAFC — 미묘한 구분
- 테두리: #E2E8F0 — 섬세한 구조선
- 텍스트 계층: #0F172A / #334155 / #64748B

**Layout Paradigm**:
- 세로 스크롤 단일 페이지
- Hero: 좌측 텍스트 + 우측 장식 요소 (비대칭)
- Skills: 카테고리별 뱃지 그룹
- Projects: 2열 카드 그리드 (GitHub/데모 링크 포함)
- 네비게이션: 상단 고정 헤더 (스크롤 시 배경 블러)

**Signature Elements**:
- 파란 왼쪽 테두리 강조 (border-left: 3px solid #2563EB)
- 기술 스택 뱃지 (둥근 태그 형태)
- 섹션 구분선 + 섹션 타이틀 왼쪽 파란 점

**Interaction Philosophy**:
- 부드러운 스크롤 앵커 네비게이션
- 카드 호버: 그림자 강화 + 미세 상승
- 버튼: 파란 배경 → 진한 파랑 전환

**Animation**:
- 섹션 진입: Intersection Observer로 fadeInUp (0.4s)
- 카드 호버: translateY(-6px) + shadow-lg
- 네비게이션 링크: 파란 밑줄 슬라이드인

**Typography System**:
- 헤딩: Pretendard Bold (700) / ExtraBold (800)
- 본문: Pretendard Regular (400) / Medium (500)
- 코드/기술명: JetBrains Mono (모노스페이스)
- 크기 계층: 3.5rem / 2rem / 1.25rem / 1rem

</text>
<probability>0.09</probability>
</response>

---

<response>
<text>

## 아이디어 C: "Terminal Craft" — 다크 터미널 + 라이트 혼합

**Design Movement**: Developer Terminal Aesthetic + Glassmorphism

**Core Principles**:
- 어두운 배경에 파란 네온 포인트 — 해커 감성
- 코드 에디터 UI 패턴 차용
- 글래스모피즘 카드로 레이어 표현
- 터미널 타이핑 애니메이션

**Color Philosophy**:
- 배경: #0F172A (딥 네이비)
- 포인트: #3B82F6 (밝은 파랑)
- 카드: rgba(255,255,255,0.05) + blur
- 텍스트: #F1F5F9 / #94A3B8

**Layout Paradigm**:
- 전체 다크 테마
- 터미널 스타일 Hero (타이핑 효과)
- 사이드바 네비게이션

**Signature Elements**:
- 터미널 프롬프트 ($ 기호)
- 코드 블록 스타일 섹션
- 네온 글로우 효과

**Interaction Philosophy**:
- 타이핑 커서 애니메이션
- 글리치 효과 호버

**Animation**:
- 타이핑 애니메이션 Hero
- 스캔라인 효과

**Typography System**:
- JetBrains Mono 전체 사용
- 네온 텍스트 효과

</text>
<probability>0.03</probability>
</response>
