<template>
  <div class="page-five">
    <h1>JOBSTICK이 해결해 드립니다!</h1>
    <div class="grid-container">
      <div class="grid-item">
        <div class="title">면접에서 자신감 UP🔥</div>
        <div class="description">JOBSTICK과 함께하는 모의 면접을 통해 다양한 면접 질문을 사전에 대응하며 불필요한 실수들을 사전에 처리할 수 있습니다. 이러한 과정을 반복할 수 있으며 완벽한 면접 준비 상태를 도와드립니다.</div>
      </div>
      <div class="grid-item">
        <div class="title">예측 질문 파악 OK🔍</div>
        <div class="description">AI를 기반으로 업무별, 직무별 맞춤형 질문을 제공하기 때문에 실제 면접에서 이뤄질 수 있는 질문들을 사전에 제공하여 최적의 답변을 만들 수 있게 제공해드립니다.</div>
      </div>
      <div class="grid-item">
        <div class="title">다양한 기업 분석 CHECK✅️</div>
        <div class="description">JOBSTICK에서는 다양한 분야와 직무, 각 기업의 면접 패턴과 요구사항을 분석해드며 해당 기업에 맞는 면접 준비를 도와드립니다.</div>
      </div>
      <div class="grid-item">
        <div class="title">효율적인 면접 준비 ON🔋</div>
        <div class="description">다양한 질문과 정확한 피드백, 기업 분석등 면접 준비에 필요한 요소들을 제공하여 쉽고 빠른 면접 준비를 이용할 수 있습니다.</div>
      </div>
      <div class="grid-item">
        <div class="title">불필요한 면접 실수 CUT✂️</div>
        <div class="description">본인의 면접 자세나 발화 습관을 녹화본으로 볼 수 있어 실제 면접에서 불필요한 실수들을 사전에 처리할 수 있도록 도와드립니다.</div>
      </div>
      <div class="grid-item">
        <div class="title">최적의 면접 대응 답변 READY📝</div>
        <div class="description">AI를 이용한 정확한 피드백을 통해 부족한 점을 극복할 수 있으며 점차 면접 질문에 완벽한 대응을 할 수 있도록 도와드립니다.</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Page5",
};
</script>

<style scoped>
.page-five {
  width: 100%;
  min-height: 100vh; /* 화면 전체를 덮도록 설정 */
  background: url("@/assets/images/fixed/home_bg2.jpg") center center;
  background-size: cover; /* 배경 이미지를 화면에 맞게 확대 */
  background-attachment: fixed; /* 배경 이미지를 고정 */
  display: flex;
  flex-direction: column; /* 수직으로 배치 */
  justify-content: flex-start; /* 상단에 배치 */
  align-items: center;
  padding: 20px;
  box-sizing: border-box; /* 패딩을 포함한 크기 계산 */
}

h1 {
  color: #333;
  margin-bottom: 40px;
  text-align: center;
  width: 100%;
  font-size: 3rem;
  font-weight: bold;
}

/* 그리드 컨테이너 */
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3개의 열로 구성 */
  grid-gap: 20px; /* 아이템 사이 간격 */
  margin: 0 auto;
  max-width: 900px; /* 최대 너비 설정 */
}

/* 그리드 아이템 스타일 */
.grid-item {
  background-color: rgba(240, 240, 240, 0.9); /* 배경을 반투명하게 설정하여 배경 이미지가 살짝 보이도록 */
  padding: 20px;
  text-align: center;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  font-size: 18px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 300px; /* 고정 높이 설정 */
}

/* 제목 스타일 */
.title {
  font-size: 20px;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
  flex-shrink: 0; /* 제목이 압축되지 않도록 설정 */
}

/* 설명 텍스트 스타일 */
.description {
  font-size: 14px;
  color: #555;
  text-align: center;
  flex-grow: 1; /* 설명이 가능한 공간을 차지하도록 설정 */
  margin-top: 20px;
}

/* 배경 스타일 */
.grid-item::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.1); /* 배경색 설정 */
  z-index: -1;
}
</style>
