<template>
  <div class="home-four">
    <h1>JOBSTICK의 주요 기능</h1>
    <p class="intro-text">JOBSTICK을 통해 실전 면접에 필요한 여러 시스템을 이용해 보세요.</p>

    <div class="content-container">
      <div 
        v-for="(image, index) in images" 
        :key="index" 
        v-show="currentIndex === index" 
        class="content-box"
      >
        <div class="content-description">
          <h2>{{ contentTitles[index] }}</h2>
          <p>{{ contentDescriptions[index] }}</p>
        </div>
        <div class="content-image">
          <img :src="image" :alt="`이미지 ${index + 1}`" />
        </div>
      </div>
    </div>

    <!-- 스크롤 올리기 버튼 -->
    <a class="scroll" href="#" @click.prevent="scrollToTop">Go Top</a>
  </div>
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
.home-four {
  width: 100%;
  min-height: 100vh;
  background: url("@/assets/images/fixed/home_bg2.jpg") center center;
  background-size: cover;
  background-attachment: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 240px 30px;
  box-sizing: border-box;
}

.intro-text {
  color: #333;
  font-size: 2rem;
  text-align: center;
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
  height: 400px;
  overflow: hidden;
}

.content-box {
  width: 100%;
  height: 100%;
  padding: 15px;
  box-sizing: border-box;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: row;
  gap: 20px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transition: opacity 1s ease-in-out;
  justify-content: center;
  align-items: center;
}

.content-description {
  width: 50%;
  font-size: 18px;
  color: #333;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
}

.content-description h2 {
  font-size: 1.8rem;
  margin-bottom: 10px;
}

.content-image {
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.content-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: scale(1.05);
  border-radius: 8px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
}

/* 스크롤 올리기 버튼 */
.scroll {
  position: fixed;
  bottom: 20px;
  right: 20px;
  font-size: 2rem;
  color: #fff;
  text-decoration: none;
  padding: 1vh 1vh 1vh 4vh;
  background-color: transparent;
  border: 2px solid #fff;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s ease;
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

.scroll:hover {
  background-color: #fff;
  color: #007bff;
}

/* 애니메이션 */
@keyframes bounce {
  0%, 100% {
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
