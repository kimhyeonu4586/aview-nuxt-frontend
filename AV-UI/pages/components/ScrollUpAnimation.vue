<template>
  <!-- 스크롤 올리기 버튼 -->
  <a class="scroll" href="#" @click.prevent="scrollToTop">Go Top</a>
</template>

<script>
import image1 from '@/assets/images/fixed/in.jpg';
import image2 from '@/assets/images/fixed/dc.jpg';
import image3 from '@/assets/images/fixed/cam.jpg';

export default {
  name: "HomePage7",
  data() {
    return {
      images: [image1, image2, image3],
      contentTitles: [
        '원하는 기업의 요구사항 정보 제공',
        'ai를 이용한 정확한 피드백 제공',
        '모의 면접 녹화본 제공',
      ],
      contentDescriptions: [
        '기업 뿐만이 아니라 다양한 분야, 직무별로 원하는 인재상 정보들 등 면접에 필요한 다양한 정보를 제공해드리고 있습니다.',
        '혼자서 준비하는 면접의 가장 큰 어려움인 피드백을 ai를 통해 사용자에게 제공합니다.',
        '자신의 문제점과 불필요한 행동을 파악하여 빠르게 수정할 수 있도록 도와드립니다.'
      ],
      currentIndex: 0,
    };
  },
  mounted() {
    this.changeContent();
  },
  methods: {
    changeContent() {
      setInterval(() => {
        this.currentIndex = (this.currentIndex + 1) % this.images.length;
      }, 4000); // 4초마다 콘텐츠 변경
    },
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
};
</script>

<style scoped>
*,
*:before,
*:after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.scroll {
  position: relative;
  display: block;
  font-size: 1.5vh;
  color: rgba(255, 255, 255, 1);
  text-decoration: none;
  padding: 1vh 1vh 1vh 4vh; /* 기존 코드와 동일한 간격 */
  display: flex;
  flex-direction: column; /* 세로 정렬 유지 */
  align-items: center;
  gap: 0.9vh; /* 기존 코드의 요소 간 간격 반영 */
}

.scroll::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 20%;
  width: 0;
  height: 0;
  border-left: 1vh solid transparent;
  border-right: 1vh solid transparent;
  border-bottom: 1.5vh solid white;
  transform: translate(-50%, -50%);
  animation: bounce 1.5s infinite;
}

/* 애니메이션 */
@keyframes bounce {
  0%,
  100% {
    transform: translate(-50%, -50%) translateY(0);
  }
  50% {
    transform: translate(-50%, -50%) translateY(-0.5vh);
  }
}

@media (max-width: 768px) {
  .scroll {
    width: 6vh;
    height: 6vh;
    font-size: 1.5rem;
  }

  .scroll::before {
    border-left: 1.2vh solid transparent;
    border-right: 1.2vh solid transparent;
    border-bottom: 1.8vh solid white;
  }
}

@media (max-width: 480px) {
  .scroll {
    width: 7vh;
    height: 7vh;
    font-size: 1.8rem;
  }

  .scroll::before {
    border-left: 1.4vh solid transparent;
    border-right: 1.4vh solid transparent;
    border-bottom: 2vh solid white;
  }
}
</style>
