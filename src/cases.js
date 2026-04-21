export const CASES = {
  pneumonia: {
    label: "폐렴 (Pneumonia)",
    meta: "김민준, 68세 남성 · 3일째 발열·기침",
    tag: "흔함",
    tagColor: "warn",
    system: `당신은 폐렴(Pneumonia) 환자 김민준(68세, 남성)입니다.
주호소: 3일 전부터 발열, 기침, 화농성 가래, 우측 흉통.
증상: 체온 38.9도, 오한, 약간의 호흡곤란, 우측 아래쪽 찌르는 흉통(심호흡 시 악화), 누런 가래.
과거력: 당뇨(10년, metformin 복용), 고혈압(amlodipine).
사회력: 30갑년 흡연, 5년 전 금연. 은퇴 후 집에서 생활.
가족력: 특이사항 없음.
이번 발병 전: 3주 전 독감 비슷한 증상 있었으나 자연 회복.
신체소견(직접 물어볼 때만 답변): 우측 폐하부 타진 시 탁음, 청진 시 수포음, 기관음 전도.
규칙: 환자처럼 자연스럽고 간결하게 대답. 의학 용어 사용 금지. 질문에만 답하고 먼저 정보 제공하지 말 것. 한국어로만 대화.`,
    examData: {
      vital: `[바이탈 사인]
BP: 138/88 mmHg
HR: 102회/분 (규칙적)
RR: 22회/분
BT: 38.9°C
SpO2: 94% (실내 공기)`,
      SpO2: `[산소포화도 / Pulse Oximetry]
SpO2: 94% (실내 공기)
맥박수: 102회/분
→ 보충 산소 투여 고려 (목표 SpO2 ≥94%)`,
      CXR: `[흉부 X-ray]
우측 하엽에 경계 불분명한 폐경화(consolidation).
Air bronchogram 관찰됨.
흉수 뚜렷하지 않음. 심장 크기 정상.
인상: 우측 하엽 폐렴 합당.`,
      CBC: `[CBC]
WBC: 14,800/μL (↑) — neutrophil 82%
Hb: 13.2 g/dL
Plt: 198,000/μL
인상: 세균성 감염 시사 백혈구 증가증.`,
      BMP: `[기본 혈액검사 / Chemistry]
Na: 138, K: 4.0, Cl: 101, HCO3: 22
BUN: 18, Cr: 1.1
Glucose: 168 mg/dL (↑)
CRP: 8.4 mg/dL (↑)`,
      ABG: `[동맥혈 가스분석 (ABG) — 실내 공기]
pH: 7.44
PaCO2: 36 mmHg
PaO2: 68 mmHg (↓)
HCO3: 24 mEq/L
SaO2: 94%
A-a gradient: 22 mmHg (↑, V/Q mismatch)
인상: 저산소혈증 동반, 폐내 원인 시사.`,
      EKG: `[심전도 (EKG)]
동빈맥(Sinus tachycardia) 102회/분.
ST 변화 없음. 특이소견 없음.
인상: 발열에 의한 동빈맥.`,
      BNP: `[BNP / NT-proBNP]
BNP: 48 pg/mL (정상 <100)
인상: 심부전 가능성 낮음. 호흡곤란의 원인은 폐렴 합당.`,
      Troponin: `[Troponin I]
Troponin I: 0.02 ng/mL (정상 <0.04)
인상: 심근 손상 없음. MI 배제.`,
      Procalcitonin: `[Procalcitonin (PCT)]
PCT: 1.2 ng/mL (↑, 정상 <0.1)
인상: 세균성 감염 강력 시사. 항생제 치료 적응증.`,
      Lactate: `[혈중 Lactate]
Lactate: 1.4 mmol/L (정상 <2.0)
인상: 조직 저관류 없음. 패혈증성 쇼크 아님.`,
      DDimer: `[D-dimer]
D-dimer: 620 ng/mL (경미하게 상승, 정상 <500)
인상: 감염/염증에 의한 비특이적 상승 가능. 임상 맥락상 PE 가능성 낮음.`,
      sputum: `[객담 검사]
육안: 화농성(노란색)
그람 염색: 그람 양성 쌍구균 다수
배양: 결과 대기 중 (48-72시간)
인상: Streptococcus pneumoniae 감염 가능성 높음.`,
      bloodCulture: `[혈액배양 (Blood Culture) — 2세트]
채혈 완료. 결과 대기 중 (24-48시간).
현재까지 균 자람 없음.
※ 항생제 투여 전 채혈 원칙.`,
      urineAg: `[요항원 검사 (Urinary Antigen)]
Pneumococcal urinary antigen: 양성 (+)
Legionella urinary antigen: 음성 (-)
인상: Streptococcus pneumoniae 폐렴 확인.`,
      Echo: `[심초음파 (Echocardiography)]
좌심실 수축기능: EF 62% (정상)
벽운동 이상 없음. 심낭삼출 없음.
판막 이상 없음.
인상: 심부전 배제. 폐렴 단독 원인 합당.`
    }
  },
  asthma: {
    label: "천식 (Asthma)",
    meta: "이수진, 24세 여성 · 야간 호흡곤란·천명",
    tag: "흔함",
    tagColor: "warn",
    system: `당신은 천식(Asthma) 환자 이수진(24세, 여성)입니다.
주호소: 2주 전부터 밤마다 숨이 차고 쌕쌕거리는 소리가 남.
증상: 주로 새벽 2~4시에 악화, 운동 후에도 증상 발생, 마른 기침, 가래 거의 없음.
악화 요인: 고양이 키움(1년), 스트레스, 찬 공기.
과거력: 소아 때 천식 진단 후 중학교 때부터 증상 없어 약 중단. 알레르기 비염(+).
가족력: 어머니 천식.
사회력: 비흡연, 대학원생.
현재 약물: 없음.
신체소견(직접 물어볼 때만): 청진 시 호기 시 천명음, 흡기대비 호기 연장.
규칙: 환자처럼 자연스럽고 간결하게 대답. 의학 용어 사용 금지. 질문에만 답하고 먼저 정보 제공하지 말 것. 한국어로만 대화.`,
    examData: {
      vital: `[바이탈 사인]
BP: 118/74 mmHg
HR: 88회/분
RR: 18회/분
BT: 36.8°C
SpO2: 97% (실내 공기, 현재 증상 없는 상태)`,
      SpO2: `[산소포화도 / Pulse Oximetry]
SpO2: 97% (실내 공기, 외래 방문 시 안정 상태)
발작 시 SpO2 91%까지 저하 보고력 있음.`,
      CXR: `[흉부 X-ray]
폐 과팽창(hyperinflation) 경향.
횡격막 편평화 경미.
침윤 없음. 흉수 없음.
인상: 천식 합당. 폐렴 등 감염 소견 없음.`,
      PFT: `[폐기능 검사 (Spirometry)]
FEV1: 72% (예측치 대비)
FVC: 88%
FEV1/FVC: 0.68 (↓, 정상 >0.70)
기관지확장제 투여 후 FEV1 개선: +15% (양성 반응)
인상: 가역성 폐쇄성 환기장애 — 천식 합당.`,
      PeakFlow: `[최대호기유량 (Peak Flow)]
예측치: 420 L/min
측정치: 280 L/min (예측치의 67%)
기관지확장제 투여 후: 370 L/min (개선 32%)
인상: 유의한 기류제한. 천식 조절 불량.`,
      ABG: `[동맥혈 가스분석 (ABG) — 발작 시 기준]
pH: 7.48
PaCO2: 32 mmHg (↓, 과호흡)
PaO2: 72 mmHg (↓)
HCO3: 23 mEq/L
인상: 경증-중등도 발작. PaCO2 정상화되면 중증 발작 의심.`,
      EKG: `[심전도 (EKG)]
정상 동율동, 88회/분. 특이소견 없음.`,
      CBC: `[CBC]
WBC: 7,200/μL — eosinophil 8% (↑, 정상 1-4%)
Hb: 13.8 g/dL. Plt: 245,000/μL
인상: 호산구 증가 — 알레르기성 천식 시사.`,
      BNP: `[BNP]
BNP: 22 pg/mL (정상)
인상: 심장성 천식 가능성 낮음.`,
      allergyTest: `[알레르기 검사 / Total IgE]
고양이 털 항원: 강양성 (+++++)
집먼지진드기: 양성 (++)
Total IgE: 380 IU/mL (↑)
인상: 고양이 알레르겐 주요 유발인자 확인.`
    }
  },
  copd: {
    label: "COPD 급성악화 (AECOPD)",
    meta: "박영철, 72세 남성 · 평소보다 심한 호흡곤란",
    tag: "중요",
    tagColor: "accent",
    system: `당신은 COPD 급성악화(AECOPD) 환자 박영철(72세, 남성)입니다.
주호소: 평소에도 숨이 찼는데 3일 전부터 더 심해지고 가래 양이 늘고 색이 변함.
증상: 평상시 운동 시 호흡곤란 있었으나 지금은 안정 시에도 호흡곤란. 가래가 노란색으로 변함. 발열 37.5도.
과거력: COPD 진단 5년(Spiriva, Symbicort 사용 중). 50갑년 흡연, 현재도 흡연 중(5~10개비/일). 심근경색 3년 전(PCI 시행).
사회력: 현재도 흡연 중, 소주 3잔/일.
ADL: 집안일은 가능하나 2층 계단 오르면 매우 힘듦.
신체소견(직접 물어볼 때만): 호흡수 24회/분, 산소포화도 89%(실내공기), 배럴 흉곽, 청진 시 양측 천명 및 호기 연장.
규칙: 환자처럼 자연스럽고 간결하게 대답. 의학 용어 사용 금지. 질문에만 답하고 먼저 정보 제공하지 말 것. 한국어로만 대화.`,
    examData: {
      vital: `[바이탈 사인]
BP: 148/92 mmHg
HR: 108회/분
RR: 24회/분
BT: 37.5°C
SpO2: 89% (실내 공기) ⚠️`,
      SpO2: `[산소포화도 / Pulse Oximetry]
SpO2: 89% (실내 공기) ⚠️
산소 2L/min 투여 후: 93%
⚠️ COPD 환자 목표 SpO2: 88–92% (과도한 산소 투여 시 CO2 narcosis 위험)`,
      CXR: `[흉부 X-ray]
폐 과팽창 현저. 횡격막 편평화, 늑간 간격 증가.
우하엽 경미한 음영 증가 (감염 동반 가능성).
심장 크기 정상 상한.
인상: COPD 배경 + 우하엽 감염 의심.`,
      ABG: `[동맥혈 가스분석 (ABG) — 실내 공기]
pH: 7.36
PaCO2: 52 mmHg (↑) — CO2 저류
PaO2: 54 mmHg (↓↓)
HCO3: 29 mEq/L (↑, 만성 보상)
SaO2: 88%
인상: 만성 II형 호흡부전의 급성 악화. 산소 투여 시 CO2 narcosis 주의.`,
      CBC: `[CBC]
WBC: 12,400/μL (↑)
Hb: 16.8 g/dL (↑, 이차성 적혈구증가증 — 만성 저산소증)
Plt: 188,000/μL`,
      BMP: `[기본 혈액검사 / Chemistry]
Na: 140, K: 3.8, HCO3: 29 (↑, 만성 대사 보상)
BUN: 22, Cr: 1.2
CRP: 6.2 mg/dL (↑)`,
      Procalcitonin: `[Procalcitonin (PCT)]
PCT: 0.8 ng/mL (↑)
인상: 세균성 감염 동반 가능성. 항생제 치료 고려.`,
      BNP: `[BNP]
BNP: 188 pg/mL (↑, 정상 <100)
인상: 우심실 부하 증가 반영 (폐성심). 급성 좌심부전은 아님.`,
      EKG: `[심전도 (EKG)]
동빈맥 108회/분.
우심실 비대(RVH): 우축 편위, V1 R파 증가.
P pulmonale (II 유도 peaked P파).
ST 변화 없음.
인상: 만성 폐성심(cor pulmonale) 시사.`,
      PFT: `[폐기능 검사 (Spirometry, 안정기 기준)]
FEV1: 38% (예측치 대비) — GOLD Grade 3
FEV1/FVC: 0.51
기관지확장제 후 FEV1 개선: +7% (비가역적)
인상: 중증 비가역성 폐쇄성 환기장애 — COPD.`,
      Troponin: `[Troponin I]
Troponin I: 0.03 ng/mL (정상 범위 내)
인상: 급성 MI 배제. 우심실 부하에 의한 경미한 상승 없음.`,
      Lactate: `[혈중 Lactate]
Lactate: 1.8 mmol/L (정상 <2.0)
인상: 조직 저관류 없음.`,
      sputum: `[객담 검사]
육안: 화농성, 노란색
그람 염색: 그람 음성 간균 다수 관찰
배양: 결과 대기 중
인상: H. influenzae 또는 Pseudomonas 가능성.`
    }
  },
  pe: {
    label: "폐색전증 (PE)",
    meta: "최지영, 45세 여성 · 갑작스러운 호흡곤란·흉통",
    tag: "응급",
    tagColor: "danger",
    system: `당신은 폐색전증(Pulmonary Embolism) 의심 환자 최지영(45세, 여성)입니다.
주호소: 1시간 전 갑자기 숨이 차고 왼쪽 날카로운 흉통 발생.
증상: 갑작스러운 호흡곤란, 심호흡 시 흉통 악화, 약간의 기침(가래 없음), 약간의 혈담.
위험인자: 3일 전 장거리 비행(LA→인천), 2주 전 오른쪽 발목 골절 수술, 오른쪽 종아리 부종과 통증 1주일째.
과거력: 경구피임약 3년째 복용.
사회력: 비흡연, 회사원.
신체소견(직접 물어볼 때만): 심박수 118회/분, 호흡수 26회/분, 혈압 100/70, 산소포화도 91%, 우측 하지 부종(+).
규칙: 환자처럼 자연스럽고 간결하게 대답. 의학 용어 사용 금지. 질문에만 답하고 먼저 정보 제공하지 말 것. 한국어로만 대화.`,
    examData: {
      vital: `[바이탈 사인] ⚠️ 응급
BP: 100/70 mmHg (↓)
HR: 118회/분 (빈맥)
RR: 26회/분 (빈호흡)
BT: 37.1°C
SpO2: 91% (실내 공기) ⚠️`,
      SpO2: `[산소포화도 / Pulse Oximetry]
SpO2: 91% (실내 공기) ⚠️
즉시 산소 투여 필요.
산소 4L/min 후: 95%`,
      CXR: `[흉부 X-ray]
Westermark sign: 우하엽 혈관음영 감소.
Hampton's hump: 우하엽 쐐기형 음영 의심.
심장 크기 정상 상한.
인상: PE에 합당한 소견 (단, CXR 정상도 PE 배제 불가).`,
      EKG: `[심전도 (EKG)] ⚠️
동빈맥 118회/분.
S1Q3T3 패턴 (I유도 S파, III유도 Q파+T파 역전).
불완전 우각차단(RBBB).
인상: 급성 우심실 부하 — PE 강력 시사.`,
      ABG: `[동맥혈 가스분석 (ABG) — 실내 공기]
pH: 7.47 (알칼리증)
PaCO2: 30 mmHg (↓, 과호흡)
PaO2: 62 mmHg (↓)
HCO3: 22 mEq/L
A-a gradient: 38 mmHg (↑↑)
인상: 저산소혈증 + 호흡성 알칼리증 — PE 전형적 패턴.`,
      DDimer: `[D-dimer]
D-dimer: 4,820 ng/mL (↑↑, 정상 <500)
Wells score: 6점 (고위험) → CTPA 바로 시행 적응증.
※ Wells score 낮을 때만 D-dimer로 배제 가능.`,
      CTPA: `[CT 폐혈관조영술 (CTPA)] ⚠️ 확진
우측 폐동맥 주간부 및 우하엽 분지 충만 결손(filling defect) 확인.
우심실 확장 소견 동반.
인상: 우측 폐동맥 폐색전증 확진. 중등도-고위험 PE.`,
      DVT: `[하지 정맥 초음파 (DVT 검사)]
우측 슬와정맥 및 대퇴정맥: 혈전 확인 (압박 불능).
인상: 우측 DVT 확진 — PE 원인으로 확인됨.`,
      VQ: `[V/Q 스캔 (Ventilation/Perfusion Scan)]
우하엽 환기-관류 불일치(mismatch) 확인.
고확률 PE 소견.
인상: CTPA 불가 시 대안 검사. 이 케이스에서는 CTPA가 우선.`,
      Troponin: `[Troponin I]
Troponin I: 0.12 ng/mL (↑, 정상 <0.04)
인상: 우심실 부하에 의한 심근 손상. 고위험 PE 분류에 기여.`,
      BNP: `[BNP / NT-proBNP]
BNP: 380 pg/mL (↑↑)
인상: 급성 우심실 부전. 중등도-고위험 PE 분류.`,
      CBC: `[CBC]
WBC: 9,800/μL (정상)
Hb: 12.8 g/dL. Plt: 210,000/μL
인상: 감염 소견 없음.`,
      Echo: `[심초음파 (Echocardiography)]
우심실 확장 및 기능 저하.
McConnell sign: 우심실 자유벽 무운동 + 첨부 수축 보존.
D-sign: 중격 좌측 편위.
좌심실 기능 정상.
인상: 급성 우심실 부전 — 대량 PE 시사.`
    }
  },
  lung_cancer: {
    label: "폐암 의심",
    meta: "정태식, 62세 남성 · 3개월 지속 기침·체중감소",
    tag: "중요",
    tagColor: "accent",
    system: `당신은 폐암 의심 환자 정태식(62세, 남성)입니다.
주호소: 3개월 전부터 기침 지속, 2개월 사이 체중 6kg 감소.
증상: 마른 기침(간혹 혈담), 피로감, 식욕 감소, 목소리 쉬어짐(1달째), 오른쪽 어깨 통증.
위험인자: 40갑년 흡연(현재도 반 갑/일). 석면 작업 10년(건설업).
과거력: 고혈압(약 복용 중). 3년 전 흉부 X-ray 이상 소견 없었음.
가족력: 형이 위암으로 사망.
신체소견(직접 물어볼 때만): 우측 쇄골상부 림프절 촉지 가능.
규칙: 환자처럼 자연스럽고 간결하게 대답. 의학 용어 사용 금지. 질문에만 답하고 먼저 정보 제공하지 말 것. 한국어로만 대화.`,
    examData: {
      vital: `[바이탈 사인]
BP: 142/88 mmHg
HR: 82회/분
RR: 16회/분
BT: 37.0°C
SpO2: 95% (실내 공기)`,
      SpO2: `[산소포화도 / Pulse Oximetry]
SpO2: 95% (실내 공기)`,
      CXR: `[흉부 X-ray] ⚠️
우상엽에 4.2cm 불규칙한 경계의 종괴(mass).
우측 폐문 림프절 비대 의심.
우측 횡격막 상승 (횡격막신경 침범 가능성).
인상: 악성 종양 강력 의심. CT 필요.`,
      CT: `[흉부 CT] ⚠️
우상엽 4.8×3.9cm 불규칙 종괴, spiculated margin.
우측 종격동 및 쇄골상부 림프절 비대 (최대 2.1cm).
흉막 침범 의심.
인상: 우상엽 원발성 폐암 의심, Stage IIIA-B 가능성.`,
      CBC: `[CBC]
WBC: 9,800/μL
Hb: 10.2 g/dL (↓, 만성질환 빈혈)
Plt: 412,000/μL (↑, 종양 반응성)`,
      BMP: `[기본 혈액검사]
Na: 128 mEq/L (↓↓) — SIADH 의심 (소세포암 가능성)
K: 4.1, Cr: 1.0
LFT: AST/ALT 정상. ALP 경미하게 상승.`,
      tumorMarker: `[종양 표지자]
CEA: 24.8 ng/mL (↑↑, 정상 <5)
NSE: 정상 범위 (소세포암 가능성 낮음)
Cyfra 21-1: 8.4 ng/mL (↑, 편평세포암 시사)
인상: 비소세포폐암(편평세포암 or 선암) 가능성. 조직검사 필요.`,
      PET: `[PET-CT]
우상엽 종괴: SUVmax 12.4 (고대사성).
우측 쇄골상부, 종격동 림프절: FDG 섭취 증가.
원격전이(뇌, 간, 부신): 현재 없음.
인상: 폐암 + 림프절 전이(N3), 원격전이 없음(M0).`,
      ABG: `[동맥혈 가스분석 (ABG)]
pH: 7.42
PaCO2: 38 mmHg
PaO2: 74 mmHg (↓ 경미)
HCO3: 24 mEq/L
인상: 경미한 저산소혈증. 종양에 의한 폐 기능 저하 반영.`,
      Echo: `[심초음파]
좌심실 기능 정상 (EF 60%).
심낭삼출 없음.
인상: 심장 직접 침범 소견 없음.`
    }
  },
  tb: {
    label: "결핵 (TB)",
    meta: "김서연, 28세 여성 · 2달 기침·야간 발한·체중감소",
    tag: "중요",
    tagColor: "accent",
    system: `당신은 결핵(Tuberculosis) 의심 환자 김서연(28세, 여성)입니다.
주호소: 2달 전부터 기침 지속, 밤에 땀이 많이 남, 체중 4kg 감소.
증상: 만성 기침(초기 건기침→최근 약간의 가래), 야간 발한(옷이 젖을 정도), 미열(저녁에 심함), 피로감.
접촉력: 3달 전 결핵 환자와 좁은 사무실에서 2주간 함께 근무.
과거력: 특이사항 없음. 면역저하 없음.
사회력: 비흡연, 사무직 회사원. 최근 과로.
가족력: 외할머니 과거 결핵력.
신체소견(직접 물어볼 때만): 청진 상 좌측 상엽 호흡음 감소, 미약한 수포음.
규칙: 환자처럼 자연스럽고 간결하게 대답. 의학 용어 사용 금지. 질문에만 답하고 먼저 정보 제공하지 말 것. 한국어로만 대화.`,
    examData: {
      vital: `[바이탈 사인]
BP: 112/72 mmHg
HR: 88회/분
RR: 18회/분
BT: 37.6°C (미열)
SpO2: 96% (실내 공기)`,
      SpO2: `[산소포화도 / Pulse Oximetry]
SpO2: 96% (실내 공기)`,
      CXR: `[흉부 X-ray] ⚠️
좌상엽 불균질 음영 및 공동(cavity) 의심.
좌측 폐문 림프절 비대.
인상: 활동성 폐결핵 강력 시사. 즉시 격리 필요.`,
      CT: `[흉부 CT]
좌상엽 S1+2 구역 2.8cm 공동(cavity) 확인.
주변 tree-in-bud 음영 — 기도 전파 시사.
좌측 폐문 및 종격동 림프절 비대.
인상: 활동성 공동형 폐결핵.`,
      sputum: `[객담 검사] ⚠️
AFB 도말: 양성 (+++) — 항산균 다수
GeneXpert MTB/RIF: MTB 검출, Rifampicin 내성 없음
배양: 진행 중 (4-6주)
인상: 활동성 도말 양성 폐결핵 확진. 즉시 격리 및 치료 시작.`,
      TST: `[투베르쿨린 피부반응 검사 (TST) / IGRA]
TST: 18mm (강양성, 기준 ≥10mm)
IGRA (QuantiFERON): 양성
인상: 결핵균 감염 확인.`,
      CBC: `[CBC]
WBC: 8,200/μL (정상)
Hb: 10.8 g/dL (↓, 만성 소모성 빈혈)
ESR: 82 mm/hr (↑↑)
CRP: 3.2 mg/dL (↑)`,
      BMP: `[기본 혈액검사]
Na: 136, K: 3.9, Cr: 0.8
LFT: AST 28, ALT 22 (정상 — 항결핵제 투여 전 baseline 확인 중요)`,
      Procalcitonin: `[Procalcitonin (PCT)]
PCT: 0.3 ng/mL (경미하게 상승)
인상: 결핵은 세균성 감염이나 PCT가 낮게 유지되는 경우 많음. 결핵 배제 불가.`,
      bloodCulture: `[혈액배양]
결과 음성 (48시간 후).
인상: 혈행성 파종 결핵 가능성 낮음.`,
      ABG: `[동맥혈 가스분석 (ABG)]
pH: 7.43
PaCO2: 37 mmHg
PaO2: 78 mmHg (경미하게 낮음)
HCO3: 24 mEq/L
인상: 경미한 저산소혈증. 공동 형성에 의한 V/Q 불일치.`
    }
  },
  pleural_effusion: {
    label: "흉수 (Pleural Effusion)",
    meta: "오병준, 55세 남성 · 점점 심해지는 호흡곤란",
    tag: "중요",
    tagColor: "accent",
    system: `당신은 흉수(Pleural effusion) 환자 오병준(55세, 남성)입니다.
주호소: 2주 전부터 숨이 점점 차오르고 옆으로 누우면 더 힘듦.
증상: 점진적 호흡곤란(운동 시→안정 시), 둔한 왼쪽 흉통, 기침(심하지 않음).
과거력: 간경화 진단 3년(B형 간염). 알부민 수치 낮다고 들었음. 2년 전 복수로 배에 물 뺀 적 있음.
사회력: 소주 하루 1병씩 20년, 2년 전 금주. 담배 20갑년, 현재도 흡연.
가족력: 부친 간암.
현재 약물: furosemide, spironolactone, propranolol.
신체소견(직접 물어볼 때만): 좌측 폐 타진 시 탁음, 청진 시 호흡음 감소. 복부 팽만, 하지 부종.
규칙: 환자처럼 자연스럽고 간결하게 대답. 의학 용어 사용 금지. 질문에만 답하고 먼저 정보 제공하지 말 것. 한국어로만 대화.`,
    examData: {
      vital: `[바이탈 사인]
BP: 108/68 mmHg
HR: 94회/분
RR: 20회/분
BT: 36.9°C
SpO2: 93% (실내 공기)`,
      SpO2: `[산소포화도 / Pulse Oximetry]
SpO2: 93% (실내 공기)`,
      CXR: `[흉부 X-ray]
좌측 흉강 대량 흉수 — 좌폐 하엽 및 중엽 압박.
좌측 늑골횡격막각(costophrenic angle) 소실.
종격동 경미한 우측 편위.
인상: 좌측 대량 흉수. 간흉수(hepatic hydrothorax) 가능성 높음.`,
      pleural: `[흉수 분석 (Thoracentesis)]
외관: 맑고 노란색
단백: 1.8 g/dL (혈청 5.2)
LDH: 128 U/L (혈청 210)
Light's criteria:
  - 흉수/혈청 단백 비: 0.35 (<0.5) → 누출액
  - 흉수/혈청 LDH 비: 0.61 (경계)
SAAG: 1.4 g/dL (>1.2 → 문맥압 항진)
세포: 단핵구 위주, 악성세포 없음
인상: 누출성 흉수 — 간경화 간흉수(hepatic hydrothorax) 합당.`,
      ultrasound: `[복부/흉부 초음파]
간: 표면 불규칙, 에코 증가 (간경화).
비장: 비대 (14cm).
복수: 중등도.
좌측 흉강: 대량 흉수.
간암 의심 병변: 뚜렷하지 않음.
인상: 간경화 + 복수 + 좌측 간흉수.`,
      LFT: `[간기능 검사 (LFT)]
AST: 68, ALT: 42 (↑)
ALP: 142 (↑)
Total bilirubin: 2.8 mg/dL (↑)
Albumin: 2.1 g/dL (↓↓)
PT/INR: 1.8 (↑)
인상: Child-Pugh C 수준의 간경화.`,
      CBC: `[CBC]
WBC: 3,800/μL (↓, 비장 기능항진)
Hb: 9.8 g/dL (↓)
Plt: 68,000/μL (↓↓, 비장 기능항진)
인상: 범혈구감소증 — 간경화 비장 기능항진 합당.`,
      BNP: `[BNP]
BNP: 62 pg/mL (정상)
인상: 심부전에 의한 흉수 가능성 낮음. 간성 흉수 합당.`,
      ABG: `[동맥혈 가스분석 (ABG)]
pH: 7.44
PaCO2: 34 mmHg (↓, 경미한 과호흡)
PaO2: 70 mmHg (↓)
HCO3: 23 mEq/L
인상: 흉수에 의한 압박성 무기폐 → 저산소혈증.`,
      Echo: `[심초음파]
좌심실 기능 정상 (EF 58%).
심낭삼출 없음. 판막 이상 없음.
인상: 심부전 배제 확인.`,
      tumorMarker: `[종양 표지자 (암성 흉수 감별)]
AFP: 8.2 ng/mL (경미하게 상승, 정상 <10)
CEA: 3.1 ng/mL (정상)
CA 19-9: 정상
인상: 현재 악성 흉수 가능성 낮음. 간세포암 AFP 추적 필요.`
    }
  }
}

