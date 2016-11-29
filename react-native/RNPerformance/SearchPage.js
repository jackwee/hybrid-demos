'use strict';
 
var ReactNative = require('react-native');
var React = require('react');
var {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableHighlight,
  ActivityIndicatorIOS,
  Image
} = ReactNative;

var {
  Component
} = React;

var SearchResults = require('./SearchResults');

var startTime = 0;

var gData = {'request': {'country': 'uk',
        'language': 'en',
        'location': 'london',
        'num_res': '20',
        'offset': 0,
        'output': 'json_xs',
        'page': 1,
        'pretty': '1',
        'product_type': 'realestate',
        'property_type': 'property',
        'size_type': 'net',
        'size_unit': 'm2',
        'sort': 'nestoria_rank',
        'listing_type': 'buy'
    },
    'response': {
        'application_response_code': '100',
        'application_response_text': 'listings returned for one unambiguous location',
        'attribution': {
            'img_height': 22,
            'img_url': 'http://resources.nestimg.com/nestoria/img/pbr_v1.png',
            'img_width': 183,
            'link_to_img': 'http://www.nestoria.com'
        },
        'created_http': 'Tue, 26 Apr 2016 06:21:00 GMT',
        'created_unix': 1461651660,
        'link_to_url': 'http://www.nestoria.co.uk/london/property/buy',
        'listings': [{
            'bathroom_number': 0,
            'bedroom_number': 3,
            'car_spaces': 0,
            'commission': -1,
            'construction_year': 0,
            'datasource_name': 'OnTheMarket.com',
            'img_height': '',
            'img_url': 'http://imgs.nestimg.com/3_bedroom_flat_7840030461326713163.jpg',
            'img_width': '',
            'keywords': 'Ex Local Auth',
            'latitude': 51.4972,
            'lister_name': 'Acorn',
            'lister_url': 'http://www.nestoria.co.uk/detail/0000007840030461326713163/title/5/1-1?serpUid=&pt=2&ot=1&l=london&did=105_high1&utm_source=api&utm_medium=external',
            'listing_type': 'buy',
            'location_accuracy': 9,
            'longitude': -0.076212,
            'price': 560000,
            'price_currency': '£',
            'price_formatted': '£560,000',
            'price_high': 560000,
            'price_low': 560000,
            'price_type': 'fixed',
            'property_type': 'flat',
            'size': 0,
            'size_type': 'net',
            'summary': 'Set within a development is this rare to the market ex local author...',
            'thumb_height': '',
            'thumb_url': 'http://imgs.nestimg.com/medium/3_bedroom_flat_7840030461326713163.jpg',
            'thumb_width': '',
            'title': 'St. Saviours Estate London Bridge, SE1',
            'updated_in_days': 3,
            'updated_in_days_formatted': 'first seen 3 days ago'
        }, {
            'bathroom_number': 2,
            'bedroom_number': 2,
            'car_spaces': 0,
            'commission': -1,
            'construction_year': 0,
            'datasource_name': 'Zoopla',
            'img_height': '',
            'img_url': 'http://imgs.nestimg.com/flat_london_7350009461327149125.jpg',
            'img_width': '',
            'keywords': 'Leasehold, En suite, Penthouse, Terrace, Balcony, Gym, Kitchen, Porter, Parking, Reception, Modern',
            'latitude': 51.509476,
            'lister_name': 'Pick Me',
            'lister_url': 'http://www.nestoria.co.uk/detail/0000007350009461327149125/title/5/1-2?serpUid=&pt=2&ot=1&l=london&did=57_default&utm_source=api&utm_medium=external',
            'listing_type': 'buy',
            'location_accuracy': 9,
            'longitude': 0.005646,
            'price': 995000,
            'price_currency': '£',
            'price_formatted': '£995,000',
            'price_high': 995000,
            'price_low': 995000,
            'price_type': 'fixed',
            'property_type': 'flat',
            'size': 0,
            'size_type': 'net',
            'summary': 'Pick me properties would like to welcome you to this split level tw...',
            'thumb_height': '',
            'thumb_url': 'http://imgs.nestimg.com/medium/flat_london_7350009461327149125.jpg',
            'thumb_width': '',
            'title': 'City London Island, E14 - Penthouse',
            'updated_in_days': 3,
            'updated_in_days_formatted': 'first seen 3 days ago'
        }, {
            'bathroom_number': 2,
            'bedroom_number': 2,
            'car_spaces': 0,
            'commission': -1,
            'construction_year': 0,
            'datasource_name': 'SmartNewHomes',
            'floor': 1,
            'img_height': '',
            'img_url': 'http://imgs.nestimg.com/flat_isleworth_1690035460734957865.jpg',
            'img_width': '',
            'keywords': 'En suite, Balcony, Kitchen, Dishwasher, Modern',
            'latitude': 51.47592,
            'lister_name': 'London Square',
            'lister_url': 'http://www.nestoria.co.uk/detail/0000001690035460734957865/title/5/1-3?serpUid=&pt=2&ot=1&l=london&did=39_default&utm_source=api&utm_medium=external',
            'listing_type': 'buy',
            'location_accuracy': 9,
            'longitude': -0.334451,
            'price': 435000,
            'price_currency': '£',
            'price_formatted': '£435,000',
            'price_high': 435000,
            'price_low': 435000,
            'price_type': 'fixed',
            'property_type': 'flat',
            'size': 0,
            'size_type': 'net',
            'summary': 'First floor apartment offers an combination of luxury and contempor...',
            'thumb_height': '',
            'thumb_url': 'http://imgs.nestimg.com/medium/flat_isleworth_1690035460734957865.jpg',
            'thumb_width': '',
            'title': 'London Road, Isleworth, TW7 - Balcony',
            'updated_in_days': 3,
            'updated_in_days_formatted': 'first seen 3 days ago'
        }, {
            'bathroom_number': 0,
            'bedroom_number': 6,
            'car_spaces': 0,
            'commission': -1,
            'construction_year': 0,
            'datasource_name': 'NetHousePrices',
            'img_height': '',
            'img_url': 'http://imgs.nestimg.com/detached_twickenham_6410022461325507710.jpg',
            'img_width': '',
            'keywords': 'Detached, Garden, Conservatory, Kitchen, Off Street Parking, Reception',
            'latitude': 51.45676,
            'lister_name': 'Chase Buchanan',
            'lister_url': 'http://www.nestoria.co.uk/detail/0000006410022461325507710/title/5/1-4?serpUid=&pt=3&ot=1&l=london&did=90_default&utm_source=api&utm_medium=external',
            'listing_type': 'buy',
            'location_accuracy': 9,
            'longitude': -0.330278,
            'price': 1300000,
            'price_currency': '£',
            'price_formatted': '£1,300,000',
            'price_high': 1300000,
            'price_low': 1300000,
            'price_type': 'fixed',
            'property_type': 'house',
            'size': 0,
            'size_type': 'net',
            'summary': 'Six bedroom detached family house within half a mile of twickenham ...',
            'thumb_height': '',
            'thumb_url': 'http://imgs.nestimg.com/medium/detached_twickenham_6410022461325507710.jpg',
            'thumb_width': '',
            'title': 'London Road, Twickenham, Middlesex, TW1',
            'updated_in_days': 3,
            'updated_in_days_formatted': 'first seen 3 days ago'
        }, {
            'bathroom_number': 3,
            'bedroom_number': 4,
            'car_spaces': 0,
            'commission': -1,
            'construction_year': 0,
            'datasource_name': 'PrimeLocation',
            'floor': 2,
            'img_height': '',
            'img_url': 'http://imgs.nestimg.com/flat_london_1560015461099929700.jpg',
            'img_width': '',
            'keywords': 'Share of Freehold, Shared Garden, Terrace, Balcony, Parking',
            'latitude': 51.53539,
            'lister_name': 'Hanover',
            'lister_url': 'http://www.nestoria.co.uk/detail/0000001560015461099929700/title/5/1-5?serpUid=&pt=2&ot=1&l=london&did=69_high1&utm_source=api&utm_medium=external',
            'listing_type': 'buy',
            'location_accuracy': 9,
            'longitude': -0.165035,
            'price': 3150000,
            'price_currency': '£',
            'price_formatted': '£3,150,000',
            'price_high': 3150000,
            'price_low': 3150000,
            'price_type': 'fixed',
            'property_type': 'flat',
            'size': 0,
            'size_type': 'net',
            'summary': 'Joint a bright four bedroom family apartment situated on the second...',
            'thumb_height': '',
            'thumb_url': 'http://imgs.nestimg.com/medium/flat_london_1560015461099929700.jpg',
            'thumb_width': '',
            'title': 'London House, NW8 - Terrace, Balcony',
            'updated_in_days': 6,
            'updated_in_days_formatted': 'first seen 6 days ago'
        }, {
            'bathroom_number': 0,
            'bedroom_number': 2,
            'car_spaces': 0,
            'commission': -1,
            'construction_year': 0,
            'datasource_name': 'The House Shop',
            'floor': 0,
            'img_height': '',
            'img_url': 'http://imgs.nestimg.com/flat_essex_road_8600035457635970115.jpg',
            'img_width': '',
            'keywords': 'Garden, Kitchen, Patio, Reception, Modern',
            'latitude': 51.545282,
            'lister_name': 'Currell',
            'lister_url': 'http://www.nestoria.co.uk/detail/0000008600035457635970115/title/5/1-6?serpUid=&pt=2&ot=1&l=london&did=71_default&utm_source=api&utm_medium=external',
            'listing_type': 'buy',
            'location_accuracy': 10,
            'longitude': -0.099491,
            'price': 839950,
            'price_currency': '£',
            'price_formatted': '£839,950',
            'price_high': 839950,
            'price_low': 839950,
            'price_type': 'fixed',
            'property_type': 'flat',
            'size': 0,
            'size_type': 'net',
            'summary': 'Key features: â two bedroom garden flat â sought after development ...',
            'thumb_height': '',
            'thumb_url': 'http://imgs.nestimg.com/medium/flat_essex_road_8600035457635970115.jpg',
            'thumb_width': '',
            'title': 'Compton Road Canonbury London, N1',
            'updated_in_days': 8,
            'updated_in_days_formatted': 'first seen last week'
        }, {
            'bathroom_number': 0,
            'bedroom_number': 1,
            'car_spaces': 0,
            'commission': -1,
            'construction_year': 0,
            'datasource_name': 'Zoopla',
            'floor': 5,
            'img_height': '',
            'img_url': 'http://imgs.nestimg.com/flat_london_4940009460731471757.jpg',
            'img_width': '',
            'keywords': 'Balcony, Kitchen, Parking',
            'latitude': 51.509476,
            'lister_name': 'Johns',
            'lister_url': 'http://www.nestoria.co.uk/detail/0000004940009460731471757/title/5/1-7?serpUid=&pt=2&ot=1&l=london&did=57_default&utm_source=api&utm_medium=external',
            'listing_type': 'buy',
            'location_accuracy': 9,
            'longitude': 0.005646,
            'price': 463000,
            'price_currency': '£',
            'price_formatted': '£463,000',
            'price_high': 463000,
            'price_low': 463000,
            'price_type': 'fixed',
            'property_type': 'flat',
            'size': 0,
            'size_type': 'net',
            'summary': 'Newly available from johns&co in the brand new london city island b...',
            'thumb_height': '',
            'thumb_url': 'http://imgs.nestimg.com/medium/flat_london_4940009460731471757.jpg',
            'thumb_width': '',
            'title': 'London City Island, Orchard Building, E14',
            'updated_in_days': 3,
            'updated_in_days_formatted': 'first seen 3 days ago'
        }, {
            'bathroom_number': 0,
            'bedroom_number': 2,
            'car_spaces': 0,
            'commission': -1,
            'construction_year': 0,
            'datasource_name': 'Zoopla',
            'floor': 7,
            'img_height': '',
            'img_url': 'http://imgs.nestimg.com/flat_london_5800008460042601825.jpg',
            'img_width': '',
            'keywords': 'Balcony, Loft, Parking, Listed',
            'latitude': 51.509476,
            'lister_name': 'Johns',
            'lister_url': 'http://www.nestoria.co.uk/detail/0000005800008460042601825/title/5/1-8?serpUid=&pt=2&ot=1&l=london&did=57_default&utm_source=api&utm_medium=external',
            'listing_type': 'buy',
            'location_accuracy': 9,
            'longitude': 0.005646,
            'price': 599000,
            'price_currency': '£',
            'price_formatted': '£599,000',
            'price_high': 599000,
            'price_low': 599000,
            'price_type': 'fixed',
            'property_type': 'flat',
            'size': 0,
            'size_type': 'net',
            'summary': 'Exclusively listed by johns&co, join a brand new island neighbourho...',
            'thumb_height': '',
            'thumb_url': 'http://imgs.nestimg.com/medium/flat_london_5800008460042601825.jpg',
            'thumb_width': '',
            'title': 'London City Island, Orchard Building, E14',
            'updated_in_days': 3,
            'updated_in_days_formatted': 'first seen 3 days ago'
        }, {
            'bathroom_number': 0,
            'bedroom_number': 2,
            'car_spaces': 0,
            'commission': -1,
            'construction_year': 0,
            'datasource_name': 'OnTheMarket.com',
            'img_height': '',
            'img_url': 'http://imgs.nestimg.com/2_bedroom_flat_9170030461326566102.jpg',
            'img_width': '',
            'keywords': '',
            'latitude': 51.4821,
            'lister_name': 'John Payne',
            'lister_url': 'http://www.nestoria.co.uk/detail/0000009170030461326566102/title/5/1-9?serpUid=&pt=2&ot=1&l=london&did=105_high1&utm_source=api&utm_medium=external',
            'listing_type': 'buy',
            'location_accuracy': 9,
            'longitude': 0.006256,
            'price': 515000,
            'price_currency': '£',
            'price_formatted': '£515,000',
            'price_high': 515000,
            'price_low': 515000,
            'price_type': 'fixed',
            'property_type': 'flat',
            'size': 0,
            'size_type': 'net',
            'summary': 'Two double bedroom apartment within an development moments from Maz...',
            'thumb_height': '',
            'thumb_url': 'http://imgs.nestimg.com/medium/2_bedroom_flat_9170030461326566102.jpg',
            'thumb_width': '',
            'title': 'Seren Park Gardens London, SE3',
            'updated_in_days': 3,
            'updated_in_days_formatted': 'first seen 3 days ago'
        }, {
            'bathroom_number': 0,
            'bedroom_number': 5,
            'car_spaces': 0,
            'commission': -1,
            'construction_year': 0,
            'datasource_name': 'OnTheMarket.com',
            'img_height': '',
            'img_url': 'http://imgs.nestimg.com/5_bedroom_detached_house_2230030461326888808.jpg',
            'img_width': '',
            'keywords': 'Detached, Garden, Off Street Parking, Reception',
            'latitude': 51.448,
            'lister_name': 'Haart',
            'lister_url': 'http://www.nestoria.co.uk/detail/0000002230030461326888808/title/5/1-10?serpUid=&pt=3&ot=1&l=london&did=105_high1&utm_source=api&utm_medium=external',
            'listing_type': 'buy',
            'location_accuracy': 9,
            'longitude': -0.131327,
            'price': 1650000,
            'price_currency': '£',
            'price_formatted': '£1,650,000',
            'price_high': 1650000,
            'price_low': 1650000,
            'price_type': 'fixed',
            'property_type': 'house',
            'size': 0,
            'size_type': 'net',
            'summary': 'Great Development Opportunity This five bedroom house features livi...',
            'thumb_height': '',
            'thumb_url': 'http://imgs.nestimg.com/medium/5_bedroom_detached_house_2230030461326888808.jpg',
            'thumb_width': '',
            'title': 'House for sale, London, SW4 - Garden',
            'updated_in_days': 3,
            'updated_in_days_formatted': 'first seen 3 days ago'
        }, {
            'bathroom_number': 0,
            'bedroom_number': 3,
            'car_spaces': 0,
            'commission': -1,
            'construction_year': 0,
            'datasource_name': 'OnTheMarket.com',
            'img_height': '',
            'img_url': 'http://imgs.nestimg.com/3_bedroom_flat_8670030461326562327.jpg',
            'img_width': '',
            'keywords': 'Balcony, Garage, Kitchen',
            'latitude': 51.4703,
            'lister_name': 'John Payne',
            'lister_url': 'http://www.nestoria.co.uk/detail/0000008670030461326562327/title/5/1-11?serpUid=&pt=2&ot=1&l=london&did=105_high1&utm_source=api&utm_medium=external',
            'listing_type': 'buy',
            'location_accuracy': 9,
            'longitude': -0.007682,
            'price': 525000,
            'price_currency': '£',
            'price_formatted': '£525,000',
            'price_high': 525000,
            'price_low': 525000,
            'price_type': 'fixed',
            'property_type': 'flat',
            'size': 0,
            'size_type': 'net',
            'summary': 'Three bedroom top floor apartment with a view from its private balc...',
            'thumb_height': '',
            'thumb_url': 'http://imgs.nestimg.com/medium/3_bedroom_flat_8670030461326562327.jpg',
            'thumb_width': '',
            'title': 'Greyladies Gdns Wat Tyler Rd London, SE10',
            'updated_in_days': 3,
            'updated_in_days_formatted': 'first seen 3 days ago'
        }, {
            'bathroom_number': 0,
            'bedroom_number': 3,
            'car_spaces': 0,
            'commission': -1,
            'construction_year': 0,
            'datasource_name': 'Zoopla',
            'img_height': '',
            'img_url': 'http://imgs.nestimg.com/flat_4560009461325709910.jpg',
            'img_width': '',
            'keywords': 'Terrace',
            'latitude': 51.45983,
            'lister_name': 'Foxtons',
            'lister_url': 'http://www.nestoria.co.uk/detail/0000004560009461325709910/title/5/1-12?serpUid=&pt=2&ot=1&l=london&did=57_default&utm_source=api&utm_medium=external',
            'listing_type': 'buy',
            'location_accuracy': 9,
            'longitude': -0.213888,
            'price': 1800000,
            'price_currency': '£',
            'price_formatted': '£1,800,000',
            'price_high': 1800000,
            'price_low': 1800000,
            'price_type': 'fixed',
            'property_type': 'flat',
            'size': 0,
            'size_type': 'net',
            'summary': 'Three bedroom lateral apartment boasts light south-facing windows a...',
            'thumb_height': '',
            'thumb_url': 'http://imgs.nestimg.com/medium/flat_4560009461325709910.jpg',
            'thumb_width': '',
            'title': 'London Square, Putney SW15 - Terrace',
            'updated_in_days': 3,
            'updated_in_days_formatted': 'first seen 3 days ago'
        }, {
            'bathroom_number': 0,
            'bedroom_number': 2,
            'car_spaces': 0,
            'commission': -1,
            'construction_year': 0,
            'datasource_name': 'OnTheMarket.com',
            'img_height': '',
            'img_url': 'http://imgs.nestimg.com/2_bedroom_flat_4870030461326776485.jpg',
            'img_width': '',
            'keywords': '',
            'latitude': 51.4929,
            'lister_name': 'Acorn',
            'lister_url': 'http://www.nestoria.co.uk/detail/0000004870030461326776485/title/5/1-13?serpUid=&pt=2&ot=1&l=london&did=105_high1&utm_source=api&utm_medium=external',
            'listing_type': 'buy',
            'location_accuracy': 9,
            'longitude': 0.065106,
            'price': 399995,
            'price_currency': '£',
            'price_formatted': '£399,995',
            'price_high': 399995,
            'price_low': 399995,
            'price_type': 'fixed',
            'property_type': 'flat',
            'size': 0,
            'size_type': 'net',
            'summary': 'Well maintained by its current occupiers is this two bedroom apartm...',
            'thumb_height': '',
            'thumb_url': 'http://imgs.nestimg.com/medium/2_bedroom_flat_4870030461326776485.jpg',
            'thumb_width': '',
            'title': 'Bunton Street London, SE18',
            'updated_in_days': 3,
            'updated_in_days_formatted': 'first seen 3 days ago'
        }, {
            'bathroom_number': 1,
            'bedroom_number': 2,
            'car_spaces': 0,
            'commission': -1,
            'construction_year': 0,
            'datasource_name': 'Zoopla',
            'floor': 0,
            'img_height': '',
            'img_url': 'http://imgs.nestimg.com/flat_isleworth_5290008460042948201.jpg',
            'img_width': '',
            'keywords': 'Parking',
            'latitude': 51.477345,
            'lister_name': 'Oakhill',
            'lister_url': 'http://www.nestoria.co.uk/detail/0000005290008460042948201/title/5/1-14?serpUid=&pt=2&ot=1&l=london&did=57_default&utm_source=api&utm_medium=external',
            'listing_type': 'buy',
            'location_accuracy': 9,
            'longitude': -0.326955,
            'price': 350000,
            'price_currency': '£',
            'price_formatted': '£350,000',
            'price_high': 350000,
            'price_low': 350000,
            'price_type': 'fixed',
            'property_type': 'flat',
            'size': 0,
            'size_type': 'net',
            'summary': 'Two bedroom ground floor apartment with allocated gated parking sit...',
            'thumb_height': '',
            'thumb_url': 'http://imgs.nestimg.com/medium/flat_isleworth_5290008460042948201.jpg',
            'thumb_width': '',
            'title': 'London Road, Isleworth, TW7',
            'updated_in_days': 3,
            'updated_in_days_formatted': 'first seen 3 days ago'
        }, {
            'bathroom_number': 1,
            'bedroom_number': 2,
            'car_spaces': 0,
            'commission': -1,
            'construction_year': 0,
            'datasource_name': 'Zoopla',
            'img_height': '',
            'img_url': 'http://imgs.nestimg.com/flat_mitcham_junction_mitcham_3470009460731488851.jpg',
            'img_width': '',
            'keywords': 'Shared Garden, Kitchen',
            'latitude': 51.3838,
            'lister_name': 'Lantana Estates',
            'lister_url': 'http://www.nestoria.co.uk/detail/0000003470009460731488851/title/5/1-15?serpUid=&pt=2&ot=1&l=london&did=57_default&utm_source=api&utm_medium=external',
            'listing_type': 'buy',
            'location_accuracy': 9,
            'longitude': -0.157653,
            'price': 350000,
            'price_currency': '£',
            'price_formatted': '£350,000',
            'price_high': 350000,
            'price_low': 350000,
            'price_type': 'fixed',
            'property_type': 'flat',
            'size': 0,
            'size_type': 'net',
            'summary': 'Newly converted 2 bedroom flat. Property is currently being convert...',
            'thumb_height': '',
            'thumb_url': 'http://imgs.nestimg.com/medium/flat_mitcham_junction_mitcham_3470009460731488851.jpg',
            'thumb_width': '',
            'title': 'London Road, Mitcham Junction, CR4',
            'updated_in_days': 3,
            'updated_in_days_formatted': 'first seen 3 days ago'
        }, {
            'bathroom_number': 0,
            'bedroom_number': 1,
            'car_spaces': 0,
            'commission': -1,
            'construction_year': 0,
            'datasource_name': 'Zoopla',
            'floor': 3,
            'img_height': '',
            'img_url': 'http://imgs.nestimg.com/flat_mitcham_6160009461326701215.jpg',
            'img_width': '',
            'keywords': 'Leasehold, Kitchen',
            'latitude': 51.40016,
            'lister_name': 'Andrews',
            'lister_url': 'http://www.nestoria.co.uk/detail/0000006160009461326701215/title/5/1-16?serpUid=&pt=2&ot=1&l=london&did=57_default&utm_source=api&utm_medium=external',
            'listing_type': 'buy',
            'location_accuracy': 9,
            'longitude': -0.16936,
            'price': 255000,
            'price_currency': '£',
            'price_formatted': '£255,000',
            'price_high': 255000,
            'price_low': 255000,
            'price_type': 'fixed',
            'property_type': 'flat',
            'size': 0,
            'size_type': 'net',
            'summary': 'Pleasing one double bedroom flat located on the third floor. Accomm...',
            'thumb_height': '',
            'thumb_url': 'http://imgs.nestimg.com/medium/flat_mitcham_6160009461326701215.jpg',
            'thumb_width': '',
            'title': 'London Road, Mitcham, Surrey, CR4',
            'updated_in_days': 3,
            'updated_in_days_formatted': 'first seen 3 days ago'
        }, {
            'bathroom_number': 2,
            'bedroom_number': 2,
            'car_spaces': 0,
            'commission': -1,
            'construction_year': 0,
            'datasource_name': 'SmartNewHomes',
            'floor': 1,
            'img_height': '',
            'img_url': 'http://imgs.nestimg.com/flat_isleworth_1550035460734957809.jpg',
            'img_width': '',
            'keywords': 'En suite, Balcony, Kitchen, Dishwasher, Modern',
            'latitude': 51.47592,
            'lister_name': 'London Square',
            'lister_url': 'http://www.nestoria.co.uk/detail/0000001550035460734957809/title/5/1-17?serpUid=&pt=2&ot=1&l=london&did=39_default&utm_source=api&utm_medium=external',
            'listing_type': 'buy',
            'location_accuracy': 9,
            'longitude': -0.334451,
            'price': 425000,
            'price_currency': '£',
            'price_formatted': '£425,000',
            'price_high': 425000,
            'price_low': 425000,
            'price_type': 'fixed',
            'property_type': 'flat',
            'size': 0,
            'size_type': 'net',
            'summary': 'With two double bedrooms the master with en-suite shower room its o...',
            'thumb_height': '',
            'thumb_url': 'http://imgs.nestimg.com/medium/flat_isleworth_1550035460734957809.jpg',
            'thumb_width': '',
            'title': 'London Road, Isleworth, TW7 - Balcony',
            'updated_in_days': 3,
            'updated_in_days_formatted': 'first seen 3 days ago'
        }, {
            'bathroom_number': 0,
            'bedroom_number': 2,
            'car_spaces': 0,
            'commission': -1,
            'construction_year': 0,
            'datasource_name': 'Zoopla',
            'img_height': '',
            'img_url': 'http://imgs.nestimg.com/flat_mitcham_2770009461327090361.jpg',
            'img_width': '',
            'keywords': 'Refurbished, Garage, Loft',
            'latitude': 51.39884,
            'lister_name': 'House Simple',
            'lister_url': 'http://www.nestoria.co.uk/detail/0000002770009461327090361/title/5/1-18?serpUid=&pt=2&ot=1&l=london&did=57_default&utm_source=api&utm_medium=external',
            'listing_type': 'buy',
            'location_accuracy': 9,
            'longitude': -0.172403,
            'price': 280000,
            'price_currency': '£',
            'price_formatted': '£280,000',
            'price_high': 280000,
            'price_low': 280000,
            'price_type': 'fixed',
            'property_type': 'flat',
            'size': 0,
            'size_type': 'net',
            'summary': 'Flat situated at a location in Mitcham. Freshly refurbished, with a...',
            'thumb_height': '',
            'thumb_url': 'http://imgs.nestimg.com/medium/flat_mitcham_2770009461327090361.jpg',
            'thumb_width': '',
            'title': 'London Road, Mitcham, CR4',
            'updated_in_days': 3,
            'updated_in_days_formatted': 'first seen 3 days ago'
        }, {
            'bathroom_number': 1,
            'bedroom_number': 1,
            'car_spaces': 0,
            'commission': -1,
            'construction_year': 0,
            'datasource_name': 'SmartNewHomes',
            'img_height': '',
            'img_url': 'http://imgs.nestimg.com/flat_isleworth_7910035461180732992.jpg',
            'img_width': '',
            'keywords': 'Balcony, Kitchen, Dishwasher, Modern',
            'latitude': 51.47592,
            'lister_name': 'London Square',
            'lister_url': 'http://www.nestoria.co.uk/detail/0000007910035461180732992/title/5/1-19?serpUid=&pt=2&ot=1&l=london&did=39_default&utm_source=api&utm_medium=external',
            'listing_type': 'buy',
            'location_accuracy': 9,
            'longitude': -0.334451,
            'price': 340000,
            'price_currency': '£',
            'price_formatted': '£340,000',
            'price_high': 340000,
            'price_low': 340000,
            'price_type': 'fixed',
            'property_type': 'flat',
            'size': 0,
            'size_type': 'net',
            'summary': 'London Square Isleworth. Now available. Contemporary apartment is l...',
            'thumb_height': '',
            'thumb_url': 'http://imgs.nestimg.com/medium/flat_isleworth_7910035461180732992.jpg',
            'thumb_width': '',
            'title': 'London Road, Isleworth, TW7 - Balcony',
            'updated_in_days': 3,
            'updated_in_days_formatted': 'first seen 3 days ago'
        }, {
            'bathroom_number': 2,
            'bedroom_number': 2,
            'car_spaces': 0,
            'commission': -1,
            'construction_year': 0,
            'datasource_name': 'SmartNewHomes',
            'img_height': '',
            'img_url': 'http://imgs.nestimg.com/flat_isleworth_1500035460734957789.jpg',
            'img_width': '',
            'keywords': 'En suite, Balcony, Kitchen, Dishwasher, Modern',
            'latitude': 51.47592,
            'lister_name': 'London Square',
            'lister_url': 'http://www.nestoria.co.uk/detail/0000001500035460734957789/title/5/1-20?serpUid=&pt=2&ot=1&l=london&did=39_default&utm_source=api&utm_medium=external',
            'listing_type': 'buy',
            'location_accuracy': 9,
            'longitude': -0.334451,
            'price': 410000,
            'price_currency': '£',
            'price_formatted': '£410,000',
            'price_high': 410000,
            'price_low': 410000,
            'price_type': 'fixed',
            'property_type': 'flat',
            'size': 0,
            'size_type': 'net',
            'summary': 'London Square Isleworth Now available. Seamlessly combining luxury ...',
            'thumb_height': '',
            'thumb_url': 'http://imgs.nestimg.com/medium/flat_isleworth_1500035460734957789.jpg',
            'thumb_width': '',
            'title': 'London Road, Isleworth, TW7 - Kitchen',
            'updated_in_days': 3,
            'updated_in_days_formatted': 'first seen 3 days ago'
        }],
        'locations': [{
            'center_lat': 51.527243,
            'center_long': -0.106841,
            'long_title': 'London',
            'place_name': 'london',
            'title': 'London'
        }],
        'page': 1,
        'sort': 'nestoria_rank',
        'status_code': '200',
        'status_text': 'OK',
        'thanks': 'For using the Nestoria API.',
        'total_pages': 2638,
        'total_results': 52779,
        'listing_type': 'buy'
    }
};

