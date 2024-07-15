import { Routes } from '@angular/router';
import { LayoutWebsiteComponent } from './component/layout-website/layout-website.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutComponent } from './pages/about/about.component';
import { ProductDetailPageComponent } from './pages/product-detail-page/product-detail-page.component';
import { LayoutAdminComponent } from './component/layout-admin/layout-admin.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { AdminProductComponent } from './pages/admin/admin-product/admin-product.component';
import { AdminProductAddComponent } from './pages/admin/admin-product-add/admin-product-add.component';
import { AdminProductEditComponent } from './pages/admin/admin-product-edit/admin-product-edit.component';
import { SignupComponent } from './pages/admin/signup/signup.component';
import { privateRouterGuard } from './private.guard';
import { SinginComponent } from './pages/admin/singin/singin.component';

export const routes: Routes = [
    {path:'', component:LayoutWebsiteComponent, children:[
        {path:'',component: HomePageComponent},
        {path:'about', component: AboutComponent},
        {path:'product/:id', component: ProductDetailPageComponent},
        { path: "signup", component: SignupComponent },
        { path: "signin", component: SinginComponent },
       
    ]},
    {path: "admin",canActivate: [privateRouterGuard],  component: LayoutAdminComponent, children: [
        {path:'', redirectTo: '/admin/dashboard', pathMatch: 'full'},
        {path:'dashboard', component: DashboardComponent},
        {path:'product', component: AdminProductComponent},
        {path:'product/add', component: AdminProductAddComponent},
        {path:'product/:id/edit', component: AdminProductEditComponent}
    ]}
];
