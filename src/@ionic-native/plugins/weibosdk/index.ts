/**
 * This is a template for new plugin wrappers
 *
 * TODO:
 * - Add/Change information below
 * - Document usage (importing, executing main functionality)
 * - Remove any imports that you are not using
 * - Add this file to /src/index.ts (follow style of other plugins)
 * - Remove all the comments included in this template, EXCEPT the @Plugin wrapper docs and any other docs you added
 * - Remove this note
 *
 */
import { Injectable } from '@angular/core';
import { Plugin, Cordova, IonicNativePlugin } from '@ionic-native/core';

/**
 * @name weibosdk
 * @description
 * This plugin does something
 *
 * @usage
 * ```typescript
 * import { weibosdk } from '@ionic-native/weibosdk';
 *
 *
 * constructor(private weibosdk: weibosdk) { }
 *
 * ...
 *
 *
 * this.weibosdk.functionName('Hello', 123)
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
@Plugin({
  pluginName: 'WeiboSDK',
  plugin: 'cordova-plugin-weibosdk', // npm package name, example: cordova-plugin-camera
  pluginRef: 'WeiboSDK', // the variable reference to call the plugin, example: navigator.geolocation
  repo: 'https://github.com/iVanPan/cordova_weibo', // the github repository URL for the plugin
  install: 'ionic cordova plugin add cordova-plugin-weibosdk --variable WEIBO_APP_ID=YOUR_WEIBO_APPID', // OPTIONAL install command, in case the plugin requires variables
  installVariables: ['WEIBO_APP_ID'], // OPTIONAL the plugin requires variables
  platforms: ['Android', 'iOS'] // Array of platforms supported, example: ['Android', 'iOS']
})
@Injectable()
export class WeiboSDK extends IonicNativePlugin {

  /**
  * Weibo ssoLogin
  */
  @Cordova({
    callbackOrder: 'reverse'
  })
  ssoLogin(): Promise<any> {
    return;
  }

  @Cordova({
    callbackOrder: 'reverse'
  })
  logout(): Promise<any> {
    return;
  }

  @Cordova({
    callbackOrder: 'reverse'
  })
  checkClientInstalled(): Promise<any> {
    return;
  }

  @Cordova({
    callbackOrder: 'reverse'
  })
  shareToWeibo(options: any): Promise<any> {
    return;
  }

  @Cordova({
    callbackOrder: 'reverse'
  })
  shareImageToWeibo(options: any): Promise<any> {
    return;
  }

  @Cordova({
    callbackOrder: 'reverse'
  })
  shareTextToWeibo(options: any): Promise<any> {
    return;
  }

}
