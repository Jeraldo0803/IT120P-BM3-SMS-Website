<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Index Home Page</title>

    <link rel="stylesheet" href="../src/index.css">
</head>

<body>
    <!-- Better ata if nav bar na lang instead of a header? -->
    <!-- <header>
        <div class="header__title">
            <h2>IT120P-BM3-Taransfer</h2>
        </div>
        <div class="headers">
            <div class="header__tabs">
                <a href="#">Home Page</a>
            </div>
            <br>
            <div class="header__tabs">
                <a href="#">Services</a>
            </div>
            <br>
            <div class="header__tabs">
                <a href="#">About</a>
            </div>
        </div>
    </header> -->

    <div class="header">
        <p>What Taransfer is all about?</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis error eos, distinctio nihil in officia nesciunt, necessitatibus et id blanditiis culpa quis fugit fugiat velit incidunt! Cumque fugiat maiores obcaecati!</p>
    </div>

    <!-- Nav Bar pero hindi ko pa completely mapagana -->
    <!-- <ul>
        <li><a class="active" href="#home">Home</a></li>
        <li><a href="#">About US</a></li>
        <li><a href="#">Services</a></li>
    </ul> -->
    

    <!-- Creation of the Card -->
    <div class="card-container">
        <div>
            <h4>Index Home Page</h4>
            <br>
            <form action="/upload" method="post" enctype="multipart/form-data">
                <input type="file" name="fileToUpload" id="fileToUpload">
                <input type="submit" value="Upload File">
            </form>
        </div>
      <br>
    </div>

<!-- Start of the Footer -->
    <footer class="footer">
        <div class="container">
            <div class="row">
                <div class="footer-col">
                    <h3> Example Footer</h3>
                    <ul>
                        <li><a href="#">Home Page</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Services</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>

</body>



</html>