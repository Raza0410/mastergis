// windUtils.js

function updateMarkers() {
    map.eachLayer(function (layer) {
        if (layer instanceof L.Marker) {
            map.removeLayer(layer);
        }
    });

    MetData.forEach(function (data) {
        var value;
        var unit = "";
        var textColor;

        if (currentParameter === 'temperature') {
            value = data[3];
            unit = "°C";
        } else if (currentParameter === 'humidity') {
            value = data[4];
            unit = "%";
        } else if (currentParameter === 'dew_point') {
            value = data[5];
            unit = "°C";
        } else if (currentParameter === 'wet_bulb') {
            value = data[6];
            unit = "°C";
        } else if (currentParameter === 'heat_index') {
            value = data[7];
            unit = "°C";
        } else if (currentParameter === 'wind_chill') {
            value = data[8];
            unit = "°C";
        } else if (currentParameter === 'wind_speed_prevailing') {
            value = data[11];
            unit = "km/h";
        } else if (currentParameter === 'avg_wind_speed_10_min') {
            value = data[13];
            unit = "km/h";
        } else if (currentParameter === 'wind_gust_10_min') {
            value = data[15];
            unit = "km/h";
        } else if (currentParameter === 'rainfall_daily') {
            value = data[17];
            unit = "mm";
        } else if (currentParameter === 'rainfall_24_hr') {
            value = data[18];
            unit = "mm";
        } else if (currentParameter === 'rainfall_monthly') {
            value = data[19];
            unit = "mm";
        } else if (currentParameter === 'rainfall_yearly') {
            value = data[20];
            unit = "mm";
        } else if (currentParameter === 'rain_rate_current') {
            value = data[21];
            unit = "mm/hr";
        } else if (currentParameter === 'rain_rate_mins') {
            value = data[22];
            unit = "mm/hr";
        } else if (currentParameter === 'solar_radiation') {
            value = data[26];
        } else if (currentParameter === 'uv_index') {
            value = data[27];
        } else if (currentParameter === 'pressure_relative') {
            value = data[29];
            unit = "hPa";
        } else if (currentParameter === 'pressure_trend') {
            value = data[30];
            unit = "hPa";
        } else if (currentParameter === 'rainfall_monsoon') {
            value = data[31];
            unit = "mm";
        } else if (currentParameter === 'max_temperature') {
            value = data[33];
            unit = "°C";
        } else if (currentParameter === 'min_temperature') {
            value = data[34];
            unit = "°C";
        } else if (currentParameter === 'avg_temperature') {
            value = data[35];
            unit = "°C";
        } else if (currentParameter === 'max_DewPoint') {
            value = data[36];
            unit = "°C";
        } else if (currentParameter === 'min_DewPoint') {
            value = data[37];
            unit = "°C";
        } else if (currentParameter === 'avg_DewPoint') {
            value = data[38];
            unit = "°C";
        } else if (currentParameter === 'max_WetBulb') {
            value = data[39];
            unit = "°C";
        } else if (currentParameter === 'min_WetBulb') {
            value = data[40];
            unit = "°C";
        } else if (currentParameter === 'avg_WetBulb') {
            value = data[41];
            unit = "°C";
        } else if (currentParameter === 'max_HeatIndex') {
            value = data[42];
            unit = "°C";
        } else if (currentParameter === 'min_HeatIndex') {
            value = data[43];
            unit = "°C";
        } else if (currentParameter === 'avg_HeatIndex') {
            value = data[44];
            unit = "°C";
        } else if (currentParameter === 'max_humidity') {
            value = data[45];
            unit = "%";
        } else if (currentParameter === 'min_humidity') {
            value = data[46];
            unit = "%";
        } else if (currentParameter === 'avg_humidity') {
            value = data[47];
            unit = "%";
        } else if (currentParameter === 'rain_rate') {
            value = data[49];
            unit = "mm/hr";
        } else if (currentParameter === 'max_PressureRelative') {
            value = data[50];
            unit = "hPa";
        } else if (currentParameter === 'min_PressureRelative') {
            value = data[51];
            unit = "hPa";
        } else if (currentParameter === 'avg_PressureRelative') {
            value = data[52];
            unit = "hPa";
        } else if (currentParameter === 'avg_wind') {
            value = data[53];
            unit = "km/h";
        } else if (currentParameter === 'wind_gust') {
            value = data[55];
            unit = "km/h";
        } else if (currentParameter === 'aqi_current' || currentParameter === 'aqi_one' || currentParameter === 'aqi_three' || currentParameter === 'aqi_24') {
            if (currentParameter === 'aqi_current') {
                value = data[58];
            } else if (currentParameter === 'aqi_one') {
                value = data[59];
            } else if (currentParameter === 'aqi_three') {
                value = data[60];
            } else if (currentParameter === 'aqi_24') {
                value = data[61];
            }
            
            // Determine AQI classification and classification color
            if (value <= 50) {
                classification = "Good";
                classificationColor = "#008000";  // Dark Green
            } else if (value <= 100) {
                classification = "Satisfactory";
                classificationColor = "#00cc00";  // Light Green
            } else if (value <= 150) {
                classification = "Moderate";
                classificationColor = "#ffff00";  // Yellow
            } else if (value <= 200) {
                classification = "Unhealthy for Sensitive Group";
                classificationColor = "#FF561B";  // Orange
            } else if (value <= 300) {
                classification = "Unhealthy";
                classificationColor = "#ff0000";  // Red
            } else if (value <= 400) {
                classification = "Very Unhealthy";
                classificationColor = "#800080";  // Purple
            } else {
                classification = "Hazardous";
                classificationColor = "#660000";  // Dark Red
            }
            unit = "ppm";
        }


        // If value exists, create and display marker with value and unit
        if (value !== null && value !== undefined) {
            textColor = getTextColor(value, currentParameter);
            var displayValue = typeof value === 'number' ? value.toFixed(1) : value;


            if (currentParameter === 'pressure_relative') {
                var pressureTrend = data[30];
                var ringColor;

                if (pressureTrend <= -3.0) {
                    ringColor = 'red';
                } else if (pressureTrend >= 3.0) {
                    ringColor = 'blue';
                } 

                if (ringColor) {
                    var ringHtml = `
                        <div class="ring-container">
                            <div class="central-point" style="background-color: ${ringColor};"></div>
                            <div class="ring-animation" style="border-color: ${ringColor};"></div>
                        </div>
                    `;

                    var ringIcon = L.divIcon({
                        className: 'pressure-ring-icon',
                        html: ringHtml
                    });

                    var marker = L.marker([data[1], data[2]], {
                        icon: ringIcon
                    }).addTo(map);
                } else {
                    // Default marker display with value
                    var temperatureLabel = L.divIcon({
                        className: 'temperature-label',
                        html: createValueLabelHtml(displayValue, textColor)
                    });

                    var marker = L.marker([data[1], data[2]], {
                        icon: temperatureLabel
                    }).addTo(map);
                }
            } else {
                // Default marker display with value
                var temperatureLabel = L.divIcon({
                    className: 'temperature-label',
                    html: createValueLabelHtml(displayValue, textColor)
                });

                var marker = L.marker([data[1], data[2]], {
                    icon: temperatureLabel
                }).addTo(map);
            }

            var windDirection = "";
            var windSpeedValue = value;
            if (currentParameter === 'wind_speed_prevailing') {
                var degrees = data[12];
                windDirection = getWindDirection(degrees);
            } else if (currentParameter === 'avg_wind_speed_10_min') {
                var degrees = data[14];
                windDirection = getWindDirection(degrees);
            } else if (currentParameter === 'wind_gust_10_min') {
                var degrees = data[16];
                windDirection = getWindDirection(degrees);
            } else if (currentParameter === 'avg_wind') {
                var degrees = data[54];
                windDirection = getWindDirection(degrees);
            } else if (currentParameter === 'wind_gust') {
                var degrees = data[56];
                windDirection = getWindDirection(degrees);                
            }

            var compassHtml = `<div class="compass">
                                    <div class="direction">
                                        <p>${windDirection}<span>${windSpeedValue} km/h</span></p>
                                    </div>
                                    <div class="arrow" style="transform: rotate(${getRotationAngle(windDirection)}deg);"></div>
                                </div>`;

            var tooltipHtml = `<div class="station-tooltip">
                                <b>${data[0]}</b>
                                <div class="value">
                                    <b>${value.toFixed(1)}</b>
                                    <span class="unit"> ${unit}</span>
                                </div>
                                ${['aqi_current', 'aqi_one', 'aqi_three', 'aqi_24'].includes(currentParameter) ? `
                                <div>
                                    <span style="color: ${classificationColor}; font-weight: bold; text-shadow: 
                                    -1px -1px 0.2px rgba(0,0,0,0.3),  
                                    1px -1px 0.2px rgba(0,0,0,0.3),
                                    -1px  1px 0.2px rgba(0,0,0,0.3),
                                    1px  1px 0.2px rgba(0,0,0,0.3);">(${classification})</span>
                                </div>` : ''}
                                ${currentParameter === 'pressure_relative' ? getPressureTrendArrow(data[30]) : ''}
                                ${windDirection ? compassHtml : ''}
                                <span class="small-text">Lat: ${data[1].toFixed(2)}, Lon: ${data[2].toFixed(2)}</span>
                                <span class="small-text">Last Sync: ${data[32]}</span>
                            </div>`;

            marker.bindTooltip(tooltipHtml, {
                permanent: false,
                direction: 'top',
                className: 'station-tooltip'
            });


            if (['rainfall_24_hr', 'rainfall_daily', 'rainfall_monthly', 'rainfall_yearly', 'rain_rate_current', 'rain_rate', 'rain_rate_mins', 'rainfall_monsoon'].includes(currentParameter)) {
                if (data[21] > 0) {
                    let showingIcon = true;
                    setInterval(() => {
                        if (showingIcon) {
                            marker.setIcon(L.divIcon({
                                className: 'rain-icon',
                                html: `<img src="rain.png" alt="Rain" style="width:35px;height:35px;">`
                            }));
                        } else {
                            marker.setIcon(L.divIcon({
                                className: 'temperature-label',
                                html: createValueLabelHtml(displayValue, textColor)
                            }));
                        }
                        showingIcon = !showingIcon;
                    }, 5000); // 5-second interval
                }
            }
        }
    });
}


