




// function loadNews () {
    let news = new XMLHttpRequest();
    news.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
       
            let data = JSON.parse(this.responseText);
            let post = data[0];
            
            // let printCard = document.createElement('div');
            // printCard.className = 'container'; 
            // printCard.innerHTML = "Title: " + post.title;
            // document.body.appendChild(printCard);

            // let printDescription = document.createElement('div');
            // printDescription.className = 'card'; 
            // printDescription.innerHTML = "Description: " + post.description;
            // printCard.appendChild(printDescription);

            // let printContent = document.createElement('div');
            // printContent.className = 'card-body';
            // printContent.innerHTML = "Content: " + post.content;
            // printDescription.appendChild(printContent);

            // let printImage = document.createElement('img');
            // printImage.className = 'card-img-bottom';
            // printImage.src = post.image_url;
            // printContent.appendChild(printImage);

            let printContainer = document.createElement('div');
            printContainer.className = 'container';
            document.body.appendChild(printContainer);

            let printRow= document.createElement('div');
            printRow.className = 'row';
            printContainer.appendChild(printRow);

            let printCard= document.createElement('div');
            printCard.className = 'card';
            printRow.appendChild(printCard);

            let printImageTop = document.createElement('img');
            printImageTop.className = 'card-img-top';
            printImageTop.src = post.image_url;
            printCard.appendChild(printImageTop);

            let printCardBody = document.createElement('div');
            printCard.appendChild(printCardBody);

            let printTitle = document.createElement('h5');
            printTitle.className = 'card-title';
            printTitle.innerHTML = post.title;
            printCard.appendChild(printTitle);

            let printDescription = document.createElement('p');
            printDescription.className = 'card-text';
            printDescription.innerHTML = post.description;
            printCard.appendChild(printDescription);

            let printContent = document.createElement('div');
            printContent.className = 'card-body';
            printContent.innerHTML = post.content;
            printCard.appendChild(printContent);

            let printCategory = document.createElement('button');
            printCategory.className = 'btn btn-primary';
            printCategory.placeholder = post.categories["name"];
            printCategory.innerHTML = post.categories[0].name;
            printCard.appendChild(printCategory);


            


            
    
        }
    };

    news.open("GET", "https://namcoi.com/projects/news-website-laravel/public/api/posts", true);
    news.send();


// }





