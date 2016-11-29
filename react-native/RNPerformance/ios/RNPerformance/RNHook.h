//
//  RNHook.h
//  RNPerformance
//
//  Created by jw on 11/28/16.
//  Copyright © 2016 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>

@interface RNHook : NSObject
+ (void)swizzleFor:(SEL)originalSelector and:(SEL)swizzledSelector class:(Class) c;
@end
