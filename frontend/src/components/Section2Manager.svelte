<script>
    import WelcomeCardManager from '../components/WelcomeCardManager.svelte';
    import BirthdayCard from '../components/BirthdayCard.svelte';
    import HolidayCard from '../components/HolidayCard.svelte';
</script>

<div class="grid gap-4 md:grid-cols-3 md:gap-8 lg:grid-cols-3">
    <WelcomeCardManager fullname="Alexandra Tomescu"/>
    <BirthdayCard employee="your"/>
    <HolidayCard holidayName="Easter" holidayDate="April 20, 2025"/>
</div>