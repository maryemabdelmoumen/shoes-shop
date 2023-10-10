//Array of our products
var products =
    [{
        "id": 1,
        "name": "Air jordan 1 low",
        "price": 90,
        "size": ["36", "37", "38", "39"],
        "image": "air.jfif",
    },
    {
        "id": 2,
        "name": "Air Jordan 1 Low",
        "price": 129,
        "size": ["37", "38", "39", "40"],
        "image": "airblack.jfif",
    },
    {
        "id": 3,
        "name": "Air Jordan 1 High MM ",
        "price": 159,
        "size": ["38", "39", "40", "41"],
        "image": "nikewhite.jfif",
    },
    {
        "id": 4,
        "name": "Air Jordan 7 Retro BBS ",
        "price": 199,
        "size": ["38", "39", "40", "41"],
        "image": "nikerose.jfif",
    },
    {
        "id":5,
        "name":"air force 1",
        "price":120,
        "size":["39","40","41","42"    ],
        "image":"airforce.jfif"
    }, 
    {
        "id":6,
        "name":"Nike Air Dunk Jumbo ",
        "price":129,
        "size":["39","38","40","41"],
        "image":"nikedunk.jfif"
    },
    {
        "id":7,
        "name":"Nike Blazer Low '77 Jumbo",
        "price":99,
        "size":["38","39","40","41"],
        "image":"blazer.jfif"

    }, 
    { 
        "id":8,
        "name":"Paris Saint-Germain Jumpman MVP ",
        "price":167,
        "size":["36","37","38","39"],
        "image":"jumpman.jfif"

    }, 
    { 
        "id":9,
        "name":"Nike Dunk Low Unlocked By You ",
        "price":159,
        "size":["38","39","40","41"],
        "image":"byyou.jfif"

    }, 
    {
        "id":10,
        "name":"Air Jordan 1 Mid SE ",
        "price":114,
        "size":["38","39","40","41"],
        "image":"nikemaron.jfif"
    }, 
    



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
const image = document.getElementById('toggleImage');
let isImage1 = true;

image.addEventListener('click', function () {
    if (isImage1) {
        image.src = 'nikerose2.jfif';
    } else {
        image.src = 'nikerose.jefif';
    }
    isImage1 = !isImage1;
});

