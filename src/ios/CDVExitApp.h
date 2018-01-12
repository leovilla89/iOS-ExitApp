/********* Echo.h Cordova Plugin Header *******/

#import <Cordova/CDV.h>

@interface

CDVExitApp : CDVPlugin

- (void)exitAppIOS:(CDVInvokedUrlCommand*)command;

@end
