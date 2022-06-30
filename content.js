//Title Icon
var ico = "<svg style='color:black; padding:5px; vertical-align: middle; background-color: #1cff9c; border-radius: 15px;' width='30px' height='30px' version='1.1' viewBox='0 0 20 20' x='0px' y='0px' class='ScIconSVG-sc-1bgeryd-1 ifdSJl'><g><path fill-rule='evenodd' d='M16.503 3.257L18 7v11H2V7l1.497-3.743A2 2 0 015.354 2h9.292a2 2 0 011.857 1.257zM5.354 4h9.292l1.2 3H4.154l1.2-3zM4 9v7h12V9h-3v4H7V9H4zm7 0v2H9V9h2z' clip-rule='evenodd'></path></g></svg>";

//points ico
var pointIco = "<svg type='color-fill-current' width='20px' height='20px' version='1.1' viewBox='0 0 20 20' x='0px' y='0px' class='ScSvg-sc-1j5mt50-1 jxWtmu'><g><path d='M10 6a4 4 0 014 4h-2a2 2 0 00-2-2V6z'></path><path fill-rule='evenodd' d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-2 0a6 6 0 11-12 0 6 6 0 0112 0z' clip-rule='evenodd'></path></g></svg>";

//true if Grabber has to work
var grabbedEnabled = true;

//true if favorite channels are injected
//var favoriteInjected = false;

//lang keys array
var langKeys = ["Riscatta bonus", "Claim Bonus", "Få bonus", "Bonus einfordern", "Reclamar bonificación", "Reclamar bono", "Récupérer un bonus", "Bónusz igénylése", "Bonus claimen", "Motta bonus", "Odbierz bonus", "Receber bónus", "Resgatar Bônus", "Obține bonusul", "Vyzdvihnúť bonus", "Lunasta bonus", "Hämta bonus", "Nhận thưởng", "Bonusu al", "Vyzvednout bonus", "Διεκδίκηση μπόνους", "Получаване на бонус", "Получить бонус", "เคลมโบนัส", "领取奖励", "領取額外獎勵", "ボーナスを受け取る", "보너스 받기"];

//execution
checkSettings();

