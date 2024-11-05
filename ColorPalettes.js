function getTextColor(value, parameter) {
    if (parameter === 'rainfall_daily'  || parameter === 'rainfall_24_hr' || parameter === 'rainfall_monthly' || parameter === 'rainfall_yearly' || parameter === 'rainfall_monsoon' || parameter === 'rain_rate' || parameter === 'rain_rate_current' || parameter === 'rain_rate_mins') {
        return value > 1000 ? '#808080' :
               value > 750 ? '#B2B2B2' :
               value > 500 ? '#DDDDDD' :
               value > 250 ? '#ffcaff' :
               value > 200 ? '#E673FF' :
               value > 150 ? '#B30890' :
               value > 125 ? '#A00000' :
               value > 100 ? '#FF0000' :
               value > 75 ? '#FF5200' :
               value > 60 ? '#ffa900' :
               value > 45 ? '#FFF300' :
               value > 35 ? '#14a414' :
               value > 25 ? '#07f700' :
               value > 15 ? '#0504F9' :
               value > 5 ? '#008DFF' :
               value > 0 ? '#00e9f0' :
                             '#FFFFFF';
    } else if (parameter === 'wind_speed_prevailing' || parameter === 'avg_wind_speed_10_min' || parameter === 'wind_gust_10_min' || parameter === 'avg_wind' || parameter === 'wind_gust') {
        return value > 100 ? '#f50509' :
               value > 75 ? '#ff6303' :
               value > 50 ? '#eff301' :
               value > 25 ? '#0efe06' :
               value > 10 ? '#b0dd2f' :
               value > 1  ? '#99ddff' :
                            '#fff';
    } else if (parameter === 'pressure_relative' || parameter === 'max_PressureRelative' || parameter === 'min_PressureRelative' || parameter === 'avg_PressureRelative') {
        return value > 1020 ? '#AD0CFC' :
               value > 1015 ? '#720CFC' :
               value > 1010 ? '#0C1BFC' :
               value > 1008 ? '#0CA2FC' :
               value > 1006 ? '#0CFCE0' :
               value > 1004 ? '#24FC0C' :
               value > 1002 ? '#CCFC0C' :
               value > 1000 ? '#FCF10C' :
               value > 998 ? '#fcc40c' :
               value > 996 ? '#f88420' :
               value > 994 ? '#f45922' :
               value > 992 ? '#ed1c27' :
               value > 990 ? '#bf2724' :
               value > 985 ? '#871619' :
               value > 980  ? '#591315' :
                            '#fff';
    } else if (parameter === 'aqi_current' || parameter === 'aqi_one' || parameter === 'aqi_three' || parameter === 'aqi_24') {
        return value > 400 ? '#660000' :
               value > 300 ? '#800080' :
               value > 200 ? '#ff0000' :
               value > 150 ? '#FF561B' :
               value > 100 ? '#ffff00' :
               value > 50 ? '#00cc00' :
               value > 0  ? '#008000' :
                            '#fff';
    } else if (parameter === 'uv_index') {
        return value > 11 ? '#8345aa' :
               value > 10 ? '#ff0394' :
               value > 9 ? '#badfff' :
               value > 8 ? '#ff64f0' :
               value > 7 ? '#fe0a00' :
               value > 6 ? '#ff5f1b' :
               value > 5 ? '#ff8a23' :
               value > 4 ? '#ffb62c' :
               value > 3 ? '#ffd213' :
               value > 2 ? '#f3e547' :
               value > 1 ? '#9bda33' :
               value > 0  ? '#40a142' :
                            '#fff';
    } else if (parameter === 'solar_radiation') {
        return value > 1000 ? '#fe332d' :
               value > 800 ? '#fe9900' :
               value > 600 ? '#ffcc00' :
               value > 500 ? '#ffff00' :
               value > 400 ? '#ccff00' :
               value > 300 ? '#01cc00' :
               value > 200 ? '#01cc00' :
               value > 150 ? '#009999' :
               value > 100 ? '#0099ff' :
               value > 50 ? '#0000cc' :
               value > 0  ? '#010080' :
                            '#fff';
    } else if (parameter === 'humidity' || parameter === 'max_humidity'  || parameter === 'min_humidity'  || parameter === 'avg_humidity') {
        return value > 100 ? 'rgb(59,63,76)' :
               value > 95  ? 'rgb(6,43,53)' :
               value > 90  ? 'rgb(11,71,107)' :
               value > 85  ? 'rgb(29,97,163)' :
               value > 80  ? 'rgb(48,115,199)' :
               value > 75  ? 'rgb(40,136,226)' :
               value > 70  ? 'rgb(40,149,226)' :
               value > 65  ? 'rgb(45,168,233)' :
               value > 60  ? 'rgb(45,201,240)' :
               value > 55  ? 'rgb(90,228,233)' :
               value > 50  ? 'rgb(90,255,226)' :
               value > 45  ? 'rgb(90,255,213)' :
               value > 40  ? 'rgb(135,255,200)' :
               value > 35  ? 'rgb(206,255,165)' :
               value > 30  ? 'rgb(240,234,134)' :
               value > 25  ? 'rgb(240,209,90)' :
               value > 20  ? 'rgb(240,187,56)' :
               value > 15  ? 'rgb(246,152,52)' :
               value > 10  ? 'rgb(222,124,37)' :
               value > 5   ? 'rgb(193,83,20)' :
               value > 0   ? 'rgb(165,42,42)' :
                             '#FFFFFF';
    } else {
    return value > 60 ? '#B0ABAD' :
           value > 58 ? '#D1C9CD' :
           value > 56 ? '#CFB7C2' :
           value > 54 ? '#CB9FB3' :
           value > 52 ? '#c987a5' :
           value > 50 ? '#e398c0' :
           value > 48 ? '#f288a9' :
           value > 46 ? '#d95f72' :
           value > 44 ? '#ba4355' :
           value > 42 ? '#9e263a' :
           value > 40 ? '#c21b26' :
           value > 38 ? '#de3b2c' :
           value > 36 ? '#f0653e' :
           value > 34 ? '#f78c52' :
           value > 32 ? '#fcb365' :
           value > 30 ? '#fcd283' :
           value > 28 ? '#ffeba1' :
           value > 26 ? '#fffebf' :
           value > 24 ? '#d0f7f5' :
           value > 22 ? '#9ef7f3' :
           value > 20 ? '#8ce2f5' :
           value > 18 ? '#79cdf7' :
           value > 16 ? '#63b7f7' :
           value > 14 ? '#3a89de' :
           value > 12 ? '#2875c7' :
           value > 10 ? '#135ead' :
           value > 8 ? '#004794' :
           value > 6 ? '#244ba6' :
           value > 4 ? '#484fb8' :
           value > 2 ? '#6c53c9' :
           value > 0 ? '#9158db' :
           value > -2 ? '#b85ced' :
           value > -4 ? '#df71f5' :
           value > -6  ? '#e684e8' :
           value > -8 ? '#eb94dc' :
           value > -10 ? '#f2a7d2' :
           value > -12? '#f7bac5' :
                        '#ffceba';
}
}
