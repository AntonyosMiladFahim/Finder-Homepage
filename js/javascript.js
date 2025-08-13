        var  menubar= document.getElementsByClassName("menu-icon")[0];
        var menutox =document.getElementsByClassName("fa-solid fa-bars")[0];
        var navbar = document.getElementsByClassName("togglednav")[0];
        // Toggle on click
        navbar.style.display="none";
           
        function toggle(){
             
            if(window.innerWidth<=992){
                navbar.style.display="none";
                menutox.className="fa-solid fa-bars";
                menubar.addEventListener("click", function () {
                if (navbar.style.display === "none") {
                    navbar.style.display = "flex";
                    menutox.className="fa-solid fa-x";

                } else {
                    navbar.style.display = "none";
                    menutox.className="fa-solid fa-bars";
                    document.getElementById("navfilter").style.disblay="none";

                }
                });
            }else{
                navbar.style.display="flex";

                menutox.className="fa-solid fa-bars";
                 menubar.addEventListener("click", function () {
                if (navbar.style.display === "none") {
                    navbar.style.display = "flex";
                    menutox.className="fa-solid fa-x";
                    
                } else {
                    navbar.style.display = "none";
                    menutox.className="fa-solid fa-bars";
                }
                });
            }
             
        }
        document.addEventListener("keyup", function (event) {
        if (event.key === "Escape" && navbar.style.display !== "none" && window.innerWidth<=992) {
            navbar.style.display = "none";
            menutox.className = "fa-solid fa-bars";
        }
        });
        toggle();

        window.addEventListener("resize", function(){
             if (window.innerWidth <= 991) {
                navbar.style.display = "none";
                menutox.className = "fa-solid fa-bars";
            } else {
                navbar.style.display = "flex";
                menutox.className = "fa-solid fa-bars";
            }
        });




        var toggleEl = document.getElementsByClassName("modes")[0];
        var contentEl = document.getElementsByClassName("toggledicon")[0];

        var light =document.getElementsByClassName("light")[0];
        var dark =document.getElementsByClassName("dark")[0];
        var auto =document.getElementsByClassName("auto")[0];
        var check =document.createElement("i");
        var toggledicon=document.querySelector(".toggledicon");         
        check.className="fa-solid fa-check";
        check.style.paddingLeft="30px";

        toggledicon.classList.add("fa-regular","fa-sun");
        
        // Toggle on click
        toggleEl.style.display="none";
        contentEl.addEventListener("click", function () {
            if (toggleEl.style.display == "none") {
                toggleEl.style.display = "flex";
            } else {
                toggleEl.style.display = "none";
            }
        });

        light.appendChild(check);
        document.querySelector("[href*='style']").setAttribute("href","css/stylelight.css");
        var imgs = document.querySelectorAll(".trans");
        for(var img of imgs){
            img.src = img.src.replace('-dark.jpg', '-light.jpg');
        }





        light.addEventListener("click",function(){
            light.appendChild(check);
            document.querySelector("[href*='style']").setAttribute("href","css/stylelight.css");
            var imgs = document.querySelectorAll(".trans");
            for(var img of imgs){
                img.src = img.src.replace('-dark.jpg', '-light.jpg');
            }
            toggledicon.className = "toggledicon";

            toggledicon.classList.add("fa-regular","fa-sun");
            toggleEl.style.display = "none";

        });

        dark.addEventListener("click",function(){
            dark.appendChild(check);
            document.querySelector("[href*='style']").setAttribute("href","css/styledark.css");
            var imgs = document.querySelectorAll(".trans");
            for(var img of imgs){
                img.src = img.src.replace('-light.jpg', '-dark.jpg');
            }
            toggledicon.className = "toggledicon";

            toggledicon.classList.add("fa-solid","fa-moon");
            toggleEl.style.display = "none";

        });
        auto.addEventListener("click",function(){
            auto.appendChild(check);
            document.querySelector("[href*='style']").setAttribute("href","css/styledark.css");
            var imgs = document.querySelectorAll(".trans");
            for(var img of imgs){
                img.src = img.src.replace('-light.jpg', '-dark.jpg');
            }
            toggledicon.className = "toggledicon";

            toggledicon.classList.add("fa-solid", "fa-circle-half-stroke");
            toggleEl.style.display = "none";

        });
            


        var customize= document.getElementsByClassName("customize")[0];
        var menuTox =document.getElementsByClassName("xicon")[0];
        var menucust = document.getElementsByClassName("hidden")[0];
        // Toggle on click
        menucust.style.display="none";
           
        function toggle2(){
             
    
                menucust.style.display="none";
                customize.addEventListener("click", function () {
                if (menucust.style.display === "none") {
                    menucust.style.display = "flex";

                }
                });
                menuTox.addEventListener("click", function () {
                if (menucust.style.display !== "none") {
                     menucust.style.display = "none";

                }
                });
            }
        document.addEventListener("keyup", function (event) {
        if (event.key === "Escape" && menucust.style.display !== "none") {
            menucust.style.display = "none";
            menutox.className = "fa-solid fa-bars";
        }
        });
        toggle2();

      

            