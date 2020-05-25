const remote = require('electron').remote
const win = remote.getCurrentWindow()

const size = remote.getCurrentWindow().webContents.getOwnerBrowserWindow().getBounds()
document.getElementById('wrapper').style.height = `${size.height - 2}px`
window.addEventListener('resize', () => {
  const size = remote.getCurrentWindow().webContents.getOwnerBrowserWindow().getBounds()
  document.getElementById('wrapper').style.height = `${size.height - 2}px`
})

document.getElementById('close').addEventListener('click', () => {
  win.close()
})
document.getElementById('minimize').addEventListener('click', () => {
  win.minimize()
})
document.getElementById('reload').addEventListener('click', () => {
  win.reload()
})

let isMaximized = false
document.getElementById('maximize').addEventListener('click', () => {
  if (isMaximized) {
    win.unmaximize()
    win.setResizable(true)
    isMaximized = false
  } else {
    win.maximize()
    win.setResizable(false)
    isMaximized = true
  }
})

window.addEventListener('online', () => {
  document.getElementById('load').style.display = 'none'
  document.getElementById('no-net').style.display = 'none'
})
window.addEventListener('offline', () => {
  document.getElementById('load').style.display = 'flex'
  document.getElementById('no-net').style.display = 'block'
})

const w = document.getElementById('webview')

