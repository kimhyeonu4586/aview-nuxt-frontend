<template>
  <v-container class="container">
    <h1 class="text-center">JOBSTICK의 주요 기능</h1>
    <p class="intro-text text-center">
      JOBSTICK을 통해 실전 면접에 필요한 여러 시스템을 이용해 보세요.
    </p>

    <v-row class="content-container">
      <v-col
        v-for="(image, index) in filteredImages"
        :key="index"
        cols="12"
        md="4"
        class="content-box"
      >
        <v-card>
          <v-card-title>
            <h2>{{ contentTitles[index] }}</h2>
          </v-card-title>
          <v-card-text>
            <p>{{ contentDescriptions[index] }}</p>
          </v-card-text>
          <v-img :src="image" :alt="`이미지 ${index + 1}`" />
        </v-card>
      </v-col>
    </v-row>

    <ScrollUpAnimation class="scrollupanimation" @click="goToUp" />
  </v-container>
</template>

<script>
import { defineComponent, ref, onMounted, onBeforeUnmount, computed } from "vue";
import AOS from "aos";
import image1 from "@/assets/images/fixed/in.jpg"; // 첫 번째 이미지
import image2 from "@/assets/images/fixed/dc.jpg"; // 두 번째 이미지
import image3 from "@/assets/images/fixed/cam.jpg"; // 세 번째 이미지
import ScrollUpAnimation from "./ScrollUpAnimation.vue";
import "aos/dist/aos.css";

export default defineComponent({
  name: "HomeSix",
  components: {
    ScrollUpAnimation,
  },
  setup() {
    const images = [image1, image2, image3]; // 이미지 배열
    const contentTitles = [
      "원하는 기업의 요구사항 정보 제공",
      "ai를 이용한 정확한 피드백 제공",
      "모의 면접 녹화본 제공",
    ]; // 콘텐츠 제목들
    const contentDescriptions = [
      "기업 뿐만이 아니라 다양한 분야, 직무별로 원하는 인재상 정보들 등 면접에 필요한 다양한 정보를 제공해드리고 있습니다.",
      "혼자서 준비하는 면접의 가장 큰 어려움인 피드백을 ai를 통해 사용자에게 제공합니다.",
      "자신의 문제점과 불필요한 행동을 파악하여 빠르게 수정할 수 있도록 도와드립니다.",
    ]; // 콘텐츠 설명들
    const currentIndex = ref(0); // 현재 인덱스 상태
    const intervalId = ref(null); // setInterval의 ID를 저장할 변수

    // computed 속성으로 필터링된 이미지를 반환
    const filteredImages = computed(() => {
      return [images[currentIndex.value]]; // 현재 인덱스에 해당하는 이미지만 반환
    });

    // 콘텐츠 자동 변경 함수
    function changeContent() {
      intervalId.value = setInterval(() => {
        currentIndex.value = (currentIndex.value + 1) % images.length;
      }, 4000); // 4초마다 콘텐츠 변경
    }

    // 상단으로 스크롤하는 함수
    function goToUp() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    // 컴포넌트가 마운트되었을 때 콘텐츠 자동 변경 시작
    onMounted(() => {
      changeContent();
    });

    // 컴포넌트가 언마운트되기 전에 setInterval을 중지하여 메모리 누수를 방지
    onBeforeUnmount(() => {
      if (intervalId.value) {
        clearInterval(intervalId.value);
      }
    });

    return {
      images,
      contentTitles,
      contentDescriptions,
      currentIndex,
      filteredImages, // computed 속성으로 필터링된 이미지를 반환
      changeContent,
      goToUp,
    };
  },
});
</script>

<style scoped>
.home-six {
  width: 100%;
  min-height: 100vh; /* 페이지가 적어도 전체 화면을 덮도록 설정 */
  background: url("@/assets/images/fixed/home_bg2.jpg") center center;
  background-size: cover; /* 배경 이미지 크기를 화면 크기에 맞추어 조정 */
  background-attachment: fixed; /* 배경 이미지를 고정하여 스크롤 시에도 배경이 고정되도록 설정 */
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 240px 30px; /* 여백을 2배로 늘림 (원래 120px에서 240px로) */
  box-sizing: border-box; /* 패딩을 포함한 크기 계산 */
}

.intro-text {
  color: #333; /* 색상 변경 (진한 회색) */
  font-size: 2rem; /* 글씨 크기 */
  text-align: center;
  margin-bottom: 20px; /* 하단 여백 */
}

h1 {
  color: #333;
  font-size: 3rem; /* 글씨 크기 */
  font-weight: bold;
  margin-bottom: 20px; /* 하단 여백 */
  margin-top: 10px; /* 상단 여백을 살짝 추가 */
  text-align: center;
}

.content-container {
  position: relative;
  width: 80%; /* 큰 직사각형의 너비 */
  height: 400px; /* 직사각형의 높이 */
  overflow: hidden; /* 자식 요소가 직사각형 밖으로 나가지 않도록 */
}

.content-box {
  width: 100%; /* 한 콘텐츠 박스가 전체 영역을 차지하도록 설정 */
  height: 100%; /* 콘텐츠 박스의 높이를 부모 높이와 동일하게 설정 */
  padding: 15px;
  box-sizing: border-box;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* 그림자 추가 */
  display: flex;
  flex-direction: row; /* 텍스트와 이미지를 가로로 배치 */
  gap: 20px;
  position: absolute; /* 각 콘텐츠가 겹치지 않도록 위치를 절대값으로 설정 */
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transition: opacity 1s ease-in-out; /* 1초간 페이드 인/아웃 효과 */
  justify-content: center; /* 가운데 정렬을 위해 추가 */
  align-items: center; /* 수직 가운데 정렬을 위해 추가 */
}

.content-description {
  width: 50%; /* 왼쪽 절반은 글씨 영역 */
  font-size: 18px; /* 글씨 크기 살짝 키움 */
  color: #333;
  display: flex;
  flex-direction: column;
  justify-content: center; /* 세로 중앙 정렬 */
  text-align: center; /* 텍스트를 가운데 정렬 */
}

.content-description h2 {
  font-size: 1.8rem; /* 제목 크기 살짝 키움 */
  margin-bottom: 10px;
}

.content-image {
  width: 50%; /* 오른쪽 절반은 이미지 영역 */
  display: flex;
  justify-content: center; /* 이미지 중앙 정렬 */
  align-items: center; /* 이미지 수직 중앙 정렬 */
}

.content-image img {
  width: 100%; /* 이미지의 너비를 100%로 설정 */
  height: 100%; /* 이미지의 높이를 100%로 설정 */
  object-fit: cover; /* 이미지가 비율을 유지하면서 영역을 완전히 덮도록 설정 */
  transform: scale(1.05); /* 이미지를 미세하게 확대하여 공백을 덮도록 설정 */
  border-radius: 8px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1); /* 이미지에 그림자 추가 */
}

/* 반응형 웹 디자인: 화면이 좁을 경우 레이아웃을 자동으로 변경 */
@media (max-width: 768px) {
  .content-container {
    width: 100%; /* 작은 화면에서는 전체 너비를 차지하도록 */
    height: auto; /* 작은 화면에서는 높이를 자동으로 맞춤 */
  }

  .content-box {
    flex-direction: column; /* 작은 화면에서는 텍스트와 이미지를 세로로 배치 */
  }

  .content-description,
  .content-image {
    width: 100%; /* 작은 화면에서는 텍스트와 이미지가 모두 100% 크기를 차지하도록 */
  }

  .content-image img {
    height: auto; /* 이미지 비율을 유지하도록 설정 */
  }
}
</style>
