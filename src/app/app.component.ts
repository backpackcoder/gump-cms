import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'app works!';
    email = 'info@itete.or.tz';
    phone = '+255 684 282 626';
    urls = {
        facebook: 'https://www.facebook.com/IteteHospital',
        twitter: 'https://twitter.com/itetetz',
        youtube: 'https://plus.google.com/u/0/b/102053817464261583240/102053817464261583240'
    }
}
