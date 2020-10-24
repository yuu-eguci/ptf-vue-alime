import Vue from 'vue';
import Router from 'vue-router';
import i18n from './i18n';

Vue.use(Router);

const routes = [
  {
    // NOTE: App.vue <router-view /> の中身がこの route になります。
    //       この route の component を App.vue にすると、 App.vue の中で App.vue が描画されることになります。
    //       ようは <div id="app"><div id="app">[children]</div></div> こうなるってことです。
    //       当然嫌なので、空っぽの component を用意しています。
    //       こうすると <div id="app"><div id="locale-parent">[children]</div></div> こうなります。(GOOD)
    // HACK: もし「component なし route」みたいなのが定義できるならそれがいい。
    //       今は知らないのでこういうかたちにしました。
    path: '/:locale',
    component: () => import('./LocaleParent.vue'),
    beforeEnter(to, from, next) {
      // URL の locale によって使用する locales ファイルを切り替えます。
      // NOTE: VUE_APP_I18N_FALLBACK_LOCALE 環境変数のおかげで ['en', 'ja', 'ro'].includes(to.params.locale)
      // というようなチェックは必要ありません。
      i18n.locale = to.params.locale;
      next();
    },
    children: [
      {
        path: '',
        name: 'HelloWorld',
        component: () => import('./components/HelloWorld.vue'),
      },
      {
        path: '2',
        name: 'HelloWorld2',
        component: () => import('./components/HelloWorld2.vue'),
      },
    ]
  },
  // 想定外の URL は /en へリダイレクトします。 '/' とかね。
  {
    path: '*',
    redirect: '/en',
  },
];

const router = new Router({
  mode: 'history',
  routes,
});

// ページ遷移ごとに発生する処理です。
router.beforeEach(async (to, from, next) => {
  // next() は必須です。
  next();
});

export default router;
