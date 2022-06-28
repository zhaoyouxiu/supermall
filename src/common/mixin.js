import {debounce} from './utils'
import BackTop from "../components/content/backTop/BackTop.vue";

export const itemListenerMixin = {
  mounted() {
    let newrefresh = debounce(this.$refs.scroll.refresh, 100)
    this.itemimglistene = () => {
      newrefresh()
    }
    this.$bus.$on('itemimageload', this.itemimglistene)
  },
}

export const backTopMixin={
  components:{
    BackTop
  },
  data() {
    return {
      isActive: false,
    }
  },
  methods: {
    backclick() {
      this.$refs.scroll.scrollTo(0, 0,300);
    },
  },
}