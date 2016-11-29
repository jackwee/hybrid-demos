//
//  MyTableViewCell.m
//  RNNativePerformance
//
//  Created by jw on 4/26/16.
//  Copyright © 2016 jw. All rights reserved.
//

#import "MyTableViewCell.h"

@implementation MyTableViewCell

- (void)layoutSubviews{
    [super layoutSubviews];
    CGFloat height = self.bounds.size.height;
    self.imageView.frame = CGRectMake(10, (height - 80)/2, 80, 80);
    
    [self.textLabel sizeToFit];
    CGRect rect = self.textLabel.frame;
    rect.origin.x = CGRectGetMaxX(self.imageView.frame) +10;
    self.textLabel.frame = rect;
    
    [self.detailTextLabel sizeToFit];
    rect = self.detailTextLabel.frame;
    rect.origin.x = self.textLabel.frame.origin.x;
    rect.origin.y = CGRectGetMaxY(self.textLabel.frame)+10;
    self.detailTextLabel.frame = rect;
}
@end
