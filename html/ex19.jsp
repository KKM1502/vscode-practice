<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>서버측 수신 페이지(택배 받는 사람)</h1>
    <%
        String data = request.getParameter("data");
    
    %>
    <p>데이터: <%=data%></p>
</body>
</html>