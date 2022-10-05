const express = require('express');
const app = express();


app.get('/', (req, res) => {
  res.send("Succes")
});


let server = app.listen(443, function () {
  console.log("Portal running on port: " + 443);
});

//WebSocket logic. Cleanup later.
let io = require("socket.io")(server);
app.set('io', io);
io.use((socket, next) => {
    next();
   
}).on("connection", function (socket) {
    console.log("New websocket connection")
    socket.on("test", function () {
        socket.emit("test",JSON.stringify("{'api_response': {'version': '1.0', 'type': 'get', 'result': {'ConfigExport': {'PictureMode': 'Standard', 'Contrast': 50, 'SourceLabel': [{'Source': 'COS', 'Label': 'COS'}, {'Source': 'Audio', 'Label': 'Audio'}, {'Source': 'DP', 'Label': 'DP'}, {'Source': 'HDMI 1', 'Label': 'Mac'}, {'Source': 'HDMI 2', 'Label': 'HDMI 2'}, {'Source': 'HDMI 3', 'Label': 'HDMI 3'}, {'Source': 'USB-C', 'Label': 'USB-C'}, {'Source': 'VGA', 'Label': 'VGA'}], 'Sharpness': 50, 'Saturation': 50, 'Backlight': 100, 'Energy Mode': 'Normal', 'BlueLightFilter': 'Off', 'EyeProtect': 'Off', 'PCMode': 'Off', 'MEMC': 'Off', 'HDR': 'On', 'ColorTemp': 'Normal', 'Red': 128, 'Green': 128, 'Blue': 128, 'ZoomMode': '16:9', 'OverScan': 'Off', 'SoundMode': 'Standard', 'MediaOut': 'Speaker', 'Balance': 0, 'EQ120': 50, 'EQ500': 50, 'EQ1.5k': 50, 'EQ5k': 50, 'EQ10k': 50, 'AVC': 'On', 'Surround': 'Off', 'SPDIFMode': 'RAW', 'SPDIFVolume': 50, 'MaxVolume': 100, 'QuickControl': {'Source': 'On', 'PowerOn': 'On', 'SettingMenu': 'On', 'BacklightMute': 'On', 'Manual': 'On', 'Freeze': 'On', 'LockTouch': 'On', 'Mute': 'On', 'Volume': 'On', 'EnergyMode': 'On', 'Backlight Volume': 'On', 'ScreenShot': 'On', 'Annontion': 'On', 'Back': 'On', 'Home': 'On', 'AppHistory': 'On', 'HideFloatBar': 'Off', 'LockSettingMenu': 'Off', 'AllApps': 'Off'}, 'LockFavoriteApps': 'Off', 'HomeOption_RC': 'COS', 'HDMI1': 'On', 'HDMI2': 'On', 'HDMI3': 'On', 'USB-C': 'On', 'DP': 'On', 'VGA': 'On', 'PC': 'Off', 'Module': 'Off', 'Audio': 'On', 'AutoSwitchSource': 'Direct', 'HDMIEDID': 'Err', 'HDMICEC': 'On', 'HDMIARC': 'On', 'Touch': 'Off', 'NoSignalPowerOff': '3m', 'StartUpByExternal': 'Off', 'OnTimerPeriod': 'Off', 'OnTimerTime': '09:00', 'OffTimerPeriod': 'MoTeWeThFr', 'OffTimerTime': '17:00', 'SleepTime': 'Off', 'PowerOnMode': 'Direct', 'PowerOnSource': 'COS', 'PowerOnVolume': 'Memory', 'PowerOnOPSDirect': 'On', 'CTOUCHButton': 'On', 'Profile': 'Riva', 'COS': 'On', 'OTA': 'Auto', 'OTASERVER': 'https://update.ctouch.eu/ota/upgrade', 'AutoDateTime': 'Off', 'TimeZone': 'Europe/Amsterdam', '24HourFormat': 'On', 'Language': 'NL', 'AppInstallLock': 'On', 'KeypadLock': 'Off', 'IRLock': 'Off', 'NetworkLock': 'Off', 'TempProtection': 'On', 'AlarmTemp': 75, 'QuickControlMenuPwd(displaymenu)': 'Off', 'DealerMenuPwd': 'Off', 'UARTBaudRate': '9600', 'UARTID': 0, 'MainboardCon.Ethernet': 'On', 'MainboardCon.Wifi': 'On', 'OPSEthernet': 'On', 'WakeOnLan': 'On', 'HDMIOut': '2160p30Hz', 'USB': 'On', 'DisplayInfo': {'CTOUCH Model Number': 'CR-65X02', 'Serial Number': '65X02RA003A1375', 'MAC': '00:15:86:07:16:CB', 'IP-address': '192.168.108.146', 'Model': 'LE_65PH72_CTOUCH', 'Panel': 'LG_LC750EQY', 'TouchFrame': '568PH0006T1000(32H1_SE65AC_0x4806)', 'OS Build Time': '19:15:21-20220127', 'FW Version': '568PH0007A1008(19:15:21-20220127)', 'STM32 Version': '568PH0001C1003(Dec 19 2020-11:21:18)'}, 'Temperature': 34}}}}"))
      });

});
