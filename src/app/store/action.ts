import { createAction, props } from '@ngrx/store';

export const saveAction = createAction(
  '[Save String] SaveAction',
  props<{ headerTitle }>()
);

export const successMessage = createAction(
  '[Success] Saved successfully',
  props<{ headerTitle }>()
);

export const failureMessage = createAction('Failed', props<{ error }>());

export const toggleAction = createAction(
  'Toggled success',
  props<{ isToggle }>()
);

export const incrementDecrementCount = createAction(
  'Count updated',
  props<{ countType }>()
);

export const postTableAction = createAction(
  'POST successful',
  props<{ params }>()
);

export const successPostMessage = createAction(
  '[Success] Saved successfully',
  props<{ params }>()
);

export const failurePostMessage = createAction('Failed', props<{ error }>());


export const getData = createAction('Fetch data')

export const fetchedSuccess = createAction('Fetched data successfully', props<{data}>())