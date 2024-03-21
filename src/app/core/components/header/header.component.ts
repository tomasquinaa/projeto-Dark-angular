import { Component } from '@angular/core';

// Enums
import { Etheme } from '../../enums/Etheme.enum';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  public icon: string = Etheme.ICON_MOON;
  public toggle() {
    const theme = document.body.classList.toggle('dark-theme');

    if (theme) {
      return (this.icon = Etheme.ICON_SUN);
    }

    return (this.icon = Etheme.ICON_MOON);
  }
}
