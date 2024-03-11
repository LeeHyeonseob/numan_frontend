<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-title>
            게시판
          </v-card-title>
          <v-card-text>
            <v-simple-table>
              <template v-slot:default>
                <thead>
                <tr>
                  <th class="text-left">번호</th>
                  <th class="text-left">작성자</th>
                  <th class="text-left">제목</th>
                  <th class="text-left">등록일</th>
                  <th class="text-left">리워드 가격</th>
                  <th class="text-left">조회수</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="(idea, index) in ideas" :key="index">
                  <td>{{ index + 1 }}</td>
                  <td>{{ idea.author }}</td>
                  <td>{{ idea.title }}</td>
                  <td>{{ idea.creationDate}}</td>
                  <td>{{ idea.rewardPrice }}</td>
                  <td>{{ idea.viewCount }}</td>
                </tr>
                </tbody>
              </template>
            </v-simple-table>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'BoardView',
  data() {
    return {
      // 초기 데이터 예시입니다. 실제 데이터는 API 호출을 통해 가져와야 합니다.
      ideas: [
        {
          author: '사용자1',
          title: '아이디어 제목1',
          creationDate: '2021-01-01',
          rewardPrice: 100,
          viewCount: 150,
        },
        // 더 많은 아이디어...
      ],
    };
  },
  // created() 등의 라이프사이클 훅을 사용하여 서버로부터 게시글 데이터를 가져올 수 있습니다.
};
</script>
