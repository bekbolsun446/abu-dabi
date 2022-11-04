const container = document.querySelector(".container");
const style = window.getComputedStyle(container);
let numOfMargin = parseFloat(style.marginLeft.slice(0, style.marginLeft.length - 2))

const travel_content = document.querySelector(".travel_content");

if ($(window).width() < 768) {
    travel_content.style.paddingLeft = `${numOfMargin + 12}px`;
    travel_content.style.paddingRight = `${numOfMargin + 12}px`;
}

//===================ABOUT========================

const about_content = document.querySelector(".about_content");
const about_img = document.querySelector(".about-img");

about_content.style.paddingLeft = `${numOfMargin + 12}px`;
about_img.style.marginRight = `${numOfMargin + 12}px`;


if ($(window).width() < 992) {
    about_img.style.marginRight = `0px`;
    about_content.style.paddingRight = `${numOfMargin + 12}px`;
}

//===================ABOUT END========================


//===================CULTURE========================

const culture_content = document.querySelectorAll(".culture_item_content");
const cultureImg = document.querySelectorAll(".culture_itemImg");

culture_content.forEach(item => {
    item.style.paddingRight = `${numOfMargin + 12}px`;
})
cultureImg.forEach(item => {
    item.style.marginLeft = `${numOfMargin + 12}px`;
})

if ($(window).width() < 992) {
    culture_content.forEach(item => {
        item.style.paddingLeft = `${numOfMargin + 12}px`;
    })

    cultureImg.forEach(item => {
        item.style.marginLeft = `0px`;
    })
}


// slide

$('.culture').slick();

const prevArrow = document.querySelector(".culture .slick-prev");
const nextArrow = document.querySelector(".culture .slick-next");

console.log(prevArrow)
prevArrow.style.left = `${numOfMargin + 12 + 24}px`;
nextArrow.style.left = `${numOfMargin + 12 + 64}px`;

if ($(window).width() < 992) {
    prevArrow.style.left = `${numOfMargin + 12}px`;
    nextArrow.style.left = `auto`;
    nextArrow.style.right = `${numOfMargin + 12}px`;
}

// slide end

//===================CULTURE END========================














