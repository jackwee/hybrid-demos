//
//  UINavigationController+Hook.m
//  RNPerformance
//
//  Created by jw on 11/28/16.
//  Copyright © 2016 Facebook. All rights reserved.
//

#import "UINavigationController+Hook.h"
#import "RNHook.h"

@implementation UINavigationController (Hook)
+ (void)hook
{
  SEL originalSelector = @selector(pushViewController:animated:);
  SEL swizzledSelector = @selector(myPushViewController:animated:);
  [RNHook swizzleFor:originalSelector and:swizzledSelector class: self];
}

- (void)myPushViewController:(UIViewController *)viewController animated:(BOOL)animated
{
  [self myPushViewController:viewController animated:animated];
}
@end
