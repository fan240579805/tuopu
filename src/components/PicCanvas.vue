<template>
  <div id="PicCanvas">
    <div class="left_menu" @click="clickc"><leftmenu /></div>
    <div id="topology-canvas" class="full" ref="fullWrap"></div>
  </div>
</template>

<script>
import { canvasRegister, Tools } from "../services/registerCanvas";

import { Topology, Options, registerNode, Line, Point } from "@topology/core";
import { HoverLayer } from "@topology/core/src/hoverLayer";

import leftmenu from "./leftmenu";

export default {
  name: "PicCanvas",
  data() {
    return {
      // 左侧工具栏
      tools: Tools,
      // 图形库
      canvas: {},
      // 图形库选项：https://www.yuque.com/alsmile/topology/canvas#hOupV
      canvasOptions: {},
      // 右侧属性栏数据
      props: {
        node: null,
        line: null,
        multi: false,
      },
      canvas: null,
    };
  },
  created() {
    // 注册图形库
    // canvasRegister();
  },

  mounted() {
    this.canvasOptions.on = this.onMessage;
    // 设置定时器以确保 Topology 一定可以获得父元素高度
    setTimeout(() => {
      console.log(this.$refs.fullWrap.offsetHeight);
      // topology-canvas dom元素作为画布对象
      this.canvasOptions = {};
      this.canvas = new Topology("topology-canvas");

      this.canvas.data.lineName = "curve";
      //图 type rect{x,y,width,height} id name text? image?
      let json = {
        pens: [
          {
            type: 1,
            id: "3eac9560",
            name: "polyline",
            controlPoints: [
              {
                x: 163.42857142857144,
                y: 166,
                direction: 1,
                anchorIndex: 1,
                id: "efe54cb",
              },
              { x: 163.42857142857144, y: 117 },
            ],
            from: {
              x: 163.42857142857144,
              y: 215,
              direction: 1,
              anchorIndex: 1,
              id: "efe54cb",
            },
            to: { x: 359.86248779296875, y: 117 },
            fromArrow: "",
            toArrow: "circle",
          },
          {
            type: 0,
            rect: {
              x: 88,
              y: 215,
              width: 132,
              height: 150,
            },
            id: "efe54cb",
            name: "flowData",
            text: "数据",
            image:
              "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEoAAAA/CAIAAADIXclUAAAAuklEQVRoBe3SsRHAMAzDQMeDaP8xc9kAJaKDaxYU38/MnL3v7j3tu6zz/uybXnraBfqcWhpQLD0wkjaSnpYGFEsPjKSNpKelAcXSAyNpI+lpaUCx9MBI2kh6WhpQLD0wkjaSnpYGFEsPjKSNpKelAcXSAyNpI+lpaUCx9MBI2kh6WhpQLD0wkjaSnpYGFEsPjKSNpKelAcXSAyNpI+lpaUCx9MBI2kh6WhpQLD0wkjaSnpYGFEsPjKSNvASVANib1su2AAAAAElFTkSuQmCC",
          },
          // id为node id：标记与哪个node关联。与anchorIndex 一起表示关联了哪个节点的哪个锚点
          // 线 type id name from{x,y,anchorIndex(绑定图形),
          // id（与哪个节点关联）} to{x,y,anchorIndex(绑定图形),id（与哪个节点）}
          // fromArrow: "",toArrow: "circle",箭头类型

          {
            type: 1,
            id: "82e7e80",
            name: "line",
            lineWidth: 2,
            from: {
              x: 210.57142857142856,
              y: 290,
              anchorIndex: 2,
              id: "efe54cb",
            },
            to: { x: 456.86248779296875, y: 336 },
            fromArrow: "",
            toArrow: "circle",
          },
        ],
      };
      this.canvas.open(json);//
      this.canvas.data.toArrow = "";
    }, 200);
  },
  computed: {},
  methods: {
    // 点击将json数据渲染成画板上的 图形
    async initCanvas() {},

    onMessage() {},

    clickc() {
      console.log(this.canvas.canvas.data);
      // 配置
      let lineOptions = {
        name: "polyline",
        from: new Point(163.42857142857144, 215, 1, 1, "efe54cb"),
        to: new Point(359.86248779296875, 117),
        controlPoints: [],
        fromArrow:"circleSolid",
        toArrow:"circleSolid",
      };
      // 连线对象
      const l = new Line(lineOptions);
      // new Point(x, y, direction(根据它计算控制点), anchorIndex(它表示关联某个锚点), "efe54cb"(它表示关联哪个节点));
      // let start = new Point(163.42857142857144, 215, 1, 1, "efe54cb");//起点
      // let end = new Point(359.86248779296875, 117);//终点

      // l.setFrom(start,"circleSolid");
      // l.setTo(end, "circleSolid");

      l.calcControlPoints();// 计算默认 控制点
      // 获取canvas对象的上下文 进行绘图 使新增加的线 永久保留

      l.draw(this.$refs.fullWrap.getElementsByTagName("canvas")[0].getContext("2d"));
      this.canvas.addLine(l, true);// 添加到 pens画笔中

    },
  },
  components: {
    leftmenu,
  },
};
</script>

<style lang="less" scoped>
#PicCanvas {
  height: calc(100vh - 49px);
  display: flex;
  .left_menu {
    height: calc(100vh - 49px);
    flex: 1;
  }
  .full {
    height: calc(100vh - 49px);

    flex: 7;
    background-color: #eee;
  }
}
</style>
