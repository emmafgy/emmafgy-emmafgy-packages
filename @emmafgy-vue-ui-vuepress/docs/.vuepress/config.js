module.exports = {
	title: '@emmafgy',
	description: '@emmafgy npm package',
	markdown: {
		lineNumbers: true
	},
	base: '/',
	themeConfig: {
		// displayAllHeaders: true, // 默认值：false
		smoothScroll: true,
		nav: [ // 导航栏配置
			{
				text: 'github',
				link: 'https://gitee.com/fuguiyong/vue-simple-component.git'
			}
		],
		sidebar: [{
				title: 'vue ui', // 必要的
				// path: '/foo/', // 可选的, 标题的跳转链接，应为绝对路径且必须存在
				// collapsable: true, // 可选的, 默认值是 true,
				sidebarDepth: 1, // 可选的, 默认值是 1
				children: [
					['/_vue/', "@emmafgy of vue"],
					['/_vue/icon/', "Icon图标"],
					['/_vue/table/', "Table表格"],
					['/_vue/message/', "Message消息提示"],
					['/_vue/alert/', "Alert消息提示"],
					['/_vue/menu/', "Menu菜单"],
					['/_vue/button/', "Button按钮"],
					['/_vue/modal/', "Modal模态框"],
					['/_vue/checkbox/', "Checkbox多选"]
				]
			}, {
				title: 'jsontoexcel', // 必要的
				path: '/_jsontoexcel/', // 可选的, 标题的跳转链接，应为绝对路径且必须存在
				// collapsable: false, // 可选的, 默认值是 true,
				// sidebarDepth: 1, // 可选的, 默认值是 1
				// children: [
				// 	'/_jsontoexcel/'
				// ]
			},
			{
				title: 'util', // 必要的
				path: '/_util/', // 可选的, 标题的跳转链接，应为绝对路径且必须存在
				// collapsable: false, // 可选的, 默认值是 true,
				// sidebarDepth: 1, // 可选的, 默认值是 1
				// children: [
				// 	'/_util/'
				// ]
			},
			{
				title: 'base64', // 必要的
				path: '/_base64/', // 可选的, 标题的跳转链接，应为绝对路径且必须存在
				// collapsable: false, // 可选的, 默认值是 true,
				// sidebarDepth: 1, // 可选的, 默认值是 1
				// children: [
				// 	'/_base64/'
				// ]
			}
		], // 侧边栏配置
		// sidebarDepth: 2, // 侧边栏显示2级
	},
	configureWebpack: {
		resolve: {
			alias: {
				// '@alias': 'path/to/some/dir'
			}
		}
	}
}
