/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

#import "AppDelegate.h"

#import "RCTBundleURLProvider.h"
#import "RCTRootView.h"
#import "UIView+Hook.h"
#import "UINavigationController+Hook.h"
#import "UIViewController+Hook.m"


typedef void (^RunloopBlock)(CFRunLoopObserverRef observer, CFRunLoopActivity activity) ;
static RunloopBlock runloopBlock;

@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
  
  
  [UIView hook];
  [UINavigationController hook];
  [UIViewController hook];
  
  
  runloopBlock = ^(CFRunLoopObserverRef observer, CFRunLoopActivity activity)
  {
    UInt64 lastRunloopTime = [[NSDate date] timeIntervalSince1970] * 1000;
            static unsigned long count = 0;
    NSLog(@"lastRunloopTime time:===>%@",@(lastRunloopTime));
    NSLog(@"activity %lu: %@", ++count, (activity & kCFRunLoopEntry ? @"Enter" : @"Exit"));
  };
  
  
//  CFRunLoopObserverRef observer = CFRunLoopObserverCreateWithHandler(NULL, (kCFRunLoopAllActivities), YES, 0, runloopBlock);
//  
//  
//  CFRunLoopAddObserver(CFRunLoopGetMain(), observer, kCFRunLoopCommonModes);
  
  
  
  
  NSURL *jsCodeLocation;

  jsCodeLocation = [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index.ios" fallbackResource:nil];

  RCTRootView *rootView = [[RCTRootView alloc] initWithBundleURL:jsCodeLocation
                                                      moduleName:@"RNPerformance"
                                               initialProperties:nil
                                                   launchOptions:launchOptions];
  rootView.backgroundColor = [[UIColor alloc] initWithRed:1.0f green:1.0f blue:1.0f alpha:1];

  self.window = [[UIWindow alloc] initWithFrame:[UIScreen mainScreen].bounds];
  UIViewController *rootViewController = [UIViewController new];
  rootViewController.view = rootView;
  self.window.rootViewController = rootViewController;
  [self.window makeKeyAndVisible];
  return YES;
}

@end
