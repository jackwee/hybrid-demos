//
//  UIViewController+Hook.m
//  RNPerformance
//
//  Created by jw on 11/28/16.
//  Copyright © 2016 Facebook. All rights reserved.
//

#import "UIViewController+Hook.h"
#import "RNHook.h"

@implementation UIViewController (Hook)
+ (void)hook
{
  SEL originalSelector = @selector(viewDidLoad);
  SEL swizzledSelector = @selector(myViewDidLoad);
  [RNHook swizzleFor:originalSelector and:swizzledSelector class: self];
  
  originalSelector = @selector(viewDidAppear:);
  swizzledSelector = @selector(myViewDidAppear:);
  [RNHook swizzleFor:originalSelector and:swizzledSelector class: self];
}


- (void)myViewDidLoad {
  [self myViewDidLoad];
}

- (void)myViewDidAppear:(BOOL)animated {
  [self myViewDidAppear:animated];
  UInt64 lastRunloopTime = [[NSDate date] timeIntervalSince1970] * 1000;
  NSLog(@"viewdidappear time:===>%@",@(lastRunloopTime));
}
@end
