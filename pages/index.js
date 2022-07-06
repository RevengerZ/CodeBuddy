<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale-1.0">
<title>Contact Form To Email Using JavaScript</title>
<link rel="stylesheet" href="websitecontact.css">
</head>

 <body>
    <div class="container">
<form onsubmit="sendEmail(); reset(); return false">
    <h3>GET IN TOUCH</h3>
    <input type="text" id="name" placeholder="Your Name" required>
    <input type="email" id="email" placeholder="Your email ID" required>
    <input type="text" id="phone" placeholder="Your phone no." required>
    <textarea id="message" rows="4" placeholder="HOW CAN WE HELP YOU"></textarea>
    <button type="submit">SEND</button>
</form>
</div>

</body>
</html>
