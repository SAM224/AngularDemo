import { HttpModule } from '@angular/http';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { SummaryPipe } from './summary.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthorsService } from './authors.service';
import { CoursesService } from './courses.service';
import { CoursesComponent } from './courses.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { AuthorsComponent } from './authors/authors.component';
import { BindingComponent } from './binding/binding.component';
import { BootstrapComponent } from './bootstrap/bootstrap.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { ComponentApiComponent } from './component-api/component-api.component';
import { BootstrapPanelComponent } from './bootstrap-panel/bootstrap-panel.component';
import { DirectivesComponent } from './directives/directives.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { PostsComponent } from './posts/posts.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent,
    AuthorsComponent,
    BindingComponent,
    BootstrapComponent,
    SummaryPipe,
    FavoriteComponent,
    ComponentApiComponent,
    BootstrapPanelComponent,
    DirectivesComponent,
    ContactFormComponent,
    SignupFormComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [
    CoursesService,
    AuthorsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
