function displayOutput() {
    var html_div = document.getElementById("html-code").value;
    var css_div = "<style>" + document.getElementById("css-code").value + "</style>";
    var js_div = "<script>" + document.getElementById("js-code").value + "</scri" + "pt>";

    var frame =
      document.getElementById("output_area").contentWindow.document;

    frame.open();
    frame.write(html_div+css_div+js_div);
    frame.close();
  }