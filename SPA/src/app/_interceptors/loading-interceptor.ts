import { HttpInterceptorFn } from '@angular/common/http';
import { SpinnerService } from '../_services/spinner-service';
import { inject } from '@angular/core';
import { delay, finalize } from 'rxjs';

export const loadingInterceptor: HttpInterceptorFn = (req, next) => {
  const spinner = inject(SpinnerService);
  spinner.showSpinner();
  return next(req).pipe(finalize(() => {
                                        setTimeout(() => {
                                          spinner.hideSpinner()
                                        }, 500);
                                      }));
};
