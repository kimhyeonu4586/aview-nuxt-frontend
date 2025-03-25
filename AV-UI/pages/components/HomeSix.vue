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
  min-height: 100vh;
  background: url("@/assets/images/fixed/home_bg2.jpg") center center no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 240px 30px;
  box-sizing: border-box;
}

.intro-text {
  color: #333;
  font-size: 2rem;
  margin-bottom: 20px;
}

h1 {
  color: #333;
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 20px;
  margin-top: 10px;
  text-align: center;
}

.content-container {
  position: relative;
  width: 80%;
  height: auto;
}

.content-box {
  padding: 15px;
  box-sizing: border-box;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: opacity 1s ease-in-out;
  justify-content: center;
  align-items: center;
}

.scrollupanimation {
  position: absolute;
  bottom: 7vh;
  left: 50%;
  transform: translateX(-50%);
  animation: bounce 6s ease 0s infinite;
  animation-delay: 5s;
}

.content-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: scale(1.05);
  border-radius: 8px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
}

@media (max-width: 768px) {
  .content-container {
    width: 100%;
    height: auto;
  }

  .content-box {
    flex-direction: column;
  }

  .content-description,
  .content-image {
    width: 100%;
  }

  .content-image img {
    height: auto;
  }
}
</style>
