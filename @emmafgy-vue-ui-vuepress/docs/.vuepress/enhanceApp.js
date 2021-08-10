// import EFUI from "@emmafgy/vue-components";
import "@emmafgy/vue-components/lib/theme/index.css";
// import "@emmafgy/vue-components/src/theme/src/index.scss";
import "./common/common.scss";
import "./common/icon.scss";
import "./common/table.scss";
import "./common/index.css";

// 使用异步函数也是可以的
export default ({
	Vue, // VuePress 正在使用的 Vue 构造函数
	options, // 附加到根实例的一些选项
	router, // 当前应用的路由实例
	siteData, // 站点元数据
	isServer // 当前应用配置是处于 服务端渲染 或 客户端
}) => {
	// ...做一些其他的应用级别的优化

	// Vue.use(EFUI);
	
	// 解决build问题
	Vue.mixin({
		mounted() {
			import('@emmafgy/vue-components').then(function(m) {
				Vue.use(m.default)
			})
		},
	})


}
