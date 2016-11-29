//
//  RNHook.m
//  RNPerformance
//
//  Created by jw on 11/28/16.
//  Copyright © 2016 Facebook. All rights reserved.
//

#import "RNHook.h"
#import <objc/runtime.h>

@implementation RNHook

+ (void)swizzleFor:(SEL)originalSelector and:(SEL)swizzledSelector class:(Class) c
{
  Class class = c;
  
  Method originalMethod = class_getInstanceMethod(class, originalSelector);
  Method swizzledMethod = class_getInstanceMethod(class, swizzledSelector);
  
  BOOL success = class_addMethod(class, originalSelector, method_getImplementation(swizzledMethod), method_getTypeEncoding(swizzledMethod));
  if (success) {
    class_replaceMethod(class, swizzledSelector, method_getImplementation(originalMethod), method_getTypeEncoding(originalMethod));
  } else {
    method_exchangeImplementations(originalMethod, swizzledMethod);
  }
}


@end
