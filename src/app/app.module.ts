import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HeaderComponent } from './components/header/header.component';
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
import { SearchToolComponent } from './components/search-tool/search-tool.component';
import { FilterAppartmentKindComponent } from './components/filter-appartment-kind/filter-appartment-kind.component';
import { FilterRoomsComponent } from './components/filter-rooms/filter-rooms.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeaderComponent,
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
    SearchToolComponent,
    FilterAppartmentKindComponent,
    FilterRoomsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
