<template>
  <v-container class="container">
    <div class="login-wrapper">
      <div>
        <div class="login_logo">  
          <!-- 로그인 로고 이미지 삽입 -->
        </div>

        <!-- 개인정보 동의 팝업 -->
        <v-dialog v-model="termsDialog" persistent max-width="600px">
          <v-card class="terms-dialog">
            <v-card-title class="headline">이용약관 및 개인정보 동의</v-card-title>
            <v-card-text>
              <p>제 1 조 (목적)<br>
              본 약관은 본 서비스가 제공하는 면접 연습 및 모의 면접 서비스(이하 "서비스")의 이용 조건 및 절차, 이용자와 서비스 제공자의 권리, 의무 및 책임사항을 규정함을 목적으로 합니다.</p>
               <p style="margin-bottom: 20px;"></p>
              <p>제 2 조 (약관의 효력과 변경)<br>
              ① 본 서비스는 이용자가 본 약관 내용에 동의하는 것을 조건으로 서비스를 제공하며, 본 서비스의 이용 행위에는 본 약관을 우선적으로 적용합니다.<br>
              ② 본 서비스는 사전 고지 없이 본 약관을 변경할 수 있으며, 변경된 약관은 서비스 내 공지를 통해 이용자가 직접 확인할 수 있도록 합니다. 이용자가 변경된 약관에 동의하지 않는 경우 회원 탈퇴를 할 수 있으며, 계속 사용할 경우 변경된 약관에 동의한 것으로 간주됩니다.</p>
              <p style="margin-bottom: 20px;"></p>
              <p>제 3 조 (개인정보의 수집 및 이용)<br>
              ① 본 서비스는 면접 연습 및 모의 면접 서비스 제공을 위해 다음과 같은 개인정보를 수집합니다.<br>
              필수 정보: 이메일, 닉네임, 성별, 생년월일, 소셜 로그인 타입(카카오, 구글 등)<br>
              자동 수집 정보: 서비스 이용 기록, 방문 기록, IP 주소<br>
              ② 수집된 정보는 다음의 목적을 위해 사용됩니다.<br>
              면접 연습 서비스 제공 및 맞춤형 면접 질문 제공<br>
              서비스 이용 통계 분석을 통한 품질 개선<br>
              회원 관리(로그인, 인증, 탈퇴 등)<br>
              불법 및 부정 이용 방지</p>
              <p style="margin-bottom: 20px;"></p>
              <p>제 4 조 (개인정보 보관 및 파기)<br>
              ① 이용자의 개인정보는 회원 탈퇴 시 즉시 삭제됩니다. 단, 관계 법령에 의해 보관할 필요가 있는 경우 해당 법령에서 정한 기간 동안 보관됩니다.<br>
              ② 개인정보 보관 기간이 경과한 경우, 해당 정보를 복구할 수 없는 방식으로 완전히 삭제합니다.</p>
              <p style="margin-bottom: 20px;"></p>
              <p>제 5 조 (개인정보 제공 및 공유)<br>
              ① 본 서비스는 이용자의 개인정보를 제3자에게 제공하지 않습니다. 다만, 아래의 경우는 예외로 합니다.<br>
              이용자가 사전에 동의한 경우<br>
              법령에 따라 수사기관의 요청이 있는 경우</p>
              <p style="margin-bottom: 20px;"></p>
              <p>제 6 조 (이용자의 권리 및 행사 방법)<br>
              ① 이용자는 언제든지 본인의 개인정보를 열람, 수정, 삭제 요청할 수 있습니다.<br>
              ② 회원 탈퇴를 원할 경우, 서비스 내 ‘회원 탈퇴’ 기능을 이용하면 개인정보가 즉시 삭제됩니다.</p>
              <p style="margin-bottom: 20px;"></p>
              <p>제 7 조 (서비스 이용 제한)<br>
              ① 이용자가 다음과 같은 행위를 할 경우, 서비스 이용이 제한될 수 있습니다.<br>
              타인의 개인정보를 도용하는 행위<br>
              불법적인 목적 또는 부정한 방법으로 서비스를 이용하는 행위<br>
              서비스의 정상적인 운영을 방해하는 행위</p>
              <p style="margin-bottom: 20px;"></p>
              <p>제 8 조 (책임 및 면책)<br>
              ① 본 서비스는 무료로 제공되며, 이용자가 본 서비스를 통해 얻은 정보에 대해 보증하지 않습니다.</p>
              <p style="margin-bottom: 20px;"></p>
              <p>제 9 조 (관할 법원)<br>
              본 서비스 이용과 관련하여 발생하는 분쟁에 대해 대한민국 법을 적용하며, 소송이 제기될 경우 관할 법원은 대한민국 내 정한 법원으로 합니다.</p>
              <p>부칙<br>
              본 약관은 2025년 3월 1일부터 시행됩니다.</p>
            </v-card-text>
            <v-card-actions>
              <v-btn color="red" @click="acceptTerms">동의</v-btn>
              <v-btn @click="closeTermsPopup">닫기</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>

        <!-- 에러 메시지들 -->
        <div v-if="!login_flag && !isEmailCollect" class="login-error-box">
          이메일이 올바르지 않습니다.
          <br />
          올바른 이메일을 입력하거나,
          <br />
          다른 간편로그인을 시도해 보세요.
        </div>
        <div v-if="!login_flag && isEmailCollect && !isPasswordCollect" class="login-error-box">
          비밀번호가 올바르지 않습니다.
          <br />
          올바른 비밀번호를 입력하거나,
          <br />
          다른 간편로그인을 시도해 보세요.
        </div>

        <!-- jobstick 한 줄 소개 -->
        <div class="introduction">
          <p>
            기업 분석과&nbsp;AI 모의면접&nbsp;|&nbsp;취업 준비는
            <b>JOBSTICK</b>에서
          </p>
        </div>

        <!-- 구분선 -->
        <v-divider class="mt-5 mb-7" :thickness="3"></v-divider>

        <!-- 카카오 로그인 버튼 -->
        <v-btn class="kakao-login-btn" @click="openTermsPopup"></v-btn>

        <!-- 구글, 네이버 로그인 버튼 -->
        <v-btn class="google-login-btn" @click="goToGoogleLogin"></v-btn>
        <v-btn class="naver-login-btn" @click="goToNaverLogin"></v-btn>

        <!-- 관리자 로그인 -->
        <v-btn class="admin-login-btn" @click="goToAdminLogin" block>
          관리자 로그인
        </v-btn>
      </div>
    </div>
  </v-container>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useKakaoAuthenticationStore } from "../../../kakaoAuthentication/stores/kakaoAuthenticationStore";

