
var cities = document.getElementsByClassName("city")
//HTML Collection
console.log(cities)

console.log("--- for of ---")
//ただしく動く
for (const city of cities) {
    console.log(city.innerHTML)
}

console.log("--- for in ---")
// HTML Collection は for in を使うとおかしくなる
for (const index in cities) {
    console.log(cities[index].innerHTML)
}

console.log("--- forEach ---")
// forEach は HTML Collection から Array にして動かす
Array.from(cities).forEach(city => {
   console.log(city.innerHTML) 
});

var menus = document.getElementsByClassName("menus")
console.log(menus)

for (const menu of menus) {
    //ul をしゅとく
    console.log(menu)
    // ul のこども(li)
    console.log(menu.children)
    for (const item of menu.children) {
        console.log(item.innerHTML)
    }
}

// querySelector()
console.log('--- querySelector ---')
var h2 = document.querySelector('h2')
console.log(h2)

var h2 = document.querySelectorAll('h2')
console.log(h2)

console.log('--- .city ---')
var cities = document.querySelectorAll('.city')
console.log(cities)

for (const city of cities) {
   console.log(city.innerHTML) 
}

console.log('--- ul.menus > li ---')
var items = document.querySelectorAll('ul.menus > li')
console.log(items)

for (const item of items) {
   console.log(item.innerHTML) 
}