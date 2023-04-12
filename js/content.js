setInterval(function() {
    if (ficon.classList.contains('o1')) {
        ficon.innerHTML = 
        `
        <div>
            <i class="fa-brands fa-java"></i>
            <h2>Java</h2>
        </div>
        `;
        sicon.innerHTML = 
        `
        <div>
            <i class="fa-solid fa-code"></i>
            <h2>HTML5</h2>
        </div>
        `;
        thicon.innerHTML = 
        `
        <div>
            <i class="fa-brands fa-css3"></i>
            <h2>CSS</h2>
        </div>
        `;
        licon.innerHTML = 
        `
        <div>
            <i class="fa-brands fa-square-js"></i>
            <h2>JavaScript</h2>
        </div>
        `;
        ficon.classList = 'ficon o4';
        sicon.classList = 'sicon o1';
        thicon.classList = 'thicon o2';
        licon.classList = 'licon o3';

        ficon.style.backgroundImage = 'linear-gradient(45deg, lime, greenyellow)';
        sicon.style.backgroundImage = 'linear-gradient(45deg, aqua, blue)';
        thicon.style.backgroundImage = 'linear-gradient(45deg, lime, greenyellow)';
        licon.style.backgroundImage = 'linear-gradient(45deg, aqua, blue)';
    }
    else if (sicon.classList.contains('o1')) {
        ficon.innerHTML = 
        `
        <div>
            <i class="fa-brands fa-square-js"></i>
            <h2>JavaScript</h2>
        </div>
        `;
        sicon.innerHTML = 
        `
        <div>
            <i class="fa-brands fa-java"></i>
            <h2>Java</h2>
        </div>
        `;
        thicon.innerHTML = 
        `
        <div>
            <i class="fa-solid fa-code"></i>
            <h2>HTML5</h2>
        </div>
        `;
        licon.innerHTML = 
        `
        <div>
            <i class="fa-brands fa-css3"></i>
            <h2>CSS</h2>
        </div>
        `;
        ficon.classList = 'ficon o3';
        sicon.classList = 'sicon o4';
        thicon.classList = 'thicon o1';
        licon.classList = 'licon o2';

        ficon.style.backgroundImage = 'linear-gradient(45deg, aqua, blue)';
        sicon.style.backgroundImage = 'linear-gradient(45deg, lime, greenyellow)';
        thicon.style.backgroundImage = 'linear-gradient(45deg, aqua, blue)';
        licon.style.backgroundImage = 'linear-gradient(45deg, lime, greenyellow)';
    }
    else if (thicon.classList.contains('o1')) {
        ficon.innerHTML = 
        `
        <div>
            <i class="fa-brands fa-css3"></i>
            <h2>CSS</h2>
        </div>
        `;
        sicon.innerHTML = 
        `
        <div>
            <i class="fa-brands fa-square-js"></i>
            <h2>JavaScript</h2>
        </div>
        `;
        thicon.innerHTML = 
        `
        <div>
            <i class="fa-brands fa-java"></i>
            <h2>Java</h2>
        </div>
        `;
        licon.innerHTML = 
        `
        <div>
            <i class="fa-solid fa-code"></i>
            <h2>HTML5</h2>
        </div>
        `;
        ficon.classList = 'ficon o2';
        sicon.classList = 'sicon o3';
        thicon.classList = 'thicon o4';
        licon.classList = 'licon o1';

        ficon.style.backgroundImage = 'linear-gradient(45deg, lime, greenyellow)';
        sicon.style.backgroundImage = 'linear-gradient(45deg, aqua, blue)';
        thicon.style.backgroundImage = 'linear-gradient(45deg, lime, greenyellow)';
        licon.style.backgroundImage = 'linear-gradient(45deg, aqua, blue)';
    }
    else if (licon.classList.contains('o1')) {
        ficon.innerHTML = 
        `
        <div>
            <i class="fa-solid fa-code"></i>
            <h2>HTML5</h2>
        </div>
        `;
        sicon.innerHTML = 
        `
        <div>
            <i class="fa-brands fa-css3"></i>
            <h2>CSS</h2>
        </div>
        `;
        thicon.innerHTML = 
        `
        <div>
            <i class="fa-brands fa-square-js"></i>
            <h2>JavaScript</h2>
        </div>
        `;
        licon.innerHTML = 
        `
        <div>
            <i class="fa-brands fa-java"></i>
            <h2>Java</h2>
        </div>
        `;
        ficon.classList = 'ficon o1';
        sicon.classList = 'sicon o2';
        thicon.classList = 'thicon o3';
        licon.classList = 'licon o4';
        
        ficon.style.backgroundImage = 'linear-gradient(45deg, aqua, blue)';
        sicon.style.backgroundImage = 'linear-gradient(45deg, lime, greenyellow)';
        thicon.style.backgroundImage = 'linear-gradient(45deg, aqua, blue)';
        licon.style.backgroundImage = 'linear-gradient(45deg, lime, greenyellow)';
    }
    else {
        console.log("OK");
    }

}, 1000);