var styles = StyleSheet.create({
  description: {
    marginBottom: 20,
    fontSize: 18,
    textAlign: 'center',
    color: '#656565'
  },
  container: {
    padding: 30,
    marginTop: 65,
    alignItems: 'center'
  },
  flowRight: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch'
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  button: {
    height: 36,
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  searchInput: {
    height: 36,
    padding: 4,
    marginRight: 5,
    flex: 4,
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#48BBEC',
    borderRadius: 8,
    color: '#48BBEC'
  },
  image: {
    width: 217,
    height: 138
  }
});

function urlForQueryAndPage(key, value, pageNumber) {
  var data = {
      country: 'uk',
      pretty: '1',
      encoding: 'json',
      listing_type: 'buy',
      action: 'search_listings',
      page: pageNumber
  };
  data[key] = value;
 
  var querystring = Object.keys(data)
    .map(key => key + '=' + encodeURIComponent(data[key]))
    .join('&');
 
  return 'http://api.nestoria.co.uk/api?' + querystring;
};

class SearchPage extends Component{
    constructor(pros){
      super(pros);
      this.state = {
        searchString:'london',
        isLoading: false,
        message: ''
      }
    }

    onSearchTextChanged(event) {
      // console.log('onSearchTextChanged');
      this.setState({
        searchString: event.nativeEvent.text,
        isLoading: false,
        message: ''
      });
      // this.state["searchString"] = event.nativeEvent.text;#error:must use setState, and the state's properties will merge
      // console.log(this.state.searchString);
    }

    _executeQuery(query) {
      this.setState({ isLoading: true });

      this._handleResponse(gData.response);


      // fetch(query)
      // .then(response => response.json())
      // .then(json => 
      //   (function(json,target){
      //     var currentTime = new Date().getTime();
      //     console.log("endTime:=======================>"+currentTime);
      //     console.log("networkConsumeTime:=======================>"+ (currentTime - startTime));
      //     startTime = currentTime;
      //     target._handleResponse(json.response);
      //   })(json,this))        
      // .then(
      //   function(){
      //   var currentTime = new Date().getTime();
      //   console.log("endTime:=======================>"+currentTime);
      //   console.log("renderConsumeTime:=======================>"+ (currentTime - startTime));
      // })
      // .catch(error =>
      //    this.setState({
      //     isLoading: false,
      //     message: 'Something bad happened ' + error
      //  }));
    }

    _handleResponse(response) {
      this.setState({ isLoading: false , message: '' });
      if (true) {
        // console.log('Properties found: ' + response.listings.length);
        this.props.navigator.push({
          title:'Result',
          component: SearchResults,
          passProps:{listings:response.listings},
        });
      } else {
        this.setState({ message: 'Location not recognized; please try again.'});
      }
    }
     
    onSearchPressed() {
      var query = urlForQueryAndPage('place_name', this.state.searchString, 1);
      var currentTime = new Date().getTime();
      console.log("startTime:=======================>"+currentTime);
      startTime = currentTime;
      this._executeQuery(query);
    }

    onLocationPressed() {
      navigator.geolocation.getCurrentPosition(
        location => {
          var search = location.coords.latitude + ',' + location.coords.longitude;
          this.setState({ searchString: search });
          var query = urlForQueryAndPage('centre_point', search, 1);
          this._executeQuery(query);
        },
        error => {
          this.setState({
            message: 'There was a problem with obtaining your location: ' + error
          });
        });
    }

    render() {
      // console.log('SearchPage.render');
        var spinner = this.state.isLoading ?
            ( <ActivityIndicatorIOS
                size='large'/> ) :
            ( <View/>);
        return (
            <View style={styles.container}>
                <Text style = {styles.description}>
                    Search for houses to buy!
                </Text>
                <Text style = {styles.description}>
                    Search by place-name, postcode or search near your location.
                </Text>
                <View style={styles.flowRight}>
                  <TextInput style={styles.searchInput} placeholder='Search via name or postcode'
                  value={this.state.searchString}
                  onChange={this.onSearchTextChanged.bind(this)}>
                  </TextInput>
                  <TouchableHighlight style={styles.button} underlayColor='#99d9f4'
                    onPress={this.onSearchPressed.bind(this)}>
                    <Text style={styles.buttonText}>Go</Text>
                  </TouchableHighlight>
                </View>
                <TouchableHighlight style={styles.button}
                  underlayColor='#99d9f4'
                  onPress={this.onLocationPressed.bind(this)}>
                  <Text style={styles.buttonText}>Location</Text>
                </TouchableHighlight>
                <Image source={require('./Resources/house.png')} style={styles.image}/>
                {spinner}
                <Text style={styles.description}>{this.state.message}</Text>
            </View>
            
            );
    }
}

module.exports = SearchPage;