function toggleInfoContainer(show) {
    const infoContainer = document.getElementById('infoContainer');
    if (show) {
        infoContainer.classList.add('fade-in');
        // Remove the class after the animation is complete
        setTimeout(() => {
            infoContainer.classList.remove('fade-in');
        }, 10000); // Match this time to the CSS animation duration
    } else {
        infoContainer.classList.remove('fade-in');
    }
}

// Function to check system time and set default basemap
function setDefaultBaseMap() {
    var now = new Date();
    var hours = now.getHours();
    if (hours >= 6 && hours < 18) {
        lightBaseMap.addTo(map);
        toggleDarkMode(false);
    } else {
        darkBaseMap.addTo(map);
        toggleDarkMode(true);
    }
}

function reloadCurrentScript() {
    // Remove the existing script
    var oldScript = document.querySelector('script[src="Current.js"]');
    if (oldScript) {
        oldScript.parentNode.removeChild(oldScript);
    }

    // Create a new script element
    var newScript = document.createElement('script');
    newScript.src = 'Current.js';

    // Append the new script to the body
    document.body.appendChild(newScript);
}

function switchParameter(parameter) {
    currentParameter = parameter;
    updateMarkers();
    toggleInfoContainer(parameter === 'rainfall_daily');
    reloadCurrentScript();
}

