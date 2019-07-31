module.exports = {
    base: '/dataStructure/',
    title: '数据结构学习笔记',
    description: '登高必自卑，行远必自迩',
    head: [
        ['link', { rel: 'icon', href: `/favicon.ico` }],
    ],
    markdown: {
        //显示行号
        // lineNumbers: true
    },
    themeConfig: {
        nav:[
          { text: 'java学习笔记', link: 'https://hzjanger.github.io/SpringInActionStudy/'}, // 内部链接 以docs为根目录
          // { text: '博客', link: 'http://obkoro1.com/' }, // 外部链接
          // 下拉列表
          {
            text: 'GitHub',
            items: [
              { text: 'GitHub地址', link: 'https://github.com/hzjanger' },
              {
                text: 'Angular笔记地址',
                link: 'https://github.com/hzjanger/AngularStudy'
              }
            ]
          }        
        ],
        // 将会自动在每个页面的导航栏生成生成一个 GitHub 链接，以及在页面的底部生成一个 "Edit this page" 链接
        //假定是 GitHub. 同时也可以是一个完整的 GitLab URL
        repo: 'hzjanger/SpringInActionStudy',
        // 默认是 false, 设置为 true 来启用
        editLinks: true,
        // 假如文档不是放在仓库的根目录下：
        docsDir: 'docs',
        // 默认为 "Edit this page"
        editLinkText: '在 GitHub 上编辑此页',
        //每个文件最后一次 git 提交的 UNIX 时间戳(ms)，同时它将以合适的日期格式显示在每一页的底部
        lastUpdated: '上次更新',
        sidebar: [
            {
                title: '链表',
                collapsable: true,
                children: [
                    'linkedList/linkedList'
                ]

            },
            {
                title: '栈',
                collapsable: true,
                children: [
                    'stack/stack'
                ]
            },
            {
                title: '排序算法',
                collapsable: true,
                children: [
                    'sort/selectSort',
                    'sort/insertSort',
                    'sort/shellSort',
                    'sort/mermeSort',
                    'sort/quickSort'
                ]
            }
        ]
    }
};
