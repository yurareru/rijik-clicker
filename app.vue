<script setup lang="ts">
const storage = useLocalStorage<number>('counter', 0)
const counter = ref(storage.value)
const click = ref(0)

const { pressed } = useMousePressed()
const lastClick = ref(Date.now())

const jawirArr = ref<string[]>([])
const jawirImg = [
  '/jawir1.webp',
  '/jawir2.webp',
  '/jawir3.webp',
  '/jawir4.webp',
  '/jawir5.webp',
  '/jawir6.webp',
  '/jawir7.webp',
  '/jawir8.webp',
  '/jawir9.webp',
]

import sfx from '~/assets/click.mp3'
const { play } = useSound(sfx, { interrupt: true })
watchThrottled(pressed, () => {
  if (pressed.value) {
    play()
    jawirArr.value.push(jawirImg[Math.floor(Math.random() * jawirImg.length)])
    counter.value++
    storage.value = counter.value
    const now = Date.now()
    const diff = now - lastClick.value
    lastClick.value = now
    click.value = Math.round(1000 / diff)
    setTimeout(() => {
      jawirArr.value.shift()
    }, 2000)
  }
})
</script>

<template>
  <div class="bg-[#313338] h-screen">
    <div class="top-32 absolute left-1/2 -translate-x-1/2">
      <div class="text-white select-none text-center space-y-2">
        <div class="text-6xl">{{ counter }}</div>
        <div class="text-3xl">CPS: {{ click }}</div>
      </div>
    </div>
    <Jawir v-for="jawir in jawirArr" :key="jawir" :jawir />
  </div>
</template>
