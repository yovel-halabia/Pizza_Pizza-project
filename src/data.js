const items = [
    {   
        id:0,
        name:"PERSONAL TRAY S",
        type:"pizza",
        cost:"28",
        image:"../images/menu_pic/pizza_sec/pizza.png",
        width:"100px",
        height:"100px"
    },
    {
        id:1,
        name:"FAMILY TRAY L",
        type:"pizza",
        cost:"47",
        image:"../images/menu_pic/pizza_sec/pizza.png",
        width:"120px",
        height:"120px"
    },
    {
        id:2,
        name:"FAMILY TRAY XL",
        type:"pizza",
        cost:"63",
        image:"../images/menu_pic/pizza_sec/pizza.png",
        width:"150px",
        height:"150px"
    },
    {
        id:3,
        name:"2 FAMILY TRAY L + DRINK",
        type:"deal",
        cost:"83",
        image:"../images/menu_pic/deals_sec/2_family_L.png",
        width:"150px",
        height:"100px"
    },
    {
        id:4,
        name:"3 FAMILY TRAY L + DRINK",
        type:"deal",
        cost:"92",
        image:"../images/menu_pic/deals_sec/3_family_L.png",
        width:"150px",
        height:"100px"
    },
    {
        id:5,
        name:"3 FAMILY TRAY XL + DRINK",
        type:"deal",
        cost:"110",
        image:"../images/menu_pic/deals_sec/3_family_L.png",
        width:"150px",
        height:"100px"
    },
    {
        id:6,
        name:"FAMILY TRAY XL + SALAD + DRINK",
        type:"deal",
        cost:"102",
        image:"../images/menu_pic/deals_sec/3_family_XL.png",
        width:"150px",
        height:"100px"
    },
    {
        id:7,
        name:"CHICKEN SALAD",
        cost:"40",
        type:"salad",
        extras:["without tomatos", "without onion", "without pepper"],
        image:"../images/menu_pic/salad_sec/chicken.jpg",
        width:"120px",
        height:"100px"
    },
    {
        id:8,
        name:"LAMB'S LETTUCE SALAD",
        type:"salad",
        cost:"35",
        extras:["without tomatos", "without onion", "without pepper"],
        image:"../images/menu_pic/salad_sec/lambs_lettuce.jpg",
        width:"120px",
        height:"100px"
    },
    {
        id:9,
        name:"Salad With Tomatos",
        type:"salad",
        cost:"35",
        extras:["without tomatos", "without onion", "without pepper"],
        image:"../images/menu_pic/salad_sec/salad_tomato.jpg",
        width:"120px",
        height:"100px"
    },
    {
        id:10,
        name:"CACKE WITH CHOCOLATE",
        type:"dessert",
        cost:"24",
        image:"../images/menu_pic/desserts_sec/cake_with.jpg",
        width:"120px",
        height:"100px"
    },
    {
        id:11,
        name:"TIRAMISU",
        type:"dessert",
        cost:"24",
        image:"../images/menu_pic/desserts_sec/tiramisu.jpg",
        width:"120px",
        height:"100px"
    },
    {
        id:12,
        name:"PANCAKES",
        type:"dessert",
        cost:"27",
        image:"../images/menu_pic/desserts_sec/pancakes.jpg",
        width:"120px",
        height:"100px"
    },
    {
        id:13,
        name:"COLA",
        type:"drink",
        cost:"12",
        image:"../images/menu_pic/beverages_sec/coca_cola.jpg",
        width:"50px",
        height:"120px"
    },
    {
        id:14,
        name:"COLA ZIRO",
        type:"drink",
        cost:"12",
        image:"../images/menu_pic/beverages_sec/cola_ziro.jpg",
        width:"50px",
        height:"120px"
    },
    {
        id:15,
        name:"FANTA",
        type:"drink",
        cost:"12",
        image:"../images/menu_pic/beverages_sec/fanta.jpg",
        width:"50px",
        height:"120px"
    },
    {
        id:16,
        name:"FUZE TEA",
        type:"drink",
        cost:"12",
        image:"../images/menu_pic/beverages_sec/fuze_tea.jpg",
        width:"50px",
        height:"120px"
    },
    {
        id:17,
        name:"SPRITE",
        type:"drink",
        cost:"12",
        image:"../images/menu_pic/beverages_sec/sprite.jpg",
        width:"50px",
        height:"120px"
    },
    {
        id:18,
        name:"SODA",
        type:"drink",
        cost:"9",
        image:"../images/menu_pic/beverages_sec/soda.jpg",
        width:"50px",
        height:"120px"
    }

]

const extras=[
    {
        name:"basil",
        image:"../images/extras/basil.png"
    },
    {
        name:"black oilve",
        image:"../images/extras/black_olive.png"
    },
    {
        name:"cheese",
        image:"../images/extras/cheese.png"  
    },
    {
        name:"roqufort",
        image:"../images/extras/roqufort.png"  
    },
    {
        name:"chili",
        image:"../images/extras/chili.png"  
    },
    {
        name:"egg",
        image:"../images/extras/egg.png"  
    },
    {
        name:"green pepper",
        image:"../images/extras/green_pepper.png"  
    },
    {
        name:"red pepper",
        image:"../images/extras/red_pepper.png"  
    },
    {
        name:"mashrooms",
        image:"../images/extras/mashrooms.png"  
    },
    {
        name:"onion",
        image:"../images/extras/onion.png"  
    },
    {
        name:"pineapple",
        image:"../images/extras/pineapple.png"  
    },
    
    {
        name:"tomato",
        image:"../images/extras/tomato.png"  
    },
    {
        name:"tuna",
        image:"../images/extras/tuna.png"  
    },
    
    

];

const pizza_slices = [
    "pizzaSlice1",
    "pizzaSlice2",
    "pizzaSlice3",
    "pizzaSlice4"
];


export {items, extras ,pizza_slices };