//#region Grabber Enabled Settings

  //true if the menu id already opened
  var injectedmenu = false;

  //observers
  var Observer = new MutationObserver(observate).observe(document.body, {

    childList: true,
    subtree: true

  });

  //on body child changed
  function observate() {
    
    var myMenu = null;

    if(document.getElementsByClassName("FTFzP").length > 0){
      if(document.getElementsByClassName("FTFzP").length > 1){
        for( var i = 0; i<document.getElementsByClassName("FTFzP").length; i++){
          if(document.getElementsByClassName("FTFzP")[i].parentElement.getAttribute("class") == "simplebar-content"){
            myMenu = document.getElementsByClassName("FTFzP")[i];
          }
        }
      }else{
        if(document.getElementsByClassName("FTFzP")[0].parentElement.getAttribute("class") == "simplebar-content"){
            myMenu = document.getElementsByClassName("FTFzP")[0];
        }else{
          myMenu == null;
        }
      }

    }

    if(!injectedmenu && myMenu != null ){
      injectedmenu = true;
      checkSettings();
      injectSettings(myMenu);
    }else{
      if(injectedmenu && myMenu == null){
        injectedmenu = false;
      }
    }

    if(grabbedEnabled){
      try{
        if(document.getElementsByClassName("ScCoreButtonSuccess-sc-1qn4ixc-5")[0] != null){
          for(i = 0; i < langKeys.length; i++){
            if(document.getElementsByClassName("ScCoreButtonSuccess-sc-1qn4ixc-5")[0].getAttribute("aria-label") == langKeys[i]){
              document.getElementsByClassName("ScCoreButtonSuccess-sc-1qn4ixc-5")[0].click();
              localStorage.setItem("grabbed", parseInt(localStorage.getItem("grabbed")) + 50);
              document.getElementsByTagName("points")[0].innerHTML = " Today's points: " + localStorage.getItem("grabbed");
            }
          }
        }
      }catch(e){}
    }

    /*
    if( favoriteInjected == false && document.getElementsByClassName("dpqRKW") > 0){
      injectFavorite();
      favoriteInjected = true;
      var ChannellsObserver = new MutationObserver(observateChannells).observe(document.getElementsByClassName("dpqRKW")[0].parentNode, {

          childList: true,
          subtree: true

      });

      function observateChannells(){
        updateSpect();
      }
    }
    */
  }

  //function that inject new settings in profile menu
  function injectSettings(myMenu){  

    var mySettingsContainer = document.createElement("div");

    checkSettings();

    mySettingsContainer.innerHTML = "<div class='Layout-sc-nxg1ff-0 dwuicp'><div class='Layout-sc-nxg1ff-0 gcwIMz'><div class='Layout-sc-nxg1ff-0 hsTxrV'><div class='Layout-sc-nxg1ff-0 gcwIMz InjectLayout-sc-588ddc-0 tw-drop-down-menu-item-figure'><div class='ScIconLayout-sc-1bgeryd-0 cMFgBQ'><div class='ScAspectRatio-sc-1sw3lwy-1 kPofwJ tw-aspect'><div class='ScAspectSpacer-sc-1sw3lwy-0 dsswUS'></div><svg width='100%' height='100%' version='1.1' viewBox='0 0 20 20' x='0px' y='0px' class='ScIconSVG-sc-1bgeryd-1 ifdSJl'><g><path d='M10 6a4 4 0 014 4h-2a2 2 0 00-2-2V6z'></path><path fill-rule='evenodd' d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-2 0a6 6 0 11-12 0 6 6 0 0112 0z' clip-rule='evenodd'></path></g></svg></div></div></div></div><label class='ScDropDownMenuInputItemLabel-sc-p9ci3m-0 jmXxSR InjectLayout-sc-588ddc-0 kikCET tw-drop-down-menu-input-item__label' for='6a306ca0ecfbb87623b03e470dd5c09c'> Grabber Enable</label><div class='ScToggle-sc-796zbf-0 AgPgA tw-toggle' data-a-target='dark-mode-toggle' data-test-selector='user-menu__dark-mode-toggle'><input class='ScToggleInput-sc-796zbf-1 cwUJld tw-toggle__input' id='6a306ca0ecfbb87623b03e470dd5c09c' type='checkbox' data-a-target='tw-toggle'><label id='GrabberEnabled' for='6a306ca0ecfbb87623b03e470dd5c09c' class='ScToggleButton-sc-796zbf-2 erOoiO tw-toggle__button'></label></div></div></div>";

    myMenu.childNodes[0].appendChild(mySettingsContainer);

    if(grabbedEnabled)
    document.getElementById("GrabberEnabled").click(false);

    document.getElementById("GrabberEnabled").onclick = (function botEnable(save){
      
      if(save!=false){
        grabbedEnabled = toBoolean(localStorage.getItem("GrabberEnabled"));
        
        if(grabbedEnabled == true)
          grabbedEnabled = false;
        else
          grabbedEnabled = true;

        localStorage.setItem("GrabberEnabled", grabbedEnabled);
      }
    });

  }

  //check if settings exists
  function checkSettings(){

    if(localStorage.getItem("GrabberEnabled") == null){
      localStorage.setItem("GrabberEnabled", true);
    }

    grabbedEnabled = toBoolean(localStorage.getItem("GrabberEnabled"));

  }

//#endregion

//#region convert
  function toBoolean(value){
    switch(((value + "").toLowerCase())){
      case "true":
        return true;

        case "false" :
          return false;
    }
  }
//#endregion

//#region update spect
/*
function updateSpect(){
  updateFavorite();
}

function updateFavorite(){
  var favorites = JSON.parse(localStorage.getItem("FavoritesChannels"));
  var channels = favorites.channels;

  for(var i = 0; i < document.getElementsByClassName("dpqRKW")[0].parentElement.childElementCount; i++){   

    var tmp = document.getElementsByClassName("dpqRKW")[i].getElementsByClassName("gYupEs")[0].innerHTML;

    if(channels.includes(tmp)){
      document.getElementById("prefInjectMenu").prepend(document.getElementsByClassName("dpqRKW")[i]);
    }
  }

}

function injectFavorite(){

  if(document.getElementById("prefInjectMenu") == null ){
    var pref = document.createElement("div");
    pref.setAttribute("style", "height: auto; width:100%;");
    pref.id = "prefInjectMenu";

    document.getElementsByClassName("dpqRKW")[0].parentElement.prepend(pref);
    document.getElementsByClassName("ezafKb")[0].innerHTML = "Favorite channels";
    pref.innerHTML = "<h2 class='CoreText-sc-cpl358-0 ezafKb' style='padding:1rem !important;'>Followed Channels</h2>";
  }

}
*/
//#endregion