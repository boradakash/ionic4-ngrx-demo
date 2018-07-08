import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import {
    ModuleWithProviders,
    NgModule,
    Optional,
    SkipSelf
} from '@angular/core';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from '../core/in-memory-data.service';

import { TodoService } from './services/todo.service';

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService, { delay: 600 })
    ],
    providers: [
        TodoService]
})
export class CoreModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: CoreModule
        };
    }

    constructor(
        @Optional()
        @SkipSelf()
        parentModule: CoreModule
    ) {
        if (parentModule) {
            throw new Error(
                'CoreModule is already loaded. Import it in the AppModule only'
            );
        }
    }
}