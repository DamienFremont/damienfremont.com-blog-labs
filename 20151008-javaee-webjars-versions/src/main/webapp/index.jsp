<!DOCTYPE html>
<head>
  <!-- PUT YOUR STYLE LIBS HERE -->
  <link rel="stylesheet"
  href="webjars/bootstrap/${bootstrap.version}/css/bootstrap.css">
  <style type="text/css">
    h1 { border-bottom: 1px solid #eee; }
  </style>
</head>
<body>

  <!-- DO YOUR STUFF HERE -->
  <div class="container">
    <h1>Getting started</h1>
    <p>Hello! This is ${groupId}:${artifactId}. Here are my
      dependencies.</p>
    <p class="bg-info"    style="padding: 15px;"><a href="webjars/jquery/${jquery.version}/jquery.js">jquery.js:${jquery.version}</a></p>
    <p class="bg-success" style="padding: 15px;"><a href="webjars/bootstrap/${bootstrap.version}/css/bootstrap.css">bootstrap.css:${bootstrap.version}</a></p>
    <p class="bg-warning" style="padding: 15px;"><a href="webjars/bootstrap/${bootstrap.version}/js/bootstrap.js">bootstrap.js:${bootstrap.version}</a></p>
    <h1>NonFiltering:</h1>
    <iframe src="home.html"></iframe>
    <h1>Filtering:</h1>
    <%@include file="home.html"%>
  </div>

  <!-- PUT YOUR JS LIBS HERE -->
  <script src="webjars/jquery/${jquery.version}/jquery.js"></script>
  <script src="webjars/bootstrap/${bootstrap.version}/js/bootstrap.js"></script>
</body>
</html>