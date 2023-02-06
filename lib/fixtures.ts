export const noTags = `
<!DOCTYPE html>
<html data-color-theme="auto">
  <head>
    <meta http-equiv="Content-type" content="text/html; charset=utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="IE=Edge">
    <meta name="apple-mobile-web-app-title" content="Jisho">
    <meta name="theme-color" content="#47DB27">
    <link href="/opensearch.xml" rel='search' title='Jisho' type='application/opensearchdescription+xml'>
    <link rel="icon" href="https://assets.jisho.org/assets/touch-icon-017b99ca4bfd11363a97f66cc4c00b1667613a05e38d08d858aa5e2a35dce055.png">
    <link rel="apple-touch-icon" href="https://assets.jisho.org/assets/touch-icon-017b99ca4bfd11363a97f66cc4c00b1667613a05e38d08d858aa5e2a35dce055.png">
    <script>

/* Modernizr 2.6.2 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-touch-cssclasses-addtest-prefixed-teststyles-testprop-testallprops-prefixes-domprefixes
 */
;window.Modernizr=function(a,b,c){function z(a){j.cssText=a}function A(a,b){return z(m.join(a+";")+(b||""))}function B(a,b){return typeof a===b}function C(a,b){return!!~(""+a).indexOf(b)}function D(a,b){for(var d in a){var e=a[d];if(!C(e,"-")&&j[e]!==c)return b=="pfx"?e:!0}return!1}function E(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:B(f,"function")?f.bind(d||b):f}return!1}function F(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),e=(a+" "+o.join(d+" ")+d).split(" ");return B(b,"string")||B(b,"undefined")?D(e,b):(e=(a+" "+p.join(d+" ")+d).split(" "),E(e,b,c))}var d="2.6.2",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k,l={}.toString,m=" -webkit- -moz- -o- -ms- ".split(" "),n="Webkit Moz O ms",o=n.split(" "),p=n.toLowerCase().split(" "),q={},r={},s={},t=[],u=t.slice,v,w=function(a,c,d,e){var f,i,j,k,l=b.createElement("div"),m=b.body,n=m||b.createElement("body");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:h+(d+1),l.appendChild(j);return f=["&#173;",'<style id="s',h,'">',a,"</style>"].join(""),l.id=h,(m?l:n).innerHTML+=f,n.appendChild(l),m||(n.style.background="",n.style.overflow="hidden",k=g.style.overflow,g.style.overflow="hidden",g.appendChild(n)),i=c(l,a),m?l.parentNode.removeChild(l):(n.parentNode.removeChild(n),g.style.overflow=k),!!i},x={}.hasOwnProperty,y;!B(x,"undefined")&&!B(x.call,"undefined")?y=function(a,b){return x.call(a,b)}:y=function(a,b){return b in a&&B(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=u.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(u.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(u.call(arguments)))};return e}),q.touch=function(){var c;return"ontouchstart"in a||a.DocumentTouch&&b instanceof DocumentTouch?c=!0:w(["@media (",m.join("touch-enabled),("),h,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(a){c=a.offsetTop===9}),c};for(var G in q)y(q,G)&&(v=G.toLowerCase(),e[v]=q[G](),t.push((e[v]?"":"no-")+v));return e.addTest=function(a,b){if(typeof a=="object")for(var d in a)y(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof f!="undefined"&&f&&(g.className+=" "+(b?"":"no-")+a),e[a]=b}return e},z(""),i=k=null,e._version=d,e._prefixes=m,e._domPrefixes=p,e._cssomPrefixes=o,e.testProp=function(a){return D([a])},e.testAllProps=F,e.testStyles=w,e.prefixed=function(a,b,c){return b?F(a,b,c):F(a,"pfx")},g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+t.join(" "):""),e}(this,this.document);

</script>

<script>

  Modernizr.addTest('speech', function(){
    return Modernizr.prefixed('speechRecognition', window);
  });

  Modernizr.addTest('AudioContext', function(){
    return Modernizr.prefixed('AudioContext', window);
  });

  Modernizr.addTest('getUserMedia', function(){
    return Modernizr.prefixed('getUserMedia', navigator);
  });

</script>

    <link rel="stylesheet" media="screen" href="https://assets.jisho.org/assets/application-61d8e80944056be2e8c772e3d3b243767cc3550ca5b7da4d62ba58a5604fc3c3.css" />
    <meta name="csrf-param" content="authenticity_token" />
<meta name="csrf-token" content="/bXjeXxiY7tVui+PUtk4Vg4+Fs2Wl7R7ws69G97blYGVmjc4CZJZv3wYrExihrWe71Vw6tf3NatHNijgKsB3ww==" />
    
    <link rel="shortcut icon" type="image/x-icon" href="https://assets.jisho.org/assets/favicon-062c4a0240e1e6d72c38aa524742c2d558ee6234497d91dd6b75a182ea823d65.ico" />
    <title>Jisho.org: Japanese Dictionary</title>
    <meta name="Description" content="Powerful and easy-to-use online Japanese dictionary with words, kanji and example sentences.">
    <script async src="https://pagead2.googlesyndication.com/tag/js/gpt.js"></script>
    <script>
      var googletag = googletag || {};
      googletag.cmd = googletag.cmd || [];
    </script>
    <script>
      googletag.cmd.push(function() {
        googletag.pubads().setPrivacySettings({
          limitedAds: true,
          nonPersonalizedAds: true,
          restrictDataProcessing: true,
        });
      });

      googletag.cmd.push(function() {
        googletag.defineSlot('\/1910472\/search_right_half', [ 300.0 ,  150.0 ], 'div-gpt-ad-1528340241998-0').addService(googletag.pubads());
        googletag.defineSlot('\/1910472\/search_right_full', [ 300.0 ,  250.0 ], 'div-gpt-ad-1528340390859-0').addService(googletag.pubads());
        googletag.defineSlot('\/1910472\/search_bottom_leaderboard', [ 728.0 ,  90.0 ], 'div-gpt-ad-1528340463374-0').addService(googletag.pubads());
        googletag.pubads().enableSingleRequest();
        googletag.pubads().collapseEmptyDivs();
        googletag.enableServices();
      });
    </script>
  </head>
  <body class=" highlight_keyword highlight_common_readings highlight_common_representations production">
    
<header class="row collapse">
  <div class="small-4 columns">
    <h1 class="logo"><a href="/">Jisho</a></h1>
  </div>
  <div class="small-8 columns">
    <nav class="nav-main_navigation">
  <ul class="links">
    <li><a href="/forum">Forum</a></li>
    <li><a href="/about">About</a></li>
    <li>
      <div class="color_theme_picker--wrapper">
        <a href="#">Theme</a>
        <ul class="color_theme_picker--choices">
          <li><a href="/word/%E3%81%95%E3%81%82?color_theme=light">Light mode</a></li>
          <li><a href="/word/%E3%81%95%E3%81%82?color_theme=dark">Dark mode</a></li>
          <li><div>Auto</div></li>
        </ul>
      </div>
    </li> 
    <li>
      <div id="login_link">
          <a href="/auth/auth0">Log in / Sign up</a>
      </div>
    </li>
  </ul>
</nav>

  </div>
</header>

    <div class="row collapse">
      <div class="large-12 columns">
        <form class="search" data-live="false" id="search" action="/search" accept-charset="UTF-8" method="get"><input name="utf8" type="hidden" value="&#x2713;" />  <div id="input_methods" class="input_methods">
    <div class="input_method_button disable-mobile-hover-background" id="handwriting_button">
      <svg viewBox="0 0 30 30" class="icon tablet-icon ">
  <use xlink:href="https://jisho.org/assets/icons-ab7975eb6f8bb532f99ba2d769be43c5431dec4c0e4d220df7367f1d954d9424.svg#tablet"></use>
</svg>

      <h4>Draw</h4>
    </div>
    <div class="input_method_button disable-mobile-hover-background" id="radical_button">
      <svg viewBox="0 0 30 30" class="icon radical-icon ">
  <use xlink:href="https://jisho.org/assets/icons-ab7975eb6f8bb532f99ba2d769be43c5431dec4c0e4d220df7367f1d954d9424.svg#radical"></use>
</svg>

      <h4>Radicals</h4>
    </div>
    <div class="input_method_button disable-mobile-hover-background" id="speech_button">
      <svg viewBox="0 0 30 30" class="icon speech-icon ">
  <use xlink:href="https://jisho.org/assets/icons-ab7975eb6f8bb532f99ba2d769be43c5431dec4c0e4d220df7367f1d954d9424.svg#speech"></use>
</svg>

      <h4>Voice</h4>
    </div>
  </div>
  <div class="overlay">
    <div id="search_main" class="main">
      <div class="inner">
        <div id="advanced_button" class="search_type">
          <span class="text" id="search_dropdown_text">All</span>
          <span class="carat">▾</span>
        </div>
        <button type="submit" class="submit icon" tabindex="2">
          <svg viewBox="0 0 30 30" class="icon search-icon ">
  <use xlink:href="https://jisho.org/assets/icons-ab7975eb6f8bb532f99ba2d769be43c5431dec4c0e4d220df7367f1d954d9424.svg#search"></use>
</svg>

        </button>
        <a class="search-form_clear-button_js search-form_clear-button icon" accesskey="1" tabindex="3">
          <svg viewBox="0 0 30 30" class="icon clear-icon ">
  <use xlink:href="https://jisho.org/assets/icons-ab7975eb6f8bb532f99ba2d769be43c5431dec4c0e4d220df7367f1d954d9424.svg#clear"></use>
</svg>

        </a>

        <div class="text_input">
          <div class="hidden range"></div>
          <input
            type="text"
            class="keyword japanese_gothic"
            name="keyword"
            id="keyword"
            value=""
            tabindex="1"
            lang="ja"
            autocapitalize="off"
            autocomplete="off"
            autocorrect="off"
            spellcheck="false"
            placeholder="English, Japanese, Romaji, words or text"
            data-autoload="false"
            data-effective-keyword=""
          />
        </div>
      </div>
      <div id="search_sub" class="sub">
        <div id="radical_area" class="area radical">
  <div class="results_wrapper">
  <div class="results">
    <div class="list">
      <div class="instructions">
        <div class="vertical-bottom">
          <div class="vertical-bottom-inner">
            
    <div class="arrow">▾</div>
    <div class="text">
      Find kanji by their parts. Click on
      <svg viewBox="0 0 30 30" class="icon reset-icon inline">
  <use xlink:href="https://jisho.org/assets/icons-ab7975eb6f8bb532f99ba2d769be43c5431dec4c0e4d220df7367f1d954d9424.svg#reset"></use>
</svg>

      to reset radicals.
    </div>

          </div>
        </div>
      </div>
    </div>
    <div class="show_more">More</div>
    <div class="show_less link">Less</div>
  </div>
  <div class="scroll_indicator show-for-small-only"></div>
</div>
  <!-- <p>
  Click on the parts that are in the kanji you are looking for. You can click on them again to de-select them.
  <input type="button" value="Reset" id="reset_button" onclick='Radicals.reset()' />
</p> -->

<ul class="radical_table clearfix" lang="ja">
  <li class="reset_icon_list_item">
    <svg viewBox="0 0 30 30" class="icon reset-icon reset_radicals" title="Reset selection">
  <use xlink:href="https://jisho.org/assets/icons-ab7975eb6f8bb532f99ba2d769be43c5431dec4c0e4d220df7367f1d954d9424.svg#reset"></use>
</svg>

  </li>
  <li class="number">1</li>
  <li class="radical" data-radical="1">一</li>
  <li class="radical" data-radical="2">｜</li>
  <li class="radical" data-radical="3">丶</li>
  <li class="radical" data-radical="4">ノ</li>
  <li class="radical" data-radical="5">乙</li>
  <li class="radical" data-radical="6">亅</li>
  <li class="number">2</li>
  <li class="radical" data-radical="7">二</li>
  <li class="radical" data-radical="8">亠</li>
  <li class="radical" data-radical="9">人</li>
  <li class="radical radical-image radical-10" data-radical="10" data-radk="化">⺅</li>
  <li class="radical radical-image radical-11" data-radical="11" data-radk="个">𠆢</li>
  <li class="radical" data-radical="12">儿</li>
  <li class="radical" data-radical="13">入</li>
  <li class="radical" data-radical="14">ハ</li>
  <li class="radical radical-image radical-15" data-radical="15" data-radk="并">丷</li>
  <li class="radical" data-radical="16">冂</li>
  <li class="radical" data-radical="17">冖</li>
  <li class="radical" data-radical="18">冫</li>
  <li class="radical" data-radical="19">几</li>
  <li class="radical" data-radical="20">凵</li>
  <li class="radical" data-radical="21">刀</li>
  <li class="radical radical-image radical-22" data-radical="22" data-radk="刈">⺉</li>
  <li class="radical" data-radical="23">力</li>
  <li class="radical" data-radical="24">勹</li>
  <li class="radical" data-radical="25">匕</li>
  <li class="radical" data-radical="26">匚</li>
  <li class="radical" data-radical="27">十</li>
  <li class="radical" data-radical="28">卜</li>
  <li class="radical" data-radical="29">卩</li>
  <li class="radical" data-radical="30">厂</li>
  <li class="radical" data-radical="31">厶</li>
  <li class="radical" data-radical="32">又</li>
  <li class="radical" data-radical="33">マ</li>
  <li class="radical" data-radical="34">九</li>
  <li class="radical" data-radical="35">ユ</li>
  <li class="radical" data-radical="36">乃</li>
  <li class="radical" data-radical="360" data-radk="乞">𠂉</li>
  <li class="number">3</li>
  <li class="radical radical-image radical-37" data-radical="37" data-radk="込">⻌</li>
  <li class="radical" data-radical="38">口</li>
  <li class="radical" data-radical="39">囗</li>
  <li class="radical" data-radical="40">土</li>
  <li class="radical" data-radical="41">士</li>
  <li class="radical" data-radical="42">夂</li>
  <li class="radical" data-radical="43">夕</li>
  <li class="radical" data-radical="44">大</li>
  <li class="radical" data-radical="45">女</li>
  <li class="radical" data-radical="46">子</li>
  <li class="radical" data-radical="47">宀</li>
  <li class="radical" data-radical="48">寸</li>
  <li class="radical" data-radical="49">小</li>
  <li class="radical radical-image radical-50" data-radical="50" data-radk="尚">⺌</li>
  <li class="radical" data-radical="51">尢</li>
  <li class="radical" data-radical="52">尸</li>
  <li class="radical" data-radical="53">屮</li>
  <li class="radical" data-radical="54">山</li>
  <li class="radical" data-radical="55">川</li>
  <li class="radical" data-radical="56">巛</li>
  <li class="radical" data-radical="57">工</li>
  <li class="radical" data-radical="58">已</li>
  <li class="radical" data-radical="59">巾</li>
  <li class="radical" data-radical="60">干</li>
  <li class="radical" data-radical="61">幺</li>
  <li class="radical" data-radical="62">广</li>
  <li class="radical" data-radical="63">廴</li>
  <li class="radical" data-radical="64">廾</li>
  <li class="radical" data-radical="65">弋</li>
  <li class="radical" data-radical="66">弓</li>
  <li class="radical" data-radical="67">ヨ</li>
  <li class="radical" data-radical="68">彑</li>
  <li class="radical" data-radical="69">彡</li>
  <li class="radical" data-radical="70">彳</li>
  <li class="radical radical-image radical-71" data-radical="71" data-radk="忙">⺖</li>
  <li class="radical radical-image radical-72" data-radical="72" data-radk="扎">⺘</li>
  <li class="radical radical-image radical-73" data-radical="73" data-radk="汁">⺡</li>
  <li class="radical radical-image radical-74" data-radical="74" data-radk="犯">⺨</li>
  <li class="radical radical-image radical-75" data-radical="75" data-radk="艾">⺾</li>
  <li class="radical radical-image radical-76" data-radical="76" data-radk="邦">⻏</li>
  <li class="radical radical-image radical-77" data-radical="77" data-radk="阡">⻖</li>
  <li class="radical" data-radical="78">也</li>
  <li class="radical" data-radical="79">亡</li>
  <li class="radical" data-radical="80">及</li>
  <li class="radical" data-radical="81">久</li>
  <li class="number">4</li>
  <li class="radical radical-image radical-82" data-radical="82" data-radk="老">⺹</li>
  <li class="radical" data-radical="83">心</li>
  <li class="radical" data-radical="84">戈</li>
  <li class="radical" data-radical="85">戸</li>
  <li class="radical" data-radical="86">手</li>
  <li class="radical" data-radical="87">支</li>
  <li class="radical" data-radical="88">攵</li>
  <li class="radical" data-radical="89">文</li>
  <li class="radical" data-radical="90">斗</li>
  <li class="radical" data-radical="91">斤</li>
  <li class="radical" data-radical="92">方</li>
  <li class="radical" data-radical="93">无</li>
  <li class="radical" data-radical="94">日</li>
  <li class="radical" data-radical="95">曰</li>
  <li class="radical" data-radical="96">月</li>
  <li class="radical" data-radical="97">木</li>
  <li class="radical" data-radical="98">欠</li>
  <li class="radical" data-radical="99">止</li>
  <li class="radical" data-radical="100">歹</li>
  <li class="radical" data-radical="101">殳</li>
  <li class="radical" data-radical="102">比</li>
  <li class="radical" data-radical="103">毛</li>
  <li class="radical" data-radical="104">氏</li>
  <li class="radical" data-radical="105">气</li>
  <li class="radical" data-radical="106">水</li>
  <li class="radical" data-radical="107">火</li>
  <li class="radical radical-image radical-108" data-radical="108" data-radk="杰">⺣</li>
  <li class="radical" data-radical="109">爪</li>
  <li class="radical" data-radical="110">父</li>
  <li class="radical" data-radical="111">爻</li>
  <li class="radical" data-radical="112">爿</li>
  <li class="radical" data-radical="113">片</li>
  <li class="radical" data-radical="114">牛</li>
  <li class="radical" data-radical="115">犬</li>
  <li class="radical radical-image radical-116" data-radical="116" data-radk="礼">⺭</li>
  <li class="radical" data-radical="117">王</li>
  <li class="radical" data-radical="118">元</li>
  <li class="radical" data-radical="119">井</li>
  <li class="radical" data-radical="120">勿</li>
  <li class="radical" data-radical="121">尤</li>
  <li class="radical" data-radical="122">五</li>
  <li class="radical" data-radical="123">屯</li>
  <li class="radical" data-radical="124">巴</li>
  <li class="radical" data-radical="125">毋</li>
  <li class="number">5</li>
  <li class="radical" data-radical="126">玄</li>
  <li class="radical" data-radical="127">瓦</li>
  <li class="radical" data-radical="128">甘</li>
  <li class="radical" data-radical="129">生</li>
  <li class="radical" data-radical="130">用</li>
  <li class="radical" data-radical="131">田</li>
  <li class="radical" data-radical="132">疋</li>
  <li class="radical radical-image radical-133" data-radical="133" data-radk="疔">疒</li>
  <li class="radical" data-radical="134">癶</li>
  <li class="radical" data-radical="135">白</li>
  <li class="radical" data-radical="136">皮</li>
  <li class="radical" data-radical="137">皿</li>
  <li class="radical" data-radical="138">目</li>
  <li class="radical" data-radical="139">矛</li>
  <li class="radical" data-radical="140">矢</li>
  <li class="radical" data-radical="141">石</li>
  <li class="radical" data-radical="142">示</li>
  <li class="radical radical-image radical-143" data-radical="143" data-radk="禹">禸</li>
  <li class="radical" data-radical="144">禾</li>
  <li class="radical" data-radical="145">穴</li>
  <li class="radical" data-radical="146">立</li>
  <li class="radical radical-image radical-147" data-radical="147" data-radk="初">⻂</li>
  <li class="radical" data-radical="148">世</li>
  <li class="radical" data-radical="149">巨</li>
  <li class="radical" data-radical="150">冊</li>
  <li class="radical" data-radical="151">母</li>
  <li class="radical radical-image radical-152" data-radical="152" data-radk="買">⺲</li>
  <li class="radical" data-radical="153">牙</li>
  <li class="number">6</li>
  <li class="radical" data-radical="154">瓜</li>
  <li class="radical" data-radical="155">竹</li>
  <li class="radical" data-radical="156">米</li>
  <li class="radical" data-radical="157">糸</li>
  <li class="radical" data-radical="158">缶</li>
  <li class="radical" data-radical="159">羊</li>
  <li class="radical" data-radical="160">羽</li>
  <li class="radical" data-radical="161">而</li>
  <li class="radical" data-radical="162">耒</li>
  <li class="radical" data-radical="163">耳</li>
  <li class="radical" data-radical="164">聿</li>
  <li class="radical" data-radical="165">肉</li>
  <li class="radical" data-radical="166">自</li>
  <li class="radical" data-radical="167">至</li>
  <li class="radical" data-radical="168">臼</li>
  <li class="radical" data-radical="169">舌</li>
  <li class="radical" data-radical="170">舟</li>
  <li class="radical" data-radical="171">艮</li>
  <li class="radical" data-radical="172">色</li>
  <li class="radical" data-radical="173">虍</li>
  <li class="radical" data-radical="174">虫</li>
  <li class="radical" data-radical="175">血</li>
  <li class="radical" data-radical="176">行</li>
  <li class="radical" data-radical="177">衣</li>
  <li class="radical" data-radical="178">西</li>
  <li class="number">7</li>
  <li class="radical" data-radical="179">臣</li>
  <li class="radical" data-radical="180">見</li>
  <li class="radical" data-radical="181">角</li>
  <li class="radical" data-radical="182">言</li>
  <li class="radical" data-radical="183">谷</li>
  <li class="radical" data-radical="184">豆</li>
  <li class="radical" data-radical="185">豕</li>
  <li class="radical" data-radical="186">豸</li>
  <li class="radical" data-radical="187">貝</li>
  <li class="radical" data-radical="188">赤</li>
  <li class="radical" data-radical="189">走</li>
  <li class="radical" data-radical="190">足</li>
  <li class="radical" data-radical="191">身</li>
  <li class="radical" data-radical="192">車</li>
  <li class="radical" data-radical="193">辛</li>
  <li class="radical" data-radical="194">辰</li>
  <li class="radical" data-radical="195">酉</li>
  <li class="radical" data-radical="196">釆</li>
  <li class="radical" data-radical="197">里</li>
  <li class="radical" data-radical="198">舛</li>
  <li class="radical" data-radical="199">麦</li>
  <li class="number">8</li>
  <li class="radical" data-radical="200">金</li>
  <li class="radical" data-radical="201">長</li>
  <li class="radical" data-radical="202">門</li>
  <li class="radical" data-radical="203">隶</li>
  <li class="radical" data-radical="204">隹</li>
  <li class="radical" data-radical="205">雨</li>
  <li class="radical" data-radical="206">青</li>
  <li class="radical" data-radical="207">非</li>
  <li class="radical" data-radical="208">奄</li>
  <li class="radical" data-radical="209">岡</li>
  <li class="radical" data-radical="210">免</li>
  <li class="radical" data-radical="211">斉</li>
  <li class="number">9</li>
  <li class="radical" data-radical="212">面</li>
  <li class="radical" data-radical="213">革</li>
  <li class="radical" data-radical="214">韭</li>
  <li class="radical" data-radical="215">音</li>
  <li class="radical" data-radical="216">頁</li>
  <li class="radical" data-radical="217">風</li>
  <li class="radical" data-radical="218">飛</li>
  <li class="radical" data-radical="219">食</li>
  <li class="radical" data-radical="220">首</li>
  <li class="radical" data-radical="221">香</li>
  <li class="radical" data-radical="222">品</li>
  <li class="number">10</li>
  <li class="radical" data-radical="223">馬</li>
  <li class="radical" data-radical="224">骨</li>
  <li class="radical" data-radical="225">高</li>
  <li class="radical" data-radical="226">髟</li>
  <li class="radical" data-radical="227">鬥</li>
  <li class="radical" data-radical="228">鬯</li>
  <li class="radical" data-radical="229">鬲</li>
  <li class="radical" data-radical="230">鬼</li>
  <li class="radical" data-radical="231">竜</li>
  <li class="radical" data-radical="232">韋</li>
  <li class="number">11</li>
  <li class="radical" data-radical="233">魚</li>
  <li class="radical" data-radical="234">鳥</li>
  <li class="radical" data-radical="235">鹵</li>
  <li class="radical" data-radical="236">鹿</li>
  <li class="radical" data-radical="237">麻</li>
  <li class="radical" data-radical="238">亀</li>
  <li class="radical radical-image radical-239" data-radical="239" data-radk="滴">啇</li>
  <li class="radical" data-radical="240">黄</li>
  <li class="radical" data-radical="241">黒</li>
  <li class="number">12</li>
  <li class="radical" data-radical="242">黍</li>
  <li class="radical" data-radical="243">黹</li>
  <li class="radical" data-radical="244">無</li>
  <li class="radical" data-radical="245">歯</li>
  <li class="number">13</li>
  <li class="radical" data-radical="246">黽</li>
  <li class="radical" data-radical="247">鼎</li>
  <li class="radical" data-radical="248">鼓</li>
  <li class="radical" data-radical="249">鼠</li>
  <li class="number">14</li>
  <li class="radical" data-radical="250">鼻</li>
  <li class="radical" data-radical="251">齊</li>
  <li class="number">17</li>
  <li class="radical" data-radical="252">龠</li>
</ul>

</div>

        <div id="handwriting_area" class="area handwriting" data-url="/handwriting">
  <div class="results_wrapper">
  <div class="results">
    <div class="list">
      <div class="instructions">
        <div class="vertical-bottom">
          <div class="vertical-bottom-inner">
            
    <div class="arrow">▾</div>
    <div class="text">Input kanji by handwriting. Just start drawing!</div>

          </div>
        </div>
      </div>
    </div>
    <div class="show_more">More</div>
    <div class="show_less link">Less</div>
  </div>
  <div class="scroll_indicator show-for-small-only"></div>
</div>
  <div class="inputs">
    <div class="panel disablePanZoomInIE">
  <canvas width="310" height="275"></canvas>
  <svg viewBox="0 0 30 30" class="icon pencil-icon ">
  <use xlink:href="https://jisho.org/assets/icons-ab7975eb6f8bb532f99ba2d769be43c5431dec4c0e4d220df7367f1d954d9424.svg#pencil"></use>
</svg>

  <div class="buttons">
    <button type="button" class="tiny reset button">Clear</button>
    <button type="button" class="tiny back button">Back</button>
  </div>
</div>

    <div class="panel disablePanZoomInIE">
  <canvas width="310" height="275"></canvas>
  <svg viewBox="0 0 30 30" class="icon pencil-icon ">
  <use xlink:href="https://jisho.org/assets/icons-ab7975eb6f8bb532f99ba2d769be43c5431dec4c0e4d220df7367f1d954d9424.svg#pencil"></use>
</svg>

  <div class="buttons">
    <button type="button" class="tiny reset button">Clear</button>
    <button type="button" class="tiny back button">Back</button>
  </div>
</div>

  </div>
</div>

        <div id="speech_area" class="area speech">

  <div class="speech_results"></div>

  <div class="explanation">
    <div class="arrow">▴</div>
    <div class="text">
      Speak! You can use words like "back", "clear", "stop", "input", or "search".  At any time say "Japanese" to switch to Japanese (requires permissions again).
    </div>
  </div>

  <div class="buttons">
    <button class="tiny english">English</button>
    <button class="tiny japanese">Japanese</button>
  </div>
</div>

        <div id="advanced_area" class="hidden area advanced">
  <div class="filters">
  <ul class="button-group radius" data-filter-group="type">
    <li><a accesskey="a" class=" filter small button" data-filter="type-all" href="//jisho.org/search">All</a></li>
    <li><a accesskey="w" class=" filter small button" data-filter="words" href="//jisho.org/search">Words</a></li>
    <li><a accesskey="k" class=" filter small button" data-filter="kanji" href="//jisho.org/search">Kanji</a></li>
    <li><a accesskey="s" class=" filter small button" data-filter="sentences" href="//jisho.org/search">Sentences</a></li>
    <li><a accesskey="n" class=" filter small button" data-filter="names" href="//jisho.org/search">Names</a></li>
  </ul>
  <p>
    Read the <a href="//jisho.org/docs">advanced search options documentation</a> for a full list of available search options.
  </p>
</div>

</div>

      </div>
    </div>
  </div>

</form>
      </div>
    </div>
    <div id="inflection_modal" class="reveal-modal small" data-reveal>
      <div class="modal_content"></div>
      <a class="close-reveal-modal">&#215;</a>
    </div>
    <div id="page_container" class="row">
      <div class="large-12 columns">
        
        <div class="page">
  <article class="concept_page columns small-12 medium-8">
    

<div class="concept_light clearfix">
  <div class="concept_light-wrapper  columns zero-padding">
    <div class="concept_light-readings japanese japanese_gothic" lang="ja">
      <div class="concept_light-representation">      <span class="furigana">
        <span></span><span></span>
      </span>
      <span class="text">
        <span>さ</span><span>あ</span>
      </span>
</div>
    </div>

      <div class="concept_light-status">
        <span class="concept_light-tag concept_light-common success label">Common word</span> <span class="concept_light-tag label">JLPT N5</span>  <a class="concept_light-status_link" data-dropdown="links_drop_5185991cd5dda72954000380" data-options="is_hover:true; hover_timeout:300" href="#">Links</a><ul class="f-dropdown" id="links_drop_5185991cd5dda72954000380" data-dropdown-content="data-dropdown-content"><li><a href="/search/%E3%81%95%E3%81%82%20%23sentences">Sentence search for さあ</a></li><li><a href="/search/%E3%81%95%E3%83%BC%20%23sentences">Sentence search for さー</a></li><li><a href="http://www.edrdg.org/jmdictdb/cgi-bin/edform.py?svc=jmdict&amp;sid=&amp;q=1005110&amp;a=2">Edit in JMdict</a></li></ul>
      </div>
  </div>


  <div class="concept_light-meanings medium-9 columns">
    <div class='meanings-wrapper'><div class="meaning-wrapper"><div class="meaning-definition zero-padding"><span class="meaning-definition-section_divider">1. </span><span class="meaning-meaning">come (on); come now; come along; here</span><span>&#8203;</span><span class="supplemental_info"><span class="sense-tag tag-info">used to urge or encourage others</span></span></div></div><div class="meaning-wrapper"><div class="meaning-definition zero-padding"><span class="meaning-definition-section_divider">2. </span><span class="meaning-meaning">all right; right; okay; now; here goes</span><span>&#8203;</span><span class="supplemental_info"><span class="sense-tag tag-info">indicates resolve</span></span></div></div><div class="meaning-wrapper"><div class="meaning-definition zero-padding"><span class="meaning-definition-section_divider">3. </span><span class="meaning-meaning">well; hmm; uh; let&#39;s see; I&#39;m not sure</span><span>&#8203;</span><span class="supplemental_info"><span class="sense-tag tag-info">indicates uncertainty or hesitation</span></span></div></div><div class="meaning-wrapper"><div class="meaning-definition zero-padding"><span class="meaning-definition-section_divider">4. </span><span class="meaning-meaning">here; now; there (we go); ah; oh</span><span>&#8203;</span><span class="supplemental_info"><span class="sense-tag tag-info">said when something arrives, starts, finishes, etc.</span></span></div></div><div class="meaning-wrapper"><div class="meaning-definition zero-padding"><span class="meaning-definition-section_divider">5. </span><span class="meaning-meaning">about that, ...; actually, ...</span><span>&#8203;</span><span class="supplemental_info"><span class="sense-tag tag-info">used when interrupting someone</span></span></div></div><div class="meaning-tags">Other forms</div><div class="meaning-wrapper"><div class="meaning-definition zero-padding"><span class="meaning-meaning"><span class="break-unit">さー</span></span></div></div></div>
  </div>


</div>



    <h3>Discussions</h3>
    <p>
        <a href="#" class="signin">Log in</a> to talk about this word.
    </p>

  </article>

  <aside class="columns small-12 medium-4">
  </aside>
</div>

      </div>
    </div>

      <footer class="clearfix">
  <div class="ornament">
  </div>

    
<div class="footer-ad">
  <!-- /1910472/search_bottom_leaderboard -->
  <div id='div-gpt-ad-1528340463374-0' style='height:90px; width:728px;'>
  <script>
  googletag.cmd.push(function() { googletag.display('div-gpt-ad-1528340463374-0'); });
  </script>
  </div>
</div>



  <div class="row">
    <div class="small-12 columns">
      <p>
        Jisho.org is lovingly crafted by <a href="//jisho.org/about">Kim, Miwa and Andrew</a>.
        You can reach us at
        Facebook <a href="https://www.facebook.com/Jisho.org">fb.com/jisho.org</a>, Twitter <a href="https://twitter.com/jisho">@jisho</a> or e-mail <a href="mailto:jisho.org@gmail.com">jisho.org@gmail.com</a>. Before you contact us, please read our list of <a href="//jisho.org/faq">frequently asked questions</a>. Please note that we read all messages we get, but it can take a long time for us to reply as Jisho is a side project and we do not have very much time to devote to it.
      </p>
    </div>
  </div>

  <div class="row">
    <div class="small-12 large-4 columns">
      <p>
        This site uses the <a href="http://www.edrdg.org/wiki/index.php/JMdict-EDICT_Dictionary_Project">JMdict</a>, <a href="http://www.edrdg.org/wiki/index.php/KANJIDIC_Project">Kanjidic2</a>, <a href="http://www.edrdg.org/enamdict/enamdict_doc.html">JMnedict</a> and <a href="http://www.edrdg.org/krad/kradinf.html">Radkfile</a> dictionary files. These files are the property of the <a href="http://www.edrdg.org/"> Electronic Dictionary Research and Development Group</a>, and are used in conformance with the Group's <a href="http://www.edrdg.org/edrdg/licence.html">licence</a>.
      </p>
      <p>
        Example sentences come from the <a href="http://tatoeba.org/">Tatoeba</a> project and are licensed under <a href="http://creativecommons.org/licenses/by/2.0/fr/">Creative Commons CC-BY</a>.
      </p>
      <p>
        Audio files are graciously provided by <a href="http://www.tofugu.com">Tofugu’s</a> excellent kanji learning site <a href="http://www.wanikani.com">WaniKani</a>.
      </p>
    </div>
    <div class="small-12 large-4 columns">
      <p>
        The SKIP (System of Kanji Indexing by Patterns) system for ordering kanji was developed by Jack Halpern (Kanji Dictionary Publishing Society at <a href="http://www.kanji.org/">http://www.kanji.org/</a>), and is used with his permission. The license is <a href="http://www.kanji.org/kanji/dictionaries/skip_permission.htm">Creative Commons Attribution-ShareAlike 4.0 International</a>.
      </p>
    </div>
    <div class="small-12 large-4 columns">
      <p>
        Kanji stroke diagrams are based on data from <a href="http://kanjivg.tagaini.net" title="Welcome - KanjiVG">KanjiVG</a>, which is copyright &copy; 2009-2012 Ulrich Apel and released under the <a href="http://creativecommons.org/licenses/by-sa/3.0/">Creative Commons Attribution-Share Alike 3.0</a> license.
      </p>
      <p>
        Wikipedia data comes from the <a href="http://wiki.dbpedia.org/about">DBpedia</a> project and is dual licensed under <a href="http://en.wikipedia.org/wiki/Wikipedia:Text_of_Creative_Commons_Attribution-ShareAlike_3.0_Unported_License">Creative Commons Attribution-ShareAlike 3.0</a> and <a href="http://en.wikipedia.org/wiki/Wikipedia:Text_of_the_GNU_Free_Documentation_License">GNU Free Documentation License</a>.
      </p>
      <p>
        JLPT data comes from <a href="http://www.tanos.co.uk/contact/">Jonathan Waller‘s</a> <a href="http://www.tanos.co.uk/jlpt/">JLPT Resources</a> page.
      </p>
    </div>
  </div>

</footer>

    <script type="text/javascript" charset="utf-8">
    var currentUser = null;

</script>

<script src="https://assets.jisho.org/assets/application-fe07b0b8ade93cbea5bf2f513ab5d59be67f0c111905dbeabfb88aa48c81e88e.js"></script>

  <style type="text/css" media="screen">
    .debug { display: none; }
  </style>



    <script>

  (function() {

   Namespace('Jisho.KeyEvents', {});
     var body = $(document.body);

     function applyBodyClass(keyEvent, on) {
       body.toggleClass(getClassForEvent(keyEvent), on !== (keyEvent.type == 'display'));
     }

     function getClassForEvent(keyEvent) {
       return (keyEvent.type == 'display' ? 'hide' : 'highlight') + '_' + keyEvent.name;
     }

     body.keydown(function(e) {
       var events = Jisho.KeyEvents[e.which];
       if(events) {
         events.each(function(keyEvent) {
           if(keyEvent.active) return;
           keyEvent.active = true;
           if(keyEvent.phase == 'toggle') {
             body.toggleClass(getClassForEvent(keyEvent));
           } else {
             applyBodyClass(keyEvent, true);
           }
         });
       }
     });

     body.keyup(function(e) {
       var events = Jisho.KeyEvents[e.which];
       if(events) {
         events.each(function(keyEvent) {
           keyEvent.active = false;
           if(keyEvent.phase !== 'toggle') {
             applyBodyClass(keyEvent, false);
           }
         });
       }
     });


  })();

</script>

    <div id="loginHelpDialog" class="reveal-modal" data-reveal aria-labelledby="Login" aria-hidden="true" role="dialog">
  <div class="row">
    <div class="login_help_dialog-new_user columns small-12 medium-6">
      <h3>New to Jisho?</h3>

      <a href="javascript:void(0)" class="js-login-help-sign-up">Click here to sign up!</a>
    </div>

    <div class="login_help_dialog-existing_user columns small-12 medium-6">
      <h3>Have an account?</h3>

      <p>We recently switched to a new login system. Please enter the email you registered with and follow the instructions.</p>

      <form class="js-login-help-log-in" method="get" accept-charset="utf-8">
        <p><input type="text" name="email" /></p>
        <p><input type="submit" value="Log in" class="button"></p>
      </form>
    </div>
  </div>

  <a class="close-reveal-modal" aria-label="Close">&#215;</a>
</div>

  </body>
</html>
`;

