import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ComponentsRoutes } from './component.routing';
import { NgbdpregressbarBasicComponent } from './progressbar/progressbar.component';
import { NgbdpaginationBasicComponent } from './pagination/pagination.component';
import { NgbdAccordionBasicComponent } from './accordion/accordion.component';
import { NgbdAlertBasicComponent } from './alert/alert.component';
import { NgbdCarouselBasicComponent } from './carousel/carousel.component';
import { NgbdDatepickerBasicComponent } from './datepicker/datepicker.component';
import { NgbdDropdownBasicComponent } from './dropdown-collapse/dropdown-collapse.component';
import { NgbdModalBasicComponent } from './modal/modal.component';
import { NgbdPopTooltipComponent } from './popover-tooltip/popover-tooltip.component';
import { NgbdratingBasicComponent } from './rating/rating.component';
import { NgbdtabsBasicComponent } from './tabs/tabs.component';
import { NgbdtimepickerBasicComponent } from './timepicker/timepicker.component';
import { NgbdtypeheadBasicComponent } from './typehead/typehead.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { CardsComponent } from './card/card.component';
import { UserComponent } from './user/user.component';
import { GuideComponent } from './guide/guide.component';
import { ExperienceComponent } from './experience/experience.component';
import { PlaceComponent } from './place/place.component';
import { ExperienceDetailComponent } from './experience-detail/experience-detail.component';
import { AdminComponent } from './admin/admin.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { LoginComponent } from './login/login.component';
import { GuideDetailComponent } from './guide-detail/guide-detail.component';
import { OneGuideComponent } from './one-guide/one-guide.component';
import { OneExperienceComponent } from './one-experience/one-experience.component';
import { SanitizerPipe } from '../pipes/sanitizer.pipe';
import { OnePlaceComponent } from './one-place/one-place.component';
import { LieuDetailComponent } from './lieu-detail/lieu-detail.component';
import { ValidateExperienceComponent } from './validate-experience/validate-experience.component';
import { ValidateGuideComponent } from './validate-guide/validate-guide.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ComponentsRoutes),
    FormsModule,
    NgbModule,
    ReactiveFormsModule
  ],
  declarations: [
    NgbdpregressbarBasicComponent,
    NgbdpaginationBasicComponent,
    NgbdAccordionBasicComponent,
    NgbdAlertBasicComponent,
    NgbdCarouselBasicComponent,
    NgbdDatepickerBasicComponent,
    NgbdDropdownBasicComponent,
    NgbdModalBasicComponent,
    NgbdPopTooltipComponent,
    NgbdratingBasicComponent,
    NgbdtabsBasicComponent,
    NgbdtimepickerBasicComponent,
    NgbdtypeheadBasicComponent,
    ButtonsComponent,
    CardsComponent,
    UserComponent,
    GuideComponent,
    AdminComponent,
    ExperienceComponent,
    PlaceComponent,
    EditUserComponent,
    LoginComponent,
    ExperienceDetailComponent,
    GuideDetailComponent,
    OneGuideComponent,
    OneExperienceComponent,
    SanitizerPipe,
    OnePlaceComponent,
    LieuDetailComponent,
    ValidateExperienceComponent,
    ValidateGuideComponent,
    
  ]
})
export class ComponentsModule {}
