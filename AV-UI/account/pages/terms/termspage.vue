<template>
  <v-container class="container">
    <div class="login-wrapper">
      <!-- 로그인 로고 부분은 생략 -->
      
      <!-- 카카오 로그인 버튼 클릭 시 약관 팝업 표시 -->
      <v-btn class="kakao-login-btn" @click="openTermsPopup">
        <!-- 카카오 로그인 -->
      </v-btn>

      <!-- 약관 모달 팝업 -->
      <v-dialog v-model="termsDialog" persistent max-width="600px">
        <v-card>
          <v-card-title class="headline">이용약관</v-card-title>
          <v-card-text>
            <p>제 1 조 (목적)</p>
            <p>본 약관은 본 서비스가 제공하는 면접 연습 및 모의 면접 서비스...</p>
            <p>제 2 조 (약관의 효력과 변경)</p>
            <p>① 본 서비스는 이용자가 본 약관 내용에 동의하는 것을 조건으로...</p>
            <p>... (전체 약관 내용) ...</p>
          </v-card-text>
          <v-card-actions>
            <v-btn color="primary" @click="acceptTerms">동의</v-btn>
            <v-btn @click="closeTermsPopup">닫기</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
  </v-container>
</template>

<script setup>
import { ref } from "vue";

// 약관 팝업 상태 관리
const termsDialog = ref(false);

// 약관 팝업을 여는 함수
const openTermsPopup = () => {
  termsDialog.value = true;
};

// 약관 팝업을 닫는 함수
const closeTermsPopup = () => {
  termsDialog.value = false;
};

// 약관에 동의하는 함수
const acceptTerms = () => {
  // 약관 동의 로직 (예: 카카오 로그인 진행)
  alert("약관에 동의하셨습니다. 카카오 로그인 진행 중...");
  closeTermsPopup();
  goToKakaoLogin();
};

// 카카오 로그인 함수
const goToKakaoLogin = async () => {
  localStorage.setItem("loginType", "KAKAO");
  // 여기에 카카오 로그인 관련 로직을 추가하세요
};
</script>

<style scoped>
/* 팝업 디자인 스타일링 */
.kakao-login-btn {
  background-image: url("@/assets/images/fixed/btn_login_kakao.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffea00;
  margin-bottom: 1vh;
  border-radius: 1.4vh;
}
</style>