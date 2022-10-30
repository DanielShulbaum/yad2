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
import { FilterFloorComponent } from './components/filter-floor/filter-floor.component';
import { FilterFloor2Component } from './components/filter-floor2/filter-floor2.component';
import { Header2Component } from './components/header2/header2.component';
import { AppartmentsListComponent } from './components/appartments-list/appartments-list.component';
import { SearchTool2Component } from './components/search-tool2/search-tool2.component';
import { ModaleComponent } from './components/modale/modale.component';
import { AppartementPostComponent } from './components/appartement-post/appartement-post.component';
import { MainContentComponent } from './components/main-content/main-content.component';

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
    FilterFloorComponent,
    FilterFloor2Component,
    Header2Component,
    AppartmentsListComponent,
    SearchTool2Component,
    ModaleComponent,
    AppartementPostComponent,
    MainContentComponent,
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
