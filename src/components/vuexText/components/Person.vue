<template>
  <div>
    <h1>人员列表</h1>
    <h3 style="color: red">Count组件求和为：{{ sum }}</h3>
    <h3>列表中第一个人的名字是：{{ firstPersonName }}</h3>
    <input type="text" placeholder="请输入名字" v-model="name" />
    <button @click="add">添加</button>
    <button @click="addWang">添加一个姓王的人</button>
    <button @click="addPersonServer">添加一个人，名字随机</button>
    <ul>
      <li v-for="p in personList" :key="p.id">{{ p.name }}</li>
    </ul>
  </div>
</template>

<script>
import { nanoid } from "nanoid";

export default {
  name: "Person",
  data() {
    return {
      name: "",
    };
  },
  computed: {
    personList() {
      // return this.$store.state.personList;
      // 在之前的基础上，要指定名称(模块化)
      return this.$store.state.personAbout.personList;
    },
    sum() {
      // return this.$store.state.sum;
      // 在之前的基础上，要指定名称(模块化)
      return this.$store.state.countAbout.sum;
    },
    // 在之前的基础上，要指定名称
    firstPersonName() {
      return this.$store.getters["personAbout/firstPersonName"];
    },
  },
  methods: {
    add() {
      const personObj = { id: nanoid(), name: this.name };
      this.$store.commit("ADD_PERSON", personObj);
      this.name = "";
    },
    addWang() {
      const personObj = { id: nanoid(), name: this.name };
      // 在之前的基础上，要指定名称
      this.$store.dispatch("personAbout/addPersonWang", personObj);
      this.name = "";
    },
    addPersonServer() {
      // 在之前的基础上，要指定名称
      this.$store.dispatch("personAbout/addPersonServer");
    },
  },
};
</script>
