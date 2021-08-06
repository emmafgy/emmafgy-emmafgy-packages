export const Acolumns = [{
		dataIndex: 'name',
		key: 'name',
		slots: {
			title: 'customTitle'
		},
		scopedSlots: {
			customRender: 'name'
		},
	},
	{
		title: 'Age',
		dataIndex: 'age',
		key: 'age',
	},
	{
		title: 'Address',
		dataIndex: 'address',
		key: 'address',
	},
	{
		title: 'Tags',
		key: 'tags',
		dataIndex: 'tags',
		scopedSlots: {
			customRender: 'tags'
		},
	},
	{
		title: 'Action',
		key: 'action',
		scopedSlots: {
			customRender: 'action'
		},
	},
];


export const Adata = [{
		key: '1',
		name: 'John Brown',
		age: 32,
		address: 'New York No. 1 Lake Park',
		tags: ['nice', 'developer'],
	},
	{
		key: '2',
		name: 'Jim Green',
		age: 42,
		address: 'London No. 1 Lake Park',
		tags: ['loser'],
	},
	{
		key: '3',
		name: 'Joe Black',
		age: 32,
		address: 'Sidney No. 1 Lake Park',
		tags: ['cool', 'teacher'],
	},
];

export const columns = [
	// {
	//    key: 'order',
	//    title: "序号",
	//    width: "50",
	//    fixed: "left",
	//    customRowRender: 'order',
	//    // customTitleRender: 'customTitle'
	//  },
	{
		dataIndex: 'employeeId',
		key: 'employeeId',
		title: "工号",
		// width: "400",
		// fixed: "left",
		// sort: "desc",
		// customRowRender: 'name',
		// customTitleRender: 'customTitle'
	},
	{
		// sort: "asc",
		dataIndex: 'base2',
		key: 'base2',
		title: "基本工资2",
		// width: "200",
		// fixed: "left",
		// customTitleRender: 'customTitle'
	},
	{
		// sort: "desc",
		dataIndex: 'base3',
		key: 'base3',
		title: "基本工资3",
		// customTitleRender: 'customTitle',
		// width: "200"
	},
	{
		// sort: "unset",
		dataIndex: 'base4',
		key: 'base4',
		title: "基本工资4",
		// customTitleRender: 'customTitle',
		// width: "200"
	},
	{
		dataIndex: 'base5',
		key: 'base5',
		title: "基本工资5",
		// customTitleRender: 'customTitle',
		// width: "200"
	}, {
		dataIndex: "sxWage",
		key: "sxWage",
		title: "实习工资",
		// customTitleRender: 'customTitle',
		// width: "200"
	}, {
		dataIndex: "wageTotal",
		key: "wageTotal",
		title: "总工资",
		// customTitleRender: 'customTitle',
		// width: "200",
		// fixed: "right",
		// sort: ''
	},
	// {
	//   key: 'op',
	//   customRowRender: 'action',
	//   customTitleRender: 'title-op',
	//   width: "200",
	//   fixed:"right"
	// }
];


export const columsMap = {
	key: 'employeeId|base2|base3|base4|base5|sxWage|wageTotal',
	title: "工号|基本工资2|基本工资3|基本工资4|基本工5|实习工资|总工资11",
	width: "120|200|200|200|200|200|---",
	// fixed: "--|--|--|--|--|--|--|right",
	// customRowRender: "name|---|---|---|---|--|--|--|",
	// customTitleRender: "",
	// sort: "unset|asc|--|desc|--|--|--"
};


export const columsMapOrder = {
	key: 'employeeId|base2|base3|base4|base5|sxWage|wageTotal',
	title: "工号|基本工资2|基本工资3|基本工资4|基本工5|实习工资|总工资11",
	width: "120|200|200|200|200|200|---",
	// fixed: "--|--|--|--|--|--|--|right",
	// customRowRender: "name|---|---|---|---|--|--|--|",
	// customTitleRender: "",
	sort: "unset|asc|desc|--|--|--|--"
};


export const columsMapRowRender = {
	key: 'order|employeeId|base2|base3|base4|base5|sxWage|wageTotal|op',
	title: "序号|工号|基本工资2|基本工资3|基本工资4|基本工5|实习工资|总工资11|操作",
	width: "50|120|200|200|200|200|200|---|200",
	fixed: "left|left|--|--|--|--|--|--|right",
	customRowRender: "order|employeeId|---|---|---|---|--|--|op",
	// customTitleRender: "",
	// sort: "unset|asc|--|desc|--|--|--"
};

export const columsMapTitleRender = {
	key: 'order|employeeId|base2|base3|base4|base5|sxWage|wageTotal|op',
	title: "序号|工号|基本工资2|基本工资3|基本工资4|基本工5|实习工资|总工资11|操作",
	width: "50|120|200|200|200|200|200|---|200",
	fixed: "left|left|--|--|--|--|--|--|right",
	customRowRender: "order|employeeId|--|--|--|--|--|--|op",
	customTitleRender: "--|--|--|--|--|--|--|--|opTitle",
	// sort: "unset|asc|--|desc|--|--|--"
};

export const rowspanConfig = [
	[{
			key: "wageTotal",
			title: '工资构成',
			colspan: 5,
		},
		{
			key: "inteWage",
			title: '试用期工资',
			colspan: 2,
		},
		{
			key: "total",
			title: '当月工资总额',
			rowspan: 2
		},
		{
			key: "op",
			title: '操作',
			customTitleRender: 'title-op',
			rowspan: 2
		}
	],
	[{
			key: "base1",
			title: '基本工资1'
		},
		{
			key: "base2",
			title: '基本工资2'
		},
		{
			key: "base3",
			title: '基本工资3'
		},
		{
			key: "base4",
			title: '基本工资4'
		},
		{
			key: "base5",
			title: '基本工资5'
		},
		{
			key: "base6",
			title: '实习期天数'
		},
		{
			key: "base7",
			title: '实习期工资'
		}
	]
];