export const FEEDBACK_SYSTEM = `당신은 내과 전문의이자 의과대학 CPX 담당 교수입니다. 학생의 병력청취 수행을 평가합니다. 한국어로 다음 형식에 맞게 피드백하세요:

[잘한 점]
- 수집한 중요 정보 나열

[놓친 항목]
- 물어봤어야 할 핵심 질문

[핵심 포인트]
- 이 케이스의 중요 진단 단서

[예상 진단 & 다음 단계]
- 진단명과 즉시 시행할 검사/처치

[종합 평가] X / 10점`

export const HINTS = [
  { label: "발병 시기", q: "언제부터 이런 증상이 생겼나요?" },
  { label: "기침/가래", q: "기침이 있으신가요? 가래는 어떤 색인가요?" },
  { label: "호흡곤란", q: "숨이 차신가요? 언제 더 심한가요?" },
  { label: "흉통", q: "흉통이 있으신가요? 어떤 양상인가요?" },
  { label: "발열/오한", q: "열이 나시나요? 오한은요?" },
  { label: "체중변화", q: "최근 체중이 줄거나 늘었나요?" },
  { label: "흡연력", q: "흡연하시나요? 얼마나 오래, 하루 몇 개비?" },
  { label: "과거력", q: "과거에 비슷한 증상이나 폐 관련 질환이 있으셨나요?" },
  { label: "복용약물", q: "현재 복용 중인 약이 있으신가요?" },
  { label: "직업/환경", q: "어떤 일을 하세요? 특별한 환경에 노출된 적 있나요?" },
  { label: "가족력", q: "가족 중에 비슷한 질환이 있는 분이 있나요?" },
  { label: "신체진찰", q: "청진해도 될까요? (청진 소견이 어떻게 되나요?)" },
]

