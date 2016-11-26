//
//  APIWebView+Hook.m
//  ProjectFirst
//
//  Created by jw on 4/21/16.
//  Copyright © 2016 APICloud. All rights reserved.
//

#import "APIWebView+Hook.h"
#import <objc/runtime.h>

void exchangeMethod(Class aClass, SEL oldSEL, SEL newSEL)
{
    Method oldMethod = class_getInstanceMethod(aClass, oldSEL);
    assert(oldMethod);
    Method newMethod = class_getInstanceMethod(aClass, newSEL);
    assert(newMethod);
    method_exchangeImplementations(oldMethod, newMethod);
}

static int count = 0;

void exchangeClassMethod(Class aClass, SEL oldSEL, SEL newSEL)
{
    Method oldMethod = class_getClassMethod(aClass, oldSEL);
    
    Method oldMethod2 = class_getClassMethod([NSObject class], oldSEL);
    assert(oldMethod);
    Method newMethod = class_getClassMethod(aClass, newSEL);
    
    assert(newMethod);
    method_exchangeImplementations(oldMethod, newMethod);
    
    oldMethod = class_getClassMethod(aClass, oldSEL);
    newMethod = class_getClassMethod(aClass, newSEL);
    
    
//    unsigned int methodCount;
//    Method* methodList = class_copyMethodList(aClass,&methodCount);
//    for (int i=0; i < methodCount; i++) {
//        NSLog(@"%@ - %@", [NSString stringWithCString:class_getName(aClass) encoding:NSUTF8StringEncoding], [NSString stringWithCString:sel_getName(method_getName(methodList[i])) encoding:NSUTF8StringEncoding]);
//    }
//    
//    free(methodList);
}

@implementation APIWebView (Hook)

+ (void)swizzle:(SEL)originalSelector and:(SEL)swizzledSelector{
    Class class = [self class];
    Method originalMethod = class_getInstanceMethod(class, originalSelector);
    Method swizzledMethod = class_getInstanceMethod(class, swizzledSelector);
    
    BOOL success = class_addMethod(class, originalSelector, method_getImplementation(swizzledMethod), method_getTypeEncoding(swizzledMethod));
    if (success) {
        class_replaceMethod(class, swizzledSelector, method_getImplementation(originalMethod), method_getTypeEncoding(originalMethod));
    } else {
        method_exchangeImplementations(originalMethod, swizzledMethod);
    }
}


+ (void)hook
{
    
    SEL originalSelector = @selector(initWithFrame:);
    SEL swizzledSelector = @selector(myInitWithFrame:);
    [self swizzle:originalSelector and:swizzledSelector];
    
    originalSelector = @selector(dealloc);
    swizzledSelector = @selector(myDealloc);
    [self swizzle:originalSelector and:swizzledSelector];
    
    
}



- (instancetype)myInitWithFrame:(CGRect)frame{
    count++;
    NSLog(@"APIWebView create:%@",@(count));
    id instance = [self myInitWithFrame:frame];
    NSLog(@"APIWebView create:%@",instance);
    return  instance;
}

-(void)myDealloc{
    NSLog(@"dealloc");
    return [self myDealloc];
}
@end
