import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { scheduledAppInitializerProvider } from '@osm-mfe/shared/util/app-initializers';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      [
        {
          path: 'login',
          loadChildren: () =>
            import('osm-login/Module').then((m) => m.RemoteEntryModule),
        },
      ],
      { initialNavigation: 'disabled', useHash: true }
    ),
    BrowserAnimationsModule,
  ],
  providers: [scheduledAppInitializerProvider],
  bootstrap: [AppComponent],
})
export class AppModule {}
