function plural(word, num) {
  const forms = word.split('_')
  return num % 10 === 1 && num % 100 !== 11 ? forms[0] : forms[1] 
}
function relativeTimeWithPlural(number, withoutSuffix, key) {
  const format = {
    mm: withoutSuffix ? 'минута_минути' : 'минута_минути',
    hh: 'час_часа',
    dd: 'ден_дни',
    MM: 'месец_месеца',
    yy: 'година_години'
  }
  return `${number} ${plural(format[key], +number)}`
}
dayjs.locale({
  name: 'bg',
  weekdays: 'неделя_понеделник_вторник_сряда_четвъртък_петък_събота'.split('_'),
  weekdaysShort: 'нед_пон_втор_ср_четв_пет_съб'.split('_'),
  weekdaysMin: 'нд_пн_вт_ср_чт_пт_сб'.split('_'),
  months: 'януари_февруари_март_април_май_юни_юли_август_септември_октомври_ноември_декември'.split('_'),
  monthsShort: 'ян_февр_март_апр_май_юни_юли_авг_септ_окт_ноем_дек'.split('_'),
  ordinal: n => `${n}.`,
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
      m: relativeTimeWithPlural,
      mm: relativeTimeWithPlural,
      h: 'час',
      hh: relativeTimeWithPlural,
      d: 'ден',
      dd: relativeTimeWithPlural,
      M: 'месец',
      MM: relativeTimeWithPlural,
      y: 'година',
      yy: relativeTimeWithPlural
    },
});
