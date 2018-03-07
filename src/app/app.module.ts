import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { UserProfileComponent} from './user-profile/user-profile.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeComponent } from './employees/employee/employee.component';
import { EmployeeListComponent } from './employees/employee-list/employee-list.component';
import { ToastrModule } from 'ngx-toastr';
import { AgmCoreModule } from '@agm/core';
import { GeoService } from './geo.service';
import { GoogleMapComponent } from './google-map/google-map.component';
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { AgmSnazzyInfoWindowModule } from '@agm/snazzy-info-window';
import { Server } from 'selenium-webdriver/safari';

@NgModule({
  declarations: [
    AppComponent,
    UserProfileComponent,
    EmployeesComponent,
    EmployeeComponent,
    GoogleMapComponent,
    EmployeeListComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    FormsModule,
    CoreModule,
    ToastrModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: environment.googleMapsKey,
      apiVersion: environment.apiVersion
    }),
    AgmSnazzyInfoWindowModule,
    AppRoutingModule
  ],
  providers: [GeoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
