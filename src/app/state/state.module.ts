import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { appReducer } from './app.reducer';
import { TodosEffects } from './todo/todo.effects';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forRoot(appReducer),
    EffectsModule.forRoot([TodosEffects])
  ],
  declarations: []
})

export class StateModule {

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: StateModule
    };
  }

  constructor(@Optional() @SkipSelf() parentModule: StateModule) {
    if (parentModule) {
      throw new Error(
        'StateModule is already loaded. Import it in the AppModule only');
    }
  }
}