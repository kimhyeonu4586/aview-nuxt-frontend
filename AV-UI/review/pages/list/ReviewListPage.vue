<template>
  <v-container>
    <v-row class="justify-space-between align-center mb-6">
      <h2>📋 리뷰 리스트</h2>
      <v-btn color="primary" @click="goToRegister">✍ 리뷰 작성하기</v-btn>
    </v-row>

    <v-row>
      <v-col
        v-for="review in store.reviewList"
        :key="review.id"
        cols="12"
        sm="6"
        md="4"
      >
        <v-card>
          <!-- 이미지가 있을 경우만 출력 -->
          <v-img
            v-if="review.imageUrl"
            :src="review.imageUrl"
            height="200px"
            cover
          />
          <v-card-title class="text-h6">{{ review.title }}</v-card-title>
          <v-card-subtitle class="grey--text text--darken-1">
            작성자: {{ review.nickname }} / {{ review.createDate }}
          </v-card-subtitle>
          <v-card-text>{{ review.content }}</v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { onMounted } from 'vue'
import { useReviewStore } from '~/review/stores/reviewStore'
import { useRouter } from 'vue-router'

const store = useReviewStore()
const router = useRouter()

const goToRegister = () => {
  // 프롬트 게이지 리스트 페이지와 연결합니다.
  router.push('/review/register')
}

onMounted(() => {
  // 시작 시 리뷰 목록 건설
  store.fetchReviews()
})
</script>
