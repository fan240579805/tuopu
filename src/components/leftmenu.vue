<template>
  <div id="leftMenu">
    <div class="tools">
      <div v-for="(item, index) in tools" :key="index">
        <div class="title">{{ item.group }}</div>
        <div class="buttons">
          <a
            v-for="(btn, i) in item.children"
            :key="i"
            :title="btn.name"
            :draggable="btn.data"
            @dragstart="onDrag($event, btn)"
          >
            <i :class="`iconfont ${btn.icon}`"></i>
          </a>
        </div>
      </div>
    </div>
    <img src="" alt="">
  </div>
</template>

<script>
import { canvasRegister, Tools } from "../services/registerCanvas";

export default {
  name: "leftMenu",
  data() {
    return {
      tools: [],// 公路蓝
    };
  },
  created() {
    // 注册图形库
    canvasRegister();
    // 左侧菜单栏 图形数组
    this.tools = Tools;
  },
  mounted() {},
  methods: {
    // 拖拽左侧列表事件
    onDrag(event, node) {
      // 把数据传给 canvas 使其渲染出来
      event.dataTransfer.setData("Text", JSON.stringify(node.data));
    },
  },
};
</script>
