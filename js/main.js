
  // Load the Visualization API and the corechart package.
  google.charts.load('current', {'packages':['corechart']});

  // Set a callback to run when the Google Visualization API is loaded.
  google.charts.setOnLoadCallback(drawChart);
  function drawChart() {

    // Create the data table.
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Topping');
    data.addColumn('number', 'Slices');
    data.addRows([
      ['Tienes la mirada mas linda que he visto, me derrites', 1],
      ['Irradias una energia hermosa', 1],
      ['Me encanta escucharte reir', 1],
      ['Contigo me siento en confianza', 1],
      ['Hermosa, es poco para describirte', 1],
      ['Amo tu forma de ser y pensar ', 1],
      ['Nunca habia conocido a alguien como tu', 1]
    ]);

    // Set chart options
    var options = {'title':'Razones por las que me gustas mucho',
                   'width':600,
                   'height':600};

    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.PieChart(document.getElementById('grafica'));
    chart.draw(data, options);
  }