// w.openDevTools()
w.addEventListener('dom-ready', function () {
  console.log(w.querySelectorAll('a'))
  document.getElementById('load').style.display = 'none'
  setInterval(() => {
    const title = w.getTitle()
    document.getElementById('window-title').innerHTML = title
    document.getElementById('title').innerHTML = title
  }, 5000)

  w.executeJavaScript(`
  let a = document.querySelectorAll('a[href^="http"]')

  for(let n of a){
    n.addEventListener('click', () => {
      shell.openExternal(n.href);
  })
  }
  `, true)
  w.insertCSS(`
  ._li {
    background: #fff !important;
}

._50tj {
    -webkit-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.13) !important;
    -moz-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.13) !important;
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.13) !important;
}

/* top blue bar */

/*top bar btn*/
._2s25 {
    color: #1f1f1f !important;
}

._2s25:hover {
    border-radius: 20px !important;
    background: #f2f3f5 !important;
    color: #3e3e3e !important;
}

._2s25:focus {
    border-radius: 20px !important;
    color: #3e3e3e !important;
}

._2s25:active {
    border-radius: 20px !important;
    color: #3e3e3e !important;
}

#facebook ._-kb div {
    font-family: inherit !important;
}

._585-,
._585- ._4w98 {
    color: #fff !important;
    background: #f2f3f5 !important;
    border: none !important;
    border-radius: 30px !important;
}

/*search*/
._1frb {
    color: #000 !important;
}

/* search */
/* search suggestmenu */
._5tlx {
    border: none !important;
    border-radius: 15px !important;
    overflow: hidden !important;
    margin-left: 7px !important;
}

._19eb {
    background: #284e86 !important;
    /* logo */
    padding: 3px !important;
    margin-right: 20px !important;
    border-radius: 5px !important;
}

._2s1x ._2s1y {
    background-color: white !important;
    border: none !important;
    zoom: 102% !important;
}

._5va1 {
    border-radius: 15px !important;
}

/*page inside post*/
._11qy {
    padding: 5px !important;
}

/*side stories bar*/

/* post */
.mbm {
    overflow: hidden !important;
}

._3ubp,
._sg1,
._16ve {
    background: white !important;
    border: none !important;
}

/*status update head bottom */
._5qtn ._5qtp {
    margin-left: 10px !important;
}

._4-u2 {
    border: none !important;
    border-radius: 15px !important;
    margin-top: 20px !important;
    -webkit-box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.13) !important;
    box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.13) !important;
}

/*post*/
._2yq ._4-u2::before {
    border: none !important;
}

/* post*/
#u_0_1m>div,
#u_ps_fetchstream_3_3_0>div {
    box-shadow: none !important;
}

._3vum {
    border: none !important;
}

#timeline_story_column {
    margin-left: 5px !important;
    margin-right: 5px !important;
}

._h2p ._3nzl .jewelButton ._2n_9,
._h2p ._3nzl .jewelButton:hover ._2n_9,
._h2p ._3nzl .jewelButton:focus ._2n_9 {
    background-image: url(https://github.com/Arif-un/Chrome-Extention--Material-Facebook/blob/master/icons/icon.png?raw=true) !important;
}

._h2p ._330i._1z4y .jewelButton ._2n_9,
._h2p ._330i._1z4y .jewelButton:hover ._2n_9,
._h2p ._330i._1z4y .jewelButton:focus ._2n_9 {
    background-image: url(https://github.com/Arif-un/Chrome-Extention--Material-Facebook/blob/master/icons/icon.png?raw=true) !important;
}

._h2p ._4xi2 a.jewelButton ._2n_9,
._h2p ._4xi2 a.jewelButton:hover ._2n_9,
._h2p ._4xi2 a.jewelButton:focus ._2n_9 {
    background-image: url(https://github.com/Arif-un/Chrome-Extention--Material-Facebook/blob/master/icons/icon.png?raw=true) !important;
}

._33xd._ydq {
    background-image: url(https://github.com/Arif-un/Chrome-Extention--Material-Facebook/blob/master/icons/icon.png?raw=true) !important;
    background-position: 0px -294px !important;
}

._33s3:active ._33xd._ydq,
._1dqw ._33xd._ydq {
    background-position: 0px -294px !important;
}

._h2p ._4d1i ._59fb,
._h2p ._4d1i ._59fc:hover ._59fb,
._h2p ._4d1i ._59fc:focus ._59fb {
    background-image: url(https://github.com/Arif-un/Chrome-Extention--Material-Facebook/blob/master/icons/icon.png?raw=true) !important;
    background-position: -103px -622px !important;
}

._h2p ._4d1i ._59fc:active ._59fb,
._h2p ._4d1i.openToggler ._59fc ._59fb {
    background-position: -103px -622px !important;
}

._h2p ._5lxt,
._h2p ._5lxs:hover ._5lxt,
._h2p ._5lxs:focus ._5lxt,
._h2p ._6qfu,
._h2p ._5lxs:hover ._6qfu,
._h2p ._5lxs:focus ._6qfu {
    background-image: url(https://github.com/Arif-un/Chrome-Extention--Material-Facebook/blob/master/icons/icon.png?raw=true) !important;
    background-position: -100px -293px !important;
}

._h2p ._5lxs:active ._5lxt,
._h2p .openToggler ._5lxs ._5lxt,
._h2p ._5lxs:active ._6qfu,
._h2p .openToggler ._5lxs ._6qfu {
    background-image: url(https://github.com/Arif-un/Chrome-Extention--Material-Facebook/blob/master/icons/icon.png?raw=true) !important;
    background-position: -100px -293px !important;
}

._yv- {
    border-radius: 15px !important;
}

._53il ._558b {
    padding-top: 8px !important;
}


/* friend req */
._h2p ._3nzl .jewelButton ._2n_9,
._h2p ._3nzl .jewelButton:hover ._2n_9,
._h2p ._3nzl .jewelButton:focus ._2n_9 {
    background-position: -26px -319px !important;
}

/* friend req active */
._h2p ._3nzl.hasNew .jewelButton ._2n_9,
._h2p ._3nzl .jewelButton:active ._2n_9,
._h2p ._3nzl.openToggler .jewelButton ._2n_9 {
    background-position: -26px -319px !important;
}

/* message */
._h2p ._330i._1z4y .jewelButton ._2n_9,
._h2p ._330i._1z4y .jewelButton:hover ._2n_9,
._h2p ._330i._1z4y .jewelButton:focus ._2n_9 {
    background-position: -75px -319px !important;
}

/* massege focus */
._h2p ._330i._1z4y.hasNew .jewelButton ._2n_9,
._h2p ._330i._1z4y .jewelButton:active ._2n_9,
._h2p ._330i._1z4y.openToggler .jewelButton ._2n_9 {
    background-position: -75px -319px !important;
}

/* notification */
._h2p ._4xi2 a.jewelButton ._2n_9,
._h2p ._4xi2 a.jewelButton:hover ._2n_9,
._h2p ._4xi2 a.jewelButton:focus ._2n_9 {
    background-position: -27px -169px !important;
}

/* notification focus */
._h2p ._4xi2.hasNew a.jewelButton ._2n_9,
._h2p ._4xi2 a.jewelButton:active ._2n_9,
._h2p ._4xi2.openToggler a.jewelButton ._2n_9 {
    background-position: -27px -169px !important;
}

._3sod {
    /*  border:none !important ; */
    border-radius: 15px !important;
}

/* notification ballon */

._5vb_,
._5vb_ #contentCol,
html ._4lh,
._4lh .fbTimelineTimePeriod,
._4lh .fbTimelineSectionExpandPager .uiMorePagerLoader,
._4lh .fbTimelineSectionLoading .loadingIndicator,
.fbChatSidebar {
    background-color: #fff !important;
}

/*body color*/
.fbChatSidebar,
._5pr2 .fbChatSidebar {
    border: none !important;
    box-shadow: none !important;
}

/*fb chatbar*/
._rv {
    border-radius: 50% !important;
}

/*chat manu hover pic*/
._53ij {
    border-radius: 15px !important;
}

._55ln {
    margin: 3px !important;
    border-radius: 20px !important;
    transition: box-shadow .3s !important;
}

/*chat people hover*/
._qhr:hover {
    border-radius: 20px !important;
    background: #fff !important;
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.2) !important;
    -webkit-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.2) !important;
    -moz-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.2) !important;
}

/*chat people hover*/
._40qq {
    background: #2d2d2d !important;
}

/* close btn */
.coverBorder,
.coverPhotoImg {
    border-radius: 0 0 15px 15px !important;
}

/* cover photo */
.uiContextualLayer,
._50c9 {
    border-radius: 15px !important;
}

/*search suggest*/
._3w53 {
    border-radius: 0 0 20px 20px !important;
}

._129h {
    border: none !important;
    border-radius: 50px !important;
}

._129h:focus-within {
    border: 2px solid #95bbff !important;
}

._5vsj .UFIRow._2o9m {
    border-radius: 0 0 15px 15px !important;
}

/*comnt*/
._5vsj._5vsj._5vsj {
    border-radius: 0 0 15px 15px !important;
}

/* comnt*/
._fmi {
    border: none !important;
    background-color: #efefef !important;
}

/*comnt box*/
._fmi:focus-within {
    border: 2px solid #aacbff !important;
}

/*comnt box*/
._1ndf:hover {
    border-radius: 0 0 15px 15px !important;
}

/*share hover */
._3ubp {
    border-radius: 15px 15px 0 0 !important;
}

/*status head*/
._2dck {
    border-radius: 0 0 15px 15px !important;
}

/* status bar focus bottom */
._5afe::after {
    border: none !important;
    border-radius: 15px !important;
}

/*sidebar li*/
._2jq5 {
    border-radius: 15px !important;
}

/*sidebar li*/
._3m75 .sideNavItem .uiSideNavEditButton a {
    border-radius: 15px !important;
}

/*sidebar li*/
._1mtp ._3wv2:hover,
._1mtp ._4k43:hover,
._1mtp ._4noj:hover,
._1mtp ._60p-:hover,
._1mtp ._1mtq:hover,
._1mtp ._38qe:hover,
._1mtp ._4292:hover,
._1mtp ._1ka4:hover {
    border-radius: 15px !important;
}

/*like btn*/

/* like butons */
._18vj._18vj {
    border-radius: 50px ! important !important;
    outline: none !important;
}

/* notification pop */
._2xwp {
    border: none !important;
    border-radius: 15px !important;
}

._54ng {
    border: none !important;
    border-radius: 15px !important;
}

/*logout manu*/
.jewelHeader {
    border-radius: 15px 10px 0 0 !important;
}

/*notification , msg, request manus*/
.uiToggleFlyout {
    border: none !important;
    border-radius: 15px 10px 15px 15px !important;
}

/*notification , msg, request manus*/
.jewelFooter a {
    border-radius: 0 0 15px 15px !important;
}

/*notification , msg, request manus*/
._1nv3 ._11kf {
    border-radius: 50% !important;
}

/* profile pic */
._1nv5 {
    border-radius: 50% !important;
}

/* profile pic */
._517h {
    border: none !important;
    border-radius: 20px !important;
}

/* btn style */
button {
    border-radius: 20px !important;
}

button:active {
    border-radius: 20px !important;
}

.fbTimelineTopSection {
    border: none !important;
    border-radius: 15px !important;
}

/* above cover photo section */
._3y89 {
    border: none !important;
}

._59s7 {
    border-radius: 20px !important;
}

/* modal */
._50f4 {
    border-radius: 20px !important;
}

/* modal */
._4t2a {
    border-radius: 20px !important;
}

/* modal */
._4-i0 {
    border-radius: 20px 20px 0 0 !important;
}

/* modal head */
.photoUfiContainer {
    border-radius: 0 20px 20px 0 !important;
}

/* pic modal */
.stageWrapper {
    border-radius: 20px 0 0 20px !important;
}

/* pic modal */
._4g9v {
    border-radius: 20px 0 0 0 !important;
}

/* pic modal */
._6vu5 {
    border-radius: 15px 15px 0 0 !important;
}

._69pt {
    border-radius: 15px 15px 0 0 !important;
}

._2orx {
    border-radius: 0 0 15px 15px !important;
}

._5sqx {
    margin: 0 !important;
    border-radius: 0px !important;
}

._5sqx {
    margin: 0 !important;
    border-radius: 0px !important;
}

._58al,
._4oes {
    background: #fff !important;
    border-radius: 20px !important;
}

.uiButtonGroup,
.uiButtonGroupItem {
    border: none !important;
    border-radius: 20px !important;
}

/* profile top bar */
.back {
    border-radius: 0 0 15px 15px !important;
}

/* profile top bar */
._4jhq,
._2dgj,
._qa1 {
    border: none !important;
    border-radius: 15px !important;
}

/* page profile pic */
._4-u5 {
    background: #fff !important;
}

/* page background */
._3o_h::after,
._2yaa ._2yau::after {
    border: none !important;
    border-radius: 20px !important;
}

/* page button */
._3_gi .uiSearchInput::after,
._3_gi .uiTypeahead::after,
._3_gi ._58ak::after {
    border-radius: 20px !important;
}

/* group search button */
._2tev {
    border-radius: 15px 15px 0 0 !important;
}

/* group suggest  */
._hoc {
    margin: 0 !important;
    border-radius: 0 0 15px 15px !important;
}

/* unliked page top bar */
._hij {
    border-radius: 15px !important;
}

._h5y {
    border-radius: 15px 15px 0 0 !important;
}

/*  profile pop up */
._572u {
    border-radius: 0 0 15px 15px !important;
}

/* profile pop up */

/* grps side link */
._2yau::after {
    border: none !important;
    border-radius: 50px !important;
}

#pagelet_ego_pane {
    margin-top: 14px !important;
}

._2yaa {
    border: none !important;
    border-radius: 20px !important;
}

._36nj::after {
    border: none !important;
}

._36nj::before {
    border: none !important;
}

._2tev {
    border-radius: 15px 15px 0 0 !important;
}

/*instant game bar*/
._4ejc {
    background-color: white !important;
}`)
})
