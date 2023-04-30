<template>
    <div>
        <h1>{{ borough }}</h1>
        <h2>{{ property }} - {{ location }}</h2>
        <h4>{{ species }}</h4>
    </div>
</template>

<script>
export default {
    data() {
        return {}
    },
    props: {
        borough: String,
        property: String,
        location: String,
        species: String
    }
}
</script>

<style scoped>
    div {
        font-family: "Kalam", cursive;
        height: fit-content;
  display: flex;
  flex-direction: column;
  padding: 1rem 1rem 2rem;
  background: #f8f3e8;
  box-shadow: 0 0 40px rgba(0, 0, 0, 0.2), 0 0 40px rgba(0, 0, 0, 0.2);
  border-radius: 3px;
  margin-bottom: 30px;
  width: fit-content;
  align-items: center;
    }
</style>