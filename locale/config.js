dayjs.locale({
  name: 'bg',
  weekdays: 'неделя_понеделник_вторник_сряда_четвъртък_петък_събота'.split('_'),
  weekdaysShort: 'нед_пон_втор_ср_четв_пет_съб'.split('_'),
  weekdaysMin: 'нд_пн_вт_ср_чт_пт_сб'.split('_'),
  months: 'януари_февруари_март_април_май_юни_юли_август_септември_октомври_ноември_декември'.split('_'),
  monthsShort: 'ян_февр_март_апр_май_юни_юли_авг_септ_окт_ноем_дек'.split('_'),
  weekStart: 1,
    formats: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD.MM.YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY HH:mm',
      LLLL: 'dddd, D MMMM YYYY HH:mm'
    },
    relativeTime: {
      future: 'след %s',
      past: 'преди %s',
      s: 'няколко секунди',
      m: 'минута',
      mm: 'минути',
      h: 'час',
      hh: 'часа',
      d: 'ден',
      dd: 'дни',
      M: 'месец',
      MM: 'месеца',
      y: 'година',
      yy: 'години'
    },
    ordinal: '%dº'
}, null, false);