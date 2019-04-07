#include <Arduino.h>
#include <vector>
#include <WiFi.h>
#include <WiFiClient.h>
#include <WiFiAP.h>
#include <WebServer.h>
#include "SH1106.h"
#include "BME280.h"
#include "BMX055.h"
#include "BH1745NUC.h"
#include "KBProTime.h"
#include "BluetoothSerial.h"

using namespace std;

SH1106 display(0x3c, 21, 22);
BME280 bme280();
BMX055 bmx055;
BH1745NUC bh1745;
KBProTime kbprotime;
BluetoothSerial SerialBT;

${VARIABLE}
void setup()
{
  pinMode(14,INPUT);
  pinMode(15,INPUT);
  display.init();
  display.flipScreenVertically();
  display.setFont(ArialMT_Plain_10);
  //---SENSOR---//
  bme280.beginI2C();
  bmx055.begin();
  bh1745.getAddr_BH1745NUC(BH1745NUC_DEFAULT_ADDRESS);
  bh1745.Initialize();
  bh1745.begin();
  ${SETUP_CODE}
}
void loop()
{
  ${LOOP_CODE}
}