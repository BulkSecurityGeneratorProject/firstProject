import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { FirstProjectRegionMySuffixModule } from './region-my-suffix/region-my-suffix.module';
import { FirstProjectCountryMySuffixModule } from './country-my-suffix/country-my-suffix.module';
import { FirstProjectLocationMySuffixModule } from './location-my-suffix/location-my-suffix.module';
import { FirstProjectDepartmentMySuffixModule } from './department-my-suffix/department-my-suffix.module';
import { FirstProjectTaskMySuffixModule } from './task-my-suffix/task-my-suffix.module';
import { FirstProjectEmployeeMySuffixModule } from './employee-my-suffix/employee-my-suffix.module';
import { FirstProjectJobMySuffixModule } from './job-my-suffix/job-my-suffix.module';
import { FirstProjectJobHistoryMySuffixModule } from './job-history-my-suffix/job-history-my-suffix.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        FirstProjectRegionMySuffixModule,
        FirstProjectCountryMySuffixModule,
        FirstProjectLocationMySuffixModule,
        FirstProjectDepartmentMySuffixModule,
        FirstProjectTaskMySuffixModule,
        FirstProjectEmployeeMySuffixModule,
        FirstProjectJobMySuffixModule,
        FirstProjectJobHistoryMySuffixModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FirstProjectEntityModule {}
