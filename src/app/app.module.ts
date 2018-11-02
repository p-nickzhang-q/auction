import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SearchComponent } from './search/search.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ProductComponent } from './product/product.component';
import { StarsComponent } from './stars/stars.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { HomeComponent } from './home/home.component';
import { ProductService } from './shared/product.service';
import { FilterPipe } from './pipe/filter.pipe';

const routeConfig: Routes = [{
  path: '', component: HomeComponent
}, {
  path: 'product/:productId', component: ProductDetailComponent
}];

@NgModule({
  declarations: [//组件，指令，管道申明在declarations
    AppComponent, NavbarComponent, FooterComponent, SearchComponent, CarouselComponent, ProductComponent, StarsComponent, ProductDetailComponent, HomeComponent, FilterPipe
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(routeConfig),
  ],
  providers: [ProductService],//服务申明在providers, providers中的对象是{provide:'token记号',useClass:具体实例化的Class}, 当组件需要对应服务时，会在这里寻找，并且实例化，然后注入到对应组件中，组件通过构造方法的参数来接受
  bootstrap: [AppComponent]
})
export class AppModule { }