export const EXAM_KEYWORDS = {
  vital: ["바이탈", "활력징후", "vital sign", "vital", "혈압", "맥박", "체온", "호흡수", "bp", "혈압 재", "혈압재", "혈압을 재", "맥박 재", "체온 재", "활력 징후"],
  SpO2: ["산소포화도", "spo2", "o2 sat", "o2sat", "oxygen saturation", "pulse oximetry", "pulse ox", "산소 포화", "옥시미터", "산소측정", "산소 측정", "포화도"],
  CXR: ["cxr", "흉부 x-ray", "흉부 x ray", "흉부xray", "x-ray", "엑스레이", "흉부 촬영", "가슴 x", "방사선 촬영", "chest x", "흉부방사선", "단순흉부"],
  EKG: ["ekg", "ecg", "심전도", "electrocardiogram", "심전도 검사", "12 lead", "12lead"],
  ABG: ["abg", "동맥혈 가스", "혈액 가스", "arterial blood gas", "가스분석", "동맥혈가스", "동맥혈 가스분석"],
  CBC: ["cbc", "혈액 검사", "혈액검사", "complete blood count", "백혈구", "혈색소", "헤모글로빈", "혈구 검사", "전혈구"],
  BMP: ["bmp", "기본 혈액", "전해질", "electrolyte", "chemistry", "crp", "신기능", "크레아티닌", "기본 검사"],
  BNP: ["bnp", "nt-probnp", "뇌나트륨", "심부전 검사", "나트륨이뇨펩타이드"],
  Troponin: ["troponin", "트로포닌", "심근효소", "심근 손상", "creatine kinase", "ck-mb"],
  Procalcitonin: ["procalcitonin", "프로칼시토닌", "pct", "감염 표지자"],
  Lactate: ["lactate", "젖산", "lactic acid", "관류 검사", "조직 관류"],
  DDimer: ["d-dimer", "d dimer", "디다이머", "d다이머"],
  CTPA: ["ctpa", "ct 폐혈관", "폐혈관 ct", "ct angio", "폐동맥 ct", "폐혈관조영"],
  VQ: ["v/q", "vq scan", "환기관류", "ventilation perfusion", "v q 스캔"],
  DVT: ["dvt", "하지 정맥", "정맥 혈전", "하지 초음파", "leg doppler", "doppler", "다리 혈전"],
  CT: ["ct 촬영", "ct검사", "흉부 ct", "chest ct", "ct scan", "컴퓨터 단층", "흉부ct"],
  PFT: ["pft", "폐기능 검사", "spirometry", "폐기능검사", "폐활량", "폐기능"],
  PeakFlow: ["peak flow", "최대호기유량", "피크플로우", "peak expiratory"],
  sputum: ["객담", "sputum", "가래 검사", "객담 검사", "gram 염색", "afb", "항산균", "결핵 검사", "도말"],
  bloodCulture: ["혈액배양", "blood culture", "배양검사", "균배양", "혈배양"],
  urineAg: ["요항원", "urinary antigen", "소변 항원", "레지오넬라", "폐렴구균 항원", "legionella"],
  allergyTest: ["알레르기 검사", "피부반응", "ige", "알레르기 테스트", "알레르겐"],
  TST: ["tst", "투베르쿨린", "결핵 피부", "igra", "quantiferon", "퀀티페론", "결핵반응"],
  tumorMarker: ["종양표지자", "tumor marker", "cea", "종양 마커", "암 표지자", "afp", "cyfra"],
  PET: ["pet", "pet-ct", "양전자", "전신 촬영", "fdg"],
  pleural: ["흉수 검사", "흉강천자", "thoracentesis", "흉수 분석", "흉수천자", "흉강 천자", "흉수 뽑기"],
  LFT: ["간기능", "lft", "liver function", "ast", "alt", "알부민", "빌리루빈", "간효소"],
  ultrasound: ["초음파", "ultrasound", "echo", "복부 초음파", "흉부 초음파", "sonography"],
  Echo: ["심초음파", "echocardiography", "echo", "심장 초음파", "좌심실", "ef 측정"]
}

export function detectExam(text, examData, shownExams = new Set()) {
  const lower = text.toLowerCase()
  for (const [examKey, keywords] of Object.entries(EXAM_KEYWORDS)) {
    // 이미 제공한 검사는 건너뜀
    if (shownExams.has(examKey)) continue
    if (examData[examKey] && keywords.some(k => lower.includes(k.toLowerCase()))) {
      return { key: examKey, result: examData[examKey] }
    }
  }
  return null
}