function switchShapefile(shapefile) {
    map.removeLayer(districtLayer);
    map.removeLayer(provincialLayer);
    map.removeLayer(nationalLayer);

    if (shapefile === 'districtboundary') {
        districtLayer.addTo(map);
    } else if (shapefile === 'provincialboundary') {
        provincialLayer.addTo(map);
    } else if (shapefile === 'nationalboundary') {
        nationalLayer.addTo(map);
    }
}

function toggleDarkMode(isDark) {
    document.getElementById('meta').classList.toggle('dark-mode', isDark);
    document.querySelector('.header-container').classList.toggle('dark-mode', isDark);
    document.querySelectorAll('.metax').forEach(element => element.classList.toggle('dark-mode', isDark));
    document.querySelectorAll('.metay').forEach(element => element.classList.toggle('dark-mode', isDark));
}

function createValueLabelHtml(displayValue, textColor) {
    return `<div style="color:${textColor}; font-weight: bold; font-size: ${calculateFontSize(map.getZoom())}px; font-family: Poppins; text-shadow: 
                -1px -1px 0.2px rgba(0,0,0,0.7),  
                1px -1px 0.2px rgba(0,0,0,0.7),
                -1px  1px 0.2px rgba(0,0,0,0.7),
                1px  1px 0.2px rgba(0,0,0,0.7);">
                ${displayValue}
            </div>`;
}

