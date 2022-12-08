import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { BannerComponent } from './components/banner/banner.component';
import { RealEstateMenuComponent } from './components/real-estate-menu/real-estate-menu.component';
import { CarMenuComponent } from './components/car-menu/car-menu.component';
import { SecondHandMenuComponent } from './components/second-hand-menu/second-hand-menu.component';
import { DemandedMenuComponent } from './components/demanded-menu/demanded-menu.component';
import { BussinesForSaleMenuComponent } from './components/bussines-for-sale-menu/bussines-for-sale-menu.component';
import { PetsMenuComponent } from './components/pets-menu/pets-menu.component';
import { ProffesionalsMenuComponent } from './components/proffesionals-menu/proffesionals-menu.component';
import { MoreMenuComponent } from './components/more-menu/more-menu.component';
import { NoticeMenuComponent } from './components/notice-menu/notice-menu.component';
import { LikedMenuComponent } from './components/liked-menu/liked-menu.component';
import { UserMenuComponent } from './components/user-menu/user-menu.component';

import { FilterAppartmentKindComponent } from './components/filter-appartment-kind/filter-appartment-kind.component';
import { FilterRoomsComponent } from './components/filter-rooms/filter-rooms.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { FilterFloorComponent } from './components/filter-floor/filter-floor.component';
import { FilterFloor2Component } from './components/filter-floor2/filter-floor2.component';
import { Header2Component } from './components/header2/header2.component';
import { AppartmentsListComponent } from './components/appartments-list/appartments-list.component';
import { SearchTool2Component } from './components/search-tool2/search-tool2.component';
import { ModaleComponent } from './components/modale/modale.component';
import { AppartementPostComponent } from './components/appartement-post/appartement-post.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { AuthPageComponent } from './pages/auth-page/auth-page.component';
import { FooterComponent } from './components/footer/footer.component';
import { SignUpPageComponent } from './pages/sign-up-page/sign-up-page.component';
import { PasswordPatternDirective } from './directives/password-pattern.directive';
import { NewPostComponent } from './pages/new-post/new-post.component';
import { AssetDetailsComponent } from './components/asset-details/asset-details.component';
import { PostPaymentsComponent } from './components/post-payments/post-payments.component';
import { FormAddPicturesComponent } from './components/form-add-pictures/form-add-pictures.component';
import { FormContactDetailsComponent } from './components/form-contact-details/form-contact-details.component';
import { FormFinalStageComponent } from './components/form-final-stage/form-final-stage.component';
import { SortPipePipe } from './shared/sort-pipe.pipe';
import { FilterSimplePipe } from './shared/filter-simple.pipe';
import { HttpClient, HttpClientModule} from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    BannerComponent,
    RealEstateMenuComponent,
    CarMenuComponent,
    SecondHandMenuComponent,
    DemandedMenuComponent,
    BussinesForSaleMenuComponent,
    PetsMenuComponent,
    ProffesionalsMenuComponent,
    MoreMenuComponent,
    NoticeMenuComponent,
    LikedMenuComponent,
    UserMenuComponent,

    FilterAppartmentKindComponent,
    FilterRoomsComponent,
    FilterFloorComponent,
    FilterFloor2Component,
    Header2Component,
    AppartmentsListComponent,
    SearchTool2Component,
    ModaleComponent,
    AppartementPostComponent,
    MainContentComponent,
    AuthPageComponent,
    FooterComponent,
    SignUpPageComponent,
    PasswordPatternDirective,
    NewPostComponent,
    AssetDetailsComponent,
    PostPaymentsComponent,
    FormAddPicturesComponent,
    FormContactDetailsComponent,
    FormFinalStageComponent,
    SortPipePipe,
    FilterSimplePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatCardModule,
    InfiniteScrollModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
