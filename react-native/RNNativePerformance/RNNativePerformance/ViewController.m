//
//  ViewController.m
//  RNNativePerformance
//
//  Created by jw on 4/26/16.
//  Copyright © 2016 jw. All rights reserved.
//

#import "ViewController.h"
#import "MyTableController.h"

#import "AppDelegate.h"

@interface ViewController ()
@property (weak, nonatomic) IBOutlet UIButton *goButton;

@property (nonatomic,strong) UIActivityIndicatorView* indicator;

@property (nonatomic, copy) NSString* data;

- (IBAction)goClicked:(id)sender;


@end

@implementation ViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    // Do any additional setup after loading the view, typically from a nib.
    _indicator = [[UIActivityIndicatorView alloc]initWithActivityIndicatorStyle:UIActivityIndicatorViewStyleGray];
    _indicator.frame = CGRectMake(200, 200, 80, 80);
    [self.view addSubview:_indicator];
    _indicator.hidden = YES;
    
//    _data = [NSString stringWithContentsOfFile:@"data.json" encoding:NSUTF8StringEncoding error:nil];
    

    
}

- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

- (IBAction)goClicked:(id)sender {
    
    NSString *urlStr = @"http://api.nestoria.co.uk/api?country=uk&pretty=1&encoding=json&listing_type=buy&action=search_listings&page=1&place_name=london";
    
//    NSURL *url = [NSURL URLWithString:urlStr];
//    
//    NSURLRequest *request = [NSURLRequest requestWithURL:url];
//    _indicator.hidden = NO;
//    [_indicator startAnimating];
    NSString* path = [[NSBundle mainBundle] pathForResource:@"data" ofType:@"json"];
    BOOL exist = [[NSFileManager defaultManager] fileExistsAtPath:path];
//    NSDictionary* dic = [NSDictionary dictionaryWithContentsOfFile:path];
    
    NSString* jsonString = [NSString stringWithContentsOfFile:path encoding:NSUTF8StringEncoding error:nil];
    
    startTime = [[NSDate date] timeIntervalSince1970]*1000;
    NSLog(@"startTime end time:===>%@",@(startTime));
    NSData *data = [jsonString dataUsingEncoding:NSUTF8StringEncoding];
    NSDictionary* dic = [NSJSONSerialization JSONObjectWithData:data options:0 error:nil];
    
    NSDictionary* resp = [dic valueForKey:@"response"];
    NSArray* list = [resp valueForKey:@"listings"];
    MyTableController* vc = [MyTableController new];
    vc.setmodelTime = startTime;
    vc.lists = list;
    [self.navigationController pushViewController:vc animated:YES];
    
    
    
    /*
     发送异步请求， 不会阻塞主线程。效率能提高。
     第一个参数：发送的什么异步请求
     第二个参数：回调在哪一个队列（一般传主队列）
     第三个参数有：block 可接受到，响应数据，响应头，以及响应状态（错误值）
     */
//    UInt64 startTime = [[NSDate date] timeIntervalSince1970]*1000;
//    [NSURLConnection sendAsynchronousRequest:request queue:[NSOperationQueue mainQueue] completionHandler:^(NSURLResponse *response, NSData *data, NSError *connectionError) {
//        
//        [_indicator stopAnimating];
//        _indicator.hidden = YES;
//        UInt64 networkEndTime = [[NSDate date] timeIntervalSince1970]*1000;
//        
//        NSLog(@"network end time:===>%@",@(networkEndTime));
//        
//        NSString *dataStr = [[NSString alloc]initWithData:data encoding:NSUTF8StringEncoding];
//        //        NSLog(@"%@",dataStr);
//        NSDictionary* dic =  [NSJSONSerialization JSONObjectWithData:data options:NSJSONReadingMutableContainers error:nil];
//        NSDictionary* resp = [dic valueForKey:@"response"];
//        NSArray* list = [resp valueForKey:@"listings"];
//        MyTableController* vc = [MyTableController new];
//        vc.setmodelTime = networkEndTime;
//        vc.lists = list;
//        [self.navigationController pushViewController:vc animated:YES];
//    }];
 
}

- (void)viewDidAppear:(BOOL)animated
{
    [super viewDidAppear:animated];
}


@end