const router = useRouter();
const termsDialog = ref(false); // 약관 동의 팝업 상태
const login_flag = ref(true); // 로그인 상태
const isEmailCollect = ref(false); // 이메일 입력 상태
const isPasswordCollect = ref(false); // 비밀번호 입력 상태
const dialog = ref(false);

// 카카오 로그인
const kakaoAuthentication = useKakaoAuthenticationStore();
const goToKakaoLogin = async () => {
  localStorage.setItem("loginType", "KAKAO");
  await kakaoAuthentication.requestKakaoLoginToDjango();
};

// 개인정보 동의 팝업 열기
const openTermsPopup = () => {
  termsDialog.value = true;
};

// 팝업 닫기
const closeTermsPopup = () => {
  termsDialog.value = false;
};

// 약관 동의 후 카카오 로그인 진행
const acceptTerms = () => {
  alert("약관에 동의하셨습니다. 카카오 로그인 진행 중...");
  closeTermsPopup();
  goToKakaoLogin();
};

// 구글 로그인
const goToGoogleLogin = async () => {
  alert("구글 로그인 진행 중...");
  // 구글 로그인 처리 로직 추가
};

// 네이버 로그인
const goToNaverLogin = async () => {
  localStorage.setItem("loginType", "NAVER");
  await naverAuthentication.requestNaverLoginToDjango();
};

// 관리자 로그인
const goToAdminLogin = () => {
  router.push("/account/admin-code");
};
</script>

<style scoped>
.container {
  max-width: 100vw;
  height: 110vh;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  background-color: white;
  background: url("@/assets/images/fixed/login_bg6.jpg") no-repeat center center;
  background-size: contain;
}

.login_logo {
  height: 20vh;
  margin-bottom: -2vh;
  overflow: hidden;
  background-image: url("@/assets/images/fixed/logo1.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}

.login-wrapper {
  position: relative;
  z-index: 1;
  top: 70px;
  width: 50vh;
  height: 70vh;
  overflow: hidden;
  background-color: #877e7e00;
  border-radius: 9vh;
  padding: 0vh 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.login-error-box {
  background-color: rgb(255, 0, 0);
  color: white;
  padding: 10px;
  border-radius: 10px;
  margin-bottom: 1vh;
  font-size: 14px;
  text-align: center;
}

@media (max-width: 768px) {
  .v-btn {
    height: 45px;
  }
  .login_logo {
    height: 19vh;
  }
}

/* Kakao 로그인 버튼 설정 */
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

.google-login-btn {
  background-image: url("@/assets/images/fixed/btn_login_google.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  margin-bottom: 1vh;
  border-radius: 1.4vh;
  max-width: 600px; /* 가로 크기 변경 */
  height: 50px;
}

.naver-login-btn {
  background-image: url("@/assets/images/fixed/btn_login_naver.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #03c75a;
  border-radius: 1.4vh;
  max-width: 600px; /* 가로 크기 변경 */
  height: 50px;
}

.admin-login-btn {
  background-color: #4caf50;
  color: white;
  font-weight: bold;
  border-radius: 1.4vh;
  width: 100%;
  max-width: 300px; /* 관리자 로그인 버튼 크기 */
  height: 50px;
  cursor: pointer;
  margin-bottom: 1vh;
}

.v-dialog {
  text-align: center;
}

.v-card {
  border-radius: 10px;
  background-color: #87CEFA; /* 하늘색 */
}

.v-card-title {
  font-size: 18px;
  font-weight: bold;
}

.v-btn {
  width: 120px;
  height: 45px;
  margin: 10px;
}

@media (max-width: 768px) {
  .login-wrapper {
    width: 80%;
    padding: 30px;
  }
}
</style>
