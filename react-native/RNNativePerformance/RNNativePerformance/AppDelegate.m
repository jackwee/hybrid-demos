//
//  AppDelegate.m
//  RNNativePerformance
//
//  Created by jw on 4/26/16.
//  Copyright © 2016 jw. All rights reserved.
//

#import "AppDelegate.h"


UInt64 startTime = 0;

@interface AppDelegate ()

@end

typedef void (^RunloopBlock)(CFRunLoopObserverRef observer, CFRunLoopActivity activity) ;
static RunloopBlock runloopBlock;

@implementation AppDelegate


- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
    // Override point for customization after application launch.
    
    
    runloopBlock = ^(CFRunLoopObserverRef observer, CFRunLoopActivity activity)
    {
        UInt64 lastRunloopTime = [[NSDate date] timeIntervalSince1970] * 1000;
//        static unsigned long count = 0;
//        NSLog(@"lastRunloopTime time:===>%@",@(lastRunloopTime - startTime));
//
    };
    
   
    CFRunLoopObserverRef observer = CFRunLoopObserverCreateWithHandler(NULL, (kCFRunLoopAllActivities), YES, 0, runloopBlock);
    

    CFRunLoopAddObserver(CFRunLoopGetMain(), observer, kCFRunLoopCommonModes);
    
    
//    CFRunLoopObserverRef observer = CFRunLoopObserverCreate(kCFAllocatorDefault, kCFRunLoopAllActivities, YES, 0, &myRunLoopObserver, NULL);
//    
//    
//    if (observer) {
//        //将Cocoa的NSRunLoop类型转换成Core Foundation的CFRunLoopRef类型
//        CFRunLoopRef cfRunLoop = [[NSRunLoop mainRunLoop] getCFRunLoop];
//        //将新建的observer加入到当前thread的run loop
//        CFRunLoopAddObserver(cfRunLoop, observer, kCFRunLoopDefaultMode);
//    }
    
    return YES;
}

void myRunLoopObserver(CFRunLoopObserverRef observer, CFRunLoopActivity activity, void *info) {
    
    NSLog(@"aadddd");
}

- (void)applicationWillResignActive:(UIApplication *)application {
    // Sent when the application is about to move from active to inactive state. This can occur for certain types of temporary interruptions (such as an incoming phone call or SMS message) or when the user quits the application and it begins the transition to the background state.
    // Use this method to pause ongoing tasks, disable timers, and throttle down OpenGL ES frame rates. Games should use this method to pause the game.
}

- (void)applicationDidEnterBackground:(UIApplication *)application {
    // Use this method to release shared resources, save user data, invalidate timers, and store enough application state information to restore your application to its current state in case it is terminated later.
    // If your application supports background execution, this method is called instead of applicationWillTerminate: when the user quits.
}

- (void)applicationWillEnterForeground:(UIApplication *)application {
    // Called as part of the transition from the background to the inactive state; here you can undo many of the changes made on entering the background.
}

- (void)applicationDidBecomeActive:(UIApplication *)application {
    // Restart any tasks that were paused (or not yet started) while the application was inactive. If the application was previously in the background, optionally refresh the user interface.
}

- (void)applicationWillTerminate:(UIApplication *)application {
    // Called when the application is about to terminate. Save data if appropriate. See also applicationDidEnterBackground:.
}

@end
