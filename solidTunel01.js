// Definimos las opciones base para las gráficas de Solid Gauge
const gaugeOptions = {
    chart: {
        type: 'solidgauge' // Tipo de gráfica: Solid Gauge
    },

    title: null, // Sin título

    pane: {
        center: ['50%', '85%'], // Centro de la gráfica
        size: '140%', // Tamaño del panel
        startAngle: -90, // Ángulo de inicio
        endAngle: 90, // Ángulo de fin
        background: {
            backgroundColor:
            Highcharts.defaultOptions.legend.backgroundColor || '#EEE', // Color de fondo del panel
            innerRadius: '60%', // Radio interno del panel
            outerRadius: '100%', // Radio externo del panel
            shape: 'arc' // Forma del panel (arco)
        }
    },

    exporting: {
        enabled: false // Deshabilitar la opción de exportar la gráfica
    },

    tooltip: {
        enabled: false // Deshabilitar el tooltip
    },

    // Configuración del eje de valores
    yAxis: {
        stops: [
            [0.1, '#55BF3B'], // Rango de color verde
            [0.5, '#DDDF0D'], // Rango de color amarillo
            [0.9, '#DF5353'] // Rango de color rojo
        ],
        lineWidth: 0, // Grosor de la línea del eje
        tickWidth: 0, // Grosor de las marcas del eje
        minorTickInterval: null, // Intervalo de las marcas menores
        tickAmount: 2, // Número de marcas del eje
        title: {
            y: -70 // Posición del título del eje
        },
        labels: {
            y: 16 // Posición de las etiquetas del eje
        }
    },

    plotOptions: {
        solidgauge: {
            dataLabels: {
                y: 5, // Posición de las etiquetas de datos
                borderWidth: 0, // Grosor del borde de las etiquetas
                useHTML: true // Usar HTML para las etiquetas
            }
        }
    }
};


// Crear la gráfica de temperatura
const chartTemperatureSolid = Highcharts.chart('container-temperature-solidTunel01', Highcharts.merge(gaugeOptions, {
    yAxis: {
        min: 0,
        max: 100, // Ajustar el valor máximo según el rango de temperatura
        title: {
            text: 'TEMPERATURA'
        }
    },
    credits: {
        enabled: false
    }, // Para ocultar el enlace de Highcharts en la gráfica

    series: [{
        name: 'Temperature', // Nombre de la serie
        data: [0], // Datos iniciales, en este caso un solo valor de 0
        dataLabels: {
            format:
                '<div style="text-align:center">' +
                '<span style="font-size:25px">{y}</span><br/>' +
                '<span style="font-size:12px;opacity:0.4">°C</span>' +
                '</div>' // Formato para las etiquetas de datos (data labels)
        },
        tooltip: {
            valueSuffix: ' °C' // Sufijo para el valor en el tooltip
        }
    }]
        /* <div style="text-align:center">: Esto crea un elemento <div> con estilo para centrar el 
        contenido que se encuentra dentro. El texto de las etiquetas se centrará en la parte superior 
        de la gráfica*/
        /* <span style="font-size:25px">{y}</span>: Aquí se usa un elemento <span> para aplicar un estilo 
        de tamaño de fuente de 25px al valor {y}. {y} es un marcador especial que será reemplazado por el 
        valor real de la serie. */
        /* <br/>: Esto añade un salto de línea, haciendo que el valor y la unidad estén en líneas separadas.*/
        /* <span style="font-size:12px;opacity:0.4">°C</span>: Similar al anterior <span>, aquí se aplica un 
        estilo de tamaño de fuente más pequeño (12px) y una opacidad reducida (0.4) al símbolo de grados 
        Celsius (°C). */  

}));

// Crear la gráfica de humedad
const chartHumiditySolid = Highcharts.chart('container-humidity-solidTunel01', Highcharts.merge(gaugeOptions, {
    yAxis: {
        min: 0,
        max: 100, // Ajustar el valor máximo según el rango de humedad
        title: {
            text: 'HUMEDAD'
        }
    },
    credits: {
        enabled: false
    }, // Para ocultar el enlace de Highcharts en la gráfica
    series: [{
        name: 'Humidity',
        data: [0], // Valor inicial
        dataLabels: {
            format:
                '<div style="text-align:center">' +
                '<span style="font-size:25px">{y}</span><br/>' +
                '<span style="font-size:12px;opacity:0.4">%</span>' +
                '</div>'
        },
        tooltip: {
            valueSuffix: ' %'
        }
    }]

}));

// Función para actualizar los datos de temperatura y humedad
function updateData() {
    // Obtener los datos de temperatura y humedad desde get_data.php
    fetch('get_data.php')
        .then(response => response.json())
        .then(data => {
            const temperature = parseFloat(data.Temperatura);
            const humidity = parseFloat(data.Humedad);

            // Actualizar las gráficas con los nuevos datos
            if (!isNaN(temperature)) {
                chartTemperatureSolid.series[0].points[0].update(temperature);
            }

            if (!isNaN(humidity)) {
                chartHumiditySolid.series[0].points[0].update(humidity);
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

// Actualizar datos al cargar la página
updateData();

// Actualizar datos cada 5 segundos
setInterval(updateData, 5000);
