<script lang="ts">
import { ref, defineComponent } from 'vue'
export default defineComponent({
  name: 'TheCounter',
  setup() {
    const count = ref<number>(0)
    const increment = () => {
      count.value++
    }
    const decrement = () => {
      if (count.value != 0) count.value--
    }
    return {
      count,
      increment,
      decrement
    }
  }
})
</script>

<template>
  <div class="counter">
    <button @click="decrement" class="counter-button">-</button>
    <span class="counter-value">{{ count }}</span>
    <button @click="increment" class="counter-button">+</button>
  </div>
</template>

<style scoped>
.counter {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
}

.counter-button {
  background-color: transparent;
  border: 3px solid #333;
  color: #e2e2e2;
  font-size: 1.2rem;
  padding: 0.5rem 1rem;
  border-radius: 999px;
  cursor: pointer;
  transition: transform 0.3s, color 0.3s;
}

.counter-button:hover {
  background-color: #41b883;
}

.counter-value {
  font-size: 2rem;
  margin: 0 1rem;
  color: #34495e;
}
</style>
