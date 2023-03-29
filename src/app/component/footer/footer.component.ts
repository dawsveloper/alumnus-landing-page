import { Component } from '@angular/core';
import { faInstagram, faFacebookF, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faCopyright } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  icCopyright = faCopyright;
  icInstagram = faInstagram;
  icFacebook = faFacebookF;
  icLinkedin = faLinkedinIn;
}
