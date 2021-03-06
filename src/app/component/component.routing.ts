import { Routes } from '@angular/router';

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
import { AdminComponent } from './admin/admin.component';
import { ExperienceComponent } from './experience/experience.component';
import { PlaceComponent } from './place/place.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { ExperienceDetailComponent } from './experience-detail/experience-detail.component';
import { LoginComponent } from './login/login.component';
import { GuideDetailComponent } from './guide-detail/guide-detail.component';
import { OneGuideComponent } from './one-Guide/one-Guide.component';
import { OneExperienceComponent } from './one-experience/one-experience.component';
import { OnePlaceComponent } from './one-place/one-place.component';
import {LieuDetailComponent} from './lieu-detail/lieu-detail.component';
import { ValidateExperienceComponent } from './validate-experience/validate-experience.component';
import { ValidateGuideComponent } from './validate-guide/validate-guide.component';
import { NewsletterComponent } from './newsletter/newsletter.component';

export const ComponentsRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'progressbar',
        component: NgbdpregressbarBasicComponent,
        data: {
          title: 'Progressbar',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'ngComponent' },
            { title: 'Progressbar' }
          ]
        }
      },
      {
        path: 'user',
        component: UserComponent,
        data: {
          title: 'Utilisateur',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'ngComponent' },
            { title: 'User' }
          ]
        }
      },
      {
        path: 'admin',
        component: AdminComponent,
        data: {
          title: 'Administrateur',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'ngComponent' },
            { title: 'Admin' }
          ]
        }
      },
      {
        path: 'pagination',
        component: NgbdpaginationBasicComponent,
        data: {
          title: 'Pagination',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'ngComponent' },
            { title: 'Pagination' }
          ]
        }
      },
      {
        path: 'accordion',
        component: NgbdAccordionBasicComponent,
        data: {
          title: 'Accordion',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'ngComponent' },
            { title: 'Accordion' }
          ]
        }
      },
      {
        path: 'alert',
        component: NgbdAlertBasicComponent,
        data: {
          title: 'Alert',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'ngComponent' },
            { title: 'Alert' }
          ]
        }
      },
      {
        path: 'carousel',
        component: NgbdCarouselBasicComponent,
        data: {
          title: 'Carousel',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'ngComponent' },
            { title: 'Carousel' }
          ]
        }
      },
      {
        path: 'datepicker',
        component: NgbdDatepickerBasicComponent,
        data: {
          title: 'Datepicker',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'ngComponent' },
            { title: 'Datepicker' }
          ]
        }
      },
      {
        path: 'dropdown',
        component: NgbdDropdownBasicComponent,
        data: {
          title: 'Dropdown',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'ngComponent' },
            { title: 'Dropdown' }
          ]
        }
      },
      {
        path: 'modal',
        component: NgbdModalBasicComponent,
        data: {
          title: 'Modal',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'ngComponent' },
            { title: 'Modal' }
          ]
        }
      },
      {
        path: 'poptool',
        component: NgbdPopTooltipComponent,
        data: {
          title: 'Popover & Tooltip',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'ngComponent' },
            { title: 'Popover & Tooltip' }
          ]
        }
      },
      {
        path: 'rating',
        component: NgbdratingBasicComponent,
        data: {
          title: 'Rating',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'ngComponent' },
            { title: 'Rating' }
          ]
        }
      },
      {
        path: 'tabs',
        component: NgbdtabsBasicComponent,
        data: {
          title: 'Tabs',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'ngComponent' },
            { title: 'Tabs' }
          ]
        }
      },
      {
        path: 'timepicker',
        component: NgbdtimepickerBasicComponent,
        data: {
          title: 'Timepicker',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'ngComponent' },
            { title: 'Timepicker' }
          ]
        }
      },
      {
        path: 'typehead',
        component: NgbdtypeheadBasicComponent,
        data: {
          title: 'Typehead',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'ngComponent' },
            { title: 'Typehead' }
          ]
        }
      },
      {
        path: 'buttons',
        component: ButtonsComponent,
        data: {
          title: 'Button',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'ngComponent' },
            { title: 'Button' }
          ]
        }
      },
	  {
        path: 'card',
        component: CardsComponent,
        data: {
          title: 'Card',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'ngComponent' },
            { title: 'Card' }
          ]
        }
      },
      {
        path: 'guide',
        component: GuideComponent,
        data: {
          title: 'Guide',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'ngComponent' },
            { title: 'Guide' }
          ]
        }
      },
      {
        path: 'oneGuide/:id',
        component: OneGuideComponent,
        data: {
          title: 'Description guide',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'ngComponent' },
            { title: 'oneGuide' }
          ]
        }
      },
      

      {
        path: 'guideDetail',
        component: GuideDetailComponent,
        data: {
          title: "Ajout d'un guide",
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'ngComponent' },
            { title: 'GuideDetail' }
          ]
        }
      },
      {
        path: 'login',
        component: LoginComponent,
        data: {
          title: 'Login',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'ngComponent' },
            { title: 'Guide' }
          ]
        }
      },
      {
        path: 'experience',
        component: ExperienceComponent,
        data: {
          title: 'Experience',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'ngComponent' },
            { title: 'Experience' }
          ]
        }
      },
      {
        path: 'experienceDetail',
        component: ExperienceDetailComponent,
        data: {
          title: "Ajout d'experience",
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'ngComponent' },
            { title: 'Experience' }
          ]
        }
      },
      {
        path: 'place',
        component: PlaceComponent,
        data: {
          title: 'Place',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'ngComponent' },
            { title: 'Place' }
          ]
        }
      },
      {
        path: 'lieuDetail',
        component: LieuDetailComponent,
        data: {
          title: "Ajout d'un lieu",
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'ngComponent' },
            { title: 'LieuDetail' }
          ]
        }
      },
      {
        path: 'editUser/:id',
        component: EditUserComponent,
        data: {
          title: 'Edit User',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'ngComponent' },
            { title: 'EditUser' }
          ]
        }
      },
      {
        path: 'oneExperience/:id',
        component: OneExperienceComponent,
        data: {
          title: 'Description experience',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'ngComponent' },
            { title: 'oneExperience' }
          ]
        }
      },
      {
        path: 'onePlace/:id',
        component: OnePlaceComponent,
        data: {
          title: 'Description lieu',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'ngComponent' },
            { title: 'onePlace' }
          ]
        }
      },
      {
        path: 'valideExperience',
        component: ValidateExperienceComponent,
        data: {
          title: 'Validate Experience',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'ngComponent' },
            { title: 'validateExperience' }
          ]
        }
      },
      {
        path: 'valideGuide',
        component: ValidateGuideComponent,
        data: {
          title: 'Validate Guide',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'ngComponent' },
            { title: 'validateGuide' }
          ]
        }
      },
      {
        path: 'mail',
        component: NewsletterComponent,
        data: {
          title: 'Send newsletter',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'ngComponent' },
            { title: 'validateGuide' }
          ]
        }
      }

    ]
  }
];
