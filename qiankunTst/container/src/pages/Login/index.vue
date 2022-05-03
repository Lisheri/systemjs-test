<script>
import actions from '@/shared/actions'
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
export default {
  setup() {
    const router = useRouter();
    // 需传入生命周期执行函数
    onMounted(() => {
      console.info('挂载')
      actions.onGlobalStateChange((state, prevState) => {
        // * state: 变更后的状态; prevState: 变更前的状态
        console.info('容器观察者：token 改变前的值为 ', prevState.token)
        console.info('容器观察者：登录状态发生改变，改变后的 token 的值为 ', state.token)
      })
    })

    const handleLogin = () => {
      let token = 12345677654321n
      return () => {
        token = token + 1n
        actions.setGlobalState({ token: `${token.toString()}abc` })
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
