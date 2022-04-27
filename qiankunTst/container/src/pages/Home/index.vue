<script>
import { onMounted } from "vue";
export default {
    setup() {
        // 需传入生命周期执行函数
        onMounted(() => {
            console.info("挂载");
        });
        return () => (
          <div class="home">基座主页</div>
        )
    },
};
</script>
<style lang="scss" scoped></style>