export const searchResults = `
<!DOCTYPE html>
<html data-color-theme="auto">
  <head>
    <meta http-equiv="Content-type" content="text/html; charset=utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="IE=Edge">
    <meta name="apple-mobile-web-app-title" content="Jisho">
    <meta name="theme-color" content="#47DB27">
    <link href="/opensearch.xml" rel='search' title='Jisho' type='application/opensearchdescription+xml'>
    <link rel="icon" href="https://assets.jisho.org/assets/touch-icon-017b99ca4bfd11363a97f66cc4c00b1667613a05e38d08d858aa5e2a35dce055.png">
    <link rel="apple-touch-icon" href="https://assets.jisho.org/assets/touch-icon-017b99ca4bfd11363a97f66cc4c00b1667613a05e38d08d858aa5e2a35dce055.png">
    <script>

/* Modernizr 2.6.2 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-touch-cssclasses-addtest-prefixed-teststyles-testprop-testallprops-prefixes-domprefixes
 */
;window.Modernizr=function(a,b,c){function z(a){j.cssText=a}function A(a,b){return z(m.join(a+";")+(b||""))}function B(a,b){return typeof a===b}function C(a,b){return!!~(""+a).indexOf(b)}function D(a,b){for(var d in a){var e=a[d];if(!C(e,"-")&&j[e]!==c)return b=="pfx"?e:!0}return!1}function E(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:B(f,"function")?f.bind(d||b):f}return!1}function F(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),e=(a+" "+o.join(d+" ")+d).split(" ");return B(b,"string")||B(b,"undefined")?D(e,b):(e=(a+" "+p.join(d+" ")+d).split(" "),E(e,b,c))}var d="2.6.2",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k,l={}.toString,m=" -webkit- -moz- -o- -ms- ".split(" "),n="Webkit Moz O ms",o=n.split(" "),p=n.toLowerCase().split(" "),q={},r={},s={},t=[],u=t.slice,v,w=function(a,c,d,e){var f,i,j,k,l=b.createElement("div"),m=b.body,n=m||b.createElement("body");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:h+(d+1),l.appendChild(j);return f=["&#173;",'<style id="s',h,'">',a,"</style>"].join(""),l.id=h,(m?l:n).innerHTML+=f,n.appendChild(l),m||(n.style.background="",n.style.overflow="hidden",k=g.style.overflow,g.style.overflow="hidden",g.appendChild(n)),i=c(l,a),m?l.parentNode.removeChild(l):(n.parentNode.removeChild(n),g.style.overflow=k),!!i},x={}.hasOwnProperty,y;!B(x,"undefined")&&!B(x.call,"undefined")?y=function(a,b){return x.call(a,b)}:y=function(a,b){return b in a&&B(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=u.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(u.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(u.call(arguments)))};return e}),q.touch=function(){var c;return"ontouchstart"in a||a.DocumentTouch&&b instanceof DocumentTouch?c=!0:w(["@media (",m.join("touch-enabled),("),h,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(a){c=a.offsetTop===9}),c};for(var G in q)y(q,G)&&(v=G.toLowerCase(),e[v]=q[G](),t.push((e[v]?"":"no-")+v));return e.addTest=function(a,b){if(typeof a=="object")for(var d in a)y(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof f!="undefined"&&f&&(g.className+=" "+(b?"":"no-")+a),e[a]=b}return e},z(""),i=k=null,e._version=d,e._prefixes=m,e._domPrefixes=p,e._cssomPrefixes=o,e.testProp=function(a){return D([a])},e.testAllProps=F,e.testStyles=w,e.prefixed=function(a,b,c){return b?F(a,b,c):F(a,"pfx")},g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+t.join(" "):""),e}(this,this.document);

</script>

<script>

  Modernizr.addTest('speech', function(){
    return Modernizr.prefixed('speechRecognition', window);
  });

  Modernizr.addTest('AudioContext', function(){
    return Modernizr.prefixed('AudioContext', window);
  });

  Modernizr.addTest('getUserMedia', function(){
    return Modernizr.prefixed('getUserMedia', navigator);
  });

</script>

    <link rel="stylesheet" media="screen" href="https://assets.jisho.org/assets/application-61d8e80944056be2e8c772e3d3b243767cc3550ca5b7da4d62ba58a5604fc3c3.css" />
    <meta name="csrf-param" content="authenticity_token" />
<meta name="csrf-token" content="arQf3R4AL8mdhsgd52HSjmjE50rVcgb974B+XQxjOdYCm8uca/AVzbQkS97XPl9Gia+BbZQShy1qeOum+HjblA==" />
    
    <link rel="shortcut icon" type="image/x-icon" href="https://assets.jisho.org/assets/favicon-062c4a0240e1e6d72c38aa524742c2d558ee6234497d91dd6b75a182ea823d65.ico" />
    <title>まっすぐ - Jisho.org</title>
    <meta name="Description" content="Japanese dictionary search results for まっすぐ.">
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@jisho" />
      <meta name="twitter:title" content="Japanese dictionary search for &quot;まっすぐ&quot;" />
      <meta name="twitter:description" content="1 words, 4 kanji and 50 sentences found. See the full details ..." />
    <script async src="https://pagead2.googlesyndication.com/tag/js/gpt.js"></script>
    <script>
      var googletag = googletag || {};
      googletag.cmd = googletag.cmd || [];
    </script>
    <script>
      googletag.cmd.push(function() {
        googletag.pubads().setPrivacySettings({
          limitedAds: true,
          nonPersonalizedAds: true,
          restrictDataProcessing: true,
        });
      });

      googletag.cmd.push(function() {
        googletag.defineSlot('\/1910472\/search_right_half', [ 300.0 ,  150.0 ], 'div-gpt-ad-1528340241998-0').addService(googletag.pubads());
        googletag.defineSlot('\/1910472\/search_right_full', [ 300.0 ,  250.0 ], 'div-gpt-ad-1528340390859-0').addService(googletag.pubads());
        googletag.defineSlot('\/1910472\/search_bottom_leaderboard', [ 728.0 ,  90.0 ], 'div-gpt-ad-1528340463374-0').addService(googletag.pubads());
        googletag.pubads().enableSingleRequest();
        googletag.pubads().collapseEmptyDivs();
        googletag.enableServices();
      });
    </script>
  </head>
  <body class=" highlight_keyword highlight_common_readings highlight_common_representations production">
    
<header class="row collapse">
  <div class="small-4 columns">
    <h1 class="logo"><a href="/">Jisho</a></h1>
  </div>
  <div class="small-8 columns">
    <nav class="nav-main_navigation">
  <ul class="links">
    <li><a href="/forum">Forum</a></li>
    <li><a href="/about">About</a></li>
    <li>
      <div class="color_theme_picker--wrapper">
        <a href="#">Theme</a>
        <ul class="color_theme_picker--choices">
          <li><a href="/search/%E3%81%BE%E3%81%A3%E3%81%99%E3%81%90?color_theme=light&amp;exact=false&amp;original_keyword=%E3%81%BE%E3%81%A3%E3%81%99%E3%81%90">Light mode</a></li>
          <li><a href="/search/%E3%81%BE%E3%81%A3%E3%81%99%E3%81%90?color_theme=dark&amp;exact=false&amp;original_keyword=%E3%81%BE%E3%81%A3%E3%81%99%E3%81%90">Dark mode</a></li>
          <li><div>Auto</div></li>
        </ul>
      </div>
    </li> 
    <li>
      <div id="login_link">
          <a href="/auth/auth0">Log in / Sign up</a>
      </div>
    </li>
  </ul>
</nav>

  </div>
</header>

    <div class="row collapse">
      <div class="large-12 columns">
        <form class="search" data-live="false" id="search" action="/search" accept-charset="UTF-8" method="get"><input name="utf8" type="hidden" value="&#x2713;" />  <div id="input_methods" class="input_methods">
    <div class="input_method_button disable-mobile-hover-background" id="handwriting_button">
      <svg viewBox="0 0 30 30" class="icon tablet-icon ">
  <use xlink:href="https://jisho.org/assets/icons-ab7975eb6f8bb532f99ba2d769be43c5431dec4c0e4d220df7367f1d954d9424.svg#tablet"></use>
</svg>

      <h4>Draw</h4>
    </div>
    <div class="input_method_button disable-mobile-hover-background" id="radical_button">
      <svg viewBox="0 0 30 30" class="icon radical-icon ">
  <use xlink:href="https://jisho.org/assets/icons-ab7975eb6f8bb532f99ba2d769be43c5431dec4c0e4d220df7367f1d954d9424.svg#radical"></use>
</svg>

      <h4>Radicals</h4>
    </div>
    <div class="input_method_button disable-mobile-hover-background" id="speech_button">
      <svg viewBox="0 0 30 30" class="icon speech-icon ">
  <use xlink:href="https://jisho.org/assets/icons-ab7975eb6f8bb532f99ba2d769be43c5431dec4c0e4d220df7367f1d954d9424.svg#speech"></use>
</svg>

      <h4>Voice</h4>
    </div>
  </div>
  <div class="overlay">
    <div id="search_main" class="main">
      <div class="inner">
        <div id="advanced_button" class="search_type">
          <span class="text" id="search_dropdown_text">All</span>
          <span class="carat">▾</span>
        </div>
        <button type="submit" class="submit icon" tabindex="2">
          <svg viewBox="0 0 30 30" class="icon search-icon ">
  <use xlink:href="https://jisho.org/assets/icons-ab7975eb6f8bb532f99ba2d769be43c5431dec4c0e4d220df7367f1d954d9424.svg#search"></use>
</svg>

        </button>
        <a class="search-form_clear-button_js search-form_clear-button icon" accesskey="1" tabindex="3">
          <svg viewBox="0 0 30 30" class="icon clear-icon ">
  <use xlink:href="https://jisho.org/assets/icons-ab7975eb6f8bb532f99ba2d769be43c5431dec4c0e4d220df7367f1d954d9424.svg#clear"></use>
</svg>

        </a>

        <div class="text_input">
          <div class="hidden range"></div>
          <input
            type="text"
            class="keyword japanese_gothic"
            name="keyword"
            id="keyword"
            value="まっすぐ"
            tabindex="1"
            lang="ja"
            autocapitalize="off"
            autocomplete="off"
            autocorrect="off"
            spellcheck="false"
            placeholder="English, Japanese, Romaji, words or text"
            data-autoload="true"
            data-effective-keyword="actual"
          />
        </div>
      </div>
      <div id="search_sub" class="sub">
        <div id="radical_area" class="area radical">
  <div class="results_wrapper">
  <div class="results">
    <div class="list">
      <div class="instructions">
        <div class="vertical-bottom">
          <div class="vertical-bottom-inner">
            
    <div class="arrow">▾</div>
    <div class="text">
      Find kanji by their parts. Click on
      <svg viewBox="0 0 30 30" class="icon reset-icon inline">
  <use xlink:href="https://jisho.org/assets/icons-ab7975eb6f8bb532f99ba2d769be43c5431dec4c0e4d220df7367f1d954d9424.svg#reset"></use>
</svg>

      to reset radicals.
    </div>

          </div>
        </div>
      </div>
    </div>
    <div class="show_more">More</div>
    <div class="show_less link">Less</div>
  </div>
  <div class="scroll_indicator show-for-small-only"></div>
</div>
  <!-- <p>
  Click on the parts that are in the kanji you are looking for. You can click on them again to de-select them.
  <input type="button" value="Reset" id="reset_button" onclick='Radicals.reset()' />
</p> -->

<ul class="radical_table clearfix" lang="ja">
  <li class="reset_icon_list_item">
    <svg viewBox="0 0 30 30" class="icon reset-icon reset_radicals" title="Reset selection">
  <use xlink:href="https://jisho.org/assets/icons-ab7975eb6f8bb532f99ba2d769be43c5431dec4c0e4d220df7367f1d954d9424.svg#reset"></use>
</svg>

  </li>
  <li class="number">1</li>
  <li class="radical" data-radical="1">一</li>
  <li class="radical" data-radical="2">｜</li>
  <li class="radical" data-radical="3">丶</li>
  <li class="radical" data-radical="4">ノ</li>
  <li class="radical" data-radical="5">乙</li>
  <li class="radical" data-radical="6">亅</li>
  <li class="number">2</li>
  <li class="radical" data-radical="7">二</li>
  <li class="radical" data-radical="8">亠</li>
  <li class="radical" data-radical="9">人</li>
  <li class="radical radical-image radical-10" data-radical="10" data-radk="化">⺅</li>
  <li class="radical radical-image radical-11" data-radical="11" data-radk="个">𠆢</li>
  <li class="radical" data-radical="12">儿</li>
  <li class="radical" data-radical="13">入</li>
  <li class="radical" data-radical="14">ハ</li>
  <li class="radical radical-image radical-15" data-radical="15" data-radk="并">丷</li>
  <li class="radical" data-radical="16">冂</li>
  <li class="radical" data-radical="17">冖</li>
  <li class="radical" data-radical="18">冫</li>
  <li class="radical" data-radical="19">几</li>
  <li class="radical" data-radical="20">凵</li>
  <li class="radical" data-radical="21">刀</li>
  <li class="radical radical-image radical-22" data-radical="22" data-radk="刈">⺉</li>
  <li class="radical" data-radical="23">力</li>
  <li class="radical" data-radical="24">勹</li>
  <li class="radical" data-radical="25">匕</li>
  <li class="radical" data-radical="26">匚</li>
  <li class="radical" data-radical="27">十</li>
  <li class="radical" data-radical="28">卜</li>
  <li class="radical" data-radical="29">卩</li>
  <li class="radical" data-radical="30">厂</li>
  <li class="radical" data-radical="31">厶</li>
  <li class="radical" data-radical="32">又</li>
  <li class="radical" data-radical="33">マ</li>
  <li class="radical" data-radical="34">九</li>
  <li class="radical" data-radical="35">ユ</li>
  <li class="radical" data-radical="36">乃</li>
  <li class="radical" data-radical="360" data-radk="乞">𠂉</li>
  <li class="number">3</li>
  <li class="radical radical-image radical-37" data-radical="37" data-radk="込">⻌</li>
  <li class="radical" data-radical="38">口</li>
  <li class="radical" data-radical="39">囗</li>
  <li class="radical" data-radical="40">土</li>
  <li class="radical" data-radical="41">士</li>
  <li class="radical" data-radical="42">夂</li>
  <li class="radical" data-radical="43">夕</li>
  <li class="radical" data-radical="44">大</li>
  <li class="radical" data-radical="45">女</li>
  <li class="radical" data-radical="46">子</li>
  <li class="radical" data-radical="47">宀</li>
  <li class="radical" data-radical="48">寸</li>
  <li class="radical" data-radical="49">小</li>
  <li class="radical radical-image radical-50" data-radical="50" data-radk="尚">⺌</li>
  <li class="radical" data-radical="51">尢</li>
  <li class="radical" data-radical="52">尸</li>
  <li class="radical" data-radical="53">屮</li>
  <li class="radical" data-radical="54">山</li>
  <li class="radical" data-radical="55">川</li>
  <li class="radical" data-radical="56">巛</li>
  <li class="radical" data-radical="57">工</li>
  <li class="radical" data-radical="58">已</li>
  <li class="radical" data-radical="59">巾</li>
  <li class="radical" data-radical="60">干</li>
  <li class="radical" data-radical="61">幺</li>
  <li class="radical" data-radical="62">广</li>
  <li class="radical" data-radical="63">廴</li>
  <li class="radical" data-radical="64">廾</li>
  <li class="radical" data-radical="65">弋</li>
  <li class="radical" data-radical="66">弓</li>
  <li class="radical" data-radical="67">ヨ</li>
  <li class="radical" data-radical="68">彑</li>
  <li class="radical" data-radical="69">彡</li>
  <li class="radical" data-radical="70">彳</li>
  <li class="radical radical-image radical-71" data-radical="71" data-radk="忙">⺖</li>
  <li class="radical radical-image radical-72" data-radical="72" data-radk="扎">⺘</li>
  <li class="radical radical-image radical-73" data-radical="73" data-radk="汁">⺡</li>
  <li class="radical radical-image radical-74" data-radical="74" data-radk="犯">⺨</li>
  <li class="radical radical-image radical-75" data-radical="75" data-radk="艾">⺾</li>
  <li class="radical radical-image radical-76" data-radical="76" data-radk="邦">⻏</li>
  <li class="radical radical-image radical-77" data-radical="77" data-radk="阡">⻖</li>
  <li class="radical" data-radical="78">也</li>
  <li class="radical" data-radical="79">亡</li>
  <li class="radical" data-radical="80">及</li>
  <li class="radical" data-radical="81">久</li>
  <li class="number">4</li>
  <li class="radical radical-image radical-82" data-radical="82" data-radk="老">⺹</li>
  <li class="radical" data-radical="83">心</li>
  <li class="radical" data-radical="84">戈</li>
  <li class="radical" data-radical="85">戸</li>
  <li class="radical" data-radical="86">手</li>
  <li class="radical" data-radical="87">支</li>
  <li class="radical" data-radical="88">攵</li>
  <li class="radical" data-radical="89">文</li>
  <li class="radical" data-radical="90">斗</li>
  <li class="radical" data-radical="91">斤</li>
  <li class="radical" data-radical="92">方</li>
  <li class="radical" data-radical="93">无</li>
  <li class="radical" data-radical="94">日</li>
  <li class="radical" data-radical="95">曰</li>
  <li class="radical" data-radical="96">月</li>
  <li class="radical" data-radical="97">木</li>
  <li class="radical" data-radical="98">欠</li>
  <li class="radical" data-radical="99">止</li>
  <li class="radical" data-radical="100">歹</li>
  <li class="radical" data-radical="101">殳</li>
  <li class="radical" data-radical="102">比</li>
  <li class="radical" data-radical="103">毛</li>
  <li class="radical" data-radical="104">氏</li>
  <li class="radical" data-radical="105">气</li>
  <li class="radical" data-radical="106">水</li>
  <li class="radical" data-radical="107">火</li>
  <li class="radical radical-image radical-108" data-radical="108" data-radk="杰">⺣</li>
  <li class="radical" data-radical="109">爪</li>
  <li class="radical" data-radical="110">父</li>
  <li class="radical" data-radical="111">爻</li>
  <li class="radical" data-radical="112">爿</li>
  <li class="radical" data-radical="113">片</li>
  <li class="radical" data-radical="114">牛</li>
  <li class="radical" data-radical="115">犬</li>
  <li class="radical radical-image radical-116" data-radical="116" data-radk="礼">⺭</li>
  <li class="radical" data-radical="117">王</li>
  <li class="radical" data-radical="118">元</li>
  <li class="radical" data-radical="119">井</li>
  <li class="radical" data-radical="120">勿</li>
  <li class="radical" data-radical="121">尤</li>
  <li class="radical" data-radical="122">五</li>
  <li class="radical" data-radical="123">屯</li>
  <li class="radical" data-radical="124">巴</li>
  <li class="radical" data-radical="125">毋</li>
  <li class="number">5</li>
  <li class="radical" data-radical="126">玄</li>
  <li class="radical" data-radical="127">瓦</li>
  <li class="radical" data-radical="128">甘</li>
  <li class="radical" data-radical="129">生</li>
  <li class="radical" data-radical="130">用</li>
  <li class="radical" data-radical="131">田</li>
  <li class="radical" data-radical="132">疋</li>
  <li class="radical radical-image radical-133" data-radical="133" data-radk="疔">疒</li>
  <li class="radical" data-radical="134">癶</li>
  <li class="radical" data-radical="135">白</li>
  <li class="radical" data-radical="136">皮</li>
  <li class="radical" data-radical="137">皿</li>
  <li class="radical" data-radical="138">目</li>
  <li class="radical" data-radical="139">矛</li>
  <li class="radical" data-radical="140">矢</li>
  <li class="radical" data-radical="141">石</li>
  <li class="radical" data-radical="142">示</li>
  <li class="radical radical-image radical-143" data-radical="143" data-radk="禹">禸</li>
  <li class="radical" data-radical="144">禾</li>
  <li class="radical" data-radical="145">穴</li>
  <li class="radical" data-radical="146">立</li>
  <li class="radical radical-image radical-147" data-radical="147" data-radk="初">⻂</li>
  <li class="radical" data-radical="148">世</li>
  <li class="radical" data-radical="149">巨</li>
  <li class="radical" data-radical="150">冊</li>
  <li class="radical" data-radical="151">母</li>
  <li class="radical radical-image radical-152" data-radical="152" data-radk="買">⺲</li>
  <li class="radical" data-radical="153">牙</li>
  <li class="number">6</li>
  <li class="radical" data-radical="154">瓜</li>
  <li class="radical" data-radical="155">竹</li>
  <li class="radical" data-radical="156">米</li>
  <li class="radical" data-radical="157">糸</li>
  <li class="radical" data-radical="158">缶</li>
  <li class="radical" data-radical="159">羊</li>
  <li class="radical" data-radical="160">羽</li>
  <li class="radical" data-radical="161">而</li>
  <li class="radical" data-radical="162">耒</li>
  <li class="radical" data-radical="163">耳</li>
  <li class="radical" data-radical="164">聿</li>
  <li class="radical" data-radical="165">肉</li>
  <li class="radical" data-radical="166">自</li>
  <li class="radical" data-radical="167">至</li>
  <li class="radical" data-radical="168">臼</li>
  <li class="radical" data-radical="169">舌</li>
  <li class="radical" data-radical="170">舟</li>
  <li class="radical" data-radical="171">艮</li>
  <li class="radical" data-radical="172">色</li>
  <li class="radical" data-radical="173">虍</li>
  <li class="radical" data-radical="174">虫</li>
  <li class="radical" data-radical="175">血</li>
  <li class="radical" data-radical="176">行</li>
  <li class="radical" data-radical="177">衣</li>
  <li class="radical" data-radical="178">西</li>
  <li class="number">7</li>
  <li class="radical" data-radical="179">臣</li>
  <li class="radical" data-radical="180">見</li>
  <li class="radical" data-radical="181">角</li>
  <li class="radical" data-radical="182">言</li>
  <li class="radical" data-radical="183">谷</li>
  <li class="radical" data-radical="184">豆</li>
  <li class="radical" data-radical="185">豕</li>
  <li class="radical" data-radical="186">豸</li>
  <li class="radical" data-radical="187">貝</li>
  <li class="radical" data-radical="188">赤</li>
  <li class="radical" data-radical="189">走</li>
  <li class="radical" data-radical="190">足</li>
  <li class="radical" data-radical="191">身</li>
  <li class="radical" data-radical="192">車</li>
  <li class="radical" data-radical="193">辛</li>
  <li class="radical" data-radical="194">辰</li>
  <li class="radical" data-radical="195">酉</li>
  <li class="radical" data-radical="196">釆</li>
  <li class="radical" data-radical="197">里</li>
  <li class="radical" data-radical="198">舛</li>
  <li class="radical" data-radical="199">麦</li>
  <li class="number">8</li>
  <li class="radical" data-radical="200">金</li>
  <li class="radical" data-radical="201">長</li>
  <li class="radical" data-radical="202">門</li>
  <li class="radical" data-radical="203">隶</li>
  <li class="radical" data-radical="204">隹</li>
  <li class="radical" data-radical="205">雨</li>
  <li class="radical" data-radical="206">青</li>
  <li class="radical" data-radical="207">非</li>
  <li class="radical" data-radical="208">奄</li>
  <li class="radical" data-radical="209">岡</li>
  <li class="radical" data-radical="210">免</li>
  <li class="radical" data-radical="211">斉</li>
  <li class="number">9</li>
  <li class="radical" data-radical="212">面</li>
  <li class="radical" data-radical="213">革</li>
  <li class="radical" data-radical="214">韭</li>
  <li class="radical" data-radical="215">音</li>
  <li class="radical" data-radical="216">頁</li>
  <li class="radical" data-radical="217">風</li>
  <li class="radical" data-radical="218">飛</li>
  <li class="radical" data-radical="219">食</li>
  <li class="radical" data-radical="220">首</li>
  <li class="radical" data-radical="221">香</li>
  <li class="radical" data-radical="222">品</li>
  <li class="number">10</li>
  <li class="radical" data-radical="223">馬</li>
  <li class="radical" data-radical="224">骨</li>
  <li class="radical" data-radical="225">高</li>
  <li class="radical" data-radical="226">髟</li>
  <li class="radical" data-radical="227">鬥</li>
  <li class="radical" data-radical="228">鬯</li>
  <li class="radical" data-radical="229">鬲</li>
  <li class="radical" data-radical="230">鬼</li>
  <li class="radical" data-radical="231">竜</li>
  <li class="radical" data-radical="232">韋</li>
  <li class="number">11</li>
  <li class="radical" data-radical="233">魚</li>
  <li class="radical" data-radical="234">鳥</li>
  <li class="radical" data-radical="235">鹵</li>
  <li class="radical" data-radical="236">鹿</li>
  <li class="radical" data-radical="237">麻</li>
  <li class="radical" data-radical="238">亀</li>
  <li class="radical radical-image radical-239" data-radical="239" data-radk="滴">啇</li>
  <li class="radical" data-radical="240">黄</li>
  <li class="radical" data-radical="241">黒</li>
  <li class="number">12</li>
  <li class="radical" data-radical="242">黍</li>
  <li class="radical" data-radical="243">黹</li>
  <li class="radical" data-radical="244">無</li>
  <li class="radical" data-radical="245">歯</li>
  <li class="number">13</li>
  <li class="radical" data-radical="246">黽</li>
  <li class="radical" data-radical="247">鼎</li>
  <li class="radical" data-radical="248">鼓</li>
  <li class="radical" data-radical="249">鼠</li>
  <li class="number">14</li>
  <li class="radical" data-radical="250">鼻</li>
  <li class="radical" data-radical="251">齊</li>
  <li class="number">17</li>
  <li class="radical" data-radical="252">龠</li>
</ul>

</div>

        <div id="handwriting_area" class="area handwriting" data-url="/handwriting">
  <div class="results_wrapper">
  <div class="results">
    <div class="list">
      <div class="instructions">
        <div class="vertical-bottom">
          <div class="vertical-bottom-inner">
            
    <div class="arrow">▾</div>
    <div class="text">Input kanji by handwriting. Just start drawing!</div>

          </div>
        </div>
      </div>
    </div>
    <div class="show_more">More</div>
    <div class="show_less link">Less</div>
  </div>
  <div class="scroll_indicator show-for-small-only"></div>
</div>
  <div class="inputs">
    <div class="panel disablePanZoomInIE">
  <canvas width="310" height="275"></canvas>
  <svg viewBox="0 0 30 30" class="icon pencil-icon ">
  <use xlink:href="https://jisho.org/assets/icons-ab7975eb6f8bb532f99ba2d769be43c5431dec4c0e4d220df7367f1d954d9424.svg#pencil"></use>
</svg>

  <div class="buttons">
    <button type="button" class="tiny reset button">Clear</button>
    <button type="button" class="tiny back button">Back</button>
  </div>
</div>

    <div class="panel disablePanZoomInIE">
  <canvas width="310" height="275"></canvas>
  <svg viewBox="0 0 30 30" class="icon pencil-icon ">
  <use xlink:href="https://jisho.org/assets/icons-ab7975eb6f8bb532f99ba2d769be43c5431dec4c0e4d220df7367f1d954d9424.svg#pencil"></use>
</svg>

  <div class="buttons">
    <button type="button" class="tiny reset button">Clear</button>
    <button type="button" class="tiny back button">Back</button>
  </div>
</div>

  </div>
</div>

        <div id="speech_area" class="area speech">

  <div class="speech_results"></div>

  <div class="explanation">
    <div class="arrow">▴</div>
    <div class="text">
      Speak! You can use words like "back", "clear", "stop", "input", or "search".  At any time say "Japanese" to switch to Japanese (requires permissions again).
    </div>
  </div>

  <div class="buttons">
    <button class="tiny english">English</button>
    <button class="tiny japanese">Japanese</button>
  </div>
</div>

        <div id="advanced_area" class="hidden area advanced">
  <div class="filters">
  <ul class="button-group radius" data-filter-group="type">
    <li><a accesskey="a" class=" filter small button active" data-filter="type-all" href="//jisho.org/search/%E3%81%BE%E3%81%A3%E3%81%99%E3%81%90">All</a></li>
    <li><a accesskey="w" class=" filter small button" data-filter="words" href="//jisho.org/search/%E3%81%BE%E3%81%A3%E3%81%99%E3%81%90">Words</a></li>
    <li><a accesskey="k" class=" filter small button" data-filter="kanji" href="//jisho.org/search/%E3%81%BE%E3%81%A3%E3%81%99%E3%81%90">Kanji</a></li>
    <li><a accesskey="s" class=" filter small button" data-filter="sentences" href="//jisho.org/search/%E3%81%BE%E3%81%A3%E3%81%99%E3%81%90">Sentences</a></li>
    <li><a accesskey="n" class=" filter small button" data-filter="names" href="//jisho.org/search/%E3%81%BE%E3%81%A3%E3%81%99%E3%81%90">Names</a></li>
  </ul>
    <ul class="button-group radius" data-filter-group="pos">
      <li><a class=" filter small button active" data-filter="pos-all" href="//jisho.org/search/%E3%81%BE%E3%81%A3%E3%81%99%E3%81%90">All</a></li>
      <li><a class=" filter small button" data-filter="noun" href="//jisho.org/search/%E3%81%BE%E3%81%A3%E3%81%99%E3%81%90">Nouns</a></li>
      <li><a class=" filter small button" data-filter="verb" href="//jisho.org/search/%E3%81%BE%E3%81%A3%E3%81%99%E3%81%90">Verbs</a></li>
      <li><a class=" filter small button" data-filter="adjective" href="//jisho.org/search/%E3%81%BE%E3%81%A3%E3%81%99%E3%81%90">Adjectives</a></li>
      <li><a class=" filter small button" data-filter="particle" href="//jisho.org/search/%E3%81%BE%E3%81%A3%E3%81%99%E3%81%90">Particles</a></li>
      <li><a class=" filter small button" data-filter="counter" href="//jisho.org/search/%E3%81%BE%E3%81%A3%E3%81%99%E3%81%90">Counters</a></li>
    </ul>
    <ul class="button-group radius" data-filter-group="level">
      <li><a class=" filter small button active" data-filter="level-all" href="//jisho.org/search/%E3%81%BE%E3%81%A3%E3%81%99%E3%81%90">All</a></li>
        <li><a class=" filter small button" data-filter="common" href="//jisho.org/search/%E3%81%BE%E3%81%A3%E3%81%99%E3%81%90">Common</a></li>
      <li><a class=" filter small button" data-filter="jlpt-n1" href="//jisho.org/search/%E3%81%BE%E3%81%A3%E3%81%99%E3%81%90">JLPT N1</a></li>
      <li><a class=" filter small button" data-filter="jlpt-n2" href="//jisho.org/search/%E3%81%BE%E3%81%A3%E3%81%99%E3%81%90">JLPT N2</a></li>
      <li><a class=" filter small button" data-filter="jlpt-n3" href="//jisho.org/search/%E3%81%BE%E3%81%A3%E3%81%99%E3%81%90">JLPT N3</a></li>
      <li><a class=" filter small button" data-filter="jlpt-n4" href="//jisho.org/search/%E3%81%BE%E3%81%A3%E3%81%99%E3%81%90">JLPT N4</a></li>
      <li><a class=" filter small button" data-filter="jlpt-n5" href="//jisho.org/search/%E3%81%BE%E3%81%A3%E3%81%99%E3%81%90">JLPT N5</a></li>
    </ul>
  <p>
    Read the <a href="//jisho.org/docs">advanced search options documentation</a> for a full list of available search options.
  </p>
</div>

</div>

      </div>
    </div>
  </div>

</form>
      </div>
    </div>
    <div id="inflection_modal" class="reveal-modal small" data-reveal>
      <div class="modal_content"></div>
      <a class="close-reveal-modal">&#215;</a>
    </div>
    <div id="page_container" class="row">
      <div class="large-12 columns">
        
        

<div id="main_results">
  <div id="result_area">




  </div>

  <div class="row">




      <div id="primary" class="large-8 columns">

          <div class="exact_block">
            <h4>Words<span class="result_count"> — 1 found</span></h4>
            <!--<div class="block_header">Exact match</div>-->
                

<div class="concept_light clearfix">
  <div class="concept_light-wrapper  columns zero-padding">
    <div class="concept_light-readings japanese japanese_gothic" lang="ja">
      <div class="concept_light-representation">      <span class="furigana">
        <span class="kanji-1-up kanji">ま</span><span></span><span class="kanji-1-up kanji">す</span><span></span>
      </span>
      <span class="text">
        真<span>っ</span>直<span>ぐ</span>
      </span>
</div>
    </div>

      <div class="concept_light-status">
        <span class="concept_light-tag concept_light-common success label">Common word</span> <span class="concept_light-tag label">JLPT N5</span>  <a class="concept_light-status_link" data-dropdown="links_drop_51859ce5d5dda7295401b31c" data-options="is_hover:true; hover_timeout:300" href="#">Links</a><ul class="f-dropdown" id="links_drop_51859ce5d5dda7295401b31c" data-dropdown-content="data-dropdown-content"><li><a href="/search/%E7%9C%9F%E3%81%A3%E7%9B%B4%E3%81%90%20%23sentences">Sentence search for 真っ直ぐ</a></li><li><a href="/search/%E3%81%BE%E3%81%A3%E3%81%99%E3%81%90%20%23sentences">Sentence search for まっすぐ</a></li><li><a href="/search/%E7%9C%9F%E3%81%A3%E3%81%99%E3%81%90%20%23sentences">Sentence search for 真っすぐ</a></li><li><a href="/search/%E7%9C%9F%E3%81%A3%E7%9B%B4%20%23sentences">Sentence search for 真っ直</a></li><li><a href="/search/%E7%9C%9F%E7%9B%B4%E3%81%90%20%23sentences">Sentence search for 真直ぐ</a></li><li><a href="/search/%E7%9C%9F%E3%81%99%E3%81%90%20%23sentences">Sentence search for 真すぐ</a></li><li><a href="//jisho.org/search/%E7%9C%9F%E7%9B%B4%20%23kanji">Kanji details for 真 and 直</a></li><li><a href="http://www.edrdg.org/jmdictdb/cgi-bin/edform.py?svc=jmdict&amp;sid=&amp;q=1580600&amp;a=2">Edit in JMdict</a></li></ul>
      </div>
  </div>


  <div class="concept_light-meanings medium-9 columns">
    <div class='meanings-wrapper'><div class="meaning-tags">Na-adjective (keiyodoshi), Adverb (fukushi), Noun</div><div class="meaning-wrapper"><div class="meaning-definition zero-padding"><span class="meaning-definition-section_divider">1. </span><span class="meaning-meaning">straight (ahead); direct; upright; erect</span><span>&#8203;</span><span class="supplemental_info"><span class="sense-tag tag-tag">Usually written using kana alone</span></span></div><span class="sentences zero-padding"><div class="sentence"><ul class="japanese japanese_gothic clearfix" lang="ja"><li class="clearfix"><span class="unlinked">あなた</span></li><li class="clearfix"><span class="unlinked">は</span></li><li class="clearfix"><span class="unlinked">きのう</span></li><li class="clearfix"><span class="furigana">ほうかご</span><span class="unlinked">放課後</span></li><li class="clearfix"><span class="unlinked">まっすぐ</span></li><li class="clearfix"><span class="furigana">きたく</span><span class="unlinked">帰宅</span></li><li class="clearfix"><span class="unlinked">しました</span></li><li class="clearfix"><span class="unlinked">か</span></li>。<li class="english" lang="en">Did you go straight home after school yesterday?</li></ul></div></span></div><div class="meaning-tags">Na-adjective (keiyodoshi), Noun</div><div class="meaning-wrapper"><div class="meaning-definition zero-padding"><span class="meaning-definition-section_divider">2. </span><span class="meaning-meaning">straightforward; honest; frank</span><span>&#8203;</span><span class="supplemental_info"><span class="sense-tag tag-tag">Usually written using kana alone</span></span></div></div><div class="meaning-tags">Other forms</div><div class="meaning-wrapper"><div class="meaning-definition zero-padding"><span class="meaning-meaning"><span class="break-unit">真っすぐ 【まっすぐ】</span>、<span class="break-unit">真っ直 【まっすぐ】</span>、<span class="break-unit">真直ぐ 【まっすぐ】</span>、<span class="break-unit">真すぐ 【まっすぐ】</span></span></div></div><div class="meaning-tags">Notes</div><div class="meaning-wrapper"><div class="meaning-definition meaning-representation_notes zero-padding"><span class="">真直ぐ: Irregular okurigana usage. 真すぐ: Irregular okurigana usage.</span></div></div></div>
  </div>


    <a class="light-details_link" href="//jisho.org/word/%E7%9C%9F%E3%81%A3%E7%9B%B4%E3%81%90">Details ▸</a>
</div>


          </div>

          <div class="concepts">
            
            

          </div>
      </div>

    <div id="secondary" class="large-4 columns search-secondary_column">

          <div class="kanji_light_block">
            <h4>Kanji<span class="result_count"> — 4 found</span></h4>
              <div class="entry kanji_light clearfix">
  <div class="kanji_light_content">
    <div class="debug">
      100.0<br>
    </div>

    <div class="info clearfix">
        <span class="strokes">11 strokes.</span>


    </div>

    <div class="literal_block">
      <span class="character literal japanese_gothic" lang="ja"><a href="//jisho.org/search/%E5%81%92%20%23kanji">偒</a></span>
    </div>

      <div class="meanings english sense">
      </div>

        <div class="kun readings">
          <span class="type">Kun: </span>
            <span class="japanese_gothic "><a href="//jisho.org/search/%E5%81%92%20%E3%81%BE%E3%81%A3%E3%81%99%E3%81%90">まっす.ぐ</a></span>
        </div>

        <div class="on readings">
          <span class="type">On: </span>
            <span class="japanese_gothic "><a href="//jisho.org/search/%E5%81%92%20%E3%81%A8%E3%81%86">トウ</a></span>
        </div>
  </div>

  <a class="light-details_link" href="//jisho.org/search/%E5%81%92%20%23kanji">Details ▸</a>
</div>
<div class="entry kanji_light clearfix">
  <div class="kanji_light_content">
    <div class="debug">
      100.0<br>
    </div>

    <div class="info clearfix">
        <span class="strokes">10 strokes.</span>


    </div>

    <div class="literal_block">
      <span class="character literal japanese_gothic" lang="ja"><a href="//jisho.org/search/%E9%99%97%20%23kanji">陗</a></span>
    </div>

      <div class="meanings english sense">
            <span>steep hill, </span>
            <span>precipitous</span>
      </div>

        <div class="kun readings">
          <span class="type">Kun: </span>
            <span class="japanese_gothic "><a href="//jisho.org/search/%E9%99%97%20%E3%81%BE%E3%81%A3%E3%81%99%E3%81%90%E3%81%A7%E3%81%9F%E3%81%8B%E3%81%84">まっすぐでたかい</a>、 </span>
            <span class="japanese_gothic "><a href="//jisho.org/search/%E9%99%97%20%E3%81%91%E3%82%8F%E3%81%97%E3%81%84">けわ.しい</a>、 </span>
            <span class="japanese_gothic "><a href="//jisho.org/search/%E9%99%97%20%E3%81%9F%E3%81%8B%E3%81%84">たか.い</a>、 </span>
            <span class="japanese_gothic "><a href="//jisho.org/search/%E9%99%97%20%E3%81%8D%E3%81%B3%E3%81%97%E3%81%84">きび.しい</a>、 </span>
            <span class="japanese_gothic "><a href="//jisho.org/search/%E9%99%97%20%E3%81%9B%E3%81%BE%E3%82%8B">せま.る</a>、 </span>
            <span class="japanese_gothic "><a href="//jisho.org/search/%E9%99%97%20%E3%81%8B%E3%81%8F%E3%82%8C%E3%82%8B">かく.れる</a>、 </span>
            <span class="japanese_gothic "><a href="//jisho.org/search/%E9%99%97%20%E3%81%9B%E3%81%A3%E3%81%8B%E3%81%A1">せっかち</a></span>
        </div>

        <div class="on readings">
          <span class="type">On: </span>
            <span class="japanese_gothic "><a href="//jisho.org/search/%E9%99%97%20%E3%81%97%E3%82%87%E3%81%86">ショウ</a></span>
        </div>
  </div>

  <a class="light-details_link" href="//jisho.org/search/%E9%99%97%20%23kanji">Details ▸</a>
</div>

              
<div class="search-results__sidebar-ad">
  <!-- /1910472/search_right_half -->
  <div id='div-gpt-ad-1528340241998-0' style='height:150px; width:300px; margin-bottom:10px;'>
  <script>
  googletag.cmd.push(function() { googletag.display('div-gpt-ad-1528340241998-0'); });
  </script>
  </div>

  <!-- /1910472/search_right_full -->
  <div id='div-gpt-ad-1528340390859-0' style='height:250px; width:300px;'>
  <script>
  googletag.cmd.push(function() { googletag.display('div-gpt-ad-1528340390859-0'); });
  </script>
  </div>
</div>



              <div class="entry kanji_light clearfix">
  <div class="kanji_light_content">
    <div class="debug">
      100.0<br>
    </div>

    <div class="info clearfix">
        <span class="strokes">11 strokes.</span>


    </div>

    <div class="literal_block">
      <span class="character literal japanese_gothic" lang="ja"><a href="//jisho.org/search/%E5%A9%9E%20%23kanji">婞</a></span>
    </div>

      <div class="meanings english sense">
            <span>hate</span>
      </div>

        <div class="kun readings">
          <span class="type">Kun: </span>
            <span class="japanese_gothic "><a href="//jisho.org/search/%E5%A9%9E%20%E3%82%82%E3%81%A8%E3%82%8B">もと.る</a>、 </span>
            <span class="japanese_gothic "><a href="//jisho.org/search/%E5%A9%9E%20%E3%81%BE%E3%81%A3%E3%81%99%E3%81%90">まっすぐ</a></span>
        </div>

        <div class="on readings">
          <span class="type">On: </span>
            <span class="japanese_gothic "><a href="//jisho.org/search/%E5%A9%9E%20%E3%81%91%E3%81%84">ケイ</a>、 </span>
            <span class="japanese_gothic "><a href="//jisho.org/search/%E5%A9%9E%20%E3%81%8E%E3%82%87%E3%81%86">ギョウ</a>、 </span>
            <span class="japanese_gothic "><a href="//jisho.org/search/%E5%A9%9E%20%E3%81%93%E3%81%86">コウ</a></span>
        </div>
  </div>

  <a class="light-details_link" href="//jisho.org/search/%E5%A9%9E%20%23kanji">Details ▸</a>
</div>
<div class="entry kanji_light clearfix">
  <div class="kanji_light_content">
    <div class="debug">
      100.0<br>
    </div>

    <div class="info clearfix">
        <span class="strokes">11 strokes.</span>


    </div>

    <div class="literal_block">
      <span class="character literal japanese_gothic" lang="ja"><a href="//jisho.org/search/%E5%81%97%20%23kanji">偗</a></span>
    </div>

      <div class="meanings english sense">
      </div>

        <div class="kun readings">
          <span class="type">Kun: </span>
            <span class="japanese_gothic "><a href="//jisho.org/search/%E5%81%97%20%E3%81%BE%E3%81%A3%E3%81%99%E3%81%90">まっすぐ</a></span>
        </div>

        <div class="on readings">
          <span class="type">On: </span>
            <span class="japanese_gothic "><a href="//jisho.org/search/%E5%81%97%20%E3%81%9B%E3%81%84">セイ</a>、 </span>
            <span class="japanese_gothic "><a href="//jisho.org/search/%E5%81%97%20%E3%81%97%E3%82%87%E3%81%86">ショウ</a></span>
        </div>
  </div>

  <a class="light-details_link" href="//jisho.org/search/%E5%81%97%20%23kanji">Details ▸</a>
</div>

            

          </div>


        

        <div class="sentences_block">
          <h4>Sentences<span class="result_count"> — 50 found</span></h4>
          <ul class="sentences">
            <li class="entry sentence clearfix">
  <div class="debug">77117</div>

  <div class="sentence_content">
    <ul class="japanese_sentence japanese japanese_gothic clearfix" lang="ja">
      <li class="clearfix"><span class="furigana">うで</span><span class="unlinked">腕</span></li><li class="clearfix"><span class="unlinked">を</span></li><li class="clearfix"><span class="unlinked">まっすぐ</span></li><li class="clearfix"><span class="furigana">の</span><span class="unlinked">伸ばし</span></li><li class="clearfix"><span class="unlinked">なさい</span></li>。
    </ul>
    <div class="english_sentence clearfix">
      <span class="english">Stretch your arms straight.</span>
        <span class="inline_copyright">— <a href="http://tatoeba.org/eng/sentences/show/77117">Tatoeba</a></span>
    </div>
  </div>

    <a class="light-details_link" href="//jisho.org/sentences/518663e7d5dda7e981000c49">Details ▸</a>
</li>

          </ul>
          


  <a class="more" href="//jisho.org/search/%E3%81%BE%E3%81%A3%E3%81%99%E3%81%90%20%23sentences">More <span class='accesskey'>S</span>entences &gt;</a>

        </div>


        

        
<aside id="other_dictionaries">
  <h4>Other Dictionaries</h4>
  <p class="minor-text">You can also try these fine sites.</p>
  <ul class="no-bullet">
      <li><a href="http://eow.alc.co.jp/search?q=%E3%81%BE%E3%81%A3%E3%81%99%E3%81%90&amp;ref=sa">Search ALC for まっすぐ</a></li>
      <li><a href="http://dictionary.goo.ne.jp/srch/all/%E3%81%BE%E3%81%A3%E3%81%99%E3%81%90/m0u/">Search Goo Jisho for まっすぐ</a></li>
      <li><a href="https://www.google.com/search?q=%E3%81%BE%E3%81%A3%E3%81%99%E3%81%90">Search Google.com for まっすぐ</a></li>
      <li><a href="https://www.google.jp/search?q=%E3%81%BE%E3%81%A3%E3%81%99%E3%81%90">Search Google.jp for まっすぐ</a></li>
      <li><a href="https://kotobank.jp/gs/?q=%E3%81%BE%E3%81%A3%E3%81%99%E3%81%90">Search Kotobank for まっすぐ</a></li>
      <li><a href="https://www.weblio.jp/content/%E3%81%BE%E3%81%A3%E3%81%99%E3%81%90">Search Weblio for まっすぐ</a></li>
  </ul>
</aside>

</div>
  </div>
</div>

      </div>
    </div>

      <footer class="clearfix">
  <div class="ornament">
  </div>

    
<div class="footer-ad">
  <!-- /1910472/search_bottom_leaderboard -->
  <div id='div-gpt-ad-1528340463374-0' style='height:90px; width:728px;'>
  <script>
  googletag.cmd.push(function() { googletag.display('div-gpt-ad-1528340463374-0'); });
  </script>
  </div>
</div>



  <div class="row">
    <div class="small-12 columns">
      <p>
        Jisho.org is lovingly crafted by <a href="//jisho.org/about">Kim, Miwa and Andrew</a>.
        You can reach us at
        Facebook <a href="https://www.facebook.com/Jisho.org">fb.com/jisho.org</a>, Twitter <a href="https://twitter.com/jisho">@jisho</a> or e-mail <a href="mailto:jisho.org@gmail.com">jisho.org@gmail.com</a>. Before you contact us, please read our list of <a href="//jisho.org/faq">frequently asked questions</a>. Please note that we read all messages we get, but it can take a long time for us to reply as Jisho is a side project and we do not have very much time to devote to it.
      </p>
    </div>
  </div>

  <div class="row">
    <div class="small-12 large-4 columns">
      <p>
        This site uses the <a href="http://www.edrdg.org/wiki/index.php/JMdict-EDICT_Dictionary_Project">JMdict</a>, <a href="http://www.edrdg.org/wiki/index.php/KANJIDIC_Project">Kanjidic2</a>, <a href="http://www.edrdg.org/enamdict/enamdict_doc.html">JMnedict</a> and <a href="http://www.edrdg.org/krad/kradinf.html">Radkfile</a> dictionary files. These files are the property of the <a href="http://www.edrdg.org/"> Electronic Dictionary Research and Development Group</a>, and are used in conformance with the Group's <a href="http://www.edrdg.org/edrdg/licence.html">licence</a>.
      </p>
      <p>
        Example sentences come from the <a href="http://tatoeba.org/">Tatoeba</a> project and are licensed under <a href="http://creativecommons.org/licenses/by/2.0/fr/">Creative Commons CC-BY</a>.
      </p>
      <p>
        Audio files are graciously provided by <a href="http://www.tofugu.com">Tofugu’s</a> excellent kanji learning site <a href="http://www.wanikani.com">WaniKani</a>.
      </p>
    </div>
    <div class="small-12 large-4 columns">
      <p>
        The SKIP (System of Kanji Indexing by Patterns) system for ordering kanji was developed by Jack Halpern (Kanji Dictionary Publishing Society at <a href="http://www.kanji.org/">http://www.kanji.org/</a>), and is used with his permission. The license is <a href="http://www.kanji.org/kanji/dictionaries/skip_permission.htm">Creative Commons Attribution-ShareAlike 4.0 International</a>.
      </p>
    </div>
    <div class="small-12 large-4 columns">
      <p>
        Kanji stroke diagrams are based on data from <a href="http://kanjivg.tagaini.net" title="Welcome - KanjiVG">KanjiVG</a>, which is copyright &copy; 2009-2012 Ulrich Apel and released under the <a href="http://creativecommons.org/licenses/by-sa/3.0/">Creative Commons Attribution-Share Alike 3.0</a> license.
      </p>
      <p>
        Wikipedia data comes from the <a href="http://wiki.dbpedia.org/about">DBpedia</a> project and is dual licensed under <a href="http://en.wikipedia.org/wiki/Wikipedia:Text_of_Creative_Commons_Attribution-ShareAlike_3.0_Unported_License">Creative Commons Attribution-ShareAlike 3.0</a> and <a href="http://en.wikipedia.org/wiki/Wikipedia:Text_of_the_GNU_Free_Documentation_License">GNU Free Documentation License</a>.
      </p>
      <p>
        JLPT data comes from <a href="http://www.tanos.co.uk/contact/">Jonathan Waller‘s</a> <a href="http://www.tanos.co.uk/jlpt/">JLPT Resources</a> page.
      </p>
    </div>
  </div>

</footer>

    <script type="text/javascript" charset="utf-8">
    var currentUser = null;

</script>

<script src="https://assets.jisho.org/assets/application-fe07b0b8ade93cbea5bf2f513ab5d59be67f0c111905dbeabfb88aa48c81e88e.js"></script>

  <style type="text/css" media="screen">
    .debug { display: none; }
  </style>



    <script>

  (function() {

   Namespace('Jisho.KeyEvents', {});
     var body = $(document.body);

     function applyBodyClass(keyEvent, on) {
       body.toggleClass(getClassForEvent(keyEvent), on !== (keyEvent.type == 'display'));
     }

     function getClassForEvent(keyEvent) {
       return (keyEvent.type == 'display' ? 'hide' : 'highlight') + '_' + keyEvent.name;
     }

     body.keydown(function(e) {
       var events = Jisho.KeyEvents[e.which];
       if(events) {
         events.each(function(keyEvent) {
           if(keyEvent.active) return;
           keyEvent.active = true;
           if(keyEvent.phase == 'toggle') {
             body.toggleClass(getClassForEvent(keyEvent));
           } else {
             applyBodyClass(keyEvent, true);
           }
         });
       }
     });

     body.keyup(function(e) {
       var events = Jisho.KeyEvents[e.which];
       if(events) {
         events.each(function(keyEvent) {
           keyEvent.active = false;
           if(keyEvent.phase !== 'toggle') {
             applyBodyClass(keyEvent, false);
           }
         });
       }
     });


  })();

</script>

    <div id="loginHelpDialog" class="reveal-modal" data-reveal aria-labelledby="Login" aria-hidden="true" role="dialog">
  <div class="row">
    <div class="login_help_dialog-new_user columns small-12 medium-6">
      <h3>New to Jisho?</h3>

      <a href="javascript:void(0)" class="js-login-help-sign-up">Click here to sign up!</a>
    </div>

    <div class="login_help_dialog-existing_user columns small-12 medium-6">
      <h3>Have an account?</h3>

      <p>We recently switched to a new login system. Please enter the email you registered with and follow the instructions.</p>

      <form class="js-login-help-log-in" method="get" accept-charset="utf-8">
        <p><input type="text" name="email" /></p>
        <p><input type="submit" value="Log in" class="button"></p>
      </form>
    </div>
  </div>

  <a class="close-reveal-modal" aria-label="Close">&#215;</a>
</div>

  </body>
</html>
`;

