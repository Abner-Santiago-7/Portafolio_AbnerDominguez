
const handlerBarsContext = {
    "/index.html": {

        "gallery": [
            {
                imgUrl: "https://picsum.photos/id/425/320/320",
                name: "Bakery Prod 1",
                content: "$10"
            },
            {
                imgUrl: "https://picsum.photos/id/429/320/320" ,
                name: "Bakery Prod 2",
                content: "$10"
            },
            {
                imgUrl: "https://picsum.photos/id/431/320/320",
                name: "Bakery Prod 3",
                content: "$10"
            },
            {
                imgUrl: "https://picsum.photos/id/488/320/320",
                name: "Bakery Prod 4",
                content: "$10"
            },
            {
                imgUrl: "https://picsum.photos/id/755/320/320",
                name: "Bakery Prod 5",
                content: "$10"
            }


        ]

    },
}

const pageContext = (page) => {
    const context = { ...handlerBarsContext[page] }
    return context;
}
export default pageContext;