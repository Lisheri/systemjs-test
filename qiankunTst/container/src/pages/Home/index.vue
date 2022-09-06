<script>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
export default {
  setup() {
    const router = useRouter();
    // 需传入生命周期执行函数
    onMounted(() => {
      console.info('挂载')
    })
    const toLogin = () => {
      router.push({ path: '/login' })
    }
    return () => <div class="home">
      <div>基座</div>
      <a-button onClick={toLogin} type="primary">去登录</a-button>
    </div>
  }
}
</script>
<style lang="scss" scoped></style>
