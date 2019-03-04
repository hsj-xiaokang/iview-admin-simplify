import Main from '@/components/main'
/**
 * iview-admin中meta除了原生参数外可配置的参数:
 * meta: {
 *  title: { String|Number|Function }
 *         显示在侧边栏、面包屑和标签栏的文字
 *         使用'{{ 多语言字段 }}'形式结合多语言使用，例子看多语言的路由配置;
 *         可以传入一个回调函数，参数是当前路由对象，例子看动态路由和带参路由
 *  hideInBread: (false) 设为true后此级路由将不会出现在面包屑中，示例看QQ群路由配置
 *  hideInMenu: (false) 设为true后在左侧菜单不会显示该页面选项
 *  notCache: (false) 设为true后页面在切换标签后不会缓存，如果需要缓存，无需设置这个字段，而且需要设置页面组件name属性和路由配置的name一致
 *  access: (null) 可访问该页面的权限数组，当前路由设置的权限会影响子路由
 *  icon: (-) 该页面在左侧菜单、面包屑和标签导航处显示的图标，如果是自定义图标，需要在图标名称前加下划线'_'
 *  beforeCloseName: (-) 设置该字段，则在关闭当前tab页时会去'@/router/before-close.js'里寻找该字段名对应的方法，作为关闭前的钩子函数
 * }
 */

