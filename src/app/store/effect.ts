import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { EMPTY, ObservableInput } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { AppService } from '../app.service';
import {
  fetchedSuccess,
  getData,
  postTableAction,
  successPostMessage
} from './action';

@Injectable()
export class AppEffects {
  constructor(
    private actions$: Actions,
    private appService: AppService,
    private store: Store
  ) {}

  saveParams$ = createEffect(() =>
    this.actions$.pipe(
      ofType(postTableAction),
      mergeMap((payload: any) =>
        this.appService
          .postMethod(payload)
          .pipe(map(response => successPostMessage(response)))
      )
    )
  );

  getParams$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getData),
      mergeMap(() =>
        this.appService
          .getMethod()
          .pipe(map(response => fetchedSuccess(response)))
      )
    )
  );
}
