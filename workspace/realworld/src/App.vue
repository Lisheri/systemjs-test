<script>
// import Parcel from "single-spa-vue/dist/esm/parcel";
// import { mountRootParcel } from 'single-spa';
export default {
  name: "App",
  components: {
    // Parcel
  },
  data() {
    return {
      toolsModuleSubjection: null
    }
  },
  methods: {
    handleGo(path) {
      this.$router.push(path);
    },
    async handleClick() {
      const toolsModule = await window.System.import('@study/tools');
      toolsModule.sayHello('@study/realworld')
    }
  },
  async mounted() {
    // 组件挂载时, 响应订阅
    const toolsModule = await window.System.import('@study/tools');
    this.toolsModuleSubjection = toolsModule.sharedSubject.subscribe(console.log);
  },
  destroyed() {
    // 取消订阅
    this.toolsModuleSubjection.unsubscribe();
  },
  render() {
    const { handleGo, handleClick } = this;
    return (
      <div id="app">
        {
          // <Parcel config={window.System.import("@study/navbar")} mountParcel={mountRootParcel} />
        }
        <img alt="Vue logo" src={require("./assets/logo.png")} />
        <div>
          <button onClick={handleGo.bind(this, "/foo")}>狗东西Foo</button>
          <button onClick={handleGo.bind(this, "/bar")}>狗东西Bar</button>
          <button onClick={handleClick}>button</button>
        </div>
        <router-view></router-view>
      </div>
    );
  },
};
</script>

<style></style>
