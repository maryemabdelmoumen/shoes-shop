//Array of our products
var products =
    [{
        "id": 1,
        "name": "GSW Jersey",
        "price": 90,
        "size": ["s", "m", "l", "xl"],
        "image": "jersey1.jfif",
    },
    {
        "id": 2,
        "name": "Pheonix Jersey",
        "price": 93,
        "size": ["s", "m", "l", "xl"],
        "image": "jersey2.jfif",
    },
    {
        "id": 3,
        "name": "MIAMI HEAT Jersey",
        "price": 95,
        "size": ["s", "m", "l", "xl"],
        "image": "jersey3.jfif",
    },
    {
        "id": 4,
        "name": "ATLANTA HAWKS Shorts",
        "price": 70,
        "size": ["s", "m", "l", "xl"],
        "image": "shorts.jfif",
    }
    ]
    ;

function displayProducts(products) {
    //Create product-container div  and store it in variable
    var productContainer = $('#product-container');
    //Loop through Each product from array products
    products.forEach(product => {
        //Map through products sizes and create sizes html spans 
        var sizes = product.size.map(size => `<span class="size">${size}</span>`).join('');
        //Create product div
        var productDiv = $('<div/>', {
            class: 'product',
            html: `
          <img src="${product.image}" alt="${product.name}">
          <h3>${product.name}</h3>
          <p>Price: $${product.price}</p>
          <p class="sizes">Sizes: ${sizes}</p>
        `
        });
        //Append each product div to the main product-container
        productContainer.append(productDiv);
    });
}

// Function to filter products based on search text
function filterProducts() {
    //Store input text in variable searchText and turning it lowercase for better search
    var searchText = $("#searchInput").val().toLowerCase();
    //For each product div 
    $(".product").each(function () {
        //Store search text in variable productText and turning it lowercase for better search
        var productText = $(this).text().toLowerCase();
        //If search text includes input text
        if (productText.includes(searchText)) {
            //Show
            $(this).show();
        } else {
            //Hide
            $(this).hide();
        }
    });
}

// Function to show zoomed image 
function showZoomedImage() {
    $(".product img").click(function () {
        var imageSrc = $(this).attr("src");
        $(".zoomed-image").attr("src", imageSrc);
        $(".zoom-container").fadeIn();
    });
}

// Function to close zoomed image on X button click
function closeZoomedImage() {
    $(".close-zoom").click(function () {
        $(".zoom-container").fadeOut();
    });
}



$(document).ready(function () {
    // Function to display products


    // Call functions one by one 
    displayProducts(products);
    //Specefic call on search Button click
    $("#searchButton").click(function () {
        filterProducts();
    });

    showZoomedImage();
    closeZoomedImage();
});