export default [
  // 登录操作
  {
    path: '/login',
    name: 'login',
    meta: {
      title: 'Login - 登录',
      hideInMenu: true
    },
    component: () => import('@/view/login/login.vue')
  },
  // home主页面
  {
    path: '/',
    name: '_home',
    redirect: '/home',
    component: Main,
    meta: {
      hideInMenu: true,
      notCache: true
    },
    children: [
      {
        path: '/home',
        name: 'home',
        meta: {
          hideInMenu: true,
          title: '工作台',
          notCache: true,
          icon: 'md-home'
        },
        component: () => import('@/view/single-page/home')
      }
    ]
  },
  // 工作台
/*  {
    path: '/home_platform',
    name: 'home_platform',
    meta: {
      icon: 'logo-buffer',
      title: '工作台'
    },
    component: Main,
    children: [
      {
        path: '/home_platform_inner',
        name: 'home_platform_inner',
        meta: {
          hideInMenu: true,
          title: '工作台',
          notCache: true,
          icon: 'md-home'
        },
        component: () => import('@/view/single-page/home')
      }
    ]
  },*/
  // 修改密码
  {
    path: '/change_password',
    name: 'change_password',
    component: Main,
    meta: {
      hideInBread: true,
      hideInMenu: true
    },
    children: [
      {
        path: '/change_password_inner',
        name: 'change_password_inner',
        meta: {
         icon: 'ios-key-outline',
         title: '修改密码'
        },
        component: () => import('@/view/i18n/i18n-page.vue')
      }
    ]
  },
  // 导航管理
  {
    path: '/navigator_manage',
    name: 'navigator_manage',
    meta: {
      icon: 'logo-buffer',
      title: '导航管理'
    },
    component: Main,
    children: [
      {
        path: '/navigator_manage_inner',
        name: 'navigator_manage_inner',
        meta: {
          icon: 'md-navigate',
          title: '导航管理'
        },
        component: () => import('@/view/i18n/i18n-page.vue')
      }
    ]
  },
  // 内容管理
  {
    path: '/content_manage',
    name: 'content_manage',
    meta: {
      icon: 'ios-paper-outline',
      title: '内容管理'
    },
    component: Main,
    children: [
      {
        path: '/content_manage_information',
        name: 'content_manage_information',
        meta: {
          icon: 'ios-document',
          title: '资讯'
        },
        component: () => import('@/view/i18n/i18n-page.vue')
      },
      {
        path: '/content_manage_downlaod',
        name: 'content_manage_downlaod',
        meta: {
          icon: 'ios-cloud-download',
          title: '下载'
        },
        component: () => import('@/view/i18n/i18n-page.vue')
      }
    ]
  },
  // 会员管理
  {
    path: '/member_manage',
    name: 'member_manage',
    meta: {
      icon: 'ios-people',
      title: '会员管理'
    },
    component: Main,
    children: [
      {
        path: '/member_manage_register',
        name: 'member_manage_register',
        meta: {
          icon: 'md-person',
          title: '注册会员'
        },
        component: () => import('@/view/i18n/i18n-page.vue')
      },
      {
        path: '/member_manage_meeting',
        name: 'member_manage_meeting',
        meta: {
          icon: 'md-person-add',
          title: '报名大会人员'
        },
        component: () => import('@/view/i18n/i18n-page.vue')
      },
      {
        path: '/member_manage_group',
        name: 'member_manage_group',
        meta: {
          icon: 'md-people',
          title: '会员组管理'
        },
        component: () => import('@/view/i18n/i18n-page.vue')
      },
      {
        path: '/member_manage_level_words',
        name: 'member_manage_level_words',
        meta: {
          icon: 'md-create',
          title: '会员留言'
        },
        component: () => import('@/view/i18n/i18n-page.vue')
      },
    ]
  },
  // 站点设置
  {
    path: '/site_manage',
    name: 'site_manage',
    meta: {
      icon: 'md-globe',
      title: '站点设置'
    },
    component: Main,
    children: [
      {
        path: '/site_manage_role',
        name: 'site_manage_role',
        meta: {
          icon: 'ios-person',
          title: '管理角色'
        },
        component: () => import('@/view/i18n/i18n-page.vue')
      },
      {
        path: '/site_manage_manage',
        name: 'site_manage_manage',
        meta: {
          icon: 'ios-person',
          title: '管理员管理'
        },
        component: () => import('@/view/i18n/i18n-page.vue')
      },
      {
        path: '/site_manage_website_information',
        name: 'site_manage_website_information',
        meta: {
          icon: 'ios-document',
          title: '网站信息管理'
        },
        component: () => import('@/view/i18n/i18n-page.vue')
      },
      {
        path: '/site_manage_frendship_link',
        name: 'site_manage_frendship_link',
        meta: {
          icon: 'ios-link',
          title: '友情链接管理'
        },
        component: () => import('@/view/i18n/i18n-page.vue')
      },
    ]
  },
  // 统计（待定）
  {
    path: '/statistics',
    name: 'statistics',
    meta: {
      icon: 'ios-stats',
      title: '统计（待定）'
    },
    component: Main,
    children: [
      {
        path: '/statistics_inner',
        name: 'statistics_inner',
        meta: {
          icon: 'ios-stats',
          title: '统计（待定）'
        },
        component: () => import('@/view/i18n/i18n-page.vue')
      }
    ]
  },
  // 国际化
  {
    path: '/i18n',
    name: 'i18n',
    meta: {
      icon: 'md-planet',
      hideInBread: true,
      // 演示权限-['admin','super_admin',]
      // access:['super_admin']
      // access:['admin','super_admin',]
    },
    component: Main,
    children: [
      {
        path: 'i18n_page',
        name: 'i18n_page',
        meta: {
          icon: 'md-planet',
          title: 'i18n - {{ i18n_page }}',
        },
        component: () => import('@/view/i18n/i18n-page.vue')
      }
    ]
  },
  // 错误页面
  {
    path: '/401',
    name: 'error_401',
    meta: {
      icon: 'md-close',
      hideInMenu: true
    },
    component: () => import('@/view/error-page/401.vue')
  },
  {
    path: '/500',
    name: 'error_500',
    meta: {
      icon: 'md-close',
      hideInMenu: true
    },
    component: () => import('@/view/error-page/500.vue')
  },
  {
    path: '*',
    name: 'error_404',
    meta: {
      icon: 'md-close',
      hideInMenu: true
    },
    component: () => import('@/view/error-page/404.vue')
  }
]
