//
//  MyTableController.m
//  RNNativePerformance
//
//  Created by jw on 4/26/16.
//  Copyright © 2016 jw. All rights reserved.
//

#import "MyTableController.h"
#import "ColorUtils.h"
#import "MyTableViewCell.h"
static int cellCount = 0;

@interface MyTableController ()

@end

@implementation MyTableController

- (void)viewDidLoad{
    [super viewDidLoad];
    
}

- (void)viewDidAppear:(BOOL)animated{
    [super viewDidAppear:animated];
    UInt64 viewShowTime = [[NSDate date] timeIntervalSince1970]*1000;
    NSLog(@"viewShow time:===>%@,%@",@(viewShowTime),@(viewShowTime - _setmodelTime));
}

- (NSInteger)tableView:(UITableView *)tableView numberOfRowsInSection:(NSInteger)section{
    return [_lists count];
}

- (CGFloat)tableView:(UITableView *)tableView heightForRowAtIndexPath:(NSIndexPath *)indexPath{
    return 101;
}

- (UITableViewCell *)tableView:(UITableView *)tableView cellForRowAtIndexPath:(NSIndexPath *)indexPath{
    
    NSDictionary* model = _lists[indexPath.row];
    
    UITableViewCell* cell = [tableView dequeueReusableCellWithIdentifier:@"UITableViewCell"];
    if (!cell) {
        cellCount++;
        NSLog(@"cellCount ====> %@",@(cellCount));
        cell = [[MyTableViewCell alloc]initWithStyle:UITableViewCellStyleSubtitle reuseIdentifier:@"UITableViewCell"];
        cell.textLabel.font = [UIFont systemFontOfSize:25];
        cell.textLabel.textColor = [UIColor colorWithString:@"#48BBEC"];
        cell.detailTextLabel.font = [UIFont systemFontOfSize:20];
        cell.detailTextLabel.textColor = [UIColor colorWithString:@"#656565"];
    }
    cell.imageView.image = [UIImage imageNamed:@"house"];
    cell.textLabel.text = [model valueForKey:@"price_formatted"];
    cell.detailTextLabel.text = [model valueForKey:@"title"];
    return cell;
}

- (void)tableView:(UITableView *)tableView willDisplayCell:(UITableViewCell *)cell forRowAtIndexPath:(NSIndexPath *)indexPath{
    cell.separatorInset = UIEdgeInsetsZero;
    cell.layoutMargins = UIEdgeInsetsZero;
}


@end
