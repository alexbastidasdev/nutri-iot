// Crear la gráfica Spline para la Temperatura
const chartTemperature = Highcharts.chart(
    "container-temperature-splineTunel01",
    {
        // Configuración general de la gráfica
        chart: {
            type: "spline", // Tipo de gráfica spline
            animation: Highcharts.svg, // No animación en navegadores antiguos
            marginRight: 10,
            events: {
                // Evento de carga de la gráfica
                load: function () {
                    // Configurar la actualización de la gráfica cada 5 segundos
                    const series = this.series[0]; // Obtener la serie de datos

                    // Configurar el intervalo para la actualización
                    setInterval(function () {
                        // Obtener los datos de temperatura desde get_data.php
                        fetch("get_data.php")
                            .then((response) => response.json())
                            .then((data) => {
                                // Convertir el valor de temperatura a número flotante
                                const temperatura = parseFloat(data.Temperatura);

                                // Agregar el nuevo punto a la gráfica con la hora actual
                                const x = new Date().getTime(); // Obtener la hora actual
                                const y = temperatura;
                                series.addPoint([x, y], true, true); // Agregar el punto
                            })
                            .catch((error) => {
                                console.error("Error fetching data:", error);
                            });
                    }, 5000); // Actualizar cada 5 segundos
                },
            },
        },

        // Configuración de tiempo
        time: {
            useUTC: false, // Usar hora local en lugar de UTC
        },

        // Configuración del título
        title: {
            text: "Temperatura en función del Tiempo",
        },

        // Configuración del eje X
        xAxis: {
            type: "datetime", // Eje de tipo fecha y hora
            tickPixelInterval: 150, // Intervalo entre ticks (marcas)
        },

        // Configuración del eje Y
        yAxis: {
            title: {
                text: "Temperatura (°C)", // Título del eje Y
            },
            plotLines: [
                {
                    value: 0,
                    width: 1,
                    color: "#808080", // Color de las líneas de referencia
                },
            ],
        },

        credits: {
            enabled: false,
        }, // Para ocultar el enlace de Highcharts en la gráfica

        // Configuración de la información en el tooltip
        tooltip: {
            headerFormat: "<b>{series.name}</b><br/>",
            pointFormat: "{point.x:%Y-%m-%d %H:%M:%S}<br/>{point.y:.2f} °C",
        },

        // Configuración de la leyenda
        legend: {
            enabled: false, // Deshabilitar la leyenda
        },

        // Configuración de exportación
        exporting: {
            enabled: true, // Deshabilitar la exportación
        },

        // Configuración de la serie de datos
        series: [
            {
                name: "Temperatura", // Nombre de la serie
                data: (function () {
                    // Generar un conjunto de datos iniciales en un rango de 0 a 100
                    const data = [],
                        time = new Date().getTime();

                    for (let i = -19; i <= 0; i += 1) {
                        data.push({
                            x: time + i * 5000, // Intervalo de 5 segundos
                            y: Math.random() * 100, // Valor aleatorio entre 0 y 100
                        });
                    }
                    return data; // Devolver los datos generados
                })(),
            },
        ],
    }
);

// Crear la gráfica Spline para la Humedad
const chartHumidity = Highcharts.chart('container-humidity-splineTunel01', {
    // Configuración general de la gráfica
    chart: {
        type: 'spline', // Tipo de gráfica spline
        animation: Highcharts.svg, // No animación en navegadores antiguos
        marginRight: 10,
        events: {
            // Evento de carga de la gráfica
            load: function () {
                // Configurar la actualización de la gráfica cada 5 segundos
                const series = this.series[0]; // Obtener la serie de datos

                // Configurar el intervalo para la actualización
                setInterval(function () {
                    // Obtener los datos de humedad desde get_data.php
                    fetch('get_data.php')
                        .then(response => response.json())
                        .then(data => {
                            // Convertir el valor de humedad a número flotante
                            const humedad = parseFloat(data.Humedad);

                            // Agregar el nuevo punto a la gráfica con la hora actual
                            const x = (new Date()).getTime(); // Obtener la hora actual
                            const y = humedad;
                            series.addPoint([x, y], true, true); // Agregar el punto
                        })
                        .catch(error => {
                            console.error('Error fetching data:', error);
                        });
                }, 5000); // Actualizar cada 5 segundos
            }
        }
    },

    // Configuración de tiempo
    time: {
        useUTC: false, // Usar hora local en lugar de UTC
    },

    // Configuración del título
    title: {
        text: "Humedad en función del Tiempo",
    },

    // Configuración del eje X
    xAxis: {
        type: "datetime", // Eje de tipo fecha y hora
        tickPixelInterval: 150, // Intervalo entre ticks (marcas)
    },

    // Configuración del eje Y
    yAxis: {
        title: {
            text: "Humedad (%)", // Título del eje Y
        },
        plotLines: [
            {
                value: 0,
                width: 1,
                color: "#808080", // Color de las líneas de referencia
            },
        ],
    },

    credits: {
        enabled: false,
    }, // Para ocultar el enlace de Highcharts en la gráfica

    // Configuración de la información en el tooltip
    tooltip: {
        headerFormat: "<b>{series.name}</b><br/>",
        pointFormat: "{point.x:%Y-%m-%d %H:%M:%S}<br/>{point.y:.2f} %",
    },

    // Configuración de la leyenda
    legend: {
        enabled: false, // Deshabilitar la leyenda
    },

    // Configuración de exportación
    exporting: {
        enabled: true, // Deshabilitar la exportación
    },

    // Configuración de la serie de datos
    series: [
        {
            name: "Humedad", // Nombre de la serie
            data: (function () {
                // Generar un conjunto de datos iniciales en un rango de 0 a 100
                const data = [],
                    time = new Date().getTime();

                for (let i = -19; i <= 0; i += 1) {
                    data.push({
                        x: time + i * 5000, // Intervalo de 5 segundos
                        y: Math.random() * 100, // Valor aleatorio entre 0 y 100
                    });
                }
                return data; // Devolver los datos generados
            })(),
        },
    ],
});
