    import { Component } from '@angular/core';
    import { mobiscroll, MbscListviewOptions } from '../lib/mobiscroll/js/mobiscroll.angular.min.js';
    
    mobiscroll.settings = {
        lang: 'en',        // Specify language like: lang: 'pl' or omit setting to use default
        theme: 'ios'       // Specify theme like: theme: 'ios' or omit setting to use default
    };
    
    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html'
    })
    
    export class AppComponent {
        data = [{
                cl: 'md-continent micons icon-north-america',
                name: 'North America',
                children: [{
                    imgsrc: 'https://img.mobiscroll.com/demos/flags/US.png',
                    name: 'USA',
                    children: [{
                        name: 'Washington'
                    }, {
                        name: 'Florida'
                    }, {
                        name: 'Los Angeles'
                    }, {
                        name: 'New York'
                    }, {
                        name: 'Detroit'
                    }, {
                        name: 'Chicago'
                    }]
                }, {
                    imgsrc: 'https://img.mobiscroll.com/demos/flags/CA.png',
                    name: 'Canada',
                    children: [{
                        name: 'Vancouver'
                    }, {
                        name: 'Winnipeg'
                    }, {
                        name: 'Calgary'
                    }, {
                        name: 'Montreal'
                    }, {
                        name: 'Quebec'
                    }]
                }]
            }, {
                cl: 'md-continent micons icon-south-america',
                name: 'South America',
                children: [{
                    imgsrc: 'https://img.mobiscroll.com/demos/flags/ar.png',
                    name: 'Argentina',
                    children: [{
                        name: 'Buenos Aire'
                    }, {
                        name: 'Córdoba'
                    }, {
                        name: 'Rosario'
                    }, {
                        name: 'Mendoza'
                    }]
                }, {
                    imgsrc: 'https://img.mobiscroll.com/demos/flags/br.png',
                    name: 'Brazil',
                    children: [{
                        name: 'Rio de Janeiro'
                    }, {
                        name: 'Sao Paolo'
                    }, {
                        name: 'Brasília'
                    }, {
                        name: 'Salvador'
                    }, {
                        name: 'Fortaleza'
                    }]
                }, {
                    imgsrc: 'https://img.mobiscroll.com/demos/flags/cl.png',
                    name: 'Chile',
                    children: [{
                        name: 'Santiago'
                    }, {
                        name: 'Concepción'
                    }, {
                        name: 'Valparaíso'
                    }]
                }]
            }  , {
            cl: 'md-continent micons icon-europe',
            name: 'Europe',
            children: [{
                imgsrc: 'https://img.mobiscroll.com/demos/flags/fr.png',
                name: 'France',
                children: [{
                    name: 'Paris'
                }, {
                    name: 'Toulouse'
                }, {
                    name: 'Marseille'
                }, {
                    name: 'Strasbourg'
                }, {
                    name: 'Bordeaux'
                }, {
                    name: 'Lyon'
                }]
            }, {
                imgsrc: 'https://img.mobiscroll.com/demos/flags/de.png',
                name: 'Germany',
                children: [{
                    name: 'Berlin'
                }, {
                    name: 'Frankfurt'
                }, {
                    name: 'Hamburg'
                }, {
                    name: 'Stuttgart'
                }, {
                    name: 'Munich'
                }]
            }, {
                imgsrc: 'https://img.mobiscroll.com/demos/flags/es.png',
                name: 'Spain',
                children: [{
                    name: 'Madrid'
                }, {
                    name: 'Barcelona'
                }, {
                    name: 'Bilbao'
                }, {
                    name: 'Valencia'
                }, {
                    name: 'Zaragoza'
                }]
            }, {
                imgsrc: 'https://img.mobiscroll.com/demos/flags/it.png',
                name: 'Italy',
                children: [{
                    name: 'Rome'
                }, {
                    name: 'Palermo'
                }, {
                    name: 'Genoa'
                }, {
                    name: 'Torino'
                }, {
                    name: 'Milan'
                }]
            }]
        }, {
            cl: 'md-continent micons icon-asia',
            name: 'Asia',
            children: [{
                imgsrc: 'https://img.mobiscroll.com/demos/flags/cn.png',
                name: 'China',
                children: [{
                    name: 'Shanghai'
                }, {
                    name: 'Hong Kong'
                }, {
                    name: 'Beijing'
                }, {
                    name: 'Tianjin'
                }, {
                    name: 'Wuhan'
                }, {
                    name: 'Chongqing'
                }]
            }, {
                imgsrc: 'https://img.mobiscroll.com/demos/flags/jp.png',
                name: 'Japan',
                children: [{
                    name: 'Tokyo'
                }, {
                    name: 'Kagoshima'
                }, {
                    name: 'Osaka'
                }, {
                    name: 'Yokohama'
                }, {
                    name: 'Kawasaki'
                }, {
                    name: 'Kyoto'
                }, {
                    name: 'Sapporo'
                }]
            }]
        }, {
            cl: 'md-continent micons icon-australia',
            name: 'Australia',
            children: [{
                imgsrc: 'https://img.mobiscroll.com/demos/flags/au.png',
                name: 'Australia',
                children: [{
                    name: 'Sydney'
                }, {
                    name: 'Canberra'
                }, {
                    name: 'Melbourne'
                }, {
                    name: 'Perth'
                }, {
                    name: 'Brisbane'
                }, {
                    name: 'Sunshine Coast'
                }]
            }, {
                imgsrc: 'https://img.mobiscroll.com/demos/flags/nz.png',
                name: 'New Zeland',
                children: [{
                    name: 'Wellington'
                }, {
                    name: 'Auckland'
                }, {
                    name: 'Christchurch'
                }, {
                    name: 'Napier-Hastings'
                }, {
                    name: 'Tauranga'
                }]
            }]
        }, {
            cl: 'md-continent micons icon-africa',
            name: 'Africa',
            children: [{
                imgsrc: 'https://img.mobiscroll.com/demos/flags/eg.png',
                name: 'Egypt',
                children: [{
                    name: 'Cairo'
                }, {
                    name: 'Alexandria'
                }, {
                    name: 'Giza'
                }, {
                    name: 'Shubra El-Kheima'
                }, {
                    name: 'Suez'
                }, {
                    name: 'Luxor'
                }]
            }, {
                imgsrc: 'https://img.mobiscroll.com/demos/flags/za.png',
                name: 'South Africa',
                children: [{
                    name: 'Port Elizabeth'
                }, {
                    name: 'Kimberley'
                }, {
                    name: 'Cape Town'
                }, {
                    name: 'Johannesburg'
                }, {
                    name: 'Durban'
                }]
            }, {
                imgsrc: 'https://img.mobiscroll.com/demos/flags/tz.png',
                name: 'Tanzania',
                children: [{
                    name: 'Dar es Salaam'
                }, {
                    name: 'Mwanza'
                }, {
                    name: 'Arusha'
                }, {
                    name: 'Dodoma'
                }, {
                    name: 'Zanzibar City'
                }]
            }, {
                imgsrc: 'https://img.mobiscroll.com/demos/flags/gh.png',
                name: 'Ghana',
                children: [{
                    name: 'Kumasi'
                }, {
                    name: 'Accra'
                }, {
                    name: 'Sekondi-Takoradi'
                }, {
                    name: 'Tamale'
                }, {
                    name: 'Sunyani'
                }]
            }]
        } 
    ];
    
        listviewSettings: MbscListviewOptions = {
            swipe: false,  // More info about swipe: https://docs.mobiscroll.com/4-7-3/angular/listview#opt-swipe
            enhance: true  // More info about enhance: https://docs.mobiscroll.com/4-7-3/angular/listview#opt-enhance
        };
    
        insideCardSettings: MbscListviewOptions = {
            swipe: false,  // More info about swipe: https://docs.mobiscroll.com/4-7-3/angular/listview#opt-swipe
            enhance: true  // More info about enhance: https://docs.mobiscroll.com/4-7-3/angular/listview#opt-enhance
        };
    
    }
