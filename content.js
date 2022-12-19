//Title Icon
var ico = "<svg style='color:black; padding:5px; vertical-align: middle; background-color: #1cff9c; border-radius: 15px;' width='30px' height='30px' version='1.1' viewBox='0 0 20 20' x='0px' y='0px' class='ScIconSVG-sc-1bgeryd-1 ifdSJl'><g><path fill-rule='evenodd' d='M16.503 3.257L18 7v11H2V7l1.497-3.743A2 2 0 015.354 2h9.292a2 2 0 011.857 1.257zM5.354 4h9.292l1.2 3H4.154l1.2-3zM4 9v7h12V9h-3v4H7V9H4zm7 0v2H9V9h2z' clip-rule='evenodd'></path></g></svg>";

//points ico
var pointIco = "<svg type='color-fill-current' width='20px' height='20px' version='1.1' viewBox='0 0 20 20' x='0px' y='0px' class='ScSvg-sc-1j5mt50-1 jxWtmu'><g><path d='M10 6a4 4 0 014 4h-2a2 2 0 00-2-2V6z'></path><path fill-rule='evenodd' d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-2 0a6 6 0 11-12 0 6 6 0 0112 0z' clip-rule='evenodd'></path></g></svg>";

//true if Grabber has to work
var grabbedEnabled = true;

var firstStart = true;

//true if favorite channels are injected
//var favoriteInjected = false;

//lang keys array
var langKeys = ["Riscatta bonus", "Claim Bonus", "Få bonus", "Bonus einfordern", "Reclamar bonificación", "Reclamar bono", "Récupérer un bonus", "Bónusz igénylése", "Bonus claimen", "Motta bonus", "Odbierz bonus", "Receber bónus", "Resgatar Bônus", "Obține bonusul", "Vyzdvihnúť bonus", "Lunasta bonus", "Hämta bonus", "Nhận thưởng", "Bonusu al", "Vyzvednout bonus", "Διεκδίκηση μπόνους", "Получаване на бонус", "Получить бонус", "เคลมโบนัส", "领取奖励", "領取額外獎勵", "ボーナスを受け取る", "보너스 받기"];

//mettere un messaggio per aver inserito un nuovo bot


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
    if(document.getElementsByClassName("logged-in").length > 0){
      var myMenu = null;

      if(document.getElementsByClassName("kbnJum").length > 0){
        if(document.getElementsByClassName("kbnJum").length > 1){
          for( var i = 0; i<document.getElementsByClassName("kbnJum").length; i++){
            if(document.getElementsByClassName("kbnJum")[i].parentElement.getAttribute("class") == "simplebar-content"){
              myMenu = document.getElementsByClassName("kbnJum")[i];
            }
          }
        }else{
          if(document.getElementsByClassName("kbnJum")[0].parentElement.getAttribute("class") == "simplebar-content"){
              myMenu = document.getElementsByClassName("kbnJum")[0];
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
          if(document.getElementsByClassName("ScCoreButtonSuccess-sc-ocjdkq-5")[0] != null){
            for(i = 0; i < langKeys.length; i++){
              if(document.getElementsByClassName("ScCoreButtonSuccess-sc-ocjdkq-5")[0].getAttribute("aria-label") == langKeys[i]){
                document.getElementsByClassName("ScCoreButtonSuccess-sc-ocjdkq-5")[0].click();
                localStorage.setItem("grabbed", parseInt(localStorage.getItem("grabbed")) + 50);
                document.getElementsByTagName("points")[0].innerHTML = " Today's points: " + localStorage.getItem("grabbed");
              }
            }
          }
        }catch(e){}
      }
    }
  }

  //function that inject new settings in profile menu
  function injectSettings(myMenu){  

    if(myMenu.childNodes[0].getAttribute("class") != "Layout-sc-nxg1ff-0 gmrDqE"){
      var mySettingsContainer = document.createElement("div");

      checkSettings();

      mySettingsContainer.innerHTML = "<div><div class='Layout-sc-1xcs6mc-0 jwovJQ'><div class='Layout-sc-1xcs6mc-0 beAYWq'><div class='Layout-sc-1xcs6mc-0 jlVsYQ'><div class='Layout-sc-1xcs6mc-0 beAYWq InjectLayout-sc-1i43xsx-0 tw-drop-down-menu-item-figure'><div class='ScIconLayout-sc-1q25cff-0 jAtkMe'><div class='ScAspectRatio-sc-18km980-1 hTTohL tw-aspect'><div class='ScAspectSpacer-sc-18km980-0 kiiGFY'></div><svg width='100%' height='100%' version='1.1' viewBox='0 0 20 20' x='0px' y='0px' class='ScIconSVG-sc-1q25cff-1 dSicFr'><g><path d='M10 6a4 4 0 014 4h-2a2 2 0 00-2-2V6z'></path><path fill-rule='evenodd' d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-2 0a6 6 0 11-12 0 6 6 0 0112 0z' clip-rule='evenodd'></path></g></svg></div></div></div></div><label class='ScDropDownMenuInputItemLabel-sc-19bc5e6-0 cQdvGj InjectLayout-sc-1i43xsx-0 jNUbwx tw-drop-down-menu-input-item__label' for='aen4jRyvbcEMZpf9uuWi286s0NpUANcy'> Grabber Enable</label><div class='ScToggle-sc-iguyno-0 huMOFB tw-toggle' data-a-target='dark-mode-toggle' data-test-selector='user-menu__dark-mode-toggle' ><input class='ScToggleInput-sc-iguyno-1 kVUeak tw-toggle__input' id='6a306ca0ecfbb87623b03e470dd5c09c' type='checkbox' data-a-target='tw-toggle'><label id='GrabberEnabled' for='6a306ca0ecfbb87623b03e470dd5c09c' class='ScToggleButton-sc-iguyno-2 qZlTz tw-toggle__button'></label></div></div></div></div>";

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

  }

  //check if settings exists
  function checkSettings(){

    if(localStorage.getItem("GrabberEnabled") == null){
      localStorage.setItem("GrabberEnabled", true);
    }

    grabbedEnabled = toBoolean(localStorage.getItem("GrabberEnabled"));

    if(localStorage.getItem("FirstStart") == null){
      localStorage.setItem("FirstStart", false);
    }

    firstStart = toBoolean(localStorage.getItem("FirstStart"));


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