import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TaskModule } from './components/task.module';
import { NgxsModule } from '@ngxs/store';
import { environment } from 'src/environments/environment.prod';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import InboxScreenComponent from './components/inbox-screen.component';
import PureInboxScreenComponent from './components/pure-inbox-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    InboxScreenComponent,
    PureInboxScreenComponent
  ],
  imports: [
    BrowserModule,
    TaskModule,
    NgxsModule.forRoot([], {
      developmentMode: !environment.production,
    }),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsLoggerPluginModule.forRoot({
      disabled: environment.production,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