export const searchResultWord = `
<!DOCTYPE html>
<html data-color-theme="auto">
  <head>
    <meta http-equiv="Content-type" content="text/html; charset=utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="IE=Edge">
    <meta name="apple-mobile-web-app-title" content="Jisho">
    <meta name="theme-color" content="#47DB27">
    <link href="/opensearch.xml" rel='search' title='Jisho' type='application/opensearchdescription+xml'>
    <link rel="icon" href="https://assets.jisho.org/assets/touch-icon-017b99ca4bfd11363a97f66cc4c00b1667613a05e38d08d858aa5e2a35dce055.png">
    <link rel="apple-touch-icon" href="https://assets.jisho.org/assets/touch-icon-017b99ca4bfd11363a97f66cc4c00b1667613a05e38d08d858aa5e2a35dce055.png">
    <script>

/* Modernizr 2.6.2 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-touch-cssclasses-addtest-prefixed-teststyles-testprop-testallprops-prefixes-domprefixes
 */
;window.Modernizr=function(a,b,c){function z(a){j.cssText=a}function A(a,b){return z(m.join(a+";")+(b||""))}function B(a,b){return typeof a===b}function C(a,b){return!!~(""+a).indexOf(b)}function D(a,b){for(var d in a){var e=a[d];if(!C(e,"-")&&j[e]!==c)return b=="pfx"?e:!0}return!1}function E(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:B(f,"function")?f.bind(d||b):f}return!1}function F(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),e=(a+" "+o.join(d+" ")+d).split(" ");return B(b,"string")||B(b,"undefined")?D(e,b):(e=(a+" "+p.join(d+" ")+d).split(" "),E(e,b,c))}var d="2.6.2",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k,l={}.toString,m=" -webkit- -moz- -o- -ms- ".split(" "),n="Webkit Moz O ms",o=n.split(" "),p=n.toLowerCase().split(" "),q={},r={},s={},t=[],u=t.slice,v,w=function(a,c,d,e){var f,i,j,k,l=b.createElement("div"),m=b.body,n=m||b.createElement("body");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:h+(d+1),l.appendChild(j);return f=["&#173;",'<style id="s',h,'">',a,"</style>"].join(""),l.id=h,(m?l:n).innerHTML+=f,n.appendChild(l),m||(n.style.background="",n.style.overflow="hidden",k=g.style.overflow,g.style.overflow="hidden",g.appendChild(n)),i=c(l,a),m?l.parentNode.removeChild(l):(n.parentNode.removeChild(n),g.style.overflow=k),!!i},x={}.hasOwnProperty,y;!B(x,"undefined")&&!B(x.call,"undefined")?y=function(a,b){return x.call(a,b)}:y=function(a,b){return b in a&&B(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=u.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(u.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(u.call(arguments)))};return e}),q.touch=function(){var c;return"ontouchstart"in a||a.DocumentTouch&&b instanceof DocumentTouch?c=!0:w(["@media (",m.join("touch-enabled),("),h,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(a){c=a.offsetTop===9}),c};for(var G in q)y(q,G)&&(v=G.toLowerCase(),e[v]=q[G](),t.push((e[v]?"":"no-")+v));return e.addTest=function(a,b){if(typeof a=="object")for(var d in a)y(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof f!="undefined"&&f&&(g.className+=" "+(b?"":"no-")+a),e[a]=b}return e},z(""),i=k=null,e._version=d,e._prefixes=m,e._domPrefixes=p,e._cssomPrefixes=o,e.testProp=function(a){return D([a])},e.testAllProps=F,e.testStyles=w,e.prefixed=function(a,b,c){return b?F(a,b,c):F(a,"pfx")},g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+t.join(" "):""),e}(this,this.document);

</script>

<script>

  Modernizr.addTest('speech', function(){
    return Modernizr.prefixed('speechRecognition', window);
  });

  Modernizr.addTest('AudioContext', function(){
    return Modernizr.prefixed('AudioContext', window);
  });

  Modernizr.addTest('getUserMedia', function(){
    return Modernizr.prefixed('getUserMedia', navigator);
  });

</script>

    <link rel="stylesheet" media="screen" href="https://assets.jisho.org/assets/application-61d8e80944056be2e8c772e3d3b243767cc3550ca5b7da4d62ba58a5604fc3c3.css" />
    <meta name="csrf-param" content="authenticity_token" />
<meta name="csrf-token" content="H2sSB870xVlk6w9qDfHPRJkKlZd9Yg45qf7YkDZdWd13RMZGuwT/XU1JjKk9rkKMeGHzsDwCj+ksBk1rwka7nw==" />
    
    <link rel="shortcut icon" type="image/x-icon" href="https://assets.jisho.org/assets/favicon-062c4a0240e1e6d72c38aa524742c2d558ee6234497d91dd6b75a182ea823d65.ico" />
    <title>Jisho.org: Japanese Dictionary</title>
    <meta name="Description" content="Powerful and easy-to-use online Japanese dictionary with words, kanji and example sentences.">
    <script async src="https://pagead2.googlesyndication.com/tag/js/gpt.js"></script>
    <script>
      var googletag = googletag || {};
      googletag.cmd = googletag.cmd || [];
    </script>
    <script>
      googletag.cmd.push(function() {
        googletag.pubads().setPrivacySettings({
          limitedAds: true,
          nonPersonalizedAds: true,
          restrictDataProcessing: true,
        });
      });

      googletag.cmd.push(function() {
        googletag.defineSlot('\/1910472\/search_right_half', [ 300.0 ,  150.0 ], 'div-gpt-ad-1528340241998-0').addService(googletag.pubads());
        googletag.defineSlot('\/1910472\/search_right_full', [ 300.0 ,  250.0 ], 'div-gpt-ad-1528340390859-0').addService(googletag.pubads());
        googletag.defineSlot('\/1910472\/search_bottom_leaderboard', [ 728.0 ,  90.0 ], 'div-gpt-ad-1528340463374-0').addService(googletag.pubads());
        googletag.pubads().enableSingleRequest();
        googletag.pubads().collapseEmptyDivs();
        googletag.enableServices();
      });
    </script>
  </head>
  <body class=" highlight_keyword highlight_common_readings highlight_common_representations production">
    
<header class="row collapse">
  <div class="small-4 columns">
    <h1 class="logo"><a href="/">Jisho</a></h1>
  </div>
  <div class="small-8 columns">
    <nav class="nav-main_navigation">
  <ul class="links">
    <li><a href="/forum">Forum</a></li>
    <li><a href="/about">About</a></li>
    <li>
      <div class="color_theme_picker--wrapper">
        <a href="#">Theme</a>
        <ul class="color_theme_picker--choices">
          <li><a href="/word/%E7%9C%9F%E3%81%A3%E7%9B%B4%E3%81%90?color_theme=light">Light mode</a></li>
          <li><a href="/word/%E7%9C%9F%E3%81%A3%E7%9B%B4%E3%81%90?color_theme=dark">Dark mode</a></li>
          <li><div>Auto</div></li>
        </ul>
      </div>
    </li> 
    <li>
      <div id="login_link">
          <a href="/auth/auth0">Log in / Sign up</a>
      </div>
    </li>
  </ul>
</nav>

  </div>
</header>

    <div class="row collapse">
      <div class="large-12 columns">
        <form class="search" data-live="false" id="search" action="/search" accept-charset="UTF-8" method="get"><input name="utf8" type="hidden" value="&#x2713;" />  <div id="input_methods" class="input_methods">
    <div class="input_method_button disable-mobile-hover-background" id="handwriting_button">
      <svg viewBox="0 0 30 30" class="icon tablet-icon ">
  <use xlink:href="https://jisho.org/assets/icons-ab7975eb6f8bb532f99ba2d769be43c5431dec4c0e4d220df7367f1d954d9424.svg#tablet"></use>
</svg>

      <h4>Draw</h4>
    </div>
    <div class="input_method_button disable-mobile-hover-background" id="radical_button">
      <svg viewBox="0 0 30 30" class="icon radical-icon ">
  <use xlink:href="https://jisho.org/assets/icons-ab7975eb6f8bb532f99ba2d769be43c5431dec4c0e4d220df7367f1d954d9424.svg#radical"></use>
</svg>

      <h4>Radicals</h4>
    </div>
    <div class="input_method_button disable-mobile-hover-background" id="speech_button">
      <svg viewBox="0 0 30 30" class="icon speech-icon ">
  <use xlink:href="https://jisho.org/assets/icons-ab7975eb6f8bb532f99ba2d769be43c5431dec4c0e4d220df7367f1d954d9424.svg#speech"></use>
</svg>

      <h4>Voice</h4>
    </div>
  </div>
  <div class="overlay">
    <div id="search_main" class="main">
      <div class="inner">
        <div id="advanced_button" class="search_type">
          <span class="text" id="search_dropdown_text">All</span>
          <span class="carat">▾</span>
        </div>
        <button type="submit" class="submit icon" tabindex="2">
          <svg viewBox="0 0 30 30" class="icon search-icon ">
  <use xlink:href="https://jisho.org/assets/icons-ab7975eb6f8bb532f99ba2d769be43c5431dec4c0e4d220df7367f1d954d9424.svg#search"></use>
</svg>

        </button>
        <a class="search-form_clear-button_js search-form_clear-button icon" accesskey="1" tabindex="3">
          <svg viewBox="0 0 30 30" class="icon clear-icon ">
  <use xlink:href="https://jisho.org/assets/icons-ab7975eb6f8bb532f99ba2d769be43c5431dec4c0e4d220df7367f1d954d9424.svg#clear"></use>
</svg>

        </a>

        <div class="text_input">
          <div class="hidden range"></div>
          <input
            type="text"
            class="keyword japanese_gothic"
            name="keyword"
            id="keyword"
            value=""
            tabindex="1"
            lang="ja"
            autocapitalize="off"
            autocomplete="off"
            autocorrect="off"
            spellcheck="false"
            placeholder="English, Japanese, Romaji, words or text"
            data-autoload="false"
            data-effective-keyword=""
          />
        </div>
      </div>
      <div id="search_sub" class="sub">
        <div id="radical_area" class="area radical">
  <div class="results_wrapper">
  <div class="results">
    <div class="list">
      <div class="instructions">
        <div class="vertical-bottom">
          <div class="vertical-bottom-inner">
            
    <div class="arrow">▾</div>
    <div class="text">
      Find kanji by their parts. Click on
      <svg viewBox="0 0 30 30" class="icon reset-icon inline">
  <use xlink:href="https://jisho.org/assets/icons-ab7975eb6f8bb532f99ba2d769be43c5431dec4c0e4d220df7367f1d954d9424.svg#reset"></use>
</svg>

      to reset radicals.
    </div>

          </div>
        </div>
      </div>
    </div>
    <div class="show_more">More</div>
    <div class="show_less link">Less</div>
  </div>
  <div class="scroll_indicator show-for-small-only"></div>
</div>
  <!-- <p>
  Click on the parts that are in the kanji you are looking for. You can click on them again to de-select them.
  <input type="button" value="Reset" id="reset_button" onclick='Radicals.reset()' />
</p> -->

<ul class="radical_table clearfix" lang="ja">
  <li class="reset_icon_list_item">
    <svg viewBox="0 0 30 30" class="icon reset-icon reset_radicals" title="Reset selection">
  <use xlink:href="https://jisho.org/assets/icons-ab7975eb6f8bb532f99ba2d769be43c5431dec4c0e4d220df7367f1d954d9424.svg#reset"></use>
</svg>

  </li>
  <li class="number">1</li>
  <li class="radical" data-radical="1">一</li>
  <li class="radical" data-radical="2">｜</li>
  <li class="radical" data-radical="3">丶</li>
  <li class="radical" data-radical="4">ノ</li>
  <li class="radical" data-radical="5">乙</li>
  <li class="radical" data-radical="6">亅</li>
  <li class="number">2</li>
  <li class="radical" data-radical="7">二</li>
  <li class="radical" data-radical="8">亠</li>
  <li class="radical" data-radical="9">人</li>
  <li class="radical radical-image radical-10" data-radical="10" data-radk="化">⺅</li>
  <li class="radical radical-image radical-11" data-radical="11" data-radk="个">𠆢</li>
  <li class="radical" data-radical="12">儿</li>
  <li class="radical" data-radical="13">入</li>
  <li class="radical" data-radical="14">ハ</li>
  <li class="radical radical-image radical-15" data-radical="15" data-radk="并">丷</li>
  <li class="radical" data-radical="16">冂</li>
  <li class="radical" data-radical="17">冖</li>
  <li class="radical" data-radical="18">冫</li>
  <li class="radical" data-radical="19">几</li>
  <li class="radical" data-radical="20">凵</li>
  <li class="radical" data-radical="21">刀</li>
  <li class="radical radical-image radical-22" data-radical="22" data-radk="刈">⺉</li>
  <li class="radical" data-radical="23">力</li>
  <li class="radical" data-radical="24">勹</li>
  <li class="radical" data-radical="25">匕</li>
  <li class="radical" data-radical="26">匚</li>
  <li class="radical" data-radical="27">十</li>
  <li class="radical" data-radical="28">卜</li>
  <li class="radical" data-radical="29">卩</li>
  <li class="radical" data-radical="30">厂</li>
  <li class="radical" data-radical="31">厶</li>
  <li class="radical" data-radical="32">又</li>
  <li class="radical" data-radical="33">マ</li>
  <li class="radical" data-radical="34">九</li>
  <li class="radical" data-radical="35">ユ</li>
  <li class="radical" data-radical="36">乃</li>
  <li class="radical" data-radical="360" data-radk="乞">𠂉</li>
  <li class="number">3</li>
  <li class="radical radical-image radical-37" data-radical="37" data-radk="込">⻌</li>
  <li class="radical" data-radical="38">口</li>
  <li class="radical" data-radical="39">囗</li>
  <li class="radical" data-radical="40">土</li>
  <li class="radical" data-radical="41">士</li>
  <li class="radical" data-radical="42">夂</li>
  <li class="radical" data-radical="43">夕</li>
  <li class="radical" data-radical="44">大</li>
  <li class="radical" data-radical="45">女</li>
  <li class="radical" data-radical="46">子</li>
  <li class="radical" data-radical="47">宀</li>
  <li class="radical" data-radical="48">寸</li>
  <li class="radical" data-radical="49">小</li>
  <li class="radical radical-image radical-50" data-radical="50" data-radk="尚">⺌</li>
  <li class="radical" data-radical="51">尢</li>
  <li class="radical" data-radical="52">尸</li>
  <li class="radical" data-radical="53">屮</li>
  <li class="radical" data-radical="54">山</li>
  <li class="radical" data-radical="55">川</li>
  <li class="radical" data-radical="56">巛</li>
  <li class="radical" data-radical="57">工</li>
  <li class="radical" data-radical="58">已</li>
  <li class="radical" data-radical="59">巾</li>
  <li class="radical" data-radical="60">干</li>
  <li class="radical" data-radical="61">幺</li>
  <li class="radical" data-radical="62">广</li>
  <li class="radical" data-radical="63">廴</li>
  <li class="radical" data-radical="64">廾</li>
  <li class="radical" data-radical="65">弋</li>
  <li class="radical" data-radical="66">弓</li>
  <li class="radical" data-radical="67">ヨ</li>
  <li class="radical" data-radical="68">彑</li>
  <li class="radical" data-radical="69">彡</li>
  <li class="radical" data-radical="70">彳</li>
  <li class="radical radical-image radical-71" data-radical="71" data-radk="忙">⺖</li>
  <li class="radical radical-image radical-72" data-radical="72" data-radk="扎">⺘</li>
  <li class="radical radical-image radical-73" data-radical="73" data-radk="汁">⺡</li>
  <li class="radical radical-image radical-74" data-radical="74" data-radk="犯">⺨</li>
  <li class="radical radical-image radical-75" data-radical="75" data-radk="艾">⺾</li>
  <li class="radical radical-image radical-76" data-radical="76" data-radk="邦">⻏</li>
  <li class="radical radical-image radical-77" data-radical="77" data-radk="阡">⻖</li>
  <li class="radical" data-radical="78">也</li>
  <li class="radical" data-radical="79">亡</li>
  <li class="radical" data-radical="80">及</li>
  <li class="radical" data-radical="81">久</li>
  <li class="number">4</li>
  <li class="radical radical-image radical-82" data-radical="82" data-radk="老">⺹</li>
  <li class="radical" data-radical="83">心</li>
  <li class="radical" data-radical="84">戈</li>
  <li class="radical" data-radical="85">戸</li>
  <li class="radical" data-radical="86">手</li>
  <li class="radical" data-radical="87">支</li>
  <li class="radical" data-radical="88">攵</li>
  <li class="radical" data-radical="89">文</li>
  <li class="radical" data-radical="90">斗</li>
  <li class="radical" data-radical="91">斤</li>
  <li class="radical" data-radical="92">方</li>
  <li class="radical" data-radical="93">无</li>
  <li class="radical" data-radical="94">日</li>
  <li class="radical" data-radical="95">曰</li>
  <li class="radical" data-radical="96">月</li>
  <li class="radical" data-radical="97">木</li>
  <li class="radical" data-radical="98">欠</li>
  <li class="radical" data-radical="99">止</li>
  <li class="radical" data-radical="100">歹</li>
  <li class="radical" data-radical="101">殳</li>
  <li class="radical" data-radical="102">比</li>
  <li class="radical" data-radical="103">毛</li>
  <li class="radical" data-radical="104">氏</li>
  <li class="radical" data-radical="105">气</li>
  <li class="radical" data-radical="106">水</li>
  <li class="radical" data-radical="107">火</li>
  <li class="radical radical-image radical-108" data-radical="108" data-radk="杰">⺣</li>
  <li class="radical" data-radical="109">爪</li>
  <li class="radical" data-radical="110">父</li>
  <li class="radical" data-radical="111">爻</li>
  <li class="radical" data-radical="112">爿</li>
  <li class="radical" data-radical="113">片</li>
  <li class="radical" data-radical="114">牛</li>
  <li class="radical" data-radical="115">犬</li>
  <li class="radical radical-image radical-116" data-radical="116" data-radk="礼">⺭</li>
  <li class="radical" data-radical="117">王</li>
  <li class="radical" data-radical="118">元</li>
  <li class="radical" data-radical="119">井</li>
  <li class="radical" data-radical="120">勿</li>
  <li class="radical" data-radical="121">尤</li>
  <li class="radical" data-radical="122">五</li>
  <li class="radical" data-radical="123">屯</li>
  <li class="radical" data-radical="124">巴</li>
  <li class="radical" data-radical="125">毋</li>
  <li class="number">5</li>
  <li class="radical" data-radical="126">玄</li>
  <li class="radical" data-radical="127">瓦</li>
  <li class="radical" data-radical="128">甘</li>
  <li class="radical" data-radical="129">生</li>
  <li class="radical" data-radical="130">用</li>
  <li class="radical" data-radical="131">田</li>
  <li class="radical" data-radical="132">疋</li>
  <li class="radical radical-image radical-133" data-radical="133" data-radk="疔">疒</li>
  <li class="radical" data-radical="134">癶</li>
  <li class="radical" data-radical="135">白</li>
  <li class="radical" data-radical="136">皮</li>
  <li class="radical" data-radical="137">皿</li>
  <li class="radical" data-radical="138">目</li>
  <li class="radical" data-radical="139">矛</li>
  <li class="radical" data-radical="140">矢</li>
  <li class="radical" data-radical="141">石</li>
  <li class="radical" data-radical="142">示</li>
  <li class="radical radical-image radical-143" data-radical="143" data-radk="禹">禸</li>
  <li class="radical" data-radical="144">禾</li>
  <li class="radical" data-radical="145">穴</li>
  <li class="radical" data-radical="146">立</li>
  <li class="radical radical-image radical-147" data-radical="147" data-radk="初">⻂</li>
  <li class="radical" data-radical="148">世</li>
  <li class="radical" data-radical="149">巨</li>
  <li class="radical" data-radical="150">冊</li>
  <li class="radical" data-radical="151">母</li>
  <li class="radical radical-image radical-152" data-radical="152" data-radk="買">⺲</li>
  <li class="radical" data-radical="153">牙</li>
  <li class="number">6</li>
  <li class="radical" data-radical="154">瓜</li>
  <li class="radical" data-radical="155">竹</li>
  <li class="radical" data-radical="156">米</li>
  <li class="radical" data-radical="157">糸</li>
  <li class="radical" data-radical="158">缶</li>
  <li class="radical" data-radical="159">羊</li>
  <li class="radical" data-radical="160">羽</li>
  <li class="radical" data-radical="161">而</li>
  <li class="radical" data-radical="162">耒</li>
  <li class="radical" data-radical="163">耳</li>
  <li class="radical" data-radical="164">聿</li>
  <li class="radical" data-radical="165">肉</li>
  <li class="radical" data-radical="166">自</li>
  <li class="radical" data-radical="167">至</li>
  <li class="radical" data-radical="168">臼</li>
  <li class="radical" data-radical="169">舌</li>
  <li class="radical" data-radical="170">舟</li>
  <li class="radical" data-radical="171">艮</li>
  <li class="radical" data-radical="172">色</li>
  <li class="radical" data-radical="173">虍</li>
  <li class="radical" data-radical="174">虫</li>
  <li class="radical" data-radical="175">血</li>
  <li class="radical" data-radical="176">行</li>
  <li class="radical" data-radical="177">衣</li>
  <li class="radical" data-radical="178">西</li>
  <li class="number">7</li>
  <li class="radical" data-radical="179">臣</li>
  <li class="radical" data-radical="180">見</li>
  <li class="radical" data-radical="181">角</li>
  <li class="radical" data-radical="182">言</li>
  <li class="radical" data-radical="183">谷</li>
  <li class="radical" data-radical="184">豆</li>
  <li class="radical" data-radical="185">豕</li>
  <li class="radical" data-radical="186">豸</li>
  <li class="radical" data-radical="187">貝</li>
  <li class="radical" data-radical="188">赤</li>
  <li class="radical" data-radical="189">走</li>
  <li class="radical" data-radical="190">足</li>
  <li class="radical" data-radical="191">身</li>
  <li class="radical" data-radical="192">車</li>
  <li class="radical" data-radical="193">辛</li>
  <li class="radical" data-radical="194">辰</li>
  <li class="radical" data-radical="195">酉</li>
  <li class="radical" data-radical="196">釆</li>
  <li class="radical" data-radical="197">里</li>
  <li class="radical" data-radical="198">舛</li>
  <li class="radical" data-radical="199">麦</li>
  <li class="number">8</li>
  <li class="radical" data-radical="200">金</li>
  <li class="radical" data-radical="201">長</li>
  <li class="radical" data-radical="202">門</li>
  <li class="radical" data-radical="203">隶</li>
  <li class="radical" data-radical="204">隹</li>
  <li class="radical" data-radical="205">雨</li>
  <li class="radical" data-radical="206">青</li>
  <li class="radical" data-radical="207">非</li>
  <li class="radical" data-radical="208">奄</li>
  <li class="radical" data-radical="209">岡</li>
  <li class="radical" data-radical="210">免</li>
  <li class="radical" data-radical="211">斉</li>
  <li class="number">9</li>
  <li class="radical" data-radical="212">面</li>
  <li class="radical" data-radical="213">革</li>
  <li class="radical" data-radical="214">韭</li>
  <li class="radical" data-radical="215">音</li>
  <li class="radical" data-radical="216">頁</li>
  <li class="radical" data-radical="217">風</li>
  <li class="radical" data-radical="218">飛</li>
  <li class="radical" data-radical="219">食</li>
  <li class="radical" data-radical="220">首</li>
  <li class="radical" data-radical="221">香</li>
  <li class="radical" data-radical="222">品</li>
  <li class="number">10</li>
  <li class="radical" data-radical="223">馬</li>
  <li class="radical" data-radical="224">骨</li>
  <li class="radical" data-radical="225">高</li>
  <li class="radical" data-radical="226">髟</li>
  <li class="radical" data-radical="227">鬥</li>
  <li class="radical" data-radical="228">鬯</li>
  <li class="radical" data-radical="229">鬲</li>
  <li class="radical" data-radical="230">鬼</li>
  <li class="radical" data-radical="231">竜</li>
  <li class="radical" data-radical="232">韋</li>
  <li class="number">11</li>
  <li class="radical" data-radical="233">魚</li>
  <li class="radical" data-radical="234">鳥</li>
  <li class="radical" data-radical="235">鹵</li>
  <li class="radical" data-radical="236">鹿</li>
  <li class="radical" data-radical="237">麻</li>
  <li class="radical" data-radical="238">亀</li>
  <li class="radical radical-image radical-239" data-radical="239" data-radk="滴">啇</li>
  <li class="radical" data-radical="240">黄</li>
  <li class="radical" data-radical="241">黒</li>
  <li class="number">12</li>
  <li class="radical" data-radical="242">黍</li>
  <li class="radical" data-radical="243">黹</li>
  <li class="radical" data-radical="244">無</li>
  <li class="radical" data-radical="245">歯</li>
  <li class="number">13</li>
  <li class="radical" data-radical="246">黽</li>
  <li class="radical" data-radical="247">鼎</li>
  <li class="radical" data-radical="248">鼓</li>
  <li class="radical" data-radical="249">鼠</li>
  <li class="number">14</li>
  <li class="radical" data-radical="250">鼻</li>
  <li class="radical" data-radical="251">齊</li>
  <li class="number">17</li>
  <li class="radical" data-radical="252">龠</li>
</ul>

</div>

        <div id="handwriting_area" class="area handwriting" data-url="/handwriting">
  <div class="results_wrapper">
  <div class="results">
    <div class="list">
      <div class="instructions">
        <div class="vertical-bottom">
          <div class="vertical-bottom-inner">
            
    <div class="arrow">▾</div>
    <div class="text">Input kanji by handwriting. Just start drawing!</div>

          </div>
        </div>
      </div>
    </div>
    <div class="show_more">More</div>
    <div class="show_less link">Less</div>
  </div>
  <div class="scroll_indicator show-for-small-only"></div>
</div>
  <div class="inputs">
    <div class="panel disablePanZoomInIE">
  <canvas width="310" height="275"></canvas>
  <svg viewBox="0 0 30 30" class="icon pencil-icon ">
  <use xlink:href="https://jisho.org/assets/icons-ab7975eb6f8bb532f99ba2d769be43c5431dec4c0e4d220df7367f1d954d9424.svg#pencil"></use>
</svg>

  <div class="buttons">
    <button type="button" class="tiny reset button">Clear</button>
    <button type="button" class="tiny back button">Back</button>
  </div>
</div>

    <div class="panel disablePanZoomInIE">
  <canvas width="310" height="275"></canvas>
  <svg viewBox="0 0 30 30" class="icon pencil-icon ">
  <use xlink:href="https://jisho.org/assets/icons-ab7975eb6f8bb532f99ba2d769be43c5431dec4c0e4d220df7367f1d954d9424.svg#pencil"></use>
</svg>

  <div class="buttons">
    <button type="button" class="tiny reset button">Clear</button>
    <button type="button" class="tiny back button">Back</button>
  </div>
</div>

  </div>
</div>

        <div id="speech_area" class="area speech">

  <div class="speech_results"></div>

  <div class="explanation">
    <div class="arrow">▴</div>
    <div class="text">
      Speak! You can use words like "back", "clear", "stop", "input", or "search".  At any time say "Japanese" to switch to Japanese (requires permissions again).
    </div>
  </div>

  <div class="buttons">
    <button class="tiny english">English</button>
    <button class="tiny japanese">Japanese</button>
  </div>
</div>

        <div id="advanced_area" class="hidden area advanced">
  <div class="filters">
  <ul class="button-group radius" data-filter-group="type">
    <li><a accesskey="a" class=" filter small button" data-filter="type-all" href="//jisho.org/search">All</a></li>
    <li><a accesskey="w" class=" filter small button" data-filter="words" href="//jisho.org/search">Words</a></li>
    <li><a accesskey="k" class=" filter small button" data-filter="kanji" href="//jisho.org/search">Kanji</a></li>
    <li><a accesskey="s" class=" filter small button" data-filter="sentences" href="//jisho.org/search">Sentences</a></li>
    <li><a accesskey="n" class=" filter small button" data-filter="names" href="//jisho.org/search">Names</a></li>
  </ul>
  <p>
    Read the <a href="//jisho.org/docs">advanced search options documentation</a> for a full list of available search options.
  </p>
</div>

</div>

      </div>
    </div>
  </div>

</form>
      </div>
    </div>
    <div id="inflection_modal" class="reveal-modal small" data-reveal>
      <div class="modal_content"></div>
      <a class="close-reveal-modal">&#215;</a>
    </div>
    <div id="page_container" class="row">
      <div class="large-12 columns">
        
        <div class="page">
  <article class="concept_page columns small-12 medium-8">
    

<div class="concept_light clearfix">
  <div class="concept_light-wrapper  columns zero-padding">
    <div class="concept_light-readings japanese japanese_gothic" lang="ja">
      <div class="concept_light-representation">      <span class="furigana">
        <span class="kanji-1-up kanji">ま</span><span></span><span class="kanji-1-up kanji">す</span><span></span>
      </span>
      <span class="text">
        真<span>っ</span>直<span>ぐ</span>
      </span>
</div>
    </div>

      <div class="concept_light-status">
        <span class="concept_light-tag concept_light-common success label">Common word</span> <span class="concept_light-tag label">JLPT N5</span>  <a class="concept_light-status_link" data-dropdown="links_drop_51859ce5d5dda7295401b31c" data-options="is_hover:true; hover_timeout:300" href="#">Links</a><ul class="f-dropdown" id="links_drop_51859ce5d5dda7295401b31c" data-dropdown-content="data-dropdown-content"><li><a href="/search/%E7%9C%9F%E3%81%A3%E7%9B%B4%E3%81%90%20%23sentences">Sentence search for 真っ直ぐ</a></li><li><a href="/search/%E3%81%BE%E3%81%A3%E3%81%99%E3%81%90%20%23sentences">Sentence search for まっすぐ</a></li><li><a href="/search/%E7%9C%9F%E3%81%A3%E3%81%99%E3%81%90%20%23sentences">Sentence search for 真っすぐ</a></li><li><a href="/search/%E7%9C%9F%E3%81%A3%E7%9B%B4%20%23sentences">Sentence search for 真っ直</a></li><li><a href="/search/%E7%9C%9F%E7%9B%B4%E3%81%90%20%23sentences">Sentence search for 真直ぐ</a></li><li><a href="/search/%E7%9C%9F%E3%81%99%E3%81%90%20%23sentences">Sentence search for 真すぐ</a></li><li><a href="//jisho.org/search/%E7%9C%9F%E7%9B%B4%20%23kanji">Kanji details for 真 and 直</a></li><li><a href="http://www.edrdg.org/jmdictdb/cgi-bin/edform.py?svc=jmdict&amp;sid=&amp;q=1580600&amp;a=2">Edit in JMdict</a></li></ul>
      </div>
  </div>


  <div class="concept_light-meanings medium-9 columns">
    <div class='meanings-wrapper'><div class="meaning-tags">Na-adjective (keiyodoshi), Adverb (fukushi), Noun</div><div class="meaning-wrapper"><div class="meaning-definition zero-padding"><span class="meaning-definition-section_divider">1. </span><span class="meaning-meaning">straight (ahead); direct; upright; erect</span><span>&#8203;</span><span class="supplemental_info"><span class="sense-tag tag-tag">Usually written using kana alone</span></span></div><span class="sentences zero-padding"><div class="sentence"><ul class="japanese japanese_gothic clearfix" lang="ja"><li class="clearfix"><span class="unlinked">あなた</span></li><li class="clearfix"><span class="unlinked">は</span></li><li class="clearfix"><span class="unlinked">きのう</span></li><li class="clearfix"><span class="furigana">ほうかご</span><span class="unlinked">放課後</span></li><li class="clearfix"><span class="unlinked">まっすぐ</span></li><li class="clearfix"><span class="furigana">きたく</span><span class="unlinked">帰宅</span></li><li class="clearfix"><span class="unlinked">しました</span></li><li class="clearfix"><span class="unlinked">か</span></li>。<li class="english" lang="en">Did you go straight home after school yesterday?</li></ul></div></span></div><div class="meaning-tags">Na-adjective (keiyodoshi), Noun</div><div class="meaning-wrapper"><div class="meaning-definition zero-padding"><span class="meaning-definition-section_divider">2. </span><span class="meaning-meaning">straightforward; honest; frank</span><span>&#8203;</span><span class="supplemental_info"><span class="sense-tag tag-tag">Usually written using kana alone</span></span></div></div><div class="meaning-tags">Other forms</div><div class="meaning-wrapper"><div class="meaning-definition zero-padding"><span class="meaning-meaning"><span class="break-unit">真っすぐ 【まっすぐ】</span>、<span class="break-unit">真っ直 【まっすぐ】</span>、<span class="break-unit">真直ぐ 【まっすぐ】</span>、<span class="break-unit">真すぐ 【まっすぐ】</span></span></div></div><div class="meaning-tags">Notes</div><div class="meaning-wrapper"><div class="meaning-definition meaning-representation_notes zero-padding"><span class="">真直ぐ: Irregular okurigana usage. 真すぐ: Irregular okurigana usage.</span></div></div></div>
  </div>


</div>



    <h3>Discussions</h3>
    <p>
        <a href="#" class="signin">Log in</a> to talk about this word.
    </p>

  </article>

  <aside class="columns small-12 medium-4">
      <div class="kanji_light_block">
        <h4>Kanji in this word</h4>

        <div class="entry kanji_light clearfix">
  <div class="kanji_light_content">
    <div class="debug">
      1.8254516375268075<br>
    </div>

    <div class="info clearfix">
        <span class="strokes">10 strokes.</span>

        JLPT N4.

        Jōyō kanji, taught in grade 3.
    </div>

    <div class="literal_block">
      <span class="character literal japanese_gothic" lang="ja"><a href="//jisho.org/search/%E7%9C%9F%20%23kanji">真</a></span>
    </div>

      <div class="meanings english sense">
            <span>true, </span>
            <span>reality, </span>
            <span>Buddhist sect</span>
      </div>

        <div class="kun readings">
          <span class="type">Kun: </span>
            <span class="japanese_gothic "><a href="//jisho.org/search/%E7%9C%9F%20%E3%81%BE">ま</a>、 </span>
            <span class="japanese_gothic "><a href="//jisho.org/search/%E7%9C%9F%20%E3%81%BE">ま-</a>、 </span>
            <span class="japanese_gothic "><a href="//jisho.org/search/%E7%9C%9F%20%E3%81%BE%E3%81%93%E3%81%A8">まこと</a></span>
        </div>

        <div class="on readings">
          <span class="type">On: </span>
            <span class="japanese_gothic "><a href="//jisho.org/search/%E7%9C%9F%20%E3%81%97%E3%82%93">シン</a></span>
        </div>
  </div>

  <a class="light-details_link" href="//jisho.org/search/%E7%9C%9F%20%23kanji">Details ▸</a>
</div>
<div class="entry kanji_light clearfix">
  <div class="kanji_light_content">
    <div class="debug">
      0.7153502235469449<br>
    </div>

    <div class="info clearfix">
        <span class="strokes">8 strokes.</span>

        JLPT N3.

        Jōyō kanji, taught in grade 2.
    </div>

    <div class="literal_block">
      <span class="character literal japanese_gothic" lang="ja"><a href="//jisho.org/search/%E7%9B%B4%20%23kanji">直</a></span>
    </div>

      <div class="meanings english sense">
            <span>straightaway, </span>
            <span>honesty, </span>
            <span>frankness, </span>
            <span>fix, </span>
            <span>repair</span>
      </div>

        <div class="kun readings">
          <span class="type">Kun: </span>
            <span class="japanese_gothic "><a href="//jisho.org/search/%E7%9B%B4%20%E3%81%9F%E3%81%A0%E3%81%A1%E3%81%AB">ただ.ちに</a>、 </span>
            <span class="japanese_gothic "><a href="//jisho.org/search/%E7%9B%B4%20%E3%81%AA%E3%81%8A%E3%81%99">なお.す</a>、 </span>
            <span class="japanese_gothic "><a href="//jisho.org/search/%E7%9B%B4%20%E3%81%AA%E3%81%8A%E3%81%99">-なお.す</a>、 </span>
            <span class="japanese_gothic "><a href="//jisho.org/search/%E7%9B%B4%20%E3%81%AA%E3%81%8A%E3%82%8B">なお.る</a>、 </span>
            <span class="japanese_gothic "><a href="//jisho.org/search/%E7%9B%B4%20%E3%81%AA%E3%81%8A%E3%81%8D">なお.き</a>、 </span>
            <span class="japanese_gothic "><a href="//jisho.org/search/%E7%9B%B4%20%E3%81%99%E3%81%90">す.ぐ</a></span>
        </div>

        <div class="on readings">
          <span class="type">On: </span>
            <span class="japanese_gothic "><a href="//jisho.org/search/%E7%9B%B4%20%E3%81%A1%E3%82%87%E3%81%8F">チョク</a>、 </span>
            <span class="japanese_gothic "><a href="//jisho.org/search/%E7%9B%B4%20%E3%81%98%E3%81%8D">ジキ</a>、 </span>
            <span class="japanese_gothic "><a href="//jisho.org/search/%E7%9B%B4%20%E3%81%98%E3%81%8B">ジカ</a></span>
        </div>
  </div>

  <a class="light-details_link" href="//jisho.org/search/%E7%9B%B4%20%23kanji">Details ▸</a>
</div>

      </div>
  </aside>
</div>

      </div>
    </div>

      <footer class="clearfix">
  <div class="ornament">
  </div>

    
<div class="footer-ad">
  <!-- /1910472/search_bottom_leaderboard -->
  <div id='div-gpt-ad-1528340463374-0' style='height:90px; width:728px;'>
  <script>
  googletag.cmd.push(function() { googletag.display('div-gpt-ad-1528340463374-0'); });
  </script>
  </div>
</div>



  <div class="row">
    <div class="small-12 columns">
      <p>
        Jisho.org is lovingly crafted by <a href="//jisho.org/about">Kim, Miwa and Andrew</a>.
        You can reach us at
        Facebook <a href="https://www.facebook.com/Jisho.org">fb.com/jisho.org</a>, Twitter <a href="https://twitter.com/jisho">@jisho</a> or e-mail <a href="mailto:jisho.org@gmail.com">jisho.org@gmail.com</a>. Before you contact us, please read our list of <a href="//jisho.org/faq">frequently asked questions</a>. Please note that we read all messages we get, but it can take a long time for us to reply as Jisho is a side project and we do not have very much time to devote to it.
      </p>
    </div>
  </div>

  <div class="row">
    <div class="small-12 large-4 columns">
      <p>
        This site uses the <a href="http://www.edrdg.org/wiki/index.php/JMdict-EDICT_Dictionary_Project">JMdict</a>, <a href="http://www.edrdg.org/wiki/index.php/KANJIDIC_Project">Kanjidic2</a>, <a href="http://www.edrdg.org/enamdict/enamdict_doc.html">JMnedict</a> and <a href="http://www.edrdg.org/krad/kradinf.html">Radkfile</a> dictionary files. These files are the property of the <a href="http://www.edrdg.org/"> Electronic Dictionary Research and Development Group</a>, and are used in conformance with the Group's <a href="http://www.edrdg.org/edrdg/licence.html">licence</a>.
      </p>
      <p>
        Example sentences come from the <a href="http://tatoeba.org/">Tatoeba</a> project and are licensed under <a href="http://creativecommons.org/licenses/by/2.0/fr/">Creative Commons CC-BY</a>.
      </p>
      <p>
        Audio files are graciously provided by <a href="http://www.tofugu.com">Tofugu’s</a> excellent kanji learning site <a href="http://www.wanikani.com">WaniKani</a>.
      </p>
    </div>
    <div class="small-12 large-4 columns">
      <p>
        The SKIP (System of Kanji Indexing by Patterns) system for ordering kanji was developed by Jack Halpern (Kanji Dictionary Publishing Society at <a href="http://www.kanji.org/">http://www.kanji.org/</a>), and is used with his permission. The license is <a href="http://www.kanji.org/kanji/dictionaries/skip_permission.htm">Creative Commons Attribution-ShareAlike 4.0 International</a>.
      </p>
    </div>
    <div class="small-12 large-4 columns">
      <p>
        Kanji stroke diagrams are based on data from <a href="http://kanjivg.tagaini.net" title="Welcome - KanjiVG">KanjiVG</a>, which is copyright &copy; 2009-2012 Ulrich Apel and released under the <a href="http://creativecommons.org/licenses/by-sa/3.0/">Creative Commons Attribution-Share Alike 3.0</a> license.
      </p>
      <p>
        Wikipedia data comes from the <a href="http://wiki.dbpedia.org/about">DBpedia</a> project and is dual licensed under <a href="http://en.wikipedia.org/wiki/Wikipedia:Text_of_Creative_Commons_Attribution-ShareAlike_3.0_Unported_License">Creative Commons Attribution-ShareAlike 3.0</a> and <a href="http://en.wikipedia.org/wiki/Wikipedia:Text_of_the_GNU_Free_Documentation_License">GNU Free Documentation License</a>.
      </p>
      <p>
        JLPT data comes from <a href="http://www.tanos.co.uk/contact/">Jonathan Waller‘s</a> <a href="http://www.tanos.co.uk/jlpt/">JLPT Resources</a> page.
      </p>
    </div>
  </div>

</footer>

    <script type="text/javascript" charset="utf-8">
    var currentUser = null;

</script>

<script src="https://assets.jisho.org/assets/application-fe07b0b8ade93cbea5bf2f513ab5d59be67f0c111905dbeabfb88aa48c81e88e.js"></script>

  <style type="text/css" media="screen">
    .debug { display: none; }
  </style>



    <script>

  (function() {

   Namespace('Jisho.KeyEvents', {});
     var body = $(document.body);

     function applyBodyClass(keyEvent, on) {
       body.toggleClass(getClassForEvent(keyEvent), on !== (keyEvent.type == 'display'));
     }

     function getClassForEvent(keyEvent) {
       return (keyEvent.type == 'display' ? 'hide' : 'highlight') + '_' + keyEvent.name;
     }

     body.keydown(function(e) {
       var events = Jisho.KeyEvents[e.which];
       if(events) {
         events.each(function(keyEvent) {
           if(keyEvent.active) return;
           keyEvent.active = true;
           if(keyEvent.phase == 'toggle') {
             body.toggleClass(getClassForEvent(keyEvent));
           } else {
             applyBodyClass(keyEvent, true);
           }
         });
       }
     });

     body.keyup(function(e) {
       var events = Jisho.KeyEvents[e.which];
       if(events) {
         events.each(function(keyEvent) {
           keyEvent.active = false;
           if(keyEvent.phase !== 'toggle') {
             applyBodyClass(keyEvent, false);
           }
         });
       }
     });


  })();

</script>

    <div id="loginHelpDialog" class="reveal-modal" data-reveal aria-labelledby="Login" aria-hidden="true" role="dialog">
  <div class="row">
    <div class="login_help_dialog-new_user columns small-12 medium-6">
      <h3>New to Jisho?</h3>

      <a href="javascript:void(0)" class="js-login-help-sign-up">Click here to sign up!</a>
    </div>

    <div class="login_help_dialog-existing_user columns small-12 medium-6">
      <h3>Have an account?</h3>

      <p>We recently switched to a new login system. Please enter the email you registered with and follow the instructions.</p>

      <form class="js-login-help-log-in" method="get" accept-charset="utf-8">
        <p><input type="text" name="email" /></p>
        <p><input type="submit" value="Log in" class="button"></p>
      </form>
    </div>
  </div>

  <a class="close-reveal-modal" aria-label="Close">&#215;</a>
</div>

  </body>
</html>
`;
