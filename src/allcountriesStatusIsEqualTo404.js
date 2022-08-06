import { Notify } from 'notiflix/build/notiflix-notify-aio';
export function allcountriesStatusIsEqualTo404() {
  Notify.failure('Oops, there is no country with that name');
}