function getRotationAngle(direction) {
    switch (direction) {
        case 'N': return 0;
        case 'NNE': return 22.5;
        case 'NE': return 45;
        case 'ENE': return 67.5;
        case 'E': return 90;
        case 'ESE': return 112.5;
        case 'SE': return 135;
        case 'SSE': return 157.5;
        case 'S': return 180;
        case 'SSW': return 202.5;
        case 'SW': return 225;
        case 'WSW': return 247.5;
        case 'W': return 270;
        case 'WNW': return 292.5;
        case 'NW': return 315;
        case 'NNW': return 337.5;
        default: return 0;
    }
}

function getWindDirection(degrees) {
    if (degrees >= 348.75 || degrees < 11.25) return 'N';
    if (degrees >= 11.25 && degrees < 33.75) return 'NNE';
    if (degrees >= 33.75 && degrees < 56.25) return 'NE';
    if (degrees >= 56.25 && degrees < 78.75) return 'ENE';
    if (degrees >= 78.75 && degrees < 101.25) return 'E';
    if (degrees >= 101.25 && degrees < 123.75) return 'ESE';
    if (degrees >= 123.75 && degrees < 146.25) return 'SE';
    if (degrees >= 146.25 && degrees < 168.75) return 'SSE';
    if (degrees >= 168.75 && degrees < 191.25) return 'S';
    if (degrees >= 191.25 && degrees < 213.75) return 'SSW';
    if (degrees >= 213.75 && degrees < 236.25) return 'SW';
    if (degrees >= 236.25 && degrees < 258.75) return 'WSW';
    if (degrees >= 258.75 && degrees < 281.25) return 'W';
    if (degrees >= 281.25 && degrees < 303.75) return 'WNW';
    if (degrees >= 303.75 && degrees < 326.25) return 'NW';
    if (degrees >= 326.25 && degrees < 348.75) return 'NNW';
}

function getPressureTrendArrow(pressureTrend) {
    if (pressureTrend === null || pressureTrend === undefined) {
        return ''; // No arrow displayed if pressure trend data is not available
    }

    let trendDescription = '';
    let arrowHtml = '';

    if (Math.abs(pressureTrend) <= 0.5) {
        arrowHtml = '<span class="pressure-trend-arrow neutral-arrow">→</span>';
        trendDescription = 'Steady';
    } else if (Math.abs(pressureTrend) > 0.5 && Math.abs(pressureTrend) < 1.5) {
        arrowHtml = pressureTrend > 0 ? '<span class="pressure-trend-arrow rising-arrow">↗</span>' : '<span class="pressure-trend-arrow falling-arrow">↘</span>';
        trendDescription = pressureTrend > 0 ? 'Rising Slowly' : 'Falling Slowly';
    } else if (Math.abs(pressureTrend) >= 1.5 && Math.abs(pressureTrend) < 3.0) {
        arrowHtml = pressureTrend > 0 ? '<span class="pressure-trend-arrow strong-rise-arrow">↑</span>' : '<span class="pressure-trend-arrow strong-fall-arrow">↓</span>';
        trendDescription = pressureTrend > 0 ? 'Rising Rapidly' : 'Falling Rapidly';
    } else {
        arrowHtml = pressureTrend > 0 ? '<span class="pressure-trend-arrow sharp-rise-arrow">⇈</span>' : '<span class="pressure-trend-arrow sharp-fall-arrow">⇊</span>';
        trendDescription = pressureTrend > 0 ? 'Sharp Rise' : 'Sharp Fall';
    }

    // Determine font color based on arrow class
    let fontColorClass = '';
    if (arrowHtml.includes('neutral-arrow')) {
        fontColorClass = 'neutral-arrow';
    } else if (arrowHtml.includes('rising-arrow')) {
        fontColorClass = 'rising-arrow';
    } else if (arrowHtml.includes('falling-arrow')) {
        fontColorClass = 'falling-arrow';
    } else if (arrowHtml.includes('strong-rise-arrow')) {
        fontColorClass = 'strong-rise-arrow';
    } else if (arrowHtml.includes('strong-fall-arrow')) {
        fontColorClass = 'strong-fall-arrow';
    } else if (arrowHtml.includes('sharp-rise-arrow')) {
        fontColorClass = 'sharp-rise-arrow';
    } else if (arrowHtml.includes('sharp-fall-arrow')) {
        fontColorClass = 'sharp-fall-arrow';
    }

    return `<b>${arrowHtml} <span style="color: white; font-size: 12px;">${pressureTrend.toFixed(1)} hPa</span></b><span class="${fontColorClass}" style="font-weight: bold;">${trendDescription}</span>`;
}