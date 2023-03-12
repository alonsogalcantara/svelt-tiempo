<script>
    import {getWeatherFrom} from '../services/servicesWeather.js';
    const weatherPromise = getWeatherFrom();
</script>

<style>
    h1{
        font-family: 'Courier New', Courier, monospace;
    }
</style>

{#await weatherPromise then weather}
    <h1>{weather.ConditionText}</h1>
{/await}