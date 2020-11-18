<template lang="html">

  <section class="full-calendar-app">
    <full-calendar :events="events" :config="config" />
  </section>

</template>

<script lang="js">
import { FullCalendar } from 'vue-full-calendar'
export default {
  name: 'full-calendar-app',
  components: {
    FullCalendar
  },
  props: [],
  mounted () {},
  data () {
    return {
      events: [
        {
          title: 'All Day Event',
          start: '2017-07-08'
        },
        {
          title: 'Long Event',
          start: '2017-07-01',
          end: '2017-07-07'
        },
        {
          id: 999,
          title: 'Repeating Event',
          start: '2017-07-09T16:00:00'
        },
        {
          id: 999,
          title: 'Repeating Event',
          start: '2017-07-16T16:00:00'
        },
        {
          title: 'Conference',
          start: '2017-07-11',
          end: '2017-07-13'
        },
        {
          title: 'Meeting',
          start: '2017-07-12T10:30:00',
          end: '2017-07-12T12:30:00'
        },
        {
          title: 'Lunch',
          start: '2017-07-12T12:00:00'
        },
        {
          title: 'Meeting',
          start: '2017-07-12T14:30:00'
        },
        {
          title: 'Happy Hour',
          start: '2017-07-12T17:30:00'
        },
        {
          title: 'Dinner',
          start: '2017-07-12T20:00:00'
        },
        {
          title: 'Birthday Party',
          start: '2017-07-13T07:00:00'
        },
        {
          title: 'Click for Google',
          url: 'http://google.com/',
          start: '2017-07-28'
        }
      ],
      config: {
        header: {
          left: 'prev,next today',
          center: 'title',
          right: 'month,basicWeek,basicDay'
        },
        dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        dayNamesShort: ['SUN', 'MON', 'TUE', 'WED', 'THUS', 'FRI', 'SAT'],
        monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        monthNamesShort: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        defaultDate: '2017-07-12',
        defaultView: 'month',
        navLinks: true,
        editable: true,
        eventLimit: true
      }
    }
  }
}
</script>
