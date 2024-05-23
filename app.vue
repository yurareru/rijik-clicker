<script setup lang="ts">
const storage = useLocalStorage<number>('counter', 0)
const counter = ref(storage.value)
const click = ref(0)

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
  '/jawir10.webp',
]

const clickComp = ref(0)
const isMeasuring = ref(false)
function measureCPS() {
  if (!isMeasuring.value) {
    clickComp.value = 0
    isMeasuring.value = true
    click.value = 0
    updateCPS()
  }
  clickComp.value++
}

function updateCPS() {
  clickComp.value++
  if (isMeasuring.value) {
    setTimeout(() => {
      click.value = clickComp.value
      updateCPS()
      clickComp.value = 0
    }, 1000)
  }
}

import sfx from '~/assets/click.mp3'
const { play } = useSound(sfx, { interrupt: true })
const updateClick = (e: MouseEvent) => {
  e.preventDefault()
  play()
  jawirArr.value.push(jawirImg[Math.floor(Math.random() * jawirImg.length)])
  counter.value++
  storage.value = counter.value
  measureCPS()
  setTimeout(() => {
    jawirArr.value.shift()
  }, 2000)
}
useEventListener(document, 'click', (e) => updateClick(e))
useEventListener(document, 'contextmenu', (e) => updateClick(e))
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