export const dataSource = [{
		base1: "sx001",
		base2: 1000,
		base3: 1000,
		base4: 1000,
		base5: 1000,
		sxDays: 5,
		sxWage: 500,
		wageTotal: 500
	},
	{
		base1: "sx002",
		base2: 1000,
		base3: 300,
		base4: 1000,
		base5: 1000,
		sxDays: 5,
		sxWage: 500,
		wageTotal: 500
	},
	{
		base1: "sx003",
		base2: 1000,
		base3: 1000,
		base4: 100,
		base5: 1000,
		sxDays: 5,
		sxWage: 500,
		wageTotal: 500
	},
	{
		base1: "sx004",
		base2: 1000,
		base3: 1000,
		base4: 100,
		base5: 1000,
		sxDays: 5,
		sxWage: 500,
		wageTotal: 500
	},
	{
		base1: "sx005",
		base2: "10010001000100010001000",
		base3: 1000,
		base4: 100,
		base5: 1000,
		sxDays: 5,
		sxWage: 500,
		wageTotal: 500
	},
	{
		base1: "sx006",
		base2: 1000,
		base3: 1000,
		base4: 100,
		base5: 1000,
		sxDays: 5,
		sxWage: 500,
		wageTotal: 500
	},
	{
		base1: "sx007",
		base2: 1000,
		base3: 1000,
		base4: 100,
		base5: 1000,
		sxDays: 5,
		sxWage: 500,
		wageTotal: 500
	},
	{
		base1: "sx008",
		base2: 1000,
		base3: 1000,
		base4: 100,
		base5: 1000,
		sxDays: 5,
		sxWage: 500,
		wageTotal: 500
	},
	{
		base1: "sx009",
		base2: 1000,
		base3: 1000,
		base4: 100,
		base5: 1000,
		sxDays: 5,
		sxWage: 500,
		wageTotal: 500
	},
	{
		base1: "sx010",
		base2: 1000,
		base3: 1000,
		base4: 100,
		base5: 1000,
		sxDays: 5,
		sxWage: 500,
		wageTotal: 500
	}
];



export const rowspanColumns = [{
		title: 'Name',
		dataIndex: 'name',
		key: 'name',
		width: 100,
		fixed: 'left',
		filters: [{
				text: 'Joe',
				value: 'Joe',
			},
			{
				text: 'John',
				value: 'John',
			},
		],
		onFilter: (value, record) => record.name.indexOf(value) === 0,
	},
	{
		title: 'Other',
		// fixed:"left",
		children: [{
				title: 'Age',
				dataIndex: 'age',
				key: 'age',
				width: 200,
				sorter: (a, b) => a.age - b.age,
			},
			{
				title: 'Address',
				// fixed: "left",
				children: [{
						title: 'Street',
						dataIndex: 'street',
						key: 'street',
						width: 200,
					},
					{
						title: 'Block',
						children: [{
								title: 'Building',
								dataIndex: 'building',
								key: 'building',
								width: 100,
							},
							{
								title: 'Door No.',
								dataIndex: 'number',
								key: 'number',
								width: 100,
							},
						],
					},
				],
			},
		],
	},
	{
		title: 'Company',
		children: [{
				title: 'Company Address',
				dataIndex: 'companyAddress',
				key: 'companyAddress',
				width: 200,
			},
			{
				title: 'Company Name',
				dataIndex: 'companyName',
				key: 'companyName',
			},
		],
	},
	{
		title: 'Gender',
		dataIndex: 'gender',
		key: 'gender',
		width: 80,
		fixed: 'right',
	},
];


export const menuList = [{
		key: "1",
		label: "menu one",
		icon: "icon-category",
		fullRoutePath: "/",
		children: [{
				key: "12",
				label: "menu one",
				// icon: "icon-category",
				// customIconClass:"iconfont icon-menu",
			},
			{
				key: "13",
				label: "menu two",
				// icon: "icon-category",
				// customIconClass:"iconfont icon-menu",
			},
		]
		// customIconClass:"iconfont icon-menu",
	},
	{
		key: "2",
		label: "menu two",
		icon: "icon-category",
		// customIconClass:"iconfont icon-menu",
	},
	{
		key: "4",
		label: "menu three",
		icon: "icon-category",
		// showSubMenu: true,
		children: [{
				key: "5",
				label: "menu one",
				// icon: "icon-category",
				// customIconClass:"iconfont icon-menu",
			},
			{
				key: "6",
				label: "menu two",
				// icon: "icon-category",
				// customIconClass:"iconfont icon-menu",
			},
			{
				key: "9",
				label: "menu nine",
				icon: "icon-category",
				children: [{
						key: "10",
						label: "menu one",
						// icon: "icon-category",
						// customIconClass:"iconfont icon-menu",
					},
					{
						key: "11",
						label: "menu two",
						// icon: "icon-category",
						// customIconClass:"iconfont icon-menu",
					},
				]
			}
		]
	},
	{
		key: "7",
		label: "menu two",
		icon: "icon-category",
		// customIconClass:"iconfont icon-menu",
	},
	{
		key: "8",
		label: "menu twomenu twomenu",
		icon: "icon-category",
		children: [{
				key: "18",
				label: "menu one",
				// icon: "icon-category",
				// customIconClass:"iconfont icon-menu",
			},
			{
				key: "19",
				label: "menu two",
				// icon: "icon-category",
				// customIconClass:"iconfont icon-menu",
			},
		]
		// customIconClass:"iconfont icon-menu",
	},
]
