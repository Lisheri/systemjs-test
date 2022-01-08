<script>
export default {
  name: "App",
  methods: {
    handleGo(path) {
      this.$router.push(path);
    },
  },
  render() {
    const { handleGo } = this;
    return (
      <div id="app">
        <img alt="Vue logo" src={require("./assets/logo.png")} />
        <div>
          <button onClick={handleGo.bind(this, "/foo")}>狗东西Foo</button>
          <button onClick={handleGo.bind(this, "/bar")}>狗东西Bar</button>
        </div>
        <router-view></router-view>
      </div>
    );
  },
};
</script>

<style></style>
