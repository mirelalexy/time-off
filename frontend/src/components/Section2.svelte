<script>
    import WelcomeCard from '../components/WelcomeCard.svelte';
    import BirthdayCard from '../components/BirthdayCard.svelte';
    import HolidayCard from '../components/HolidayCard.svelte';
</script>

<div class="grid gap-4 md:grid-cols-3 md:gap-8 lg:grid-cols-3">
    <WelcomeCard fullname="Alexandra Tomescu"/>
    <BirthdayCard employee="your" birthday="30"/>
    <HolidayCard holidayName="Good Friday" holidayDate="April 20, 2025"/>
</div>