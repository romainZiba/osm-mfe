import { APP_INITIALIZER } from '@angular/core';

export const scheduledAppInitializerProvider = [
  {
    provide: APP_INITIALIZER,
    useFactory: () => (): Promise<void> =>
      new Promise<void>((resolve) => {
        setTimeout(() => resolve());
      }),
    deps: [],
    multi: true,
  },
];
