(function(document){"use strict";var b=document.querySelector("#app");b.appName="Road to Polymer",b.showHideButtonLeft="8px;",b.page=0,b.forumEmbedSrc="https://groups.google.com/forum/embed/?place=forum/polymer-dev&showsearch=true&showpopout=true&showtabs=false",b.addEventListener("template-bound",function(){console.log("Road to Polymer 1.0 is ready to rock!",b.smallScreen)}),b.toggleDrawer=function(){"chevron-left"==b.$.show_hide_button.icon?(b.$.show_hide_button.icon="chevron-right",b.showHideButtonLeft="5px;"):(b.$.show_hide_button.icon="chevron-left",b.showHideButtonLeft="205px;"),b.$.drawer_panel.togglePanel()},b.selectMenu=function(){console.log("selectMenu: ",b.smallScreen),b.smallScreen&&(b.$.drawer_panel.closeDrawer(),b.$.show_hide_button.icon="chevron-right",b.showHideButtonLeft="8px;")}}(wrap(document));
