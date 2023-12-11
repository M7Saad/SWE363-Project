<template>
  <h1>AI bot</h1>

  <deep-chat
    style="
      border-radius: 10px;
      width: 96vw;
      height: calc(100vh - 70px);
      padding-top: 10px;
    "
    :directConnection="{
      openAI: {
        key: ':(',
        chat: { system_prompt: 'Assist me with anything you can' },
      },
    }"
  ></deep-chat>
</template>

<script>
//import "deep-chat";

export default {
  data() {
    return {
      initialMessages: [
        { role: "user", text: "Hey, how are you today?" },
        { role: "ai", text: "I am doing very well!" },
      ],
    };
  },
};
</script>

<style scoped></style>
