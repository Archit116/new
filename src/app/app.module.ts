import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { IntroScreenComponent } from './intro-screen/intro-screen.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AboutComponent } from './about/about.component';
import { LeadershipComponent } from './leadership/leadership.component';
import { ReviewComponent } from './review/review.component';
import { KeyIdeasComponent } from './key-ideas/key-ideas.component';
import { EvaluationComponent } from './evaluation/evaluation.component';
import { AdditionalComponent } from './additional/additional.component';
import { FooterComponent } from './footer/footer.component';
import { LeadershipQualityComponent } from './leadership-quality/leadership-quality.component';
import { IdeaComponent } from './idea/idea.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    IntroScreenComponent,
    NavbarComponent,
    SlideshowComponent,
    AboutComponent,
    LeadershipComponent,
    ReviewComponent,
    KeyIdeasComponent,
    EvaluationComponent,
    AdditionalComponent,
    FooterComponent,
    LeadershipQualityComponent,
    IdeaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
