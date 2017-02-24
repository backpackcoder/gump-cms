import {Component} from '@angular/core';
import {MenuItem} from "./menuItem";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    email = 'info@itete.or.tz';
    phone = '+255 684 282 626';
    urls = {
        facebook: 'https://www.facebook.com/IteteHospital',
        twitter: 'https://twitter.com/itetetz',
        youtube: 'https://plus.google.com/u/0/b/102053817464261583240/102053817464261583240'
    };

    title = 'Itete Lutheran';
    subtitle = 'Council Designated Hospital';
    menuItems = [
      new MenuItem('Home', true),
        new MenuItem('About'),
        new MenuItem('Departments'),
        new MenuItem('Facilities'),
        new MenuItem('Mobile Services'),
        new MenuItem('Hospital Projects'),
        new MenuItem('Contact Us')
    ];
}
