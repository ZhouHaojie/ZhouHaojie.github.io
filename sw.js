/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404/index.html","0724d1c2cc995f8cbee8209fa08dd3c8"],["/about/index.html","6721b7952b40cd64303d6b201a54ca4d"],["/archives/11679.html","38195aec3685c94895c6974e6c9b324a"],["/archives/11807.html","374d13fa4ad5155c24086a3818a42d3d"],["/archives/12996.html","f25f86fade3c06f6c67f574626174dbb"],["/archives/1476.html","766edac6bc64b6040fd8e27bd9eb86b1"],["/archives/16107.html","2afedb8e9072889fb91a87ad2a2b0276"],["/archives/1696.html","c03d77bea7850aec8d06e9547b1b4975"],["/archives/17506.html","609dca6bb7966f3740ec3f22a2b79d91"],["/archives/2018/07/index.html","a4716c0329a4ad717dd14fc116f78c98"],["/archives/2018/12/index.html","880dcd6cdce578967d94d607bef28d0b"],["/archives/2018/index.html","aff83ad583d50aca2474fabd181bc5a3"],["/archives/2019/01/index.html","d11ce85b37cb009c64f5d0ae695669d9"],["/archives/2019/02/index.html","afd933aec9ed72ddf834e484ba382198"],["/archives/2019/03/index.html","ae2741a9019fd5100c95436eced5cf28"],["/archives/2019/04/index.html","6ee82e649e7ce381ac349e468d63f147"],["/archives/2019/05/index.html","535217f4f17dc5570fab1aa82a09ca5a"],["/archives/2019/06/index.html","9d0ad5c9ea4103bb08af7f9264cf9b55"],["/archives/2019/07/index.html","e0acb5eae9e2397e244439d991539c13"],["/archives/2019/12/index.html","290fce634d9e9e2f958c14154d053954"],["/archives/2019/index.html","70404ac1da23bd7888cddf8f6d8b8016"],["/archives/2019/page/2/index.html","fd72b277350df0e0ea95e276d6733acd"],["/archives/2019/page/3/index.html","0eec1eac45ed508c73738a0a5460f1fa"],["/archives/21871.html","d96169129e5e3faf5326939ef1e993f2"],["/archives/23478.html","63fe8a2c5fb54ec7a5c4b01224a4583c"],["/archives/23493.html","50a3cebf161ac2363b3a9eb88775eda5"],["/archives/28384.html","b0c68ad43ba5be6f1451305f5f168ec1"],["/archives/32090.html","5c30445fccaf42e2f6274dc834bc20a3"],["/archives/34095.html","227e011fd071261e4da85386c6c718c9"],["/archives/36387.html","29e634490d678b96f0e6d4bdb1b13f87"],["/archives/36767.html","d8cd3799d45fbda182f5776afff5b2d1"],["/archives/37625.html","f5a581b8b54fff5487f8e8a06ca9c83a"],["/archives/37649.html","aae9b443b2bc4ba55ebdff4eaf9969d2"],["/archives/42797.html","5ecc0e4ae7a753dfca31e9b675c41b89"],["/archives/43397.html","b32fbe8874ffc597f3b38b789d5892fb"],["/archives/46839.html","82d29833191fc0be36538db2db74cb95"],["/archives/4991.html","0770471c92b678746b2196c39bd8f24c"],["/archives/52434.html","3c22df2c65c173a675bff5d8ccea174f"],["/archives/55821.html","e17b970ed794824a38ce575f256124ca"],["/archives/5589.html","f573b2ed5319419faec299c65f64c677"],["/archives/56936.html","05acaebe0c3198261e2a4db71ed28824"],["/archives/6865.html","5d1cb2e6ba1f32027c540d80f449b7e7"],["/archives/73ac48ad.html","dba8e3c945131867417a30f7998e536c"],["/archives/8e76ae69.html","1eee1bdf6d1b54ab0d0e71fc6fef5feb"],["/archives/9043.html","fdd67d3dd5cedfd25130902445a64d4f"],["/archives/ac74f14e.html","c0e5ad9ddfa04caa704e8b02d4125a51"],["/archives/b4801944.html","c303b7d13eab9503971c3578f65e6aae"],["/archives/e70dd349.html","062605645bf9f0b6afcede93c1d36ed3"],["/archives/index.html","a45680050ed5bd85e4a3b2cb815fd69a"],["/archives/page/2/index.html","df1f7c090ecfbe61ca78c98270a07978"],["/archives/page/3/index.html","f9b2abf1e578222d2ca3bf00399b247e"],["/archives/page/4/index.html","546b02ad5a39a49c848d3c4e789b8961"],["/books/index.html","915a742d5c55aeff74e6c35b9ae7c2d8"],["/categories/C/index.html","f6cab14d3f11101ac47e73378ed1f3fa"],["/categories/Deutsch/index.html","de36f22c37b87c4393ce304adc40929d"],["/categories/index.html","e0a5a1caab12f96673d592e4f432d0b4"],["/categories/优化方法/index.html","35c0836f69ba328ddb63b9e975ba7210"],["/categories/工具使用/Hexo/index.html","31617012be9e694d96566ebd375cb402"],["/categories/工具使用/index.html","92883c9ca0453d0d366fc53e4411c4c2"],["/categories/数字IC设计/Verilog-HDL/index.html","6c838e613869e5bd9a66d22b2d5db9eb"],["/categories/数字IC设计/index.html","4f655c5059b988aa64c3292b592cc1fb"],["/categories/模拟电路设计/MOSFET/index.html","bb9bc75b9d48c17cc45df237f5ef90dd"],["/categories/模拟电路设计/index.html","e2f07e986b320cbb76dd2967e2f2cb78"],["/categories/通信/index.html","34316876240363e0fe4ca3485c685352"],["/categories/通信/基础知识/index.html","0a1172caa770b3bf76a747a0484f6a28"],["/categories/通信/通信协议/index.html","57f9220dfca4c545cd97e59f6f984454"],["/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["/css/main.css","1b7135bb18aca0be1c139e1b1683daca"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/alipay.jpg","e13b13d982da46f5b5ec4209da915086"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.jpg","90fdda68a97e526c1893eba33816ef1e"],["/images/background.jpg","33d5f1c660d982c5e7b678e96306097d"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/default_avatar.jpg","ae19e98591f731f7bbaf889e2145d73d"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-16x16.png","6d0b12276a9d134cbd7a212c60208691"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/favicon-32x32.png","4d491fa91ed1c06a6ca2a27b4314e5be"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/wechatpay.png","5666280dd2127124c489f09f0c095399"],["/index.html","668577410011c1cf2a248478a71435fd"],["/js/activate-power-mode.js","4b063fbe57fdcea19e78f37b2beecb7f"],["/js/local-search.js","2e9f38867fa1f5a8988be716052c7c77"],["/js/motion.js","e7ad8cb0aa6abea1885f65cb1fd85a84"],["/js/next-boot.js","c47528c6b7d3020a3dfd391c262dfebd"],["/js/schemes/pisces.js","cca41edb5ea3a6303f17c24610ad7174"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","861aacf6e98e042b6d8dc8fe16756c9e"],["/js/utils.js","62c6c4c6978b6b04ed88a1558540d3f1"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/blog-encrypt.js","3ae8437d6308ad7de3234910f430c7be"],["/lib/canvas-nest/README.html","05be6895942e8805a683f0367843b857"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/pdf/README.html","8be8c0e16e98edc49a93cbaa424cfe34"],["/lib/pdf/build/pdf.js","bef617263de936f84ac22131cf2144af"],["/lib/pdf/build/pdf.worker.js","5c3e932eaab386051de8d60d9a9ae45c"],["/lib/pdf/web/debugger.js","f3c574d0c88bb5fed257a0d0c8e269e0"],["/lib/pdf/web/images/annotation-check.svg","76b43d8cec092adac40d694b39f0e139"],["/lib/pdf/web/images/annotation-comment.svg","4fd308d1abd2643cea0b2cc53f788412"],["/lib/pdf/web/images/annotation-help.svg","e35ea012c471745aafb4c7c2691d7fca"],["/lib/pdf/web/images/annotation-insert.svg","971416d09a5543e2f66c793ab2ac8958"],["/lib/pdf/web/images/annotation-key.svg","4615f30dcfbf96c8c8a2c89a8e2e6437"],["/lib/pdf/web/images/annotation-newparagraph.svg","02219a347fcdbc937a00770fad2a0eca"],["/lib/pdf/web/images/annotation-noicon.svg","8ef501b1a907a617a8b87c1acbb72843"],["/lib/pdf/web/images/annotation-note.svg","4c486ec08b6e4d8b78b1f1db562f7a5c"],["/lib/pdf/web/images/annotation-paragraph.svg","3791b45fb8230f149cf096dabf84cc24"],["/lib/pdf/web/images/findbarButton-next-rtl.png","d635a5da775d416e415930f5433d829c"],["/lib/pdf/web/images/findbarButton-next-rtl@2x.png","e6397a5760a891c427998d92a5c65e11"],["/lib/pdf/web/images/findbarButton-next.png","b425dabab271624e125082f6be17e996"],["/lib/pdf/web/images/findbarButton-next@2x.png","7f5d17319ccac59c9eec58275e6b4023"],["/lib/pdf/web/images/findbarButton-previous-rtl.png","b425dabab271624e125082f6be17e996"],["/lib/pdf/web/images/findbarButton-previous-rtl@2x.png","7f5d17319ccac59c9eec58275e6b4023"],["/lib/pdf/web/images/findbarButton-previous.png","d635a5da775d416e415930f5433d829c"],["/lib/pdf/web/images/findbarButton-previous@2x.png","e6397a5760a891c427998d92a5c65e11"],["/lib/pdf/web/images/loading-icon.gif","faa74e8c61fc64d5edb11613c7eead2c"],["/lib/pdf/web/images/loading-small.png","9244a600a36f650764a9512791792ec8"],["/lib/pdf/web/images/loading-small@2x.png","14e5ac73c1ae3f8a1f62556b9634db33"],["/lib/pdf/web/images/secondaryToolbarButton-documentProperties.png","e81d4e81a94de79e10c236547670eb5a"],["/lib/pdf/web/images/secondaryToolbarButton-documentProperties@2x.png","0f468066bd65a8d2bc3e7c848069c056"],["/lib/pdf/web/images/secondaryToolbarButton-firstPage.png","4966f15d1573ee9665ad1115b3a1eb44"],["/lib/pdf/web/images/secondaryToolbarButton-firstPage@2x.png","2d43ccfa724192addf989be5b45c565f"],["/lib/pdf/web/images/secondaryToolbarButton-handTool.png","2eac9c669b98ce3c624dba5f46a6b328"],["/lib/pdf/web/images/secondaryToolbarButton-handTool@2x.png","04d38d1ed2861a6d8fca564324dc27d7"],["/lib/pdf/web/images/secondaryToolbarButton-lastPage.png","d58e9db0f88f5129cb026d2d6ecca73c"],["/lib/pdf/web/images/secondaryToolbarButton-lastPage@2x.png","c450b43bcf64b4e4a31c1a040d7964bf"],["/lib/pdf/web/images/secondaryToolbarButton-rotateCcw.png","9904daadfe637b3a1003ba5274363c5d"],["/lib/pdf/web/images/secondaryToolbarButton-rotateCcw@2x.png","c89c60ede5edd40d6ba425d35b1c2ba6"],["/lib/pdf/web/images/secondaryToolbarButton-rotateCw.png","858044220ca467eac1d3d8abec9e0b8c"],["/lib/pdf/web/images/secondaryToolbarButton-rotateCw@2x.png","9a07c9d66c3d75fbf64d8fc046131fe2"],["/lib/pdf/web/images/secondaryToolbarButton-scrollHorizontal.png","4d4b2e69413360368a96d612d0c431f2"],["/lib/pdf/web/images/secondaryToolbarButton-scrollHorizontal@2x.png","f01f66adde5d412e652aa6878b0c7dab"],["/lib/pdf/web/images/secondaryToolbarButton-scrollVertical.png","b0dbe88561bb48fc3b0580ec26df8f5a"],["/lib/pdf/web/images/secondaryToolbarButton-scrollVertical@2x.png","6489acfca9e652ea619dfb3a178ca74a"],["/lib/pdf/web/images/secondaryToolbarButton-scrollWrapped.png","55fce14861a5587bf01ec72b18cc121f"],["/lib/pdf/web/images/secondaryToolbarButton-scrollWrapped@2x.png","61b79e9f1c70bac96f04038d0c443345"],["/lib/pdf/web/images/secondaryToolbarButton-selectTool.png","edfd25ff9999ace3ee701fff5dbc2fa2"],["/lib/pdf/web/images/secondaryToolbarButton-selectTool@2x.png","62a82ead4a30d2dbb7421c038fcdc9d3"],["/lib/pdf/web/images/secondaryToolbarButton-spreadEven.png","3e83bd58b9f77a6cb906e37276675271"],["/lib/pdf/web/images/secondaryToolbarButton-spreadEven@2x.png","c5d447ed101b00492d05075b907ffeaa"],["/lib/pdf/web/images/secondaryToolbarButton-spreadNone.png","458217d12e4449eec9b4d714ea5aea40"],["/lib/pdf/web/images/secondaryToolbarButton-spreadNone@2x.png","9528f82a4af0ec621f866f309fc49094"],["/lib/pdf/web/images/secondaryToolbarButton-spreadOdd.png","84d9145fcd7fee78cdb1b57e846dc794"],["/lib/pdf/web/images/secondaryToolbarButton-spreadOdd@2x.png","ee68a154138508bd0ff24c3c9b85649c"],["/lib/pdf/web/images/shadow.png","bf677598a57b9539055834af51cf6062"],["/lib/pdf/web/images/texture.png","be7cd9355fa2121fab8e619ed546ced4"],["/lib/pdf/web/images/toolbarButton-bookmark.png","97676ebb2225309ad15ba193f23f7fa8"],["/lib/pdf/web/images/toolbarButton-bookmark@2x.png","5da7bcfae7b61f069cb91b25920c64c5"],["/lib/pdf/web/images/toolbarButton-download.png","f20a55dc99268dac130586e52e2b10d6"],["/lib/pdf/web/images/toolbarButton-download@2x.png","3b56d4b64a3bf24df1c0dbe2dd2f52b2"],["/lib/pdf/web/images/toolbarButton-menuArrows.png","0f776a81f64ed3775ce1917917879e4b"],["/lib/pdf/web/images/toolbarButton-menuArrows@2x.png","211044c3c1f898cc25a872d13f5108f4"],["/lib/pdf/web/images/toolbarButton-openFile.png","8db4158c49b8a31e311ee501af30566f"],["/lib/pdf/web/images/toolbarButton-openFile@2x.png","4a27a5e1915518b7fef119007e937c8d"],["/lib/pdf/web/images/toolbarButton-pageDown-rtl.png","5bfdeb6b844f6cc9fa636ec358a76986"],["/lib/pdf/web/images/toolbarButton-pageDown-rtl@2x.png","eea2e0da4795a4c3e7a03ba1bf4aca15"],["/lib/pdf/web/images/toolbarButton-pageDown.png","d86ed7c2ca30e08f7f3b499de2dca107"],["/lib/pdf/web/images/toolbarButton-pageDown@2x.png","7fdce5fb0a3d1bf9e884cc3b4061d143"],["/lib/pdf/web/images/toolbarButton-pageUp-rtl.png","6fa884ed046f2885582e80f2164f392f"],["/lib/pdf/web/images/toolbarButton-pageUp-rtl@2x.png","8b828859a3f2d503c7c4eab8ba1a2fc4"],["/lib/pdf/web/images/toolbarButton-pageUp.png","c270b41d7a0ff9892ba9ac67d789a841"],["/lib/pdf/web/images/toolbarButton-pageUp@2x.png","1919a86db02ab08b5ac0ef3cb5e53ff9"],["/lib/pdf/web/images/toolbarButton-presentationMode.png","fb94ca39aec07d85a29fdb62b0b03b24"],["/lib/pdf/web/images/toolbarButton-presentationMode@2x.png","6f172f3b9c5b7331531969c68f919945"],["/lib/pdf/web/images/toolbarButton-print.png","923cfb0f2a944b5a49f99a6901770f71"],["/lib/pdf/web/images/toolbarButton-print@2x.png","a603c277f9547c2428055e7371fd4d81"],["/lib/pdf/web/images/toolbarButton-search.png","273cffad049d5b4e1f0a9d7af149e597"],["/lib/pdf/web/images/toolbarButton-search@2x.png","33358e593e99cfe72ac2e9de6c9f244f"],["/lib/pdf/web/images/toolbarButton-secondaryToolbarToggle-rtl.png","2f4f9206840c72baef8a402175fbfc45"],["/lib/pdf/web/images/toolbarButton-secondaryToolbarToggle-rtl@2x.png","773ae955c3570a34012c730181f1bdfd"],["/lib/pdf/web/images/toolbarButton-secondaryToolbarToggle.png","7af7e96cf59fea4b789db1c5d4636d08"],["/lib/pdf/web/images/toolbarButton-secondaryToolbarToggle@2x.png","cdac287bc3d5648256e106dcb921c520"],["/lib/pdf/web/images/toolbarButton-sidebarToggle-rtl.png","4796174bdfd65f1861dc2bea81ce744c"],["/lib/pdf/web/images/toolbarButton-sidebarToggle-rtl@2x.png","4bdb2eb80c6a6cdcbedbc225bb661c08"],["/lib/pdf/web/images/toolbarButton-sidebarToggle.png","6c365a103073ff2d8303c68856df0a4e"],["/lib/pdf/web/images/toolbarButton-sidebarToggle@2x.png","b82384c2cc730c47b2e132eb89e9cec4"],["/lib/pdf/web/images/toolbarButton-viewAttachments.png","b58498a5ba191146108d60bf1e079592"],["/lib/pdf/web/images/toolbarButton-viewAttachments@2x.png","13c0f04fa5dd5a05059b017b28181304"],["/lib/pdf/web/images/toolbarButton-viewOutline-rtl.png","26e6d0ea3c09f725e9f5d2f91d7f4741"],["/lib/pdf/web/images/toolbarButton-viewOutline-rtl@2x.png","016d9158111a9dc6104628c0c1149077"],["/lib/pdf/web/images/toolbarButton-viewOutline.png","2d32348db7b0eca4195bf844551a5c58"],["/lib/pdf/web/images/toolbarButton-viewOutline@2x.png","9eb0bed2459b8cecb8d435849d7ae75c"],["/lib/pdf/web/images/toolbarButton-viewThumbnail.png","5ab2c00425ead7f7a0c219385d55bf03"],["/lib/pdf/web/images/toolbarButton-viewThumbnail@2x.png","f74f681bc5389d5163e0a845fff82b61"],["/lib/pdf/web/images/toolbarButton-zoomIn.png","1ec009b6c54709afa73d99db10c57039"],["/lib/pdf/web/images/toolbarButton-zoomIn@2x.png","19aea6e460a160e97ec298448d9f06f9"],["/lib/pdf/web/images/toolbarButton-zoomOut.png","e1256ccd98a1865848fb957009e6f7a9"],["/lib/pdf/web/images/toolbarButton-zoomOut@2x.png","cc2a035371ed64c3878f903e05a7fea8"],["/lib/pdf/web/images/treeitem-collapsed-rtl.png","b4a247f2a189f66715009f8bb1938398"],["/lib/pdf/web/images/treeitem-collapsed-rtl@2x.png","719f8e84b8f2b1907daa8c4138bee063"],["/lib/pdf/web/images/treeitem-collapsed.png","583ca0cee62b36c8972ef6b89967700b"],["/lib/pdf/web/images/treeitem-collapsed@2x.png","9879163b7a2d0bd390c73174c6e276d5"],["/lib/pdf/web/images/treeitem-expanded.png","6fd8d469b43811d4d0cbdbc2e3dca116"],["/lib/pdf/web/images/treeitem-expanded@2x.png","f71c9d5993e2823a1829a454014e0471"],["/lib/pdf/web/viewer.css","b3d971de800d9de3750852d963524667"],["/lib/pdf/web/viewer.html","b7f8a75f5a2344f0ea86722cb9a5ecc8"],["/lib/pdf/web/viewer.js","5aac0c33267911d640e1d321398eed8d"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/movies/index.html","87d52a152922f944c859e856d67b3f5a"],["/page/2/index.html","a0743539f452972bca7db729267b97a5"],["/page/3/index.html","f2ca61e4eda3e622370afb88e8c208ec"],["/page/4/index.html","9a8b09b79f8a7d3e38fe77b980c7dbd0"],["/sw-register.js","2f583824d892db9e46b70cfb7cc1b217"],["/tags/C/index.html","2d920ccc8bcab1049aa43f9aa86d1a0f"],["/tags/Communication-Sysems-and-Protocols/index.html","e3be3e9c00642cdbea7ddb88ff618e9d"],["/tags/Design-Digitaler-Schaltung/index.html","46246d87a98aafcb15152b1ddb83d8a1"],["/tags/Deutsch-A1-A2/index.html","d499ea1c2770fdcf9f26c629118c25ce"],["/tags/Easy-German/index.html","2d414b99de797c79b770ba5653c83fe1"],["/tags/FPGA/index.html","de24a9bd14a97ff07a7b2e7e783c5d45"],["/tags/Hexo/index.html","9c2ecd083666894dab97a319b36a7429"],["/tags/Horverstehen/index.html","fa842b03b1f3098302a543f7a4db1abf"],["/tags/MOSFET/index.html","a7d07c36b56a82b4ce71b62ec657c2dc"],["/tags/Microwave/index.html","cb20abadbab0a39aef80eb7c5b2c4ab8"],["/tags/Optimization-of-Dynamic-Systems/index.html","279fd500148f18eb0eca439d958b813b"],["/tags/Verilog-HDL/index.html","e1744a1b4337642137c5b1c725946719"],["/tags/Wortschatz/index.html","fd80ffdbd2e4474d22db1c535f3ccc6c"],["/tags/index.html","321cdd1570bf187b64ad86c375710ef8"],["/tags/数字超大规模集成电路设计/index.html","fc4d349c657c707f1e19cec730a4d76b"],["/tags/错误调试/index.html","c17c52596daaa9be45ae26b6f30bafad"],["/tags/随笔/index.html","1ab0798c64df0891d796b013de740b77"],["/top/index.html","dac16d389b42ae07ab9edd5d6d03671b"]];
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
