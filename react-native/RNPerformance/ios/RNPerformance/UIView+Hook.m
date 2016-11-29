//
//  UIView+Hook.m
//  PropertyFinder
//
//  Created by jw on 4/23/16.
//  Copyright © 2016 Facebook. All rights reserved.
//

#import "UIView+Hook.h"
#import <objc/runtime.h>
#import "RNHook.h"

@implementation UIView (Hook)


+ (void)hook{
  SEL originalSelector = @selector(initWithFrame:);
  SEL swizzledSelector = @selector(myInitWithFrame:);
  [RNHook swizzleFor:originalSelector and:swizzledSelector class: self];
  
  originalSelector = @selector(addSubview:);
  swizzledSelector = @selector(myAddSubview:);
  [RNHook swizzleFor:originalSelector and:swizzledSelector class: self];
}

- (instancetype)myInitWithFrame:(CGRect)frame
{
  return [self myInitWithFrame:frame];
}

- (void)myAddSubview:(UIView *)view{
  return [self myAddSubview:view];
}
@end
