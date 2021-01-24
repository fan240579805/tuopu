<template>
  <div id="nav">
    <el-menu mode="horizontal" @select="onMenu" background-color="#f8f8f8">
      <el-submenu index="file">
        <template slot="title">文件</template>
        <el-menu-item index="new">新建文件</el-menu-item>
        <el-menu-item index="open">打开本地文件（新建）</el-menu-item>
        <el-menu-item index="replace">导入本地文件...</el-menu-item>
        <el-menu-item class="separator"></el-menu-item>
        <el-menu-item index="save">保存到本地</el-menu-item>
        <el-menu-item index="savePng">下载为PNG</el-menu-item>
        <el-menu-item index="saveSvg">下载为SVG</el-menu-item>
      </el-submenu>
    </el-menu>
    <div class="nav_tools">
      <div class="nav_tools_Wrap">
        <div class="review" @click="activeClick" :class="{ active: isActived }">预览</div>
        <div class="view">视图：100 %</div>
        <div class="lock" @click="LockactiveClick" :class="{ active: lockisActived }">
          锁定
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Pen, PenType,Node } from "@topology/core";

export default {
  name: "headNav",
  data() {
    return {
      isActived: false,
      lockisActived: false,
    };
  },
  methods: {
    activeClick() {
      this.isActived = !this.isActived;
      this.lockisActived = false;

      // 获得所有的画笔pen
      let pens = window.topology.data.pens;
      let json = { pens }; // 存为json对象即可 让canvas.open 打开

      console.log(JSON.stringify(json));
      console.log(pens);


    },
    LockactiveClick() {
      this.lockisActived = !this.lockisActived;
      this.isActived = false;
      /**
       * window.topology.lock(1)
       *  0 - 未锁定，可任意编辑。

          1 - 全部锁定，不能做任何编辑，允许选中，并高亮

          2 - 无法做任何操作，只能响应space事件
       */
      if (this.lockisActived) {
        // window.topology.canvas.data.locked = 1;
        window.topology.lock(1);
      } else {
        window.topology.lock(0);
      }
      console.log(window.topology.canvas.data.locked);
    },
    onMenu() {},
  },
  computed: {
    scale() {
      return Math.floor(window.topology.canvas.data.scale * 100);
    },
  },
};
</script>

<style lang="less">
#nav {
  height: 49px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #eee;
  .el-menu {
    .el-submenu__title {
      height: 49px;
      line-height: 49px;
    }
    .el-menu-item {
      height: 49px;
      line-height: 49px;
    }
  }
  .nav_tools {
    .nav_tools_Wrap {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #f5f5f5;
      .review {
        line-height: 49px;
        border: 1px solid #eee;
        padding: 0 20px;
        cursor: pointer;
      }
      .view {
        line-height: 49px;
        border: 1px solid #eee;
        padding: 0 20px;
      }
      .lock {
        line-height: 49px;
        border: 1px solid #eee;
        padding: 0 20px;
        cursor: pointer;
      }
      .active {
        color: blue;
      }
    }
  }
}
</style>
