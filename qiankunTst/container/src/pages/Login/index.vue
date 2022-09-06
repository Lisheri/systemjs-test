<script>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import shared  from "@/shared";
export default {
  setup() {
    const router = useRouter();
    // 需传入生命周期执行函数
    onMounted(() => {
      console.info('挂载')
    })

    const handleLogin = () => {
      let token = 12345677654321n
      return () => {
        // token = token + 1n
        shared.setToken(`${token.toString()}abc`)
        router.push({ path: '/Home' })
      }
    }

    return () => (
      <div class="home">
        <h1>容器主页</h1>
        <a-button type="primary" onClick={handleLogin()}>
          登录
        </a-button>
      </div>
    )
  }
}
</script>
<style lang="scss" scoped></style>
