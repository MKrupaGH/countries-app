import {
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getErrorMessage, getLoading } from './store/shared/shared.selector';
import { SpinnerComponent } from './shared/components/spinner/spinner.component';
import { AppState } from './store/app.state';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    SpinnerComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements AfterViewChecked {
  showLoading$!: Observable<boolean>;
  errorMessage$!: Observable<string>;
  constructor(private store: Store<AppState>, private cd: ChangeDetectorRef) {}

  ngAfterViewChecked(): void {
    this.showLoading$ = this.store.select(getLoading);
    this.errorMessage$ = this.store.select(getErrorMessage);
    this.cd.detectChanges();
  }
}
