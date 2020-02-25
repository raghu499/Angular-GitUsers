import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule, MatCardModule, MatInputModule, MatFormFieldModule, MatProgressBarModule, MatProgressSpinnerModule } from '@angular/material';
import { UserlistComponent } from './components/userlist/userlist.component';
import { UserRepoListComponent } from './components/user-repo-list/user-repo-list.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { TableDataComponent } from './components/table-data/table-data.component';
import { GraphDataComponent } from './components/graph-data/graph-data.component';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    UserlistComponent,
    UserRepoListComponent,
    TableDataComponent,
    GraphDataComponent,    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatIconModule,
    MatCardModule,
    HttpClientModule,
    MatInputModule,
    MatFormFieldModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    FormsModule, ReactiveFormsModule,
    NgxDatatableModule,
    ChartsModule
    
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
