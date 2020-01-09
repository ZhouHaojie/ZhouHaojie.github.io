/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404/index.html","896eda698615f6bafe100c5fb2ca9ceb"],["/about/index.html","014cf791ebfd7b3d271e8a4891cfd6a5"],["/archives/11679.html","551ba8888ab36a0accc0f3ace601ee40"],["/archives/11807.html","f6065219b55b4e29a874ae77dfc0862c"],["/archives/12996.html","0837159cbceb58eb5ded5e53d69d3c29"],["/archives/1476.html","cd119e0c2e0c08a177e8bda991404a1e"],["/archives/16107.html","48cc1978a3994bb41500d242d9122ad3"],["/archives/1696.html","0a4eba52f5d3d715aeefd38be5c31aec"],["/archives/17506.html","9deb5b331067159630ee2b9faad534ee"],["/archives/2018/07/index.html","a952b5aae1b037542a06c67aae3f2bf8"],["/archives/2018/12/index.html","64e09bca0bff9559e0de7256262019a3"],["/archives/2018/index.html","7a2a4f5b7885b23e081d8b47b9ce840a"],["/archives/2019/01/index.html","71f2248a045ce384988efba297678132"],["/archives/2019/02/index.html","ade54563285bd503071c3584c54648a6"],["/archives/2019/03/index.html","8c5f07a6e825095ca1cfc9bfb2658338"],["/archives/2019/04/index.html","b69c3ab47281dfd4969778e981491891"],["/archives/2019/05/index.html","cc1da740ccd81cae41da78c665107632"],["/archives/2019/06/index.html","9b4146a17b2e347feff210d61ff2576b"],["/archives/2019/07/index.html","7c5e02496951bcaa81cc4119bdb4ddca"],["/archives/2019/12/index.html","2f46cc7bbcf36ac436b0c8583f12d4c1"],["/archives/2019/index.html","9a823b9b18e74fd459e136ad1ee0b955"],["/archives/2019/page/2/index.html","bc5e46b4e22bf243cbbc3318cff215cb"],["/archives/2019/page/3/index.html","edd66ddb75b1a35d47869b5c15d8d47f"],["/archives/2020/01/index.html","f4996b72776889fc1cf0c4922a9a0950"],["/archives/2020/index.html","3bd50219ebf28ad04aaf7eb646da6bfa"],["/archives/21871.html","09e442c7d6ab261e20a034dd6caee767"],["/archives/23478.html","9c65079d12552333b5e5e7a653a9923d"],["/archives/23493.html","9597e8372ee9864ad33483f018b0faca"],["/archives/28384.html","a9b45712d5dd4ad2723626e0b7fae075"],["/archives/32090.html","f5d0738b9b7a6bd39bd8f54f4cc0b0f5"],["/archives/34095.html","c6fef4a6c1e08cb945ed7b631cd085fa"],["/archives/36387.html","80ccce7d2cefa6569c81a436bd863799"],["/archives/36767.html","c1f4e83d89fa2f2811dddc28f83fb067"],["/archives/37625.html","7942e03d2a3869374e63e695a19fc23a"],["/archives/37649.html","e9b408fb1586e1613200c6fe5fac2dc9"],["/archives/42797.html","0e45eb4c4f45f0e4aadaad0ac8903b28"],["/archives/43397.html","e399669c4782c7749320807a8c472e09"],["/archives/46839.html","73981c6d5cdbf798003156f04b200662"],["/archives/4991.html","09eb20cca99def4ac16ffb592bf370f8"],["/archives/52434.html","f7482122fee326127f4295d3d7446b1f"],["/archives/55821.html","a756da83bd34b21ef7624a049a032e6f"],["/archives/5589.html","a98865413a639293e04cf05ae1e669c0"],["/archives/56936.html","df75895594f4ed7fa8bc2e30fbecdded"],["/archives/6865.html","12ecd28d441330964933f5b63a55329b"],["/archives/69428dab.html","f6f11fe4352fdef1f074be87e363a197"],["/archives/73ac48ad.html","43ac40060e353ae36a450706ab05adf4"],["/archives/8e76ae69.html","1717cfe207aff60cd297e5e614ade61b"],["/archives/9043.html","0498acfc9cff1886ece8f8e28df656d6"],["/archives/ac74f14e.html","6f454ef113513abd59c74f6fc05b0c2c"],["/archives/b4801944.html","ecfe60c9f9ce7a472c62af6a569d9d0c"],["/archives/e70dd349.html","b69934eb43d239c4542a0f1dd0eff615"],["/archives/index.html","48d7a8e385e195e122e141d81cb47950"],["/archives/page/2/index.html","ae7b735f8136aafc62b5edf2588e2f12"],["/archives/page/3/index.html","787061a37ea57c39be0fa66e763103e9"],["/archives/page/4/index.html","94e869910f895224be4711bb067d6595"],["/books/index.html","7818f3ad782db592be53db0584f36049"],["/categories/C/index.html","0374e43e1fb2fc64ce3bcc694eccbbb3"],["/categories/Deutsch/index.html","d9451824d6bc7b6547ccaac198e6c764"],["/categories/Systems-and-Software-Engineering/Lifecycle-Models/index.html","8092a9746ca9206e9a621622d57d4f24"],["/categories/Systems-and-Software-Engineering/index.html","6a4746b01b3d2cf24d2fea3b9248a231"],["/categories/index.html","c88e52b1314fd6673ffc02114c913e15"],["/categories/优化方法/index.html","075ce0a351c302703b31eb43f73bcc2d"],["/categories/工具使用/Hexo/index.html","be43de327ad5700d38dc58762b636374"],["/categories/工具使用/index.html","cc730be3e66e34cd507e48fb0249b92a"],["/categories/数字IC设计/Verilog-HDL/index.html","14e71666ded68121a5ed349a84e55560"],["/categories/数字IC设计/index.html","f841bddb10a611eee824d49fadbe71bd"],["/categories/模拟电路设计/MOSFET/index.html","81de858a06fc36b985a3ff46f979e2f5"],["/categories/模拟电路设计/index.html","dd651879a09639ae26fe727955cf59f6"],["/categories/通信/index.html","90d802f1ff05762041d809abe0823391"],["/categories/通信/基础知识/index.html","a6bf758ac7305631491a53c0387ed3c6"],["/categories/通信/通信协议/index.html","801074d45d3c474174d126d4017e5a69"],["/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["/css/main.css","1b7135bb18aca0be1c139e1b1683daca"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/alipay.jpg","e13b13d982da46f5b5ec4209da915086"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.jpg","90fdda68a97e526c1893eba33816ef1e"],["/images/background.jpg","33d5f1c660d982c5e7b678e96306097d"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/default_avatar.jpg","ae19e98591f731f7bbaf889e2145d73d"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-16x16.png","6d0b12276a9d134cbd7a212c60208691"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/favicon-32x32.png","4d491fa91ed1c06a6ca2a27b4314e5be"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/wechatpay.png","5666280dd2127124c489f09f0c095399"],["/index.html","abfd5c3af3096c47bf106f7742298e47"],["/js/activate-power-mode.js","4b063fbe57fdcea19e78f37b2beecb7f"],["/js/local-search.js","2e9f38867fa1f5a8988be716052c7c77"],["/js/motion.js","e7ad8cb0aa6abea1885f65cb1fd85a84"],["/js/next-boot.js","c47528c6b7d3020a3dfd391c262dfebd"],["/js/schemes/pisces.js","cca41edb5ea3a6303f17c24610ad7174"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","861aacf6e98e042b6d8dc8fe16756c9e"],["/js/utils.js","62c6c4c6978b6b04ed88a1558540d3f1"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/blog-encrypt.js","3ae8437d6308ad7de3234910f430c7be"],["/lib/canvas-nest/README.html","05be6895942e8805a683f0367843b857"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/pdf/README.html","8be8c0e16e98edc49a93cbaa424cfe34"],["/lib/pdf/build/pdf.js","bef617263de936f84ac22131cf2144af"],["/lib/pdf/build/pdf.worker.js","5c3e932eaab386051de8d60d9a9ae45c"],["/lib/pdf/web/debugger.js","f3c574d0c88bb5fed257a0d0c8e269e0"],["/lib/pdf/web/images/annotation-check.svg","76b43d8cec092adac40d694b39f0e139"],["/lib/pdf/web/images/annotation-comment.svg","4fd308d1abd2643cea0b2cc53f788412"],["/lib/pdf/web/images/annotation-help.svg","e35ea012c471745aafb4c7c2691d7fca"],["/lib/pdf/web/images/annotation-insert.svg","971416d09a5543e2f66c793ab2ac8958"],["/lib/pdf/web/images/annotation-key.svg","4615f30dcfbf96c8c8a2c89a8e2e6437"],["/lib/pdf/web/images/annotation-newparagraph.svg","02219a347fcdbc937a00770fad2a0eca"],["/lib/pdf/web/images/annotation-noicon.svg","8ef501b1a907a617a8b87c1acbb72843"],["/lib/pdf/web/images/annotation-note.svg","4c486ec08b6e4d8b78b1f1db562f7a5c"],["/lib/pdf/web/images/annotation-paragraph.svg","3791b45fb8230f149cf096dabf84cc24"],["/lib/pdf/web/images/findbarButton-next-rtl.png","d635a5da775d416e415930f5433d829c"],["/lib/pdf/web/images/findbarButton-next-rtl@2x.png","e6397a5760a891c427998d92a5c65e11"],["/lib/pdf/web/images/findbarButton-next.png","b425dabab271624e125082f6be17e996"],["/lib/pdf/web/images/findbarButton-next@2x.png","7f5d17319ccac59c9eec58275e6b4023"],["/lib/pdf/web/images/findbarButton-previous-rtl.png","b425dabab271624e125082f6be17e996"],["/lib/pdf/web/images/findbarButton-previous-rtl@2x.png","7f5d17319ccac59c9eec58275e6b4023"],["/lib/pdf/web/images/findbarButton-previous.png","d635a5da775d416e415930f5433d829c"],["/lib/pdf/web/images/findbarButton-previous@2x.png","e6397a5760a891c427998d92a5c65e11"],["/lib/pdf/web/images/loading-icon.gif","faa74e8c61fc64d5edb11613c7eead2c"],["/lib/pdf/web/images/loading-small.png","9244a600a36f650764a9512791792ec8"],["/lib/pdf/web/images/loading-small@2x.png","14e5ac73c1ae3f8a1f62556b9634db33"],["/lib/pdf/web/images/secondaryToolbarButton-documentProperties.png","e81d4e81a94de79e10c236547670eb5a"],["/lib/pdf/web/images/secondaryToolbarButton-documentProperties@2x.png","0f468066bd65a8d2bc3e7c848069c056"],["/lib/pdf/web/images/secondaryToolbarButton-firstPage.png","4966f15d1573ee9665ad1115b3a1eb44"],["/lib/pdf/web/images/secondaryToolbarButton-firstPage@2x.png","2d43ccfa724192addf989be5b45c565f"],["/lib/pdf/web/images/secondaryToolbarButton-handTool.png","2eac9c669b98ce3c624dba5f46a6b328"],["/lib/pdf/web/images/secondaryToolbarButton-handTool@2x.png","04d38d1ed2861a6d8fca564324dc27d7"],["/lib/pdf/web/images/secondaryToolbarButton-lastPage.png","d58e9db0f88f5129cb026d2d6ecca73c"],["/lib/pdf/web/images/secondaryToolbarButton-lastPage@2x.png","c450b43bcf64b4e4a31c1a040d7964bf"],["/lib/pdf/web/images/secondaryToolbarButton-rotateCcw.png","9904daadfe637b3a1003ba5274363c5d"],["/lib/pdf/web/images/secondaryToolbarButton-rotateCcw@2x.png","c89c60ede5edd40d6ba425d35b1c2ba6"],["/lib/pdf/web/images/secondaryToolbarButton-rotateCw.png","858044220ca467eac1d3d8abec9e0b8c"],["/lib/pdf/web/images/secondaryToolbarButton-rotateCw@2x.png","9a07c9d66c3d75fbf64d8fc046131fe2"],["/lib/pdf/web/images/secondaryToolbarButton-scrollHorizontal.png","4d4b2e69413360368a96d612d0c431f2"],["/lib/pdf/web/images/secondaryToolbarButton-scrollHorizontal@2x.png","f01f66adde5d412e652aa6878b0c7dab"],["/lib/pdf/web/images/secondaryToolbarButton-scrollVertical.png","b0dbe88561bb48fc3b0580ec26df8f5a"],["/lib/pdf/web/images/secondaryToolbarButton-scrollVertical@2x.png","6489acfca9e652ea619dfb3a178ca74a"],["/lib/pdf/web/images/secondaryToolbarButton-scrollWrapped.png","55fce14861a5587bf01ec72b18cc121f"],["/lib/pdf/web/images/secondaryToolbarButton-scrollWrapped@2x.png","61b79e9f1c70bac96f04038d0c443345"],["/lib/pdf/web/images/secondaryToolbarButton-selectTool.png","edfd25ff9999ace3ee701fff5dbc2fa2"],["/lib/pdf/web/images/secondaryToolbarButton-selectTool@2x.png","62a82ead4a30d2dbb7421c038fcdc9d3"],["/lib/pdf/web/images/secondaryToolbarButton-spreadEven.png","3e83bd58b9f77a6cb906e37276675271"],["/lib/pdf/web/images/secondaryToolbarButton-spreadEven@2x.png","c5d447ed101b00492d05075b907ffeaa"],["/lib/pdf/web/images/secondaryToolbarButton-spreadNone.png","458217d12e4449eec9b4d714ea5aea40"],["/lib/pdf/web/images/secondaryToolbarButton-spreadNone@2x.png","9528f82a4af0ec621f866f309fc49094"],["/lib/pdf/web/images/secondaryToolbarButton-spreadOdd.png","84d9145fcd7fee78cdb1b57e846dc794"],["/lib/pdf/web/images/secondaryToolbarButton-spreadOdd@2x.png","ee68a154138508bd0ff24c3c9b85649c"],["/lib/pdf/web/images/shadow.png","bf677598a57b9539055834af51cf6062"],["/lib/pdf/web/images/texture.png","be7cd9355fa2121fab8e619ed546ced4"],["/lib/pdf/web/images/toolbarButton-bookmark.png","97676ebb2225309ad15ba193f23f7fa8"],["/lib/pdf/web/images/toolbarButton-bookmark@2x.png","5da7bcfae7b61f069cb91b25920c64c5"],["/lib/pdf/web/images/toolbarButton-download.png","f20a55dc99268dac130586e52e2b10d6"],["/lib/pdf/web/images/toolbarButton-download@2x.png","3b56d4b64a3bf24df1c0dbe2dd2f52b2"],["/lib/pdf/web/images/toolbarButton-menuArrows.png","0f776a81f64ed3775ce1917917879e4b"],["/lib/pdf/web/images/toolbarButton-menuArrows@2x.png","211044c3c1f898cc25a872d13f5108f4"],["/lib/pdf/web/images/toolbarButton-openFile.png","8db4158c49b8a31e311ee501af30566f"],["/lib/pdf/web/images/toolbarButton-openFile@2x.png","4a27a5e1915518b7fef119007e937c8d"],["/lib/pdf/web/images/toolbarButton-pageDown-rtl.png","5bfdeb6b844f6cc9fa636ec358a76986"],["/lib/pdf/web/images/toolbarButton-pageDown-rtl@2x.png","eea2e0da4795a4c3e7a03ba1bf4aca15"],["/lib/pdf/web/images/toolbarButton-pageDown.png","d86ed7c2ca30e08f7f3b499de2dca107"],["/lib/pdf/web/images/toolbarButton-pageDown@2x.png","7fdce5fb0a3d1bf9e884cc3b4061d143"],["/lib/pdf/web/images/toolbarButton-pageUp-rtl.png","6fa884ed046f2885582e80f2164f392f"],["/lib/pdf/web/images/toolbarButton-pageUp-rtl@2x.png","8b828859a3f2d503c7c4eab8ba1a2fc4"],["/lib/pdf/web/images/toolbarButton-pageUp.png","c270b41d7a0ff9892ba9ac67d789a841"],["/lib/pdf/web/images/toolbarButton-pageUp@2x.png","1919a86db02ab08b5ac0ef3cb5e53ff9"],["/lib/pdf/web/images/toolbarButton-presentationMode.png","fb94ca39aec07d85a29fdb62b0b03b24"],["/lib/pdf/web/images/toolbarButton-presentationMode@2x.png","6f172f3b9c5b7331531969c68f919945"],["/lib/pdf/web/images/toolbarButton-print.png","923cfb0f2a944b5a49f99a6901770f71"],["/lib/pdf/web/images/toolbarButton-print@2x.png","a603c277f9547c2428055e7371fd4d81"],["/lib/pdf/web/images/toolbarButton-search.png","273cffad049d5b4e1f0a9d7af149e597"],["/lib/pdf/web/images/toolbarButton-search@2x.png","33358e593e99cfe72ac2e9de6c9f244f"],["/lib/pdf/web/images/toolbarButton-secondaryToolbarToggle-rtl.png","2f4f9206840c72baef8a402175fbfc45"],["/lib/pdf/web/images/toolbarButton-secondaryToolbarToggle-rtl@2x.png","773ae955c3570a34012c730181f1bdfd"],["/lib/pdf/web/images/toolbarButton-secondaryToolbarToggle.png","7af7e96cf59fea4b789db1c5d4636d08"],["/lib/pdf/web/images/toolbarButton-secondaryToolbarToggle@2x.png","cdac287bc3d5648256e106dcb921c520"],["/lib/pdf/web/images/toolbarButton-sidebarToggle-rtl.png","4796174bdfd65f1861dc2bea81ce744c"],["/lib/pdf/web/images/toolbarButton-sidebarToggle-rtl@2x.png","4bdb2eb80c6a6cdcbedbc225bb661c08"],["/lib/pdf/web/images/toolbarButton-sidebarToggle.png","6c365a103073ff2d8303c68856df0a4e"],["/lib/pdf/web/images/toolbarButton-sidebarToggle@2x.png","b82384c2cc730c47b2e132eb89e9cec4"],["/lib/pdf/web/images/toolbarButton-viewAttachments.png","b58498a5ba191146108d60bf1e079592"],["/lib/pdf/web/images/toolbarButton-viewAttachments@2x.png","13c0f04fa5dd5a05059b017b28181304"],["/lib/pdf/web/images/toolbarButton-viewOutline-rtl.png","26e6d0ea3c09f725e9f5d2f91d7f4741"],["/lib/pdf/web/images/toolbarButton-viewOutline-rtl@2x.png","016d9158111a9dc6104628c0c1149077"],["/lib/pdf/web/images/toolbarButton-viewOutline.png","2d32348db7b0eca4195bf844551a5c58"],["/lib/pdf/web/images/toolbarButton-viewOutline@2x.png","9eb0bed2459b8cecb8d435849d7ae75c"],["/lib/pdf/web/images/toolbarButton-viewThumbnail.png","5ab2c00425ead7f7a0c219385d55bf03"],["/lib/pdf/web/images/toolbarButton-viewThumbnail@2x.png","f74f681bc5389d5163e0a845fff82b61"],["/lib/pdf/web/images/toolbarButton-zoomIn.png","1ec009b6c54709afa73d99db10c57039"],["/lib/pdf/web/images/toolbarButton-zoomIn@2x.png","19aea6e460a160e97ec298448d9f06f9"],["/lib/pdf/web/images/toolbarButton-zoomOut.png","e1256ccd98a1865848fb957009e6f7a9"],["/lib/pdf/web/images/toolbarButton-zoomOut@2x.png","cc2a035371ed64c3878f903e05a7fea8"],["/lib/pdf/web/images/treeitem-collapsed-rtl.png","b4a247f2a189f66715009f8bb1938398"],["/lib/pdf/web/images/treeitem-collapsed-rtl@2x.png","719f8e84b8f2b1907daa8c4138bee063"],["/lib/pdf/web/images/treeitem-collapsed.png","583ca0cee62b36c8972ef6b89967700b"],["/lib/pdf/web/images/treeitem-collapsed@2x.png","9879163b7a2d0bd390c73174c6e276d5"],["/lib/pdf/web/images/treeitem-expanded.png","6fd8d469b43811d4d0cbdbc2e3dca116"],["/lib/pdf/web/images/treeitem-expanded@2x.png","f71c9d5993e2823a1829a454014e0471"],["/lib/pdf/web/viewer.css","b3d971de800d9de3750852d963524667"],["/lib/pdf/web/viewer.html","b7f8a75f5a2344f0ea86722cb9a5ecc8"],["/lib/pdf/web/viewer.js","5aac0c33267911d640e1d321398eed8d"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/movies/index.html","730fc69ff8eebb767faed005af613d0e"],["/page/2/index.html","1f76165acdb66e093cc4cf33699335ae"],["/page/3/index.html","918922f0aa34f7bf5e1e0b70b72eaa24"],["/page/4/index.html","1de0fda380e080fe2de7ba0e36729617"],["/sw-register.js","f0b34ff3541f8434151d8733f8960eb0"],["/tags/C/index.html","09d89bdace3b24e7893cda6f6a9cd4b7"],["/tags/Communication-Sysems-and-Protocols/index.html","77d7d6ad6656424447b77b53de1f2f1c"],["/tags/Design-Digitaler-Schaltung/index.html","02868074a8aed2f46433acd825787f7e"],["/tags/Deutsch-A1-A2/index.html","f10728df73217499f11a7c97ce24e7df"],["/tags/Easy-German/index.html","8d8d1e43a2b1c7ada581455f5eaba29a"],["/tags/FPGA/index.html","5ce1680f3491012b69792529377d9958"],["/tags/Hexo/index.html","ad8801bcd2e659f3a51f7566a6accabe"],["/tags/Horverstehen/index.html","5665ff3c1adcaa609321a3eb422e9e21"],["/tags/Lifecycle-Models/index.html","f409aaf820a9571b750be7a2ffa10dbb"],["/tags/MOSFET/index.html","e62829acf1ec78bc95b85c06775c6ebd"],["/tags/Microwave/index.html","9461abeb3fd6bee8834d2ba10ec3aa0d"],["/tags/Optimization-of-Dynamic-Systems/index.html","22fbfd70eae9fe393e2634150ea55ce0"],["/tags/Verilog-HDL/index.html","5d1ca532c7c30ce39dba0c54e7dc4af3"],["/tags/Wortschatz/index.html","ac727a5ac277d6a0266dccb01677a67e"],["/tags/index.html","0d0c14a0b3b2057eeb97d02f7433886a"],["/tags/数字超大规模集成电路设计/index.html","00355f625b310aa1d29f96519a7bdd44"],["/tags/错误调试/index.html","2b5f4b9af8980ef248781a9afe138dc3"],["/tags/随笔/index.html","47dfb429606047a4fc4f0943e5a92cbc"],["/top/index.html","3955b2a671556086d5b3c9d68881df3c"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
