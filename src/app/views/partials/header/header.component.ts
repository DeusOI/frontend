import { Component } from '@angular/core';
// import logo from 'src/assets/images/logo.png';


@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
// export class HeaderComponent {
//     logo = logo;
// }
export class HeaderComponent {
    logoPath: string = 'assets/images/logo.png';
}
