console.log("hey");
$(document).ready(function () {
    $("#clear").hide();
    
        
        $("#linkedin").mouseover(function() {
            $("#linkedin img").attr("src", "images/linkedin-transition.png");
        }).mouseout(function() {
            $("#linkedin img").attr("src", "images/linkedin.png");
        });
    
        $("#gmail").mouseover(function() {
            $("#gmail img").attr("src", "images/gmail-transition.png");
        }).mouseout(function() {
            $("#gmail img").attr("src", "images/gmail.png");
        });

        $("#github").mouseover(function() {
            $("#github img").attr("src", "images/github-transition.png");
        }).mouseout(function() {
            $("#github img").attr("src", "images/github.png");
        });

        $("#telegram").mouseover(function() {
            $("#telegram img").attr("src", "images/telegram-transition.png");
        }).mouseout(function() {
            $("#telegram img").attr("src", "images/telegram.png");
        });



        $("#languages").click(function(){
            $("#analytics, #tools").hide();
            // $("#clear").show();
            $('#skills').css({
                "justify-content" : "left"
            })
            
            $('#skill-card').animate({right:"20px"}, 600, 
            function(){
                $("#clear").show();
            });
            $('#skill-card').append(`
            <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>Java</li>
            <li>Python</li>
            <li>SQL</li>
            
            </ul>
            `)
            
        })
        $("#clear").click(function(){
            $("#analytics, #tools").show();
            $("#clear").show();
            $('#skills').css({
                "justify-content" : "center"
            })
            $('#skill-card').animate({right:"-500px"})
            $('#skill-card').empty();
        })


        $("#analytics").click(function(){
            $("#languages, #tools").hide();
            // $("#clear").show();
            $('#skills').css({
                "justify-content" : "left"
            })
            $('#skill-card').animate({right:"20px"}, 600, 
            function(){
                $("#clear").show();
            });
            $('#skill-card').append(`
            <ul>
            <li>Microsoft Excel</li>
            <li>Pandas</li>
            <li>Seaborn</li>
            <li>Matplotlib</li>
            <li>Tableau</li>
            </ul>
            `)
        })
        $("#clear").click(function(){
            $("#languages, #tools").show();
            $("#clear").hide();
            $('#skills').css({
                "justify-content" : "center"
            })
            $('#skill-card').animate({right:"-500px"})
            $('#skill-card').empty();
        })


        $("#tools").click(function(){
            $("#languages, #analytics").hide();
            // $("#clear").show();
            $('#skills').css({
                "justify-content" : "left"
            })
            $('#skill-card').animate({right:"20px"}, 600, 
            function(){
                $("#clear").show();
            });
            $('#skill-card').append(`
            <ul>
            <li>Figma</li>
            <li>VS Code</li>
            <li>MySQL</li>
            <li>GitHub</li>
            <li>jQuery</li>
            </ul>
            `)
        })
        
        $("#clear").click(function(){
            $("#languages, #analytics").show();
            $("#clear").hide();
            $('#skills').css({
                "justify-content" : "center"
            })
            $('#skill-card').animate({right:"-500px"})
        })

        


    // Changing content on Right Panel
    $(".menu-item").click(function () {
        console.log("hey");
    });

    $(".menu-item").click(function () {
        $("#heading").empty();
        $("#content").empty();

        var menuItemId = $(this).attr("id");
        if (menuItemId === "home") {
            $("#home").addClass("color-orange");
            $("#about, #project, #contact").removeClass("color-orange");
            $("#heading").append("<h2>Skilled in...</h2>");
            $("#heading > h2").addClass("fnt-karma color-orange typewriter");
            $("#content").append(`
            <div id="skills" class="color-black">
                <div id="languages" class="skill-item">
                    Languages
                </div>
                <div id="analytics" class="skill-item">
                    Data Analytics
                </div>
                <div id="tools" class="skill-item">
                    Tools
                </div>
                <div id="skill-card" class="fnt-inter color-black">
                    
                </div>
                <div id="clear" class="color-white">
                    X
                </div>
            </div>
            <div id="illustration">
                <img src="images/illus/working.png" alt="">
            </div>
        </div>`);
        $("#clear").hide();
        $("#s-html").mouseover(function(){
            $(".skill").attr("id", "m-html");
        })

        $("#languages").click(function(){
            $("#analytics, #tools").hide();
            // $("#clear").show();
            $('#skills').css({
                "justify-content" : "left"
            })
            
            $('#skill-card').animate({right:"20px"}, 600, 
            function(){
                $("#clear").show();
            });
            $('#skill-card').append(`
            <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>Java</li>
            <li>Python</li>
            <li>SQL</li>
            
            </ul>
            `)
            
        })
        $("#clear").click(function(){
            $("#analytics, #tools").show();
            $("#clear").show();
            $('#skills').css({
                "justify-content" : "center"
            })
            $('#skill-card').animate({right:"-500px"})
            $('#skill-card').empty();
        })


        $("#analytics").click(function(){
            $("#languages, #tools").hide();
            // $("#clear").show();
            $('#skills').css({
                "justify-content" : "left"
            })
            $('#skill-card').animate({right:"20px"}, 600, 
            function(){
                $("#clear").show();
            });
            $('#skill-card').append(`
            <ul>
            <li>Microsoft Excel</li>
            <li>Pandas</li>
            <li>Seaborn</li>
            <li>Matplotlib</li>
            <li>Tableau</li>
            </ul>
            `)
        })
        $("#clear").click(function(){
            $("#languages, #tools").show();
            $("#clear").show();
            $('#skills').css({
                "justify-content" : "center"
            })
            $('#skill-card').animate({right:"-500px"})
            $('#skill-card').empty();
        })


        $("#tools").click(function(){
            $("#languages, #analytics").hide();
            // $("#clear").show();
            $('#skills').css({
                "justify-content" : "left"
            })
            $('#skill-card').animate({right:"20px"}, 600, 
            function(){
                $("#clear").show();
            });
            $('#skill-card').append(`
            <ul>
            <li>Figma</li>
            <li>VS Code</li>
            <li>MySQL</li>
            <li>GitHub</li>
            <li>jQuery</li>
            </ul>
            `)
        })
        
        $("#clear").click(function(){
            $("#languages, #analytics").show();
            $("#clear").hide();
            $('#skills').css({
                "justify-content" : "center"
            })
            $('#skill-card').animate({right:"-500px"})
        })

            
        }




        else if (menuItemId === "about") {
            $("#about").addClass("color-orange");
            $("#home, #project, #contact").removeClass("color-orange");
            $("#heading").append("<h2>About Me</h2>");
            $("#content").append(`
            
            <div class="timeline">
                <div class="container left">
                    <div class="content">
                        <h4 class="fnt-karma color-sage margin-0">2024</h4>
                        <p class="fnt-inter margin-0 fnt-12">B.Tech, CSE (with specialization in Cybersecurity &
                            Digital Forensics) - VIT, Bhopal</p>
                    </div>
                </div>
                <div class="container right">
                    <div class="content">
                        <h4 class="fnt-karma color-sage margin-0">2020</h4>
                        <p class="fnt-inter margin-0 fnt-12">AISSCE - Delhi Public School, Ranchi</p>
                    </div>
                </div>
                <div class="container left">
                    <div class="content">
                        <h4 class="fnt-karma color-sage margin-0">2018</h4>
                        <p class="fnt-inter margin-0 fnt-12">AISCE - Kairali School, Ranchi</p>
                    </div>
                </div>
            </div>
            <p class="about-me-content fnt-14">
            Hello there! I'm Aakanksha Priya, a dedicated B.Tech student with a passion for transforming ideas into captivating digital experiences. 
            
            </p>
            
            <p class="about-me-content fnt-14">
            During my college years, I delved into a variety of domains, cultivating a diverse skill set. Enthusiastic about cybersecurity and front-end development, I have a keen eye for detail and a passion for learning. Beyond coding, I immerse myself in the world of analytics, exploring data insights and uncovering patterns that drive informed decision-making.
            </p>
            <p class="about-me-content fnt-14">
            As a writer, I find joy in expressing thoughts and ideas through words. Whether it's code or prose, I thrive in the creative process. When I'm not at my desk, you'll likely find me sketching, engrossed in a good book, or exploring new music.
            </p>
            <p class="about-me-content fnt-14">
            Let's connect and explore the endless possibilities at the intersection of technology, creativity, and knowledge!
            </p>
            `);
            $("#heading > h2").addClass("fnt-karma color-orange")

            
        }





        else if (menuItemId === "project") {
            $("#project").addClass("color-orange");
            $("#home, #about, #contact").removeClass("color-orange");
            $("#heading").append("<h2>Projects</h2>");
            $("#heading > h2").addClass("fnt-karma color-orange")
            $("#content").append(
                `
                <p>Here are some of the projects I have worked on during my academic journey.<p/>
                <div class="row">
                <div class="card">
                    <a
                        href="https://github.com/an0nym0usraven/Secure-Transaction-on-Ecommerce-website-using-behavioural-techniques">
                        <img src="images/projects/fds.png" alt="snapshot from project 1">
                        <div class="card-name">
                            <h4 class="project-name">Secure Transaction on Ecommerce Websites</h4>
                        </div>
                        <div class="overlay color-white">
                            <p class="text">
                                The method determines whether a transaction is genuine or invalid by calculating the departure from typical user behavior. 
                            </p>
                            <h5 class="color-orange">Tech stack</h5>
                            <p class="text">HTML, CSS, TypeScript, ReactJS</p>
                        </div>
                    </a>
                </div>

                <div class="card">
                    <a href="https://github.com/an0nym0usraven/Anemia-Detection">
                        <img src="images/projects/anemia.png" alt="snapshot from project 2">
                        <div class="card-name">
                            <h4 class="project-name">Anemia Detection</h4>
                        </div>
                        <div class="overlay color-white">
                            <p class="text">
                            The goal of the project is to predict whether an individual has anemia or not based on parameters from CBC report. 
                            </p>
                            <h5 class="color-orange">Tech stack</h5>
                            <p class="text">Python, HTML, CSS, Flask, Pandas</p>
                        </div>
                    </a>
                </div>
            </div>

            <div class="row">
                <div class="card">
                    <a href="https://github.com/an0nym0usraven/iRevolution">
                        <img src="images/projects/irevolution.png" alt="snapshot from project 3">
                        <div class="card-name">
                            <h4 class="project-name">iRevolution</h4>
                        </div>
                        <div class="overlay color-white">
                            <p class="text">
                            The project aims to analyze the impact of Apple's iPhone in the Indian smartphone market. The project provides insights into market dynamics, pricing strategies, and consumer preferences, which can be valuable for market research.
                            </p>
                            <h5 class="color-orange">Tech stack</h5>
                            <p class="text">Tableau, HTML, CSS, Flask</p>
                        </div>
                    </a>
                </div>

                <div class="card">
                    <a href="https://www.kaggle.com/code/aakanksha0806/eda-using-netflix-imdb-scores/edit/run/153871038">
                        <img src="images/projects/netflix.png" alt="snapshot from project 4">
                        <div class="card-name">
                            <h4 class="project-name">EDA : Netflix IMDb Data</h4>
                        </div>
                        <div class="overlay color-white">
                            <p class="text">
                                This exploratory data analysis (EDA) project delves into Netflix IMDb dataset to gain valuable insights about the distribution, trends, and relationships of various attributes.
                            </p>
                            <h5 class="color-orange">Tech stack</h5>
                            <p class="text">Python, Pandas, Seaborn</p>
                        </div>
                    </a>
                </div>
            </div>
            <div class="row">
                <div class="card">
                    <a
                        >
                        <img src="images/projects/cerebremy.png" alt="snapshot from project 5">
                        <div class="card-name">
                            <h4 class="project-name">Cerebremy : A Mental Health App</h4>
                        </div>
                        <div class="overlay color-white">
                            <p class="text">
                            The primary goal of this project is to provide a comprehensive and user-friendly platform
                            for tracking and improving well-being.
                            </p>
                            <h5 class="color-orange">Tech stack</h5>
                            <p class="text">Flutter, Dart, Firebase, Figma, Python</p>
                        </div>
                    </a>
                </div>
            </div>

            `
            );

            // Applying styles to #content
            $("#content").css({
                "display": "flex",
                "flex-direction": "column"
            });

            // Applying styles to .row
            $(".row").css({
                "display": "flex",
                "flex-direction": "row",
                "justify-content": "center",
                "margin-top": "20px"
            });

            // Applying styles to .card
            $(".card").css({
                "align-items": "center",
                "box-shadow": "0 4px 8px 0 rgba(0,0,0,0.2)",
                "transition": "0.3s",
                "width": "40%",
                "margin": "5px 20px",
                "height": "250px",
                "border-radius": "3%"
            });

            // Applying styles to .card img
            $(".card img").css({
                "height": "200px",
                "width": "100%",
                "object-fit": "cover",
                "border-radius": "3% 3% 0 0"
            });

            // Applying styles to .card-name h4
            $(".card-name h4").css({
                "margin-top": "10px"
            });

            // Applying styles to .card:hover
            $(".card").hover(function () {
                $(this).css({
                    "box-shadow": "0 8px 16px 0 rgba(0, 0, 0, 0.2)",
                    "transform": "scale(1.02)"
                });
            }, function () {
                $(this).css({
                    "box-shadow": "0 4px 8px 0 rgba(0,0,0,0.2)",
                    "transform": "scale(1)"
                });
            });

            // Applying styles to .card a
            $(".card a").css({
                "text-decoration": "none",
                "color": "#092635"
            });
            
            // Applying styles to .overlay
            $(".overlay").css({
                "position": "absolute",
                "top": "0",
                "bottom": "-50px",
                "left": "0",
                "right": "0",
                "background-color": "rgb(23, 22, 22)",
                "overflow": "hidden",
                "height": "80%",
                "width": "100%",
                "opacity": "0",
                "transition": ".5s ease",
                "border-radius": "3%",
                "display": "flex",
                "flex-direction": "column",
                "justify-content": "center",
                "align-items": "center",
                "box-shadow": "0 4px 8px 0 rgba(0,0,0,0.2)"
            });

            // Applying styles to .overlay p, .overlay h5
            $(".overlay p, .overlay h5").css({
                "width": "80%"
            });

            // Applying styles to .card:hover .overlay
            $(".overlay").hover(function () {
                $(this).css({
                    "opacity": "0.9",
                    "cursor": "pointer"
                });
            }, function () {
                $(this).css({
                    "opacity": "0"
                });
            });

            // Applying styles to h5
            $("h5").css({
                "font-size": "1.1em",
                "margin-top": "30px"
            });

            // Applying styles to .text
            $(".text").css({
                "color": "#EEEEEE",
                "font-size": "0.875em",
                // "margin":"0"
            });

            // Applying styles to card > a
            $(".card > a").css({
                "text-decoration": "none",
                "color": "#092635"
            });

            $('p').css({
                "margin":"0"
            })

        }
        else if (menuItemId === "contact") {
            $("#contact").addClass("color-orange");
            $("#home, #about, #project").removeClass("color-orange");
            $("#heading").append("<h2>Contact</h2>");
            $("#heading > h2").addClass("fnt-karma color-orange")
            $("#content").append("<p>You can reach me at <a href='mailto:aakanksha.priya2020@vitbhopal.ac.in'>email</a>.</p><p>You can reach me on <a href='https://t.me/sparkling_cyanidee' target='_blank'>telegram</a>.</p>");
        }
    })
});

