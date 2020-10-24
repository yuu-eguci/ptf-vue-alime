module.exports = {
  // サブドメイン時のためのパラメータです。
  // ./ にすると assets は解決する。だけど spa が解決しなかった。
  // NOTE: カスタムドメインでの運用が始まったら消すこと。 -> 始まりました。
  // publicPath: '/ptf-vue-alime/'
  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: false
    }
  }
}
