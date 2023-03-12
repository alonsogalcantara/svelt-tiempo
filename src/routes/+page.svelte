<script>
    import { getWeatherFrom } from "../services/servicesWeather.js";
    import WeatherFooter from '../components/weater.footer.svelte'
    const weatherPromise = getWeatherFrom();
</script>

<div>
    <section>
        {#await weatherPromise then weather}
            <h1>{weather.locationName}</h1>
            <h2>{weather.temperature}°</h2>
            <h3>{weather.ConditionText}</h3>
            <h4>{weather.windSpeed} kph</h4>
        {/await}
    </section>
    <WeatherFooter />
</div>

<style>
    :global(body) {
        display: grid;
        background: rgb(225, 225, 225);
        place-content: center;
        min-height: 100vh;
        font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
        margin: 0;
    }

    :global(h1, h2, h3, h4, h5) {
        margin: 0;
    }

    :global(*, *::after, *::before){
        box-sizing: border-box;
    }

    div {
        aspect-ratio: 9 / 16;
        width: 400px;
        max-width: 100%;
        display: block;
        box-shadow: 0 0 100px rgba(0, 0, 0, 0.1);
        border-radius: 8px;
        position: relative;
    }

    section{
        padding: 16px;
    }

    h1 {
        font-weight: 300;
        color: #333;
        text-transform: uppercase;
        padding: 16px 0 16px 16px;
    }

    h2 {
        font-weight: 300;
        font-size: 64px;
        color: #333;
        text-transform: uppercase;
        padding: 0px 0 0 0;
        font-family: "montserrat";
    }

    h3 {
        font-weight: 400;
        transform: rotate(-90deg);
        position: absolute;
        top: 7em;
        right: 1px;
        left: auto;
    }
</